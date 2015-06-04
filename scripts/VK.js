var VK = {};
VK.callF = [];
VK.webVersion = true;
VK.callMethod = function (method, data) {
    if (method == 'setTitle') {
        document.title = data;
    } else if (method == "setLocation") {
        VK.manualChangeHash = true;
        window.location.hash = data;
        setTimeout(function () {
            VK.manualChangeHash = false;
        }, 1000)
    }
};
VK.api = function (method, prop, callback) {
    if (method == "wall.post") {
        var str = "Для отправки песни на стену другу у вас должно быть установлено приложение <a href='http:\//vkontakte.ru/meridianweb'>Meridian</a> <br/> <a href='http:\//vkontakte.ru/meridianweb#sendTrack=" + encodeURIComponent(JSON.stringify(prop)) + "' target='_blank'>Перейти в приложение для потверждения</a>";
        App.showPopup(str, 10000);
        return 1;
    }
    var s = document.createElement("script");
    var url = 'https://api.vkontakte.ru/method/' + method + '?';
    for (var i in prop) {
        url += i + '=' + prop[i] + '&';
    }
    var func = function (data) {
        callback(data);
    }
    VK.callF[VK.callF.length] = func;
    url += 'access_token=' + App.token + '&callback=VK.callF[' + (VK.callF.length - 1) + ']';
    s.src = url;
    document.body.appendChild(s);
    //s.parentNode.removeChild(s);
}

VK.auth = function (data) {
    //alert(JSON.stringify(data));
    if (data.response == 8202 || data.response == 10) {
        VK.authOk = true;
        VK.init()
    } else {
        VK.init()
    }
}

VK.init = function (func) {

    if (localStorage.getItem('uid') && !VK.test) {
        App.token = localStorage.getItem('access_token');
        VK.test = true;
        VK.start = func;
        VK.api('getUserSettings', {}, VK.auth);
        return 1;
    }

    //var s = document.createElement("script");
    //s.src = 'http:/\/api.vkontakte.ru/oauth/authorize?client_id=2629231&scope=friends,audio,wall&redirect_uri=http://hart-flamov.ru/index.html&display=page&response_type=token&callback=q2';
    //document.body.appendChild(s);
    if (VK.authOk) {
        App.uid = localStorage.getItem('uid');
        if (VK.start) {
            VK.start();
        }else {
            func()
        }

        return 1;
    }

    if (App.parseHash('access_token')) {
        App.token = App.parseHash('access_token');
        App.uid = App.parseHash('user_id');
        localStorage.setItem('uid', App.uid, { hoursToLive: 24 });
        localStorage.setItem('access_token', App.token, { hoursToLive: 24 });
        if (localStorage.getItem("mer_hash")) {
            window.location.hash = localStorage.getItem("mer_hash")
        }else {
            window.location.hash = '';
        }

        if (VK.start) {
            VK.start();
        }else {
            func()
        }
        return 1;
    }
    else {
        if (window.location.hash.substring(1) != '') {
            localStorage.setItem("mer_hash", window.location.hash.substring(1))
        }else {
            localStorage.setItem("mer_hash", '');
        }
        var id = 2683657;//
        //var url = 'http:/\/api.vkontakte.ru/oauth/authorize?client_id='+id+'&scope=friends,audio,wall&redirect_uri=http://vk.hart-flamov.ru/&display=page&response_type=token';
        var url = 'http:/\/api.vkontakte.ru/oauth/authorize?client_id=' + id + '&scope=friends,audio,wall&redirect_uri=' + App.define.mainUrl + '&display=page&response_type=token';
        location.href = url;
        /*var a = document.createElement("a");
        a.innerHTML = "Авторизоваться Вконтакте";
        a.className = 'auth';
        a.style.fontSize = '25px';
        a.style.color = '#0094ff';
        a.href = 'http:/\/api.vkontakte.ru/oauth/authorize?client_id=2629231&scope=friends,audio,wall&redirect_uri=http://vk.hart-flamov.ru/index.html&display=page&response_type=token';
        document.getElementById('title').innerHTML = '';
        document.getElementById('title').appendChild(a);
        App.showPopup('Необходима авторизация');
        document.getElementById("preload").style.display = 'none';
        */

    }


}

