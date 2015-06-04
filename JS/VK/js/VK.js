var VK = {};
VK.callF = [];
VK.webVersion = true;
if (navigator.userAgent.indexOf("Phone") != -1) {
    VK.mobile = true;
}

VK.callMethod = function (method, data) {
    if (method == 'setTitle') {
        document.title = data;
    } else if (method == "setLocation") {
        window.location.hash = data;
    }
};
VK.api = function (method, prop, callback) {
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

    if (jaaulde.utils.cookies.get('uid') && !VK.test) {
        App.token = jaaulde.utils.cookies.get('access_token');
        VK.test = true;
        VK.start = func;
        VK.api('getUserSettings', {}, VK.auth);
        return 1;
    }

    //var s = document.createElement("script");
    //s.src = 'http:/\/api.vkontakte.ru/oauth/authorize?client_id=2629231&scope=friends,audio,wall&redirect_uri=http://vk.hart-flamov.ru/index.html&display=page&response_type=token&callback=q2';
    //document.body.appendChild(s);
    if (VK.authOk) {
        App.uid = jaaulde.utils.cookies.get('uid');
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
        jaaulde.utils.cookies.set('uid', App.uid, { hoursToLive: 24 });
        jaaulde.utils.cookies.set('access_token', App.token, { hoursToLive: 24 });
        if (VK.start) {
            VK.start();
        }else {
            func()
        }
        return 1;
    }
    else {
        var a = document.createElement("a");
        a.innerHTML = "Авторизоваться Вконтакте";
        a.className = 'auth';
        a.style.fontSize = '25px';
        a.style.color = '#0094ff';
        a.href = 'http:/\/api.vkontakte.ru/oauth/authorize?client_id=2629231&scope=friends,audio,wall&redirect_uri='+location.href+'&display=page&response_type=token';
        document.getElementById('title').innerHTML = '';
        document.getElementById('title').appendChild(a);
        App.showPopup('Необходима авторизация');
        document.getElementById("preload").style.display = 'none';
    }


}

createJumpList = function () {
    window.external.msSiteModeClearJumpList();
    window.external.msSiteModeCreateJumpList("Команды");
    //    <meta name="msapplication-task"content="name=Мои Аудиозаписи;action-uri=http://vk.hart-flamov.ru/index.html#audio=all" />
    //<meta name="msapplication-task"content="name=Радио;action-uri=http://vk.hart-flamov.ru/index.html#radio=last" />

    window.external.msSiteModeAddJumpListItem("Мои Аудиозаписи",
              "http://vk.hart-flamov.ru/index.html#audio=all", "", 'self');
    window.external.msSiteModeAddJumpListItem("Радио",
              "http://vk.hart-flamov.ru/index.html#radio=last", "", 'self');
    window.external.msSiteModeShowJumpList();
    var stop = window.external.msSiteModeAddThumbBarButton('http://vk.hart-flamov.ru/JS/VK/img/stop2.ico', "Стоп");
    var play = window.external.msSiteModeAddThumbBarButton('http://vk.hart-flamov.ru/JS/VK/img/play2.ico', "Воспроизведение");
    var next = window.external.msSiteModeAddThumbBarButton('http://vk.hart-flamov.ru/JS/VK/img/next2.ico', "Следующий трек");
    window.external.msSiteModeShowThumbBar();
    document.addEventListener("msthumbnailclick",
  function (evt) {
        switch (evt.buttonID) {
            case stop:
                Player.stop();
                break;
            case play:
                if (App.radio){ Player.toggle() }else{ Player.play(); }
                break;
            case next:
                Player.next();
                break;
        }
    }, false);

}




createJumpList()
function q2(data) {
    alert(data)

}