window.onhashchange = function () {
    if (VK.manualChangeHash) { return 1 }
    hash = window.location.hash.substring(1);
    if (App.parseHash('radio', hash)) {
        if (App.parseHash('radio', hash) == "last") {
            document.getElementById("preload").style.display = 'block';
            App.currentRadio = App.favoritesRadioList[0];
            App.startRadio = true;
            App.showRadio();
            return 1;
        }
        for (var i = 0; i < App.radioList.length; i++) {
            if (App.radioList[i].name == App.parseHash('radio', hash)) {
                document.getElementById("preload").style.display = 'block';
                App.currentRadio = App.radioList[i];
                App.startRadio = true;
                App.showRadio();
                return 1;
            }
        }
    }else if (App.parseHash('artist', hash)) {
        document.getElementById("preload").style.display = 'block';
        value = decodeURIComponent(App.parseHash('artist', hash));
        App.suche(value);
        return 1;
    } else if (App.parseHash('audio', hash)) {
        App.showPlaylists(App.parseHash('audio', hash))
        return 1;
    }else if (App.parseHash('frend', hash)) {
        App.showFrends(App.parseHash('frend', hash));
        return 1;
    } else if (App.parseHash('group', hash)) {
        App.showGroups(App.parseHash('group', hash));
        return 1;
    } else if (App.parseHash('tag', hash)) {
        LastFM.findTag(App.parseHash('tag', hash));
        return 1;
    }
}


pinnedSite = function () {
    try {
        window.external.msSiteModeClearJumpList();
        window.external.msSiteModeCreateJumpList("Команды");


        var comm = {};
        if (localStorage.getItem("mer_commands")) {
            try {
                var comm = JSON.parse(decodeURIComponent(localStorage.getItem("mer_commands")));
            } catch (e) {

            }
        }
        if (!comm.length) {
            var comm = [];
            var o1 = {};
            o1.title = "Мои Аудиозаписи";
            o1.href = App.define.mainUrl +"index.html#audio=all";
            o1.icon = "";
            o1.options = 'self'

            var o2 = {};
            o2.title = "Последняя радиостанция";
            o2.href = App.define.mainUrl + "index.html#radio=last";
            o2.icon = "";
            o2.options = 'self'
            comm.push(o1); comm.push(o2);
            localStorage.setItem("mer_commands", encodeURIComponent(JSON.stringify(comm)));
        }

        for (var i = 0; i < comm.length; i++) {
            window.external.msSiteModeAddJumpListItem(comm[i].title, comm[i].href, comm[i].icon, comm[i].options);
        }
        window.external.msSiteModeShowJumpList();
        //
        var prev = window.external.msSiteModeAddThumbBarButton('http://web.meridianvk.com/img/pinned/prev_thumb.ico', "Предыдущий трек");
        var play = window.external.msSiteModeAddThumbBarButton('http://web.meridianvk.com/img/pinned/pause_thumb.ico', "Пауза");
        var next = window.external.msSiteModeAddThumbBarButton('http://web.meridianvk.com/img/pinned/next_thumb.ico', "Следующий трек");

        var pause = window.external.msSiteModeAddButtonStyle(play, 'http://web.meridianvk.com/img/pinned/play_thumb.ico', "Воспроизведение");

        window.external.msSiteModeShowThumbBar();
        document.addEventListener("msthumbnailclick",
  function (evt) {
            switch (evt.buttonID) {
                case prev:
                    Player.prev();
                    break;
                case play:
                    if (App.radio){ Player.toggle() }else{ Player.toggle(); }

                    if (uppodGet("player1", 'getstatus') == -1 || uppodGet("player1", 'getstatus') == 0) {
                        window.external.msSiteModeShowButtonStyle(play, pause);
                    } else if (uppodGet("player1", 'getstatus') == 1) {
                        window.external.msSiteModeShowButtonStyle(play, 0);
                    }
                    break;
                case next:
                    Player.next();
                    break;
            }
        }, false);

        window.addJump = function (key, value, str) {
            if (key == 'radio') {
                var o1 = {};
                o1.title = "Радио - " + str;
                o1.href = App.define.mainUrl + "index.html#radio=" + value;
                o1.icon = "";
                o1.options = 'self'
                comm.push(o1);
                window.external.msSiteModeAddJumpListItem(o1.title, o1.href, o1.icon, o1.options);
                localStorage.setItem("mer_commands", encodeURIComponent(JSON.stringify(comm)));
            }
            if (key == 'audio') {
                if (value == 'all') {
                    var o1 = {};
                    o1.title = "Все мои аудиозаписи";
                    o1.href = App.define.mainUrl + "index.html#audio=all";
                    o1.icon = "";
                    o1.options = 'self'
                }else {
                    var o1 = {};
                    o1.title = "Плэйлист - " + str;
                    o1.href = App.define.mainUrl + "index.html#audio=" + value;
                    o1.icon = "";
                    o1.options = 'self'
                }
                comm.push(o1);
                window.external.msSiteModeAddJumpListItem(o1.title, o1.href, o1.icon, o1.options);
                localStorage.setItem("mer_commands", encodeURIComponent(JSON.stringify(comm)));
            }
            if (key == 'frend') {
                var o1 = {};
                o1.title = "Друг - " + str;
                o1.href = App.define.mainUrl + "index.html#frend=" + value;
                o1.icon = "";
                o1.options = 'self'
                comm.push(o1);
                window.external.msSiteModeAddJumpListItem(o1.title, o1.href, o1.icon, o1.options);
                localStorage.setItem("mer_commands", encodeURIComponent(JSON.stringify(comm)));
            }
            if (key == 'group') {
                var o1 = {};
                o1.title = "Группа - " +  str.substring(0,12)+ "…";
                o1.href = App.define.mainUrl + "index.html#group=" + value;
                o1.icon = "";
                o1.options = 'self'
                comm.push(o1);
                window.external.msSiteModeAddJumpListItem(o1.title, o1.href, o1.icon, o1.options);
                localStorage.setItem("mer_commands", encodeURIComponent(JSON.stringify(comm)));
            }
            if (key == 'artist') {
                var o1 = {};
                o1.title = "Исполнитель - " + str;
                o1.href = App.define.mainUrl + "index.html#artist=" + value;
                o1.icon = "";
                o1.options = 'self'
                comm.push(o1);
                window.external.msSiteModeAddJumpListItem(o1.title, o1.href, o1.icon, o1.options);
                localStorage.setItem("mer_commands", encodeURIComponent(JSON.stringify(comm)));
            }
            if (key == 'tag') {
                var o1 = {};
                o1.title = "Жанр - " + str;
                o1.href = App.define.mainUrl + "index.html#tag=" + value;
                o1.icon = "";
                o1.options = 'self'
                comm.push(o1);
                window.external.msSiteModeAddJumpListItem(o1.title, o1.href, o1.icon, o1.options);
                localStorage.setItem("mer_commands", encodeURIComponent(JSON.stringify(comm)));
            }
            window.external.msSiteModeShowJumpList();
        }

        window.pinnedRadio = function (radio) {
            if (radio) {
                window.external.msSiteModeUpdateThumbBarButton(prev, false, false);
                window.external.msSiteModeUpdateThumbBarButton(next, false, false);
            }else {
                window.external.msSiteModeUpdateThumbBarButton(prev, true, true);
                window.external.msSiteModeUpdateThumbBarButton(next, true, true);
            }

        }
        window.isPlay = function (isPlay) {
            if (isPlay) {
                window.external.msSiteModeShowButtonStyle(play, 0);
                window.external.msSiteModeSetIconOverlay("http://web.meridianvk.com/img/pinned/overlay_play.ico");
            }else {
                window.external.msSiteModeShowButtonStyle(play, pause);
                window.external.msSiteModeClearIconOverlay();
            }

        }
    } catch (e) {

    }

}




pinnedSite()
