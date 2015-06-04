document.getElementById('title').innerHTML = 'Загрузка.';
var App = {};
var Player = {};
var LastFM = {};
App.user = {};
App.ultra = {};
App.vkFindStack = [];
App.util = {};
App.define = {};
App.define.likeEQLove = false;
//App.lastGrp = [];

App.radioList = [
{ name: "Ultra", russName: "Ультра", logo: "http:\/\/vk.hart-flamov.ru/JS/VK/img/radio/ultra2.png", url: 'http\:\/\/94.25.53.133:80/ultra-192', tags: 'http\://vk.hart-flamov.ru/PHP/stream.php' },
{ name: "Maximum", russName: "Максимум", logo: "http:\/\/vk.hart-flamov.ru/JS/VK/img/radio/max.png", url: 'http:\//92.242.10.5:8008/;stream.nsv' /*'http:/\/radio.north.kz:8000/rmaximum'*/, tags: 'http\://vk.hart-flamov.ru/PHP/streamMax.php' },
{ name: "Rock FM Ru", russName: "Рок ФМ", logo: "http:\/\/vk.hart-flamov.ru/JS/VK/img/radio/rock.jpg", url: 'http:\//94.25.53.133/rock-192', tags: 'http\://vk.hart-flamov.ru/PHP/streamRockru.php' },
{ name: "Nashe", russName: "Наше", logo: "http:\/\/vk.hart-flamov.ru/JS/VK/img/radio/nashe.jpg", url: 'http:\//94.25.53.133/nashe-192', tags: 'http\://vk.hart-flamov.ru/PHP/streamNashe.php' },
{ name: "RocketRadio", russName: "Рокет", logo: "http:\/\/vk.hart-flamov.ru/JS/VK/img/radio/rocketRadio2.png", url: 'http:\/\/air.rocketradio.ru/256', tags: 'http\://vk.hart-flamov.ru/PHP/streamRocketRadio.php' },
{ name: "42fm", russName: "42fm", logo: "http:\/\/vk.hart-flamov.ru/JS/VK/img/radio/42.png", url: 'http:\/\/listen.42fm.ru:8000/stealkill', tags: 'http\://vk.hart-flamov.ru/PHP/tags42.php' },
{ name: "Hitroe", russName: "ХИТрое", logo: "http:\/\/vk.hart-flamov.ru/JS/VK/img/radio/hitr2.png", url: 'http:\/\/www.hitroe.com:8000/stream', tags: 'http\://vk.hart-flamov.ru/PHP/tagsHitroe.php' },
{ name: "Rock.FM", russName: "Rock.FM", logo: "http:\/\/vk.hart-flamov.ru/JS/VK/img/radio/rock2.png", url: 'http:\//216.235.94.10/play?s=wwwrockfm&d=LIVE365&r=0&membername=&session=wwwrockfm:0&AuthType=NORMAL&app_id=live365%3AWidget365&SaneID=89.218.116.130-1316542056143401&rnd=0.13509975979104638&tag=live365&caller=live365%3AWidget365&token=fa4005e3c52b134416c33a26be2b5bc8-1920290080101251', tags: 'http\://vk.hart-flamov.ru/PHP/streamRock.php' },
{ name: "RelaxFM", russName: "Релакс Фм", logo: "http:\/\/vk.hart-flamov.ru/JS/VK/img/radio/relax.png", url: 'http:\//live26.kiwi.kz:8000/relaxfm?type=.flv', tags: 'http\://vk.hart-flamov.ru/PHP/streamRelax.php' },
{ name: "Europa plus", russName: "Европа плюс", logo: "http:\/\/vk.hart-flamov.ru/JS/VK/img/radio/europa.png", url: 'http:\//webcast.emg.fm:55655/europaplus128.mp3', tags: 'http\://vk.hart-flamov.ru/PHP/streamEuropa.php' },
{ name: "Monte Carlo", russName: "Монте Карло", logo: "http:\/\/vk.hart-flamov.ru/JS/VK/img/radio/monte.png", url: 'http:\//fm.kiwi.kz/montecarlospb', tags: 'http\://vk.hart-flamov.ru/PHP/streamMonte.php' },
{ name: "Love Radio", russName: "Love Radio", logo: "http:\/\/vk.hart-flamov.ru/JS/VK/img/radio/love.png", url: 'http:\//fm.kiwi.kz/loveradiokz', tags: 'http\://vk.hart-flamov.ru/PHP/streamLove.php' },
{ name: "NRG Rock", russName: "NRG Rock", logo: "http:\/\/vk.hart-flamov.ru/JS/VK/img/radio/energy.png", url: 'http:/\/radio.mv.ru:8080/101.ru_NRJ_Rock', tags: 'http\://vk.hart-flamov.ru/PHP/streamEnergy.php' },
{ name: "Mega Radio", russName: "Мега", logo: "http:\/\/vk.hart-flamov.ru/JS/VK/img/radio/mega.png", url: 'http:\//radio.mv.ru:8080/MegaRadio', tags: 'http\://vk.hart-flamov.ru/PHP/streamMega.php' }
];

App.favoritesRadioList = [
{ name: "Ultra", russName: "Ультра", logo: "http:\/\/vk.hart-flamov.ru/JS/VK/img/radio/ultra2.png", url: 'http\:\/\/94.25.53.133:80/ultra-192', tags: 'http\://vk.hart-flamov.ru/PHP/stream.php' },
{ name: "Maximum", russName: "Максимум", logo: "http:\/\/vk.hart-flamov.ru/JS/VK/img/radio/max.png", url: 'http:\//92.242.10.5:8008/;stream.nsv', tags: 'http\://vk.hart-flamov.ru/PHP/streamMax.php' },
{ name: "RocketRadio", russName: "Рокет", logo: "http:\/\/vk.hart-flamov.ru/JS/VK/img/radio/rocketRadio2.png", url: 'http:\/\/air.rocketradio.ru/256', tags: 'http\://vk.hart-flamov.ru/PHP/streamRocketRadio.php' },
{ name: "RelaxFM", russName: "Релакс Фм", logo: "http:\/\/vk.hart-flamov.ru/JS/VK/img/radio/relax.png", url: 'http:\//live26.kiwi.kz:8000/relaxfm?type=.flv', tags: 'http\://vk.hart-flamov.ru/PHP/streamRelax.php' }
];
/*{ name: "Rock", russName: "Рок Фм", logo: "http:\/\/vk.hart-flamov.ru/JS/VK/img/radio/rock.jpg", url: 'http:\/\/94.25.53.133:80/rock-192', tags: 'http\://vk.hart-flamov.ru/PHP/streamRock.php' },
{ name: "Nashe", russName: "Наше Радио", logo: "http:\/\/vk.hart-flamov.ru/JS/VK/img/radio/nashe.jpg", url: 'http:\//94.25.53.133/nashe-192', tags: 'http\://vk.hart-flamov.ru/PHP/streamNashe.php' },
{ name: "Ultra", russName: "Ультра", logo: "http:\/\/vk.hart-flamov.ru/JS/VK/img/radio/ultra.jpg", url: 'http\:\/\/94.25.53.133:80/ultra-192', tags: 'http\://vk.hart-flamov.ru/PHP/stream.php' },
*/

LastFM.user = {};
Player.playlist = [];
Player.currentNumber = 0;
window.onload = function () {
    VK.init(function () {
        App.begin();
    });
}

App.begin = function () {
    VK.callMethod('setTitle', 'Музыкальный плеер Фламова');
    Player.volume = new Slider({ min: 0, max: 100, direction: 'y' }).insertTo('slider')
    Player.volume.setStyle("height", "50px");
    Player.volume.setValue(70);
    var d = document.getElementById('slider');
    if (d.addEventListener) {
        if (navigator.userAgent.indexOf("Firefox") == -1) {
            d.addEventListener('mousewheel', Player.changeVolumeWheel, false);
        }else {
            d.addEventListener('DOMMouseScroll', Player.changeVolumeWheel, false);
        }
    }else {
        d.onmousewheel = Player.changeVolumeWheel;
    }
    document.getElementById("findButton").onclick = function () {
        document.getElementById("preload").style.display = 'inline';
        setTimeout(function () { App.suche() }, 100)
    }
    if (localStorage && localStorage.getItem("lastGrp")) {
        App.lastGrp = localStorage.getItem("lastGrp").split(",");
    }
    if (localStorage && localStorage.getItem("favRadio")) {
        var fav = decodeURIComponent(localStorage.getItem("favRadio"));
        App.favoritesRadioList = JSON.parse(fav);
    }
    if (localStorage && localStorage.getItem("volume")) {
        setTimeout(function () {
            Player.volume.setValue(localStorage.getItem("volume"));
        }, 100)
    }
    Player.volume.on("change", Player.changeVolume);

    if (localStorage && localStorage.getItem("rand")) {
        if (localStorage.getItem("rand") == 1) {
            Player.rand = true;
            document.getElementById('random').style.backgroundImage = 'url(http://vk.hart-flamov.ru/JS/VK/img/randomAk.png)';
        }
        else {
            Player.rand = false;
        }
    }

    if (localStorage && localStorage.getItem("likeLove")) {
        if (localStorage.getItem("likeLove") == 'yes') {
            App.define.likeEQLove = true;
        }
        else {
            App.define.likeEQLove = false;
        }
    }

    if (localStorage && localStorage.getItem("LastFMusername") && localStorage.getItem("LastFMpassword")) {
        var username = localStorage.getItem("LastFMusername");
        var password = localStorage.getItem("LastFMpassword");
        if (username && password) {
            LastFM.scronTimout
            LastFM.getKey(username, password);
        }
    }else {
        VK.api('storage.get', { keys: "LastFMusername, LastFMpassword" }, function (data) {
            if (data.response[0] && data.response[1]) {
                var username = data.response[0].value;
                var password = data.response[1].value;
                if (username && password) {
                    LastFM.scronTimout
                    LastFM.getKey(username, password);
                }
            }
        })
    }


    var user_id = App.uid || App.parse("viewer_id");
    /*VK.api('getProfiles', { uids: user_id }, function (data) {
        if (data.response) {
            App.user = data.response[0];
        }
        VK.api('friends.get', { fields: "photo, photo_medium, photo_big", name_case: "gen" }, function (data) {
            if (data.response) {
                App.user.frends = data.response;
            }
        })
    })*/
    //, API.friends.get({ fields: 'photo, photo_medium, photo_big', name_case: 'gen' })

    var str = 'return [API.getProfiles({ uids: ' + user_id + '}), API.friends.get({ fields: "photo, photo_medium, photo_big", name_case: "gen" }), API.audio.getAlbums(), API.audio.get({ uid: ' + user_id + '})];';
    VK.api("execute", { code: str }, function (data) {
        if (data.response) {
            App.user = data.response[0];
            App.user.frends = data.response[1];
            if (data.response[2]) {
                App.findPlaylists = true;
                App.playlists = [];
                App.hashPlaylist = {};
                for (var i = 1; i <= data.response[2][0]; i++) {
                    App.playlists.push(data.response[2][i]);
                    App.hashPlaylist[data.response[2][i].album_id] = data.response[2][i].title;
                }
            }
            if (data.response[3]) {
                App.myTracks = {};
                App.myTracks.response = data.response[3];
                App.myTracksNotChanged = true;
            }
            setTimeout(function () {
                if (localStorage && localStorage.getItem("leader") && localStorage.getItem("dayOfLeader") == (new Date()).getDay()) {
                    document.getElementById("leader").innerHTML = localStorage.getItem("leader");
                }else {
                    App.findAtrist()
                }
            }, 400);
            if (App.parse('hash')) {
                var hash = decodeURIComponent(App.parse('hash')).split("=");
                var key = hash[0];
                var value = hash[1];
                if (key == 'radio') {
                    if (value == "last") {
                        document.getElementById("preload").style.display = 'block';
                        App.currentRadio = App.favoritesRadioList[0];
                        App.radioListen();
                        return 1;
                    }
                    for (var i = 0; i < App.radioList.length; i++) {
                        if (App.radioList[i].name == value) {
                            document.getElementById("preload").style.display = 'block';
                            App.currentRadio = App.radioList[i];
                            document.getElementById('title').innerHTML = App.radioList[i].russName;
                            App.radioListen();
                            return 1;
                        }
                    }
                }else if (key == 'artist') {
                    document.getElementById("preload").style.display = 'block';
                    //alert(value)
                    value = decodeURIComponent(value);
                    //alert(value)
                    document.getElementById('title').innerHTML = value;
                    App.suche(value);
                    return 1;
                } else if (key == 'audio') {
                    VK.api('audio.getAlbums', {}, function (data) {
                        if (data.response && data.response[0] != 0) {
                            App.playlists = [];
                            App.hashPlaylist = {};
                            for (var i = 1; i <= data.response[0]; i++) {
                                App.playlists.push(data.response[i]);
                                App.hashPlaylist[data.response[i].album_id] = data.response[i].title;
                            }
                        }else {
                            App.playlists = [];
                        }
                        if (value == 'all') {
                            App.loadMyTrack("my");
                        }else {
                            App.loadMyTrack("my", value);
                        }
                        return 1;

                    })
                }
            }
            var scr = document.createElement('script');
            scr.src = "http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=809dffc5f629c1d4871323f01379bc0d&limit=15&format=json&callback=LastFM.responceChart&lang=ru";
            document.body.appendChild(scr)
            document.getElementById("preload").style.display = 'none';
            var s = (new Date()).getHours();
            var text;
            if (s >= 23 || s <= 4) { text = 'Доброй ночи' }
            if (s >= 5 && s < 11) { text = 'Доброе утро' }
            if (s >= 11 && s <= 16) { text = 'Добрый день' }
            if (s >= 17 && s < 23) { text = 'Добрый вечер' }
            if (App.user.first_name) {
                document.getElementById('title').innerHTML = text + ', ' + App.user.first_name;
            } else {
                document.getElementById('title').innerHTML = text;
            }

        }
    })
}

App.parse = function (variable) {
    if (VK.webVersion) {
        var query = window.location.hash.substring(1);
        return query;
    }else {
        var query = window.location.search.substring(1);

        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) {
                return pair[1];
            }
        }
        //App.showPopup('Query Variable ' + variable + ' not found');
    }
    return false;
}

App.parseHash = function (variable) {
    var query = window.location.hash.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return false;
}
App.clearAkMenu = function () {
    document.getElementById("form").className = 'aspan';
    document.getElementById("myTracks").className = 'aspan';
    document.getElementById("frendsTracks").className = 'aspan';
    document.getElementById("recom2").className = 'aspan';
    document.getElementById("radio").className = 'aspan';
    document.getElementById("recom").className = 'aspan';
}

App.findRecommendation = document.getElementById("recom2").onclick = function () {
    if (App.findR){ return 1 };
    App.echonestArtistQ = 0;
    App.echonestArtist = "";
    LastFM.album = '';
    App.findR = true;
    App.clearAkMenu();
    document.getElementById("recom2").className = 'aspanAk'
    /*setTimeout(function () {
        if (App.findR == true) {
            App.findRecommendation();
        }
    }, 10000)*/
    document.getElementById("preload").style.display = 'block';
    App.my = false;
    App.clearPopup(true);
    var uid = App.uid || App.parse("viewer_id");
    App.MT = true;
    App.vkFind = false;
    clearTimeout(LastFM.scronTimout);

    var tracks = App.myTracks.response;
    //var str = 'http:\//developer.echonest.com/api/v4/playlist/static?bucket=audio%5Fsummary&api%5Fkey=F21KT0VKI1NVX3CIF&format=jsonp&type=artist%2Dradio&';
    for (var i = 0; i < 10; i++) {
        var r = Math.floor(Math.random() * tracks.length - 1);
        var str = "http://developer.echonest.com/api/v4/artist/search?api_key=F21KT0VKI1NVX3CIF&format=jsonp&name=" + encodeURIComponent(App.myTracks.response[r].artist) + "&results=1&callback=App.searchEchonest"
        var s = document.createElement("script");
        s.src = str;
        document.body.appendChild(s);
    }
    str += "results=50&callback=App.loadRecommendationEchonest"
    var s = document.createElement("script");
    s.src = str;
    //document.body.appendChild(s);

    App.clearVkFindStack();
}
App.searchEchonest = function (data) {
    if (App.echonestArtistQ == 4){ return 1 };
    if (data.response && data.response.status && data.response.status.code == 0) {
        if (data.response.artists && data.response.artists[0]) {
            App.echonestArtistQ++;
            App.echonestArtist += "&artist=" + encodeURIComponent(data.response.artists[0].name);
            if (App.echonestArtistQ == 4) {
                var str = 'http:\//developer.echonest.com/api/v4/playlist/static?bucket=audio%5Fsummary&api%5Fkey=F21KT0VKI1NVX3CIF&format=jsonp&type=artist%2Dradio';
                str += App.echonestArtist;
                str += "&results=50&callback=App.loadRecommendationEchonest";
                var s = document.createElement("script");
                s.src = str;
                document.body.appendChild(s);
            }
        };
    }
}

App.loadRecommendationEchonest = function (data) {
    App.findR = false;
    LastFM.album = '';
    if (data.response && data.response.status && data.response.status.code == 0) {
        App.findR = false;
        LastFM.tracks = data.response.songs;
        var div = document.getElementById('playlist');
        div.innerHTML = '';
        Player.playlist = [];
        div.scrollTop = 0;
        div.style.display = 'block';
        var titleAlbum = document.createElement('h3');
        titleAlbum.className = 'titleAlbum';
        titleAlbum.innerHTML = 'Рекомендации';
        div.appendChild(titleAlbum);

        LastFM.titleAlbum = 'rec';
        if (LastFM.tracks && LastFM.tracks[0]) {
            for (var i = 0; i < LastFM.tracks.length; i++) {
                var track = document.createElement('div');
                LastFM.tracks[i].duration = Math.floor(LastFM.tracks[i].audio_summary.duration);
                LastFM.tracks[i].artist = {};
                LastFM.tracks[i].artist.name = LastFM.tracks[i].artist_name;
                LastFM.tracks[i].name = LastFM.tracks[i].title.replace(/\(.+\)/, "");;

                var fullTime = LastFM.tracks[i].duration;
                var fullMin = Math.floor(fullTime / 60);
                var fullSec = Math.floor(fullTime - fullMin * 60);
                var time = fullMin + ':' + (fullSec.toString().length == 1 ? '0' + fullSec : fullSec);
                var span = document.createElement('span');
                span.innerHTML = time;
                span.className = 'duration';


                div.appendChild(track);

                track.innerHTML = '<a id="' + 'aL' + (i + 1) + '" class="noA" onclick="return false">' + (i + 1) + '</a>. ' + LastFM.tracks[i].artist.name + ' - ' + LastFM.tracks[i].name;
                track.a = document.getElementById('aL' + (i + 1));


                track.appendChild(span)
                LastFM.tracks[i].div = track;
                LastFM.tracks[i].span = span;

            }
            Player.findTrackByTag()
        } else {
            var track = document.createElement('div')
            track.innerHTML = 'Аудиозаписей не найдено'
            div.appendChild(track)
        };
        document.getElementById("preload").style.display = 'none';
    }else {
        //App.showPopup("Ошибка. Повторите ещё раз");
        //alert(JSON.stringify(data));
    }
}
App.findAtrist = function () {
    var r = Math.floor(Math.random() * App.myTracks.response.length - 1);
    var str = "http://developer.echonest.com/api/v4/artist/search?api_key=F21KT0VKI1NVX3CIF&format=jsonp&name=" + encodeURIComponent(App.myTracks.response[r].artist) + "&results=1&callback=App.findAtristDays"
    var s = document.createElement("script");
    s.src = str;
    document.body.appendChild(s);
}

App.findAtristDays = function (data) {
    if (data.response && data.response.status && data.response.status.code == 0) {
        if (data.response.artists && data.response.artists[0]) {

            var artist = "&artist=" + encodeURIComponent(data.response.artists[0].name);
            var str = 'http:\//developer.echonest.com/api/v4/playlist/static?bucket=audio%5Fsummary&api%5Fkey=F21KT0VKI1NVX3CIF&format=jsonp&type=artist%2Dradio';
            str += artist;
            str += "&results=1&callback=App.showArtistDays";
            var s = document.createElement("script");
            s.src = str;
            document.body.appendChild(s);
        };
    }else {
        App.findAtrist();
    }
}

App.showArtistDays = function (data) {
    if (localStorage) {
        var d = new Date();
        localStorage.setItem("leader", data.response.songs[0].artist_name)
        localStorage.setItem("dayOfLeader", d.getDay())
        document.getElementById("leader").innerHTML = data.response.songs[0].artist_name;
    }

}

App.loadRecommendationVK = document.getElementById("recom").onclick = function () {
    LastFM.album = '';
    App.clearPopup(true);
    App.clearAkMenu();
    document.getElementById("recom").className = 'aspanAk'
    var url = 'http:/\/vkontakte.ru/audio';
    var post = 'act=get_recommendations&al=1&id=44398278&offset=0';
    App.MT = true;
    //CROSS.XSS.post(url, post);
    var uid = App.uid || App.parse("viewer_id");
    App.vkFind = false;
    Player.playlist = [];
    App.clearVkFindStack();
    document.getElementById("preload").style.display = 'block';
    VK.api('audio.getRecommendations', { al: 1, id: uid, offset: 0 }, function (data) {
        var div = document.getElementById('playlist');
        div.innerHTML = '';
        div.style.display = 'block';
        var titleAlbum = document.createElement('h3');
        titleAlbum.className = 'titleAlbum';
        titleAlbum.innerHTML = "Рекомендованные аудиозаписи"
        div.appendChild(titleAlbum);
        var tracks = data.response;
        if (tracks && tracks[0]) {
            for (var i = 0; i < tracks.length; i++) {
                var track = document.createElement('div');
                var fullTime = tracks[i].duration;
                var fullMin = Math.floor(fullTime / 60);
                var fullSec = Math.floor(fullTime - fullMin * 60);
                var time = fullMin + ':' + (fullSec.toString().length == 1 ? '0' + fullSec : fullSec);
                var span = document.createElement('span');
                span.innerHTML = time;
                span.className = 'duration';
                //track.innerHTML = '<a class="noA" onclick="return false" href="' + tracks[i].url + '">' + (i + 1) + '</a>. ' + "<span id=aid" + i + ">" + tracks[i].artist + ' - ' + tracks[i].title + "</span>";
                track.innerHTML = '<a class="noA" onclick="return false" href="' + tracks[i].url + '">' + (i + 1) + '</a>. ' + tracks[i].artist + ' - ' + tracks[i].title;
                track.appendChild(span);

                div.appendChild(track);
                tracks[i].div = track;
                tracks[i].span = span;


                tracks[i].div.onclick = (function (track, i) {
                    return function () {
                        Player.currentTrack = track;
                        Player.currentNumber = i;
                        LastFM.artistName = track.artist;
                        Player.play(track.url, true);
                    }
                })(tracks[i], i)
                tracks[i].div.className = 'finded';
                //Player.playlist.push(data.response[1])
                Player.playlist[i] = tracks[i];

            }
            if (App.radioInt) {
                clearInterval(App.radioInt);
            }
            App.radio = false;
            if (Player.init) {
                uppodSend("player1", "set[radio]:0");
            }
            App.ultra.currentTrack = '';
            Player.currentTrack = tracks[0];
            Player.currentNumber = 0;
            LastFM.artistName = tracks[0].artist;
            document.getElementById("preload").style.display = 'none';
            Player.play(tracks[0].url);
        }
        document.getElementById("preload").style.display = 'none';

    })

}

App.showStartup = function () {
    var div = document.getElementById("startup");
    div.style.display = 'block';
    // Bands
    var strGroup = document.createElement("div");
    strGroup.className = 'strGroup';
    div.appendChild(strGroup);
    var h2 = document.createElement("h4");
    h2.innerHTML = "Самые популярные исполнители этой недели";
    strGroup.appendChild(h2);
    for (var i = 0; i < LastFM.chart.length; i++) {
        var sp = document.createElement("div");
        var h4 = document.createElement("h4");
        h4.innerHTML = LastFM.chart[i].name;
        sp.appendChild(h4);

        var img = document.createElement("img");
        img.src = LastFM.chart[i].image[2]['#text'];
        sp.appendChild(img);
        sp.data = LastFM.chart[i];
        sp.onclick = function () {
            App.suche(this.data.name);
            document.getElementById("startup").style.display = 'none';
            document.getElementById("find").value = this.data.name;
            App.clearPopup();
        }

        strGroup.appendChild(sp);
    }
    var radGroup = document.createElement("div");
    radGroup.className = 'radGroup';
    div.appendChild(radGroup);
    var h2 = document.createElement("h4");
    h2.innerHTML = "Последние прослушанные радиостанции";
    radGroup.appendChild(h2);
    for (var i = 0; i < App.favoritesRadioList.length ; i++) {
        var sp = document.createElement("div");
        var h4 = document.createElement("h4");
        h4.innerHTML = App.favoritesRadioList[i].russName;
        sp.appendChild(h4);
        var img = document.createElement("img");
        img.src = App.favoritesRadioList[i].logo;
        sp.appendChild(img);
        sp.data = App.favoritesRadioList[i];
        sp.onclick = function () {
            App.clearPopup();
            document.getElementById("preload").style.display = 'block';
            App.currentRadio = this.data;
            App.radioListen();
        }
        radGroup.appendChild(sp);
    }
    var fullList = document.createElement("span");
    fullList.className = 'aspan';
    fullList.id = 'fullList'
    fullList.innerHTML = 'Полный лист радиостанций';
    fullList.onclick = function () {
        App.showRadio()
    }
    radGroup.appendChild(fullList);
}



App.showPopup = function (str) {
    var s = document.createElement("div");
    s.className = "popup";
    document.body.appendChild(s);
    s.innerHTML = str;
    var span = document.createElement("span");
    span.id = 'closePopup';
    span.className = "aspan";
    span.innerHTML = "X"
    s.appendChild(span);
    span.onclick = function () {
        s.innerHTML = '';
        s.parentNode.removeChild(s);
    }
    setTimeout(function () {
        App.util.anim(s, { opacity: 0 }, 700, function () {
            s.innerHTML = '';
            if (s.parentNode) {
                s.parentNode.removeChild(s);
            }
        });
    }, 700);
}

App.util.anim = function (elem, prop, time, callback) {
    if (!elem.style.opacity) { elem.style.opacity = 1 };
    var offset = (prop.opacity - elem.style.opacity) / Math.floor(time / 25);
    var k = Math.floor(time / 25);
    var int = setInterval(function q() {
        if (elem) {
            elem.style.opacity = parseFloat(elem.style.opacity) + offset;
            k--;
            if (k == 0) {
                clearInterval(int);
                callback();
            }
        }
    }, 25)
}

App.showRadio = document.getElementById("radio").onclick = function () {
    App.clearPopup();
    //App.radio = false;
    var div = document.getElementById('radioList');
    div.scrollTop = 0;
    div.innerHTML = '';
    div.style.display = 'block';
    //        <span class="aspan" id="closeFrendsList">Закрыть</span>
    var span = document.createElement('span');
    span.innerHTML = 'Закрыть';
    span.className = 'aspan';
    span.id = 'closeRadioList';
    span.onclick = function () {
        document.getElementById('radioList').style.display = 'none';
    }
    div.appendChild(span);
    var h3 = document.createElement('h3');
    h3.innerHTML = 'Слушать радио  - ';
    div.appendChild(h3);
    for (var i = 0; i < App.radioList.length; i++) {
        var span = document.createElement('div');
        var h5 = document.createElement('h5');
        h5.innerHTML = App.radioList[i].russName;
        span.appendChild(h5);
        span.appendChild(document.createElement('br'))
        var img = document.createElement('img');
        img.src = App.radioList[i].logo;
        span.appendChild(img);
        span.data = App.radioList[i];
        span.onclick = function () {
            document.getElementById("preload").style.display = 'block';
            App.currentRadio = this.data;
            document.getElementById('radioList').style.display = 'none';
            document.getElementById("preload").style.display = 'block';
            App.radioListen();


        }
        div.appendChild(span);
    }
}

App.preventMemoryLeak = function () {
    uppodSend("player1", 'stop');
    uppodSend("player1", 'time0');
    uppodSend("player1", "set[radio]:0");
    uppodSend("player1", 'file\:""');
    setTimeout(function () {
        uppodSend("player1", 'file\:' + App.ultra.url);
        uppodSend("player1", 'play');
    }, 200);
    App.preventMemoryLeakTimeout = setTimeout(App.preventMemoryLeak, 60000 * 30);
}

App.radioListen = function (contin) {
    LastFM.album = '';
    //if (App.radio){ return 1 };
    clearTimeout(LastFM.scronTimout);
    clearInterval(App.s);
    App.clearAkMenu();
    document.getElementById("radio").className = 'aspanAk';
    App.clearPopup(true);
    VK.callMethod("setLocation", "radio=" + App.currentRadio.name);
    //App.ultra.currentTrack = '';
    clearInterval(App.radioInt);
    App.radio = true;
    App.clearVkFindStack();
    App.vkFind = false;
    var div = document.getElementById('playlist');
    var titleAlbum = document.createElement('h3');
    clearTimeout(App.preventMemoryLeakTimeout);
    App.preventMemoryLeakTimeout = setTimeout(App.preventMemoryLeak, 60000 * 30);
    var live = document.getElementById('progLive');
    var load = document.getElementById('progLoad');
    load.style.width = '0px';
    live.style.width = '0px';
    document.getElementById("data").innerHTML = '0:00 / 0:00';

    clearInterval(App.s)
    if (!contin) {
        Player.playlist = [];
        App.ultra.currentTrack = '';

        document.getElementById('audio').style.display = 'block';
        App.ultra.url = App.currentRadio.url; //'http\:\/\/94.25.53.133:80/ultra-192'; //'http\:\/\/radio.north.kz:8000/ultra-192'; //
        div.innerHTML = '';
        div.style.display = 'block';
        titleAlbum.className = 'titleAlbum';
        titleAlbum.id = 'titleAlbum';
        titleAlbum.innerHTML = "Радио " + App.currentRadio.russName;
        var img = document.createElement("img");
        img.src = 'http://vk.hart-flamov.ru/JS/VK/img/continue.png';
        titleAlbum.appendChild(img);
        img.id = 'continue';
        img.title = "Перезапустить радиостанцию"
        img.onmouseover = function () {
            this.src = 'http://vk.hart-flamov.ru/JS/VK/img/continue2.png';
        }
        img.onmouseout = function () {
            this.src = 'http://vk.hart-flamov.ru/JS/VK/img/continue.png';
        }
        img.onclick = function () {
            for (var i = 0; i < Player.playlist.length; i++) {
                if (Player.playlist[i]) {
                    Player.playlist[i].div.style.color = 'black';//color = '#00A3EF';
                }
            }
            Player.playlist[Player.playlist.length - 1].div.style.color = '#00A3EF';
            var resText = App.ultra.currentTrack.replace(/\n/g, "").replace(/\r/g, "");
            var text = resText.split(" - ");
            LastFM.artistName = text[0];
            LastFM.trackName = text[1];
            var scr = document.createElement('script');
            scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + LastFM.artistName + '&api_key=809dffc5f629c1d4871323f01379bc0d&autocorrect=1&format=json&callback=LastFM.responceArtistMT&lang=ru&qq=' + (new Date()).getTime();
            document.body.appendChild(scr);
            document.getElementById("titleTrack").innerHTML = resText + "<span id='eq'><img src='http:/\/vk.hart-flamov.ru/JS/VK/img/eq.gif'></span>";
            VK.callMethod('setTitle', resText);
            Player.currentTrack = App.ultra.currentTrack;
            LastFM.currentTrack = Player.currentTrack
            //LastFM.scronTimout = setTimeout(LastFM.scrooble, 25000);
            App.radioListen(true);
        }
        div.appendChild(titleAlbum);

        // баг с аас контейнером TypeError 1009
        if (Player.init) {
            uppodSend("player1", 'stop');
            uppodSend("player1", 'time0');
            document.getElementById("wrapPlayer").innerHTML = '';
            var wrap = document.createElement("div");
            wrap.id = 'player';
            document.getElementById("wrapPlayer").appendChild(wrap);
            Player.init = false;
        }
        // баг с аас контейнером TypeError 1009

        App.ultra.i = 0;
        LastFM.tracks = [];
    }

    App.updatePHP = function () {
        if (typeof XMLHttpRequest != 'undefined') {
            var xhr = new XMLHttpRequest();
        } else {
            try {
                var xhr = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                try {
                    var xhr = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (ee) {
                }
            }
        }
        xhr.open('GET', App.currentRadio.tags + '?' + (new Date()).getTime(), true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200 && xhr.getResponseHeader('Ultra') == 'ok') {
                document.getElementById("preload").style.display = 'none';
                if ((xhr.responseText.replace(/\n/g, "") != 'error') && (xhr.responseText.replace(/\n/g, "") != "")) {
                    if (xhr.responseText != App.ultra.currentTrack && xhr.responseText.indexOf("Джингл") == -1) {
                        App.ultra.currentTrack = xhr.responseText;
                        var resText = xhr.responseText.replace(/\n/g, "").replace(/\r/g, "");
                        var text = resText.split(" - ");
                        LastFM.artistName = text[0];
                        LastFM.trackName = text[1];
                        var scr = document.createElement('script');
                        scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + LastFM.artistName + '&api_key=809dffc5f629c1d4871323f01379bc0d&autocorrect=1&format=json&callback=LastFM.responceArtistMT&lang=ru&qq=' + (new Date()).getTime();
                        document.body.appendChild(scr);
                        document.getElementById("titleTrack").innerHTML = resText + "<span id='eq'><img src='http:/\/vk.hart-flamov.ru/JS/VK/img/eq.gif'></span>";
                        VK.callMethod('setTitle', xhr.responseText);
                        var track = document.createElement('div');
                        App.ultra.i++;
                        div.appendChild(track);
                        track.innerHTML = '<a id="' + 'a' + App.ultra.i + '" class="noA" onclick="return false">' + (App.ultra.i) + '</a>. ' + App.ultra.currentTrack;
                        track.a = document.getElementById('a' + App.ultra.i);
                        Player.currentTrack = App.ultra.currentTrack;

                        LastFM.currentTrack = Player.currentTrack;
                        clearTimeout(LastFM.scronTimout);
                        LastFM.scronTimout = setTimeout(LastFM.scrooble, 25000);


                        var url = 'http:' + '//ws.audioscrobbler.com/2.0/';
                        var time = Math.round((new Date()).getTime() / 1000);
                        var api_sig = hex_md5("api_key809dffc5f629c1d4871323f01379bc0d" + "artist" + LastFM.artistName + "methodtrack.updateNowPlaying" + "sk" + LastFM.user.sk + 'timestamp' + time + "track" + LastFM.trackName + "e69db535e502129eb7473f0052204099");
                        var post = 'method=track.updateNowPlaying&artist=' + LastFM.artistName + '&timestamp=' + time + '&track=' + LastFM.trackName + '&api_key=809dffc5f629c1d4871323f01379bc0d&api_sig=' + api_sig + '&sk=' + LastFM.user.sk;
                        CROSS.XSS.post(url, post);


                        document.getElementById("find").value = LastFM.artistName;
                        App.ultra.findSong = false;
                        Player.findSong(track);
                    }
                } else {
                    setTimeout(App.updatePHP, 2500)
                }
            }
        }
        xhr.send(null);
    }
    App.updatePHP()
    App.radioInt = setInterval(App.updatePHP, 20000);

    if (Player.init) {
        uppodSend("player1", "set[radio]:0");
        uppodSend("player1", "stop");
        setTimeout(function () {
            uppodSend("player1", 'file\:' + App.ultra.url);
            uppodSend("player1", 'play');

        }, 300);
        var volume = document.getElementById('volume');
        var valueVolume = document.getElementById('valueVolume');
        document.getElementById("preload").style.display = 'none';
        /*        var curVolume = uppodGet("player1", 'getv');
        valueVolume.style.height = volume.offsetHeight * (curVolume / 100) + 'px';*/
        return 1;
    }
    var flashvars = { st: "audio53-1229.txt", file: App.ultra.url, uid: "player1" };
    var params = { bgcolor: "#ffffff", allowFullScreen: "true", allowScriptAccess: "always" };
    var attributes = { id: "player1", name: "player" };
    swfobject.embedSWF("uppod.swf", "player", "0", "0", "10.0.0", false, flashvars, params, attributes);
    document.getElementById("preload").style.display = 'none';
    for (var k = 0; k < App.favoritesRadioList.length; k++) {
        if (App.currentRadio.name == App.favoritesRadioList[k].name) {
            for (var k2 = k; k2 < App.favoritesRadioList.length - 1; k2++) {
                App.favoritesRadioList[k2] = App.favoritesRadioList[k2 + 1];
            }
        }
    }
    App.favoritesRadioList.unshift(App.currentRadio);
    App.favoritesRadioList.length = 4;
    if (JSON && localStorage) {
        localStorage.setItem("favRadio", encodeURI(JSON.stringify(App.favoritesRadioList)));
    }
}

App.showFrends = document.getElementById('frendsTracks').onclick = function () {
    App.clearPopup();
    var div = document.getElementById('frendsList');
    div.scrollTop = 0;
    div.innerHTML = '';
    div.style.display = 'block';
    //        <span class="aspan" id="closeFrendsList">Закрыть</span>
    var span = document.createElement('span');
    span.innerHTML = 'Закрыть';
    span.className = 'aspan';
    span.id = 'closeFrendsList';
    span.onclick = function () {
        document.getElementById('frendsList').style.display = 'none';
    }
    div.appendChild(span);
    var h3 = document.createElement('h3');
    h3.innerHTML = 'Слушать аудиозаписи  - ';
    div.appendChild(h3);
    for (var i = 0; i < App.user.frends.length; i++) {
        var span = document.createElement('div');
        var h5 = document.createElement('h5');
        h5.innerHTML = App.user.frends[i].first_name;
        span.appendChild(h5);
        span.appendChild(document.createElement('br'))
        var img = document.createElement('img');
        img.src = App.user.frends[i].photo;
        span.appendChild(img);
        span.data = App.user.frends[i];
        span.onclick = function () {
            LastFM.frend = this.data;
            LastFM.fr = true;
            //alert(this.data.uid + ' - ' + this.data.first_name);
            document.getElementById("preload").style.display = 'block';
            App.loadMyTrack(this.data.uid)

            document.getElementById('frendsList').style.display = 'none';
        }
        div.appendChild(span);
    }
}
App.showPlaylistsForMove = function (that, all) {
    document.getElementById("preload").style.display = 'none';
    App.clearPopup();

    if (!App.playlists || App.playlists.length == 0) {
        App.showPopup("У вас нет ни одного плэйлиста");
        setTimeout(function () {
            App.createNewPlaylist()
        }, 2000)
        return 1;
    }

    var myTracks = document.getElementById("myTracks");
    var d = document.getElementById("playlists");
    d.innerHTML = '';
    d.style.display = 'block';
    var h2 = document.createElement("h2");
    h2.innerHTML = "Отправить аудиозапись в…";
    d.appendChild(h2);


    for (var i = 0; i < App.playlists.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = App.playlists[i].title;
        div.dataText = App.playlists[i];
        div.onclick = function () {
            document.getElementById("preload").style.display = 'block';
            var album = this.dataText.album_id;
            VK.api('audio.moveToAlbum', { aids: that.data.aid, album_id: album }, function (data) {
                if (data.response == 1) {
                    App.myTracksNotChanged = false;
                    if (all) {
                        that.spanPlay.innerHTML = App.hashPlaylist[album];

                    }else {
                        that.data.div.className = 'delete';
                        that.data.div.style.color = 'silver';
                        that.data.div.style.textDecoration = 'line-through';
                        that.data.div.onclick = null;
                        that.data.span.innerHTML = '';
                        that.data.div.onmouseover = null;
                        Player.playlist[that.i] = null;

                    }
                    document.getElementById("preload").style.display = 'none';
                    App.showPopup("Аудиозапись перемещена успешно")
                    return false;
                }
            })

            document.getElementById('playlists').style.display = 'none';
        }
        d.appendChild(div);
    }
    var span = document.createElement('span');
    span.innerHTML = 'Закрыть';
    span.className = 'aspan';
    span.id = 'closePlaylists';
    span.onclick = function () {
        document.getElementById('playlists').style.display = 'none';
    }
    d.appendChild(span);
}

App.loadMyTrackFromMyWall = function () {
    LastFM.album = '';
    App.MT = true;
    document.getElementById("myTracks").className = 'aspanAk';
    clearTimeout(App.preventMemoryLeakTimeout);
    App.clearPopup(true);
    App.vkFind = false;
    clearTimeout(LastFM.scronTimout);
    App.clearVkFindStack();

    VK.api("wall.get", { count: 100 }, function (data) {
        if (data.response) {
            var div = document.getElementById('playlist');
            div.innerHTML = '';
            div.style.display = 'block';
            var titleAlbum = document.createElement('h3');
            titleAlbum.className = 'titleAlbum';
            titleAlbum.innerHTML = 'Аудиозаписи с моей стены';
            div.appendChild(titleAlbum);
            Player.playlist = [];
            var aids = "";
            for (var i = 1; i < data.response.length; i++) {
                if (data.response[i] && data.response[i].attachments) {
                    for (var j = 0; j < data.response[i].attachments.length; j++) {
                        if (data.response[i].attachments[j].type == "audio") {
                            aids += data.response[i].attachments[j].audio.owner_id + '_' + data.response[i].attachments[j].audio.aid + ','
                        }
                    }
                }
            }
            VK.api("audio.getById", { audios: aids }, function (data) {
                if (data.response) {
                    var tracks = data.response;
                    if (tracks && tracks[0]) {
                        for (var i = 0; i < tracks.length; i++) {
                            var track = document.createElement('div');
                            var fullTime = tracks[i].duration;
                            var fullMin = Math.floor(fullTime / 60);
                            var fullSec = Math.floor(fullTime - fullMin * 60);
                            var time = fullMin + ':' + (fullSec.toString().length == 1 ? '0' + fullSec : fullSec);
                            var span = document.createElement('span');
                            span.innerHTML = time;
                            span.className = 'duration';
                            //track.innerHTML = (i + 1) + '. ' + tracks[i].title;
                            track.innerHTML = '<a class="noA" onclick="return false" href="' + tracks[i].url + '">' + (i + 1) + '</a>. ' + "<span id=aid" + i + ">" + tracks[i].artist + ' - ' + tracks[i].title + "</span>";
                            track.appendChild(span);
                            div.appendChild(track);
                            tracks[i].div = track;
                            tracks[i].span = span;
                            tracks[i].div.onclick = (function (track, i) {
                                return function () {
                                    Player.currentTrack = track;
                                    Player.currentNumber = i;
                                    LastFM.artistName = track.artist;
                                    Player.play(track.url, true);
                                }
                            })(tracks[i], i)
                            tracks[i].div.className = 'finded';
                            //Player.playlist.push(data.response[1])
                            Player.playlist[i] = tracks[i];
                        }
                        if (App.radioInt) {
                            clearInterval(App.radioInt);
                        }
                        App.radio = false;
                        if (Player.init) {
                            uppodSend("player1", "set[radio]:0");
                        }
                        App.ultra.currentTrack = '';
                        Player.currentTrack = tracks[0];
                        Player.currentNumber = 0;
                        LastFM.artistName = tracks[0].artist;
                        document.getElementById("preload").style.display = 'none';
                        Player.play(tracks[0].url);
                        document.getElementById("preload").style.display = 'none';
                    }
                }
            })
        }
    })
};

App.showPlaylists = function () {
    document.getElementById("preload").style.display = 'none';
    App.clearPopup();
    var myTracks = document.getElementById("myTracks");
    var d = document.getElementById("playlists");
    d.innerHTML = '';
    d.style.display = 'block';
    var h2 = document.createElement("h2");
    h2.innerHTML = "Выберите плэйлист";
    d.appendChild(h2);

    var div = document.createElement("div");
    div.innerHTML = "Все Аудиозаписи";
    div.onclick = function () {
        App.currentPlaylist = null;
        document.getElementById("preload").style.display = 'block';
        App.loadMyTrack("my");
    }
    d.appendChild(div);

    var div = document.createElement("div");
    div.innerHTML = "Неотсортированные";
    div.onclick = function () {
        App.currentPlaylist = null;
        document.getElementById("preload").style.display = 'block';
        App.loadMyTrack("my", "noSort");
    }
    d.appendChild(div);

    var div = document.createElement("div");
    div.innerHTML = "Аудиозаписи со стены";
    div.onclick = function () {
        App.currentPlaylist = null;
        document.getElementById("preload").style.display = 'block';
        App.loadMyTrackFromMyWall();
    }
    d.appendChild(div);
    if (App.playlists.length > 0) {
        var div = document.createElement("hr");
        div.className = 'sep';
        d.appendChild(div);
    }
    for (var i = 0; i < App.playlists.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = App.playlists[i].title;
        div.dataText = App.playlists[i];
        div.onclick = function () {
            document.getElementById("preload").style.display = 'block';
            App.loadMyTrack("my", this.dataText.album_id);
            App.currentPlaylist = this.dataText;
        }
        d.appendChild(div);
    }
    var span = document.createElement('span');
    span.innerHTML = 'Закрыть';
    span.className = 'aspan';
    span.id = 'closePlaylists';
    span.onclick = function () {
        document.getElementById('playlists').style.display = 'none';
    }
    d.appendChild(span);
}


document.getElementById("myTracks").onclick = function () {
    document.getElementById("preload").style.display = 'block';
    if (App.playlists && App.playlists.length > 0) {
        App.showPlaylists();
    }else if (App.playlists && App.playlists.length == 0) {
        App.currentPlaylist = null;
        //App.loadMyTrack('my');
        App.showPlaylists();
    } else {
        VK.api('audio.getAlbums', {}, function (data) {
            App.findPlaylists = true;
            if (data.response && data.response[0] != 0) {
                App.playlists = [];
                App.hashPlaylist = {};
                for (var i = 1; i <= data.response[0]; i++) {
                    App.playlists.push(data.response[i]);
                    App.hashPlaylist[data.response[i].album_id] = data.response[i].title;
                }
                App.showPlaylists();
            }else {
                App.playlists = [];
                App.showPlaylists();
                //App.loadMyTrack('my');
            }
        })
    }
}

App.editTrack = function (img) {
    App.clearPopup();
    var div = document.getElementById("editTrack");
    div.innerHTML = '';
    div.style.display = 'block';

    var h2 = document.createElement("h2");
    h2.innerHTML = 'Редактировать трэк';
    div.appendChild(h2);

    var d = document.createElement("div");
    div.appendChild(d);

    d.appendChild(document.createTextNode("Исполнитель"));
    var artist = document.createElement("input");
    artist.type = 'text';
    artist.value = img.data.artist;
    d.appendChild(artist);

    d.appendChild(document.createElement("br"));
    d.appendChild(document.createElement("br"));

    d.appendChild(document.createTextNode("Название трэка"));
    var title = document.createElement("input");
    title.type = 'text';
    title.value = img.data.title;
    d.appendChild(title);

    d.appendChild(document.createElement("br"));
    d.appendChild(document.createElement("br"));

    var ok = document.createElement("input");
    ok.type = 'button';
    ok.value = 'Изменить'
    ok.id = 'editButton';
    d.appendChild(ok);

    ok.onclick = function () {
        document.getElementById("preload").style.display = 'block';
        var art = artist.value.replace("&#39;", "'");
        VK.api("audio.edit", { aid: img.data.aid, oid: img.data.owner_id, artist: art, title: title.value }, function (data) {
            if (data.response || data.response == 0) {
                App.myTracksNotChanged = false;
                App.showPopup("Аудиозапись успешно отредактирована");
                document.getElementById("preload").style.display = 'none';
                document.getElementById('editTrack').style.display = 'none';
                img.data.artist = artist.value;
                img.data.title = title.value;
                document.getElementById("aid" + img.i).innerHTML = artist.value + ' - ' + title.value;
                if (img.i == Player.currentNumber) {
                    LastFM.artistName = artist.value;
                    LastFM.trackName = title.value;
                    document.getElementById('titleTrack').innerHTML = artist.value + ' - ' + title.value;
                    var scr = document.createElement('script');
                    scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + Player.currentTrack.artist + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&callback=LastFM.responceArtistMT&lang=ru';
                    document.body.appendChild(scr);
                    //Player.findSong(img.data.div);
                }
            }
        });
    }

    //d.innerHTML += '<div>Название <input type="text" id="titleNewPlaylist"/></div>'
    //d.innerHTML += '<div><input type="button" id="createNewPlaylist" value="Создать"/></div>'
    var span = document.createElement('span');
    span.innerHTML = 'Закрыть';
    span.className = 'aspan';
    span.id = 'closeEditTrack';
    span.onclick = function () {
        document.getElementById('editTrack').style.display = 'none';
    }
    d.appendChild(span);
}

App.loadMyTrack = function (str, album_id) {
    clearTimeout(App.preventMemoryLeakTimeout);
    App.clearAkMenu();
    document.getElementById("preload").style.display = 'block';
    App.my = false;
    Player.firstPlay = false;
    App.clearPopup(true);
    if (str == "my") {
        LastFM.fr = false;
        document.getElementById("myTracks").className = 'aspanAk';
        App.MT = true;
        App.my = true;
        var uid = App.uid || App.parse("viewer_id");
        if (album_id) { var str = album_id } else { var str = 'all' }

        VK.callMethod("setLocation", "audio=" + str);
    } else {
        document.getElementById("frendsTracks").className = 'aspanAk';
        var uid = LastFM.frend.uid;
        App.MT = true
    }
    var album_id = album_id || "";

    App.vkFind = false;
    clearTimeout(LastFM.scronTimout);
    App.clearVkFindStack();
    function q(data) {

        //document.getElementById("preload").style.display = 'none';
        //LastFM.tracks = data.album.tracks.track;
        var div = document.getElementById('playlist');
        div.innerHTML = '';
        div.style.display = 'block';
        var titleAlbum = document.createElement('h3');
        titleAlbum.className = 'titleAlbum';
        if (!LastFM.fr) {
            if (App.currentPlaylist) {
                titleAlbum.innerHTML = 'Мои аудиозаписи ( ' + App.currentPlaylist.title + ' )';
            }
            else if (album_id == 'noSort') {
                titleAlbum.innerHTML = 'Неотсортированные аудиозаписи';
            }
            else {
                titleAlbum.innerHTML = 'Все мои аудиозаписи';
            }
        } else {
            titleAlbum.innerHTML = "Аудиозаписи " + LastFM.frend.first_name;
        }
        div.appendChild(titleAlbum);

        //LastFM.titleAlbum = data.album.name;
        var tracks = [];
        if (album_id) {
            if (album_id == 'noSort') {
                for (var e = 0; e < data.response.length; e++) {
                    if (!data.response[e].album) {
                        tracks.push(data.response[e]);
                    }

                }
            }else {
                for (var e = 0; e < data.response.length; e++) {
                    if (data.response[e].album == album_id) {
                        tracks.push(data.response[e]);
                    }

                }
                if (tracks.length == 0) {
                    var tracks = data.response;
                }
            }
        }else {
            var tracks = data.response;
        }



        Player.playlist = [];
        if (tracks && tracks[0]) {
            for (var i = 0; i < tracks.length; i++) {
                var track = document.createElement('div');
                var fullTime = tracks[i].duration;
                var fullMin = Math.floor(fullTime / 60);
                var fullSec = Math.floor(fullTime - fullMin * 60);
                var time = fullMin + ':' + (fullSec.toString().length == 1 ? '0' + fullSec : fullSec);
                var span = document.createElement('span');
                span.innerHTML = time;
                span.className = 'duration';
                //track.innerHTML = (i + 1) + '. ' + tracks[i].title;
                track.innerHTML = '<a class="noA" onclick="return false" href="' + tracks[i].url + '">' + (i + 1) + '</a>. ' + "<span id=aid" + i + ">" + tracks[i].artist + ' - ' + tracks[i].title + "</span>";
                track.appendChild(span);
                if (App.my && !LastFM.fr) {
                    if (album_id) {
                        var all = false;
                    }else {
                        var all = true;
                    }
                    var config = document.createElement("span");
                    config.className = 'config';
                    if (album_id == "" && tracks[i].album) {
                        config.innerHTML = "<span class='titlePlaylist'>" + App.hashPlaylist[tracks[i].album] + "</span>";

                    }else {
                        config.innerHTML = "<span class='titlePlaylist'>" + "</span>";

                    }

                    var img3 = document.createElement("img");
                    img3.spanPlay = config.firstChild;
                    img3.title = 'Редактировать аудизапись';
                    img3.src = 'http://vk.hart-flamov.ru/JS/VK/img/edit.png';
                    img3.data = tracks[i];
                    img3.i = i;
                    img3.onmouseover = function () {
                        this.src = 'http://vk.hart-flamov.ru/JS/VK/img/editAct.png';
                    }

                    img3.onmouseout = function () {
                        this.src = 'http://vk.hart-flamov.ru/JS/VK/img/edit.png';
                    }

                    img3.onclick = function (e) {
                        var e = e || window.event;
                        //alert(JSON.stringify(this.data))
                        //document.getElementById("preload").style.display = 'block';
                        App.editTrack(this)
                        if (e.stopPropagation) {
                            e.stopPropagation();
                        }else {
                            e.сancelBubble = true;
                        }
                    }

                    config.appendChild(img3);

                    var img2 = document.createElement("img");
                    img2.spanPlay = config.firstChild;
                    img2.title = 'Отправить аудиозапись в плэйлист…'
                    img2.src = 'http://vk.hart-flamov.ru/JS/VK/img/move.png';
                    img2.data = tracks[i];
                    img2.i = i;
                    img2.onmouseover = function () {
                        this.src = 'http://vk.hart-flamov.ru/JS/VK/img/move2.png';
                    }

                    img2.onmouseout = function () {
                        this.src = 'http://vk.hart-flamov.ru/JS/VK/img/move.png';
                    }

                    img2.onclick = function (e) {
                        var e = e || window.event;
                        if (e.stopPropagation) {
                            e.stopPropagation();
                        }else {
                            e.сancelBubble = true;
                        }
                        //alert(JSON.stringify(this.data))
                        document.getElementById("preload").style.display = 'block';
                        App.showPlaylistsForMove(this, all)

                    }

                    config.appendChild(img2);

                    var img = document.createElement("img");
                    img.title = "удалить аудиозапись";
                    img.src = 'http://vk.hart-flamov.ru/JS/VK/img/delete.png';
                    img.data = tracks[i];
                    img.i = i;
                    img.onmouseover = function () {
                        this.src = 'http://vk.hart-flamov.ru/JS/VK/img/delete2.png';
                    }

                    img.onmouseout = function () {
                        this.src = 'http://vk.hart-flamov.ru/JS/VK/img/delete.png';
                    }

                    img.onclick = function (e) {
                        var e = e || window.event;
                        //alert(JSON.stringify(this.data))
                        var that = this;
                        document.getElementById("preload").style.display = 'block';
                        VK.api('audio.delete', { aid: this.data.aid, oid: this.data.owner_id }, function (data) {
                            if (data.response == 1) {
                                App.myTracksNotChanged = false;
                                that.data.div.className = 'delete';
                                that.data.div.style.color = 'silver';
                                that.data.div.style.textDecoration = 'line-through';
                                that.data.div.onclick = null;
                                //that.data.span.backup = span.parentNode.removeChild(span);
                                var spanRestore = document.createElement("span");
                                spanRestore.className = 'spanRestore';
                                spanRestore.innerHTML = 'Восстановить';
                                that.data.div.appendChild(spanRestore);
                                var data = that.data;
                                spanRestore.onclick = function () {
                                    document.getElementById("preload").style.display = 'block';
                                    //alert(JSON.stringify(data));
                                    VK.api('audio.restore', { aid: data.aid }, function (data2) {
                                        if (data2.response) {
                                            data.div.className = 'finded';
                                            if (Player.currentNumber == that.i) {
                                                data.div.style.color = '#00A3EF';
                                            }else {
                                                data.div.style.color = 'black';
                                            }
                                            data.div.style.textDecoration = 'none';
                                            //data.div.appendChild(data.span.backup);
                                            data.div.onclick = (function (track, i) {
                                                return function () {
                                                    Player.currentTrack = track;
                                                    Player.currentNumber = i;
                                                    LastFM.artistName = track.artist;
                                                    Player.play(track.url);
                                                }
                                            })(tracks[that.i], that.i)
                                            data.div.onmouseover = (function (track, i) {
                                                return function () {
                                                    track.config.style.display = 'block';
                                                }
                                            })(tracks[that.i], that.i)

                                            data.div.onmouseout = (function (track, i) {
                                                return function () {
                                                    track.config.style.display = 'none';
                                                }
                                            })(tracks[that.i], that.i);
                                            spanRestore.parentNode.removeChild(spanRestore);
                                            Player.playlist[that.i] = that.data;
                                            document.getElementById("preload").style.display = 'none';
                                            App.showPopup("Аудиозапись восстановлена успешно")
                                        }else if (data2.error && data2.error_code == 202) {
                                            App.showPopup("Уже слишком поздно. Аудиозапись восстановить не получится");
                                            document.getElementById("preload").style.display = 'none';
                                        }else {
                                            App.showPopup("Неизвестная ошибка");
                                            document.getElementById("preload").style.display = 'none';
                                        }
                                    })
                                };
                                that.data.span.data = Player.playlist[that.i];
                                that.data.div.onmouseover = null;
                                Player.playlist[that.i] = null;
                                document.getElementById("preload").style.display = 'none';
                                App.showPopup("Аудиозапись удалена успешно")
                                return false;
                            }
                        })
                        if (e.stopPropagation) {
                            e.stopPropagation();
                        }else {
                            e.сancelBubble = true;
                        }
                    }
                    config.appendChild(img);


                    track.appendChild(config);
                }
                div.appendChild(track);
                tracks[i].div = track;
                tracks[i].span = span;
                tracks[i].config = config;
                tracks[i].div.onmouseover = (function (track, i) {
                    return function () {
                        track.config.style.display = 'block';
                    }
                })(tracks[i], i)

                tracks[i].div.onmouseout = (function (track, i) {
                    return function () {
                        track.config.style.display = 'none';
                    }
                })(tracks[i], i)

                tracks[i].div.onclick = (function (track, i) {
                    return function () {
                        Player.currentTrack = track;
                        Player.currentNumber = i;
                        LastFM.artistName = track.artist;
                        Player.play(track.url, true);
                    }
                })(tracks[i], i)
                tracks[i].div.className = 'finded';
                //Player.playlist.push(data.response[1])
                Player.playlist[i] = tracks[i];

            }
            if (App.radioInt) {
                clearInterval(App.radioInt);
            }
            App.radio = false;
            if (Player.init) {
                uppodSend("player1", "set[radio]:0");
            }
            App.ultra.currentTrack = '';
            Player.currentTrack = tracks[0];
            Player.currentNumber = 0;
            LastFM.artistName = tracks[0].artist;
            document.getElementById("preload").style.display = 'none';
            Player.play(tracks[0].url);
        }
        document.getElementById("preload").style.display = 'none';
    }
    if (str == "my") {
        if (App.myTracks && App.myTracksNotChanged) {
            q(App.myTracks)
        }else {
            VK.api("audio.get", { uid: uid /*album_id: album_id*/ }, function (data) {
                if (data.response) {
                    App.myTracks = data;
                    App.myTracksNotChanged = true;
                    q(App.myTracks);
                }
            });
        }
    }else {
        VK.api("audio.get", { uid: uid /*album_id: album_id*/ }, function (data) {
            if (data.response) {
                q(data);
            }
        });
    }
}



App.saveUser = function () {
    LastFM.scrobling = true;
    LastFM.userName = document.getElementById('username').value;
    LastFM.password = document.getElementById('password').value;
    App.define.likeEQLove = document.getElementById("likeEQLove").checked;
    if (App.define.likeEQLove) {
        var str = 'yes';
    }else {
        var str = 'no';
    }
    if (localStorage) {
        localStorage.setItem("likeLove", str)
        localStorage.setItem("LastFMusername", LastFM.userName);
        localStorage.setItem("LastFMpassword", LastFM.password);
    }
    LastFM.getKey(LastFM.userName, LastFM.password);
    document.getElementById('shadow').style.display = 'none';
    document.getElementById('shadow').innerHTML = '';
    App.popupLastFM = false;
}


App.suche = function (q) {
    Player.firstPlay = false;
    App.clearAkMenu();
    document.getElementById("form").className = 'aspanAk';
    clearTimeout(LastFM.scronTimout);
    clearTimeout(App.preventMemoryLeakTimeout);
    document.getElementById("find").blur();
    if (document.getElementById("tooltip")) {
        document.getElementById("tooltip").style.display = 'none';
        document.getElementById("tooltip").parentNode.removeChild(document.getElementById("tooltip"));
    }
    if (document.getElementById("find").value == 'Искать группу' && !q) {
        App.showPopup("Введите название группы");
        //alert("Введите название группы");
        document.getElementById("preload").style.display = 'none';
        return 1;
    }

    App.clearPopup(true);
    document.getElementById("preload").style.display = 'block';
    var q = q || document.getElementById("find").value;
    q = encodeURIComponent(q);
    LastFM.q = q;

    App.radio = false;
    App.MT = false;
    if (App.radioInt) {
        clearInterval(App.radioInt)
    }
    //uppodSend("player1", "set[radio]:0");
    App.clearVkFindStack()
    var scr = document.createElement('script');
    scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + q + '&api_key=809dffc5f629c1d4871323f01379bc0d&autocorrect=1&format=json&callback=LastFM.responceArtist&lang=ru';
    document.body.appendChild(scr);


}

App.clearPopup = function (q) {
    document.getElementById("radioList").style.display = 'none';
    document.getElementById("frendsList").style.display = 'none';
    document.getElementById("shadow").style.display = 'none';
    document.getElementById("textBack").style.display = 'none';
    document.getElementById("playlists").style.display = 'none';
    document.getElementById("newPlaylistDialog").style.display = 'none';
    document.getElementById("editTrack").style.display = 'none';
    if (q) {
        document.getElementById("startup").style.display = 'none';
    }
}

document.getElementById('addTrack').onclick = function () {
    document.getElementById("preload").style.display = 'block';
    App.addingTrackNum = 3;
    if (App.addingTrack) {
        App.showPopup("Добавление трека уже выполняется");
        return 1;
    }
    if (!App.findPlaylists) {
        VK.api('audio.getAlbums', {}, function (data) {
            App.findPlaylists = true;
            if (data.response && data.response[0] != 0) {
                App.playlists = [];
                App.hashPlaylist = {};
                for (var i = 1; i <= data.response[0]; i++) {
                    App.playlists.push(data.response[i]);
                    App.hashPlaylist[data.response[i].album_id] = data.response[i].title;
                    App.showPlaylistsForAddTrack();
                }
            }else {
                App.playlists = [];
                App.addTrack();
            }
        })
        return 1;
    }
    if (App.playlists && App.playlists.length > 0) {
        App.showPlaylistsForAddTrack();
        return 1;
    }

    App.addTrack();
}

App.showPlaylistsForAddTrack = function () {
    document.getElementById("preload").style.display = 'none';
    App.clearPopup();
    var myTracks = document.getElementById("myTracks");
    var d = document.getElementById("playlists");
    d.innerHTML = '';
    d.style.display = 'block';
    var h2 = document.createElement("h2");
    h2.innerHTML = "Добавить в плейлист…";
    d.appendChild(h2);

    var div = document.createElement("div");
    div.innerHTML = "Общий список";
    div.onclick = function () {
        document.getElementById("preload").style.display = 'block';
        App.addTrack();
        document.getElementById('playlists').style.display = 'none';
    }
    d.appendChild(div);

    for (var i = 0; i < App.playlists.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = App.playlists[i].title;
        div.dataText = App.playlists[i];
        div.onclick = function () {
            document.getElementById("preload").style.display = 'block';
            App.addTrack(this.dataText.album_id);
            document.getElementById('playlists').style.display = 'none';
        }
        d.appendChild(div);
    }
    var span = document.createElement('span');
    span.innerHTML = 'Закрыть';
    span.className = 'aspan';
    span.id = 'closePlaylists';
    span.onclick = function () {
        document.getElementById('playlists').style.display = 'none';
    }
    d.appendChild(span);

}

App.addTrack = function (album_id) {
    //alert(JSON.stringify(Player.currentTrack));
    setTimeout(function () {
        App.addingTrack = false;
    }, 7000)
    App.addingTrackNum--;
    if (App.addingTrackNum == 0) {
        document.getElementById("preload").style.display = 'none';
        App.showPopup("Не удалось добавить трек. Попробуйте позже");
        App.addingTrack = false;
        return 1;
    };
    App.addingTrack = true;
    VK.api('audio.add', { aid: Player.currentTrack.aid, oid: Player.currentTrack.owner_id }, function (data) {
        if (data.response) {
            if (album_id) {
                VK.api('audio.moveToAlbum', { aids: data.response, album_id: album_id, gid: 0, al: 1 }, function (data) {
                    if (data.response) {
                        App.showPopup('Аудиозапись успешно добавлена');
                        App.myTracksNotChanged = false;
                        document.getElementById("preload").style.display = 'none';
                        setTimeout(function () { App.addingTrack = false }, 1600);
                    }
                })
            }else {
                document.getElementById("preload").style.display = 'none';
                App.showPopup('Аудиозапись успешно добавлена');
                setTimeout(function () { App.addingTrack = false }, 1600);
            }
        } else if (data.error) {
            //alert(JSON.stringify(data));
            setTimeout(function (){ App.addTrack(album_id); }, 3100)

        }
    })
    if (App.define.likeEQLove) {
        var track = LastFM.trackName;
        var api_sig = hex_md5("api_key809dffc5f629c1d4871323f01379bc0d" + "artist" + LastFM.artistName + "methodtrack.love" + "sk" + LastFM.user.sk + "track" + decodeURIComponent(track) + "e69db535e502129eb7473f0052204099");
        var post = 'method=track.love&artist=' + LastFM.artistName + '&track=' + track + '&api_key=809dffc5f629c1d4871323f01379bc0d&api_sig=' + api_sig + '&sk=' + LastFM.user.sk;
        var url = 'http:' + '//ws.audioscrobbler.com/2.0/';
        CROSS.XSS.post(url, post);
    }

}

App.sendArtistToWall = function () {
    var div = document.getElementById('frendsList');
    div.scrollTop = 0;
    div.innerHTML = '';
    div.style.display = 'block';
    //        <span class="aspan" id="closeFrendsList">Закрыть</span>
    var span = document.createElement('span');
    span.innerHTML = 'Закрыть';
    span.className = 'aspan';
    span.id = 'closeFrendsList';
    span.onclick = function () {
        document.getElementById('frendsList').style.display = 'none';
    }
    div.appendChild(span);

    var h3 = document.createElement('h3');
    h3.innerHTML = 'Отправить информацию о группе и лучшие песни на стену';
    div.appendChild(h3);

    for (var i = 0; i < App.user.frends.length; i++) {
        var span = document.createElement('div');
        var h5 = document.createElement('h5');
        h5.innerHTML = App.user.frends[i].first_name;
        span.appendChild(h5);
        span.appendChild(document.createElement('br'))
        var img = document.createElement('img');
        img.src = App.user.frends[i].photo;
        span.appendChild(img);
        span.data = App.user.frends[i];
        span.onclick = function () {
            document.getElementById("preload").style.display = 'block';
            var str = '';
            for (var j = 0; j < 9; j++) {
                if (Player.playlist[j]) {
                    str += 'audio' + Player.playlist[j].owner_id + "_" + Player.playlist[j].aid + ',';
                }
            }
            //str += 'audio' + Player.playlist[8].owner_id + "_" + Player.playlist[8].aid;
            VK.api('wall.post', { owner_id: this.data.uid, message: LastFM.artistBio + '( http:\//vkontakte.ru/app2636387#artist=' + encodeURIComponent(LastFM.artistName) + ' )', attachments: str }, function (data) {
                if (data.response) {
                    document.getElementById("preload").style.display = 'none';
                    App.showPopup('Группа успешно добавлена на стену другу');

                } else if (data.error && data.error.error_code == 214) {
                    document.getElementById("preload").style.display = 'none';
                    App.showPopup('Пользователь запретил оставлять сообщения у себя на стене')
                    //App.addTrack();
                }else if (data.error && data.error.error_code == 20) {
                    document.getElementById("preload").style.display = 'none';
                    App.showPopup('Невозможно отправить трек на стену другу из Web приложения - воспользуйтесь приложением вконтакте. Возможно вскоре проблема будет решена')
                    //App.addTrack();
                } else {
                    App.showPopup('Неизвестная ошибка')
                }
            })

            //alert(this.data.uid + ' - ' + this.data.first_name);

            document.getElementById('frendsList').style.display = 'none';
        }
        div.appendChild(span);
    }

}

App.addTrackWall = document.getElementById('addTrackWall').onclick = function () {

    //alert(JSON.stringify(Player.currentTrack));
    var div = document.getElementById('frendsList');
    div.scrollTop = 0;
    div.innerHTML = '';
    div.style.display = 'block';
    //        <span class="aspan" id="closeFrendsList">Закрыть</span>
    var span = document.createElement('span');
    span.innerHTML = 'Закрыть';
    span.className = 'aspan';
    span.id = 'closeFrendsList';
    span.onclick = function () {
        document.getElementById('frendsList').style.display = 'none';
    }
    div.appendChild(span);
    var h3 = document.createElement('h3');
    h3.innerHTML = 'Отправить сообщение…';
    div.appendChild(h3);
    var text = document.createElement('textarea');
    text.id = 'messageForWall';
    div.appendChild(text);
    var h3 = document.createElement('h3');
    h3.innerHTML = '… и аудиозапись для - ';
    div.appendChild(h3);

    for (var i = 0; i < App.user.frends.length; i++) {
        var span = document.createElement('div');
        var h5 = document.createElement('h5');
        h5.innerHTML = App.user.frends[i].first_name;
        span.appendChild(h5);
        span.appendChild(document.createElement('br'))
        var img = document.createElement('img');
        img.src = App.user.frends[i].photo;
        span.appendChild(img);
        span.data = App.user.frends[i];
        span.onclick = function () {
            document.getElementById("preload").style.display = 'block';
            VK.api('wall.post', { owner_id: this.data.uid, message: document.getElementById('messageForWall').value, attachments: "audio" + Player.currentTrack.owner_id + "_" + Player.currentTrack.aid }, function (data) {
                if (data.response) {
                    document.getElementById("preload").style.display = 'none';
                    App.showPopup('Аудиозапись успешно добавлена');

                } else if (data.error && data.error.error_code == 214) {
                    document.getElementById("preload").style.display = 'none';
                    App.showPopup('Пользователь запретил оставлять сообщения у себя на стене')
                    //App.addTrack();
                }else if (data.error && data.error.error_code == 20) {
                    document.getElementById("preload").style.display = 'none';
                    App.showPopup('Невозможно отправить трек на стену другу из Web приложения - воспользуйтесь приложением вконтакте. Возможно вскоре проблема будет решена')
                    //App.addTrack();
                }
            })

            //alert(this.data.uid + ' - ' + this.data.first_name);

            document.getElementById('frendsList').style.display = 'none';
        }
        div.appendChild(span);
    }

}


App.showText = document.getElementById("textTrack").onclick = function () {
    document.getElementById("preload").style.display = 'block';
    App.clearPopup();
    if (Player.currentTrack && Player.currentTrack.lyrics_id) {
        VK.api("audio.getLyrics", { lyrics_id: Player.currentTrack.lyrics_id }, function (data) {
            if (data.response && data.response.text) {
                var div = document.getElementById("textBack");
                div.style.display = 'block'
                div.innerHTML = '';
                var h3 = document.createElement('h3');
                h3.innerHTML = Player.currentTrack.title;
                div.appendChild(h3);
                var p = document.createElement('div');
                p.innerHTML = data.response.text.replace(/\n/g, "<br/>")
                div.appendChild(p);
                var span = document.createElement('span');
                span.innerHTML = 'Закрыть';
                span.className = 'aspan';
                span.id = 'closeTextBack';
                document.getElementById("preload").style.display = 'none';
                span.onclick = function () {
                    document.getElementById('textBack').style.display = 'none';
                    this.parentNode.removeChild(this);
                }
                document.body.appendChild(span);
            }
            else {
                document.getElementById("preload").style.display = 'none';
                App.showPopup('Не найдено')
            }
        })
    } else {
        VK.api('audio.search', { q: Player.currentTrack.artist + ' ' + Player.currentTrack.title, auto_complete: 1, sort: 2, count: 8, lyrics: 1 }, function (data) {
            if (data.response && data.response[0] != 0) {
                Player.currentTrack.lyrics_id = data.response[1].lyrics_id
                VK.api("audio.getLyrics", { lyrics_id: Player.currentTrack.lyrics_id }, function (data) {
                    if (data.response && data.response.text) {
                        var div = document.getElementById("textBack");
                        div.style.display = 'block'
                        div.innerHTML = '';
                        var h3 = document.createElement('h3');
                        h3.innerHTML = Player.currentTrack.title;
                        div.appendChild(h3);
                        var p = document.createElement('div');
                        p.innerHTML = data.response.text.replace(/\n/g, "<br/>")
                        div.appendChild(p);
                        var span = document.createElement('span');
                        span.innerHTML = 'Закрыть';
                        span.className = 'aspan';
                        span.id = 'closeTextBack';
                        document.getElementById("preload").style.display = 'none';
                        span.onclick = function () {
                            document.getElementById('textBack').style.display = 'none';
                            this.parentNode.removeChild(this);
                        }
                        document.body.appendChild(span);
                    }
                    else {
                        document.getElementById("preload").style.display = 'none';
                        App.showPopup('Не найдено')
                    }
                })
                /*                Player.currentTrack.lyrics_id = data.response[1].lyrics_id;
                App.showText()*/
            } else {
                document.getElementById("preload").style.display = 'none';
                App.showPopup('Ничего не найдено')
            }
        })
    }
}

App.createNewPlaylist = document.getElementById("newPlaylist").onclick = function () {
    var d = document.getElementById("newPlaylistDialog");
    d.innerHTML = '';
    d.style.display = 'block';

    var h2 = document.createElement("h2");
    h2.innerHTML = 'Создать новый плэйлист';
    d.appendChild(h2);

    d.innerHTML += '<div>Название <input type="text" id="titleNewPlaylist"/></div>'
    d.innerHTML += '<div><input type="button" id="createNewPlaylist" value="Создать"/></div>'
    document.getElementById("createNewPlaylist").onclick = function () {
        var title = document.getElementById("titleNewPlaylist").value;
        if (document.getElementById("titleNewPlaylist").value != '') {
            document.getElementById("newPlaylistDialog").style.display = 'none';
            document.getElementById("preload").style.display = 'block';
            VK.api('audio.addAlbum', { title: document.getElementById("titleNewPlaylist").value }, function (data) {
                if (data.response && data.response.album_id) {
                    if (App.playlists) {
                        App.playlists.push({ title: title, album_id: data.response.album_id })
                        App.hashPlaylist[data.response.album_id] = title;
                    }
                    document.getElementById("preload").style.display = 'none';
                    App.showPopup("Новый плэйлист \"" + title + "\" успешно создан");
                }
            })
        }else {
            App.showPopup("Введите название нового плэйлиста");
        }
    }
    var span = document.createElement('span');
    span.innerHTML = 'Закрыть';
    span.className = 'aspan';
    span.id = 'closeDialogNewPlaylist';
    span.onclick = function () {
        document.getElementById("newPlaylistDialog").style.display = 'none';
    }
    d.appendChild(span);
}

App.clearVkFindStack = function () {
    App.vkFind = false;
    if (App.vkFindStack) {
        for (var i = 0; i < App.vkFindStack.length; i++) {
            clearTimeout(App.vkFindStack[i]);
        }
    }
    App.vkFindStack = [];

}

Player.random = document.getElementById('random').onclick = function () {
    if (Player.rand) {
        Player.rand = false;
        document.getElementById('random').style.backgroundImage = 'url(http://vk.hart-flamov.ru/JS/VK/img/randomPass.png)';

    } else {
        Player.rand = true;
        document.getElementById('random').style.backgroundImage = 'url(http://vk.hart-flamov.ru/JS/VK/img/randomAk.png)';
    }
    var r = Player.rand ? 1 : 0;
    if (localStorage) {
        localStorage.setItem("rand", r)
    }
}

Player.repeat = document.getElementById('repeat').onclick = function () {
    if (Player.rep) {
        Player.rep = false;
        document.getElementById('repeat').style.backgroundImage = 'url(http://vk.hart-flamov.ru/JS/VK/img/repeat.png)';
    } else {
        Player.rep = true;
        document.getElementById('repeat').style.backgroundImage = 'url(http://vk.hart-flamov.ru/JS/VK/img/repeat2.png)';
    }
}


Player.div = document.getElementById('audio');
Player.uppod = document.getElementById('player1');

Player.toggle = document.getElementById('playButton').onclick = function () {
    if (App.radio) {
        if (uppodGet("player1", 'getstatus') == -1) {
            uppodSend("player1", 'play');
            App.updatePHP();
            App.radioInt = setInterval(App.updatePHP, 20000);
            document.getElementById('playButton').style.backgroundImage = 'url(http://vk.hart-flamov.ru/JS/VK/img/pause.png)';
            if (document.getElementById("eq")) {
                //document.getElementById("eq").innerHTML = '';
                document.getElementById("eq").innerHTML = "<img src='http:/\/vk.hart-flamov.ru/JS/VK/img/eq.gif'>";
            }
        } else if (uppodGet("player1", 'getstatus') == 1) {
            uppodSend("player1", 'stop');
            clearInterval(App.radioInt);
            document.getElementById('playButton').style.backgroundImage = 'url(http://vk.hart-flamov.ru/JS/VK/img/play.png)'; //
            if (document.getElementById("eq")) {
                document.getElementById("eq").innerHTML = '';
                //document.getElementById("eq").innerHTML = "<img src='http:/\/vk.hart-flamov.ru/JS/VK/img/eq.gif'>";
            }
        }
    } else {
        uppodSend("player1", 'toggle');
        if (uppodGet("player1", 'getstatus') == 0 || uppodGet("player1", 'getstatus') == -1) {
            document.getElementById('playButton').style.backgroundImage = 'url(http://vk.hart-flamov.ru/JS/VK/img/play.png)'; //
            if (document.getElementById("eq")) {
                document.getElementById("eq").innerHTML = '';
                //document.getElementById("eq").innerHTML = "<img src='http:/\/vk.hart-flamov.ru/JS/VK/img/eq.gif'>";
            }
        }
        else {
            document.getElementById('playButton').style.backgroundImage = 'url(http://vk.hart-flamov.ru/JS/VK/img/pause.png)';
            if (document.getElementById("eq")) {
                //document.getElementById("eq").innerHTML = '';
                document.getElementById("eq").innerHTML = "<img src='http:/\/vk.hart-flamov.ru/JS/VK/img/eq.gif'>";
            }
        }
        if (!App.s) {
            App.s = setInterval(Player.q, 1000);
        }
    }
}

Player.next = document.getElementById('nextButton').onclick = function () {
    if (Player.rep) {
        Player.play(Player.currentTrack.url);
        return 1;
    }
    if (!Player.rand) {
        if (parseInt(Player.currentNumber) + 1 < Player.playlist.length) {
            Player.currentNumber++;
        } else {
            Player.currentNumber = 0;
        }
        if (Player.playlist[Player.currentNumber]) {
            Player.currentTrack = Player.playlist[Player.currentNumber];
            Player.play(Player.currentTrack.url)
        } else {
            Player.next()
        }
    } else {
        var sl = Math.floor(Math.random() * Player.playlist.length - 1) + (new Date()).getTime() % 100;
        Player.currentNumber += sl;
        if (Player.currentNumber > Player.playlist.length) { Player.currentNumber = Player.currentNumber % Player.playlist.length }
        if (Player.playlist[Player.currentNumber]) {
            Player.currentTrack = Player.playlist[Player.currentNumber];
            Player.play(Player.currentTrack.url)
        } else {
            Player.next()
        }
    }

    /*uppodSend("player1", 'file\:' + Player.currentTrack.url);
    uppodSend("player1", 'play');*/
}

Player.prev = document.getElementById('prevButton').onclick = function () {
    if (Player.rep) {
        Player.play(Player.currentTrack.url);
        return 1;
    }

    if (!Player.rand) {
        if (parseInt(Player.currentNumber) - 1 >= 0) {
            Player.currentNumber--;
        } else {
            Player.currentNumber = 0;
        }
        Player.currentTrack = Player.playlist[Player.currentNumber];
        Player.play(Player.currentTrack.url)
    } else {
        var sl = Math.floor(Math.random() * Player.playlist.length - 1);
        Player.currentNumber += sl;
        if (Player.currentNumber > Player.playlist.length) { Player.currentNumber = Player.currentNumber % Player.playlist.length }
        if (Player.playlist[Player.currentNumber]) {
            Player.currentTrack = Player.playlist[Player.currentNumber];
            Player.play(Player.currentTrack.url)
        } else {
            Player.next()
        }
    }
    /*uppodSend("player1", 'file\:' + Player.currentTrack.url);
    uppodSend("player1", 'play');*/
}

Player.seek = document.getElementById('progLoad').onclick = document.getElementById('progLive').onclick = function (e) {
    var element = document.getElementById('progLoad');
    var e = e || window.event;
    var x = e.clientX;
    var dx = 0;
    var el = element;
    var offset = e.offsetX || e.layerX;
    var cont = document.getElementById('prog');
    var len = cont.offsetWidth;
    //Player.currentTrack.duration
    var pr = offset / len;
    var seekTime = parseInt(Player.currentTrack.duration * pr)
    uppodSend("player1", 'seek\:' + seekTime)
}

Player.changeVolume = function () {
    uppodSend('player1', 'v' + Player.volume.getValue());
    if (localStorage) {
        localStorage.setItem("volume", Player.volume.getValue());
    }
}

Player.changeVolumeWheel = function (e) {
    e = e || window.event;
    if (e.wheelDelta) {
        var delta = e.wheelDelta / 120;
    }else if (e.detail) {
        var delta = -e.detail / 3;
    }
    if (delta > 0) {
        if (Player.volume.getValue() + delta * 5 < 100) {
            Player.volume.setValue(Player.volume.getValue() + delta * 5)
        }
        else {
            Player.volume.setValue(100);
        }
    } else {
        if (Player.volume.getValue() + delta * 5 > 0) {
            Player.volume.setValue(Player.volume.getValue() + delta * 5)
        }
        else {
            Player.volume.setValue(0);
        }
    }
    //uppodSend('player1', 'v' + Player.volume.getValue());
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.returnValue = false;

}

Player.play = function (url, notSrcoll) {
    if (Player.rand && !Player.firstPlay) {
        Player.firstPlay = true;
        Player.next();
        return 1;
    }
    document.getElementById("preload").style.display = 'none';
    if (App.radio) {
        return 1;
    } else {
        if (Player.init && !App.s) {
            uppodSend("player1", 'stop');
            uppodSend("player1", 'time0');
            document.getElementById("wrapPlayer").innerHTML = '';
            var wrap = document.createElement("div");
            wrap.id = 'player';
            document.getElementById("wrapPlayer").appendChild(wrap);
            Player.init = false;
            clearInterval(App.radioInt);
        }
    };
    clearInterval(App.radioInt);
    clearTimeout(LastFM.scronTimout);
    if (!App.s) {
        App.s = setInterval(Player.q, 1000);
    }
    var url = url || Player.currentTrack.url;
    document.getElementById('audio').style.display = 'block';
    if (App.MT) {
        LastFM.artistName = Player.currentTrack.artist.replace("&#39;", "'");
        LastFM.trackName = Player.currentTrack.title.replace("&#39;", "'");

    }else {
        LastFM.trackName = LastFM.tracks[Player.currentNumber].name;
        LastFM.artistName = LastFM.tracks[Player.currentNumber].artist.name;
    }
    document.getElementById('titleTrack').innerHTML = LastFM.artistName + ' - ' + LastFM.trackName + "<span id='eq'><img src='http:/\/vk.hart-flamov.ru/JS/VK/img/eq.gif'></span>";
    VK.callMethod('setTitle', Player.currentTrack.artist + ' - ' + Player.currentTrack.title);
    document.getElementById("textTrack").enabled = false;
    document.getElementById('playButton').style.backgroundImage = 'url(http://vk.hart-flamov.ru/JS/VK/img/pause.png)';
    for (var i = 0; i < Player.playlist.length; i++) {
        if (Player.playlist[i]) {
            Player.playlist[i].div.style.color = 'black';
        }
    }
    Player.currentTrack.div.style.color = '#00A3EF';

    /*var scr = document.createElement('script');
    scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=library.addTrack&artist=' + LastFM.artistName + '&track=' + Player.currentTrack.title + '&api_key=809dffc5f629c1d4871323f01379bc0d&api_sig=' +api_sig + '&sk='+LastFM.user.sk+'&callback=LastFM.responceAddTrack&format=json';*/
    //document.body.appendChild(scr);

    var time = Math.round((new Date()).getTime() / 1000);
    var api_sig = hex_md5("api_key809dffc5f629c1d4871323f01379bc0d" + "artist" + LastFM.artistName + "methodtrack.updateNowPlaying" + "sk" + LastFM.user.sk + 'timestamp' + time + "track" + LastFM.trackName + "e69db535e502129eb7473f0052204099");
    var post = 'method=track.updateNowPlaying&artist=' + LastFM.artistName + '&timestamp=' + time + '&track=' + LastFM.trackName + '&api_key=809dffc5f629c1d4871323f01379bc0d&api_sig=' + api_sig + '&sk=' + LastFM.user.sk;

    if (Player.init) {
        uppodSend("player1", 'file\:' + url);
        uppodSend("player1", 'play');
        var volume = document.getElementById('volume');
        var valueVolume = document.getElementById('valueVolume');
        /*var curVolume = uppodGet("player1", 'getv');
        valueVolume.style.height = volume.offsetHeight * (curVolume / 100) + 'px';*/
        LastFM.currentTrack = Player.currentTrack;
        LastFM.scronTimout = setTimeout(LastFM.scrooble, 25000);

        var url = 'http:' + '//ws.audioscrobbler.com/2.0/';
        CROSS.XSS.post(url, post);
        if (App.MT) {
            document.getElementById("find").value = LastFM.artistName;
        }
        if (App.MT) {
            var scr = document.createElement('script');
            scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + LastFM.artistName + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&callback=LastFM.responceArtistMT&lang=ru';
            document.body.appendChild(scr);
        }
        if (notSrcoll){ return 1 }
        cont = document.getElementById('playlist');
        if (Player.currentNumber < 10) {
            var h = 0;
        } else {
            var h = Player.playlist[Player.currentNumber].div.offsetTop - 65;
        }
        //cont.scrollTop = h - 27;
        function anim() {
            cont.scrollTop += anim.step;
            anim.i++;
            if (anim.i == anim.steps) {
                clearInterval(anim.int)
            }
        }
        anim.h = h - 45;
        anim.steps = 8;
        anim.i = 0;
        anim.step = (h - cont.scrollTop) / anim.steps;
        anim.int = setInterval(anim, 50);
        return 1;
    }
    var flashvars = { st: "audio53-1229.txt", file: url, uid: "player1" };
    var params = { bgcolor: "#ffffff", allowFullScreen: "true", allowScriptAccess: "always" };
    var attributes = { id: "player1", name: "player" };
    swfobject.embedSWF("uppod.swf", "player", "0", "0", "10.0.0", false, flashvars, params, attributes);
    var url = 'http:' + '//ws.audioscrobbler.com/2.0/';
    LastFM.currentTrack = Player.currentTrack;
    LastFM.scronTimout = setTimeout(LastFM.scrooble, 25000);
    CROSS.XSS.post(url, post);
    if (App.MT) {
        var scr = document.createElement('script');
        scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + LastFM.artistName + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&callback=LastFM.responceArtistMT&lang=ru';
        document.body.appendChild(scr);
    }
    if (App.MT) {
        document.getElementById("find").value = LastFM.artistName;
    }
    if (notSrcoll){ return 1 }
    cont = document.getElementById('playlist');
    if (Player.currentNumber < 10) {
        var h = 0;
    } else {
        var h = Player.playlist[Player.currentNumber].div.offsetTop - 65;
    }
    //cont.scrollTop = h - 27;
    function anim() {
        cont.scrollTop += anim.step;
        anim.i++;
        if (anim.i == anim.steps) {
            clearInterval(anim.int)
        }
    }
    anim.h = h - 45;
    anim.steps = 8;
    anim.i = 0;
    anim.step = (h - cont.scrollTop) / anim.steps;
    anim.int = setInterval(anim, 50);

    //document.getElementById("player1").style.display = 'none';
}
Player.stop = document.getElementById("stopButton").onclick = function () {
    uppodStopAll();
    clearTimeout(LastFM.scronTimout);
    clearInterval(App.s)
    App.s = false;
    clearInterval(App.radioInt);
    document.getElementById('playButton').style.backgroundImage = 'url(http://vk.hart-flamov.ru/JS/VK/img/play.png)';
    if (document.getElementById("eq")) {
        document.getElementById("eq").innerHTML = '';
        //document.getElementById("eq").innerHTML = "<img src='http:/\/vk.hart-flamov.ru/JS/VK/img/eq.gif'>";
    }
}


Player.q = function () {
    if (App.radio || !Player.init) { return 1 };
    var fullTime = fullTime || Player.currentTrack.duration || uppodGet("player1", "getimed");
    var currentTime = uppodGet("player1", "getime");
    var fullMin = Math.floor(fullTime / 60);
    var currentMin = Math.floor(currentTime / 60);
    var fullSec = Math.floor(fullTime - fullMin * 60);
    var currentSec = Math.floor(currentTime - currentMin * 60);
    document.getElementById("data").innerHTML = currentMin + ':' + (currentSec.toString().length == 1 ? '0' + currentSec : currentSec) + ' / ' + fullMin + ':' + (fullSec.toString().length == 1 ? '0' + fullSec : fullSec);
    //progress-bar with load and live %
    var cont = document.getElementById('prog');
    var len = cont.offsetWidth;
    var live = document.getElementById('progLive');
    var load = document.getElementById('progLoad');
    var curLoad = uppodGet("player1", 'getprocent') / 100;
    var curLive = currentTime / fullTime;
    load.style.width = len * curLoad + 'px';
    live.style.width = len * curLive + 'px';
    //if (fullTime - currentTime < 1) { Player.next(); return 1; }
}


Player.findSong = function (div) {
    Player.firstPlay = false;
    Player.findSong.div = div;
    for (var i = 0; i < Player.playlist.length; i++) {
        if (Player.playlist[i]) {
            Player.playlist[i].div.style.color = 'black';//color = '#00A3EF';
        }
    }
    VK.api('audio.search', { q: LastFM.artistName + ' ' + LastFM.trackName, auto_complete: 1, sort: 2, count: 8, lyrics: 1 }, function (data) {
        //
        if (data.response && data.response[0] != 0) {
            var fullTime = data.response[1].duration;
            var fullMin = Math.floor(fullTime / 60);
            var fullSec = Math.floor(fullTime - fullMin * 60);
            var time = fullMin + ':' + (fullSec.toString().length == 1 ? '0' + fullSec : fullSec);
            var span = document.createElement('span');
            div.appendChild(span);
            div.span = span;
            span.className = 'duration';
            div.span.innerHTML = time;
            div.className = 'finded';
            div.data = data.response[1];
            div.a.href = data.response[1].url;
            data.response[1].div = div;
            Player.currentTrack = data.response[1];
            div.onclick = (function (track, i) {
                return function () {
                    App.radio = false;
                    Player.currentTrack = track;
                    Player.currentNumber = i;
                    App.MT = true;
                    setTimeout(function () {
                        Player.play(track.url, true);
                    }, 150)
                }
            })(data.response[1], App.ultra.i)
            //Player.playlist.push(data.response[1])
            Player.playlist[App.ultra.i] = data.response[1];
            Player.currentTrack.div.style.color = '#00A3EF';
            var h = Player.currentTrack.div.offsetTop;
            cont = document.getElementById('playlist');
            //cont.scrollTop = h - 27;
            function anim() {
                cont.scrollTop += anim.step;
                anim.i++;
                if (anim.i == anim.steps) {
                    clearInterval(anim.int)
                }
            }
            anim.h = h - 45;
            anim.steps = 8;
            anim.i = 0;
            anim.step = (h - cont.scrollTop) / anim.steps;
            anim.int = setInterval(anim, 50);
        } else if (data.error) {
            //alert(JSON.stringify(data))
            setTimeout(function () { Player.findSong(Player.findSong.div) }, 500)
        } else if (data.response && data.response[0] == 0) {
            Player.findSongWithoutLyrics(div)
        }

    })
}

Player.findSongWithoutLyrics = function (div) {
    Player.firstPlay = false;
    VK.api('audio.search', { q: LastFM.artistName + ' ' + LastFM.trackName, auto_complete: 1, sort: 2, count: 8 }, function (data) {
        //
        if (data.response && data.response[0] != 0) {
            var fullTime = data.response[1].duration;
            var fullMin = Math.floor(fullTime / 60);
            var fullSec = Math.floor(fullTime - fullMin * 60);
            var time = fullMin + ':' + (fullSec.toString().length == 1 ? '0' + fullSec : fullSec);
            var span = document.createElement('span');
            div.appendChild(span);
            div.span = span;
            span.className = 'duration';
            div.span.innerHTML = time;
            div.className = 'finded';
            div.data = data.response[1];
            data.response[1].div = div;
            Player.currentTrack = data.response[1];
            div.a.href = data.response[1].url;
            div.onclick = (function (track, i) {
                return function () {
                    App.radio = false;
                    Player.currentTrack = track;
                    Player.currentNumber = i;
                    Player.play(track.url, true);

                }
            })(data.response[1], App.ultra.i)
            //Player.playlist.push(data.response[1])
            Player.playlist[App.ultra.i] = data.response[1];
            Player.currentTrack.div.style.color = '#00A3EF';
            var h = Player.currentTrack.div.offsetTop;
            cont = document.getElementById('playlist');
            //cont.scrollTop = h - 27;
            function anim() {
                cont.scrollTop += anim.step;
                anim.i++;
                if (anim.i == anim.steps) {
                    clearInterval(anim.int)
                }
            }
            anim.h = h - 45;
            anim.steps = 8;
            anim.i = 0;
            anim.step = (h - cont.scrollTop) / anim.steps;
            anim.int = setInterval(anim, 50);
        } else if (data.error) {
            //alert(JSON.stringify(data))
            setTimeout(function () { Player.Player.findSongWithoutLyrics(div) }, 1500)
        }
    })
}

Player.firstFind = function () {
    Player.firstPlay = false;
    if (App.radio) {
        uppodSend("player1", 'stop');
        uppodSend("player1", 'time0');
        App.radio = false;
        clearInterval(App.radioInt);
        App.ultra.currentTrack = '';
        //App.s = setInterval(Player.q, 1000);
    }
    App.clearVkFindStack();
    App.vkFindStack = [];
    App.vkFind = true;
    Player.currentNumber = 0;
    Player.playlist = [];
    Player.preFind = true;
    VK.api('audio.search', { q: LastFM.artistName, sort: 2, count: 200, lyrics: 1 }, function q(data) {
        //
        if (data.response && data.response[0] != 0 && App.vkFind == true) {
            function q(i) {
                var k = 0;
                for (var j = 0; j < data.response.length; j++) {
                    if (LastFM.artistName == data.response[j].artist && LastFM.tracks[i].name == data.response[j].title) {
                        var k = j;
                        break;
                    }
                }
                if (k == 0){ return false }
                var fullTime = data.response[k].duration;
                var fullMin = Math.floor(fullTime / 60);
                var fullSec = Math.floor(fullTime - fullMin * 60);
                var time = fullMin + ':' + (fullSec.toString().length == 1 ? '0' + fullSec : fullSec);
                var span = document.createElement('span');
                LastFM.tracks[i].span.innerHTML = time;
                LastFM.tracks[i].div.className = 'finded';
                LastFM.tracks[i].div.a.href = data.response[k].url;
                LastFM.tracks[i].div.data = data.response[k];
                data.response[k].div = LastFM.tracks[i].div;
                LastFM.tracks[i].find = true;
                LastFM.tracks[i].div.onclick = (function (track, i) {
                    return function () {
                        Player.currentTrack = track;
                        Player.currentNumber = i;
                        Player.play(track.url, true);
                    }
                })(data.response[k], i)
                //Player.playlist.push(data.response[1])
                Player.playlist[i] = data.response[k];
                if (i == 0) {
                    setTimeout((function (i, k) {
                        return function () {
                            Player.currentTrack = data.response[k];
                            Player.currentNumber = i;
                            Player.play(data.response[k].url)
                        }
                    })(i, k), 250)

                };
                return true;
            }
            for (var i = 0; i < LastFM.tracks.length; i++) {
                setTimeout((function (i) {
                    return function () {
                        q(i);
                    }
                })(i), i * 5)
            }
            setTimeout(Player.findTrack, 1000);
        } else if (data.error) {
            //alert(JSON.stringify(data))
            //App.vkFindStack.push(setTimeout(function () { q(i) }, 500));
        } else if (data.response && data.response[0] == 0) {
            //Player.findTrackWithoutLyrics(i)
            setTimeout(Player.findTrack, 1000);
        }
    })

}

Player.findTrack = function () {
    if (App.radio) {
        uppodSend("player1", 'stop');
        uppodSend("player1", 'time0');
        App.radio = false;
        clearInterval(App.radioInt);
        App.ultra.currentTrack = '';
        //App.s = setInterval(Player.q, 1000);
    }
    App.clearVkFindStack();
    App.vkFindStack = [];
    App.vkFind = true;
    Player.currentNumber = 0;
    if (!Player.preFind) {
        Player.playlist = [];
    }
    var l = 0;
    for (var i = 0; i < LastFM.tracks.length; i++) {
        if (LastFM.tracks[i].find) { continue };
        l++;
        App.vkFindStack.push(setTimeout((function (i) {
            return function q() {
                if (!LastFM.tracks[i] || !LastFM.tracks[i].name || App.vkFind == false) { return 1 }
                VK.api('audio.search', { q: LastFM.artistName + ' ' + LastFM.tracks[i].name, sort: 2, count: 25, lyrics: 1 }, function (data) {
                    //
                    if (data.response && data.response[0] != 0 && App.vkFind == true) {
                        for (var j = 0; j < data.response.length; j++) {
                            if (LastFM.artistName == data.response[j].artist && LastFM.tracks[i].name == data.response[j].title) {
                                var k = j;
                                break;
                            }
                        }
                        var k = k || 1;
                        var fullTime = data.response[k].duration;
                        var fullMin = Math.floor(fullTime / 60);
                        var fullSec = Math.floor(fullTime - fullMin * 60);
                        var time = fullMin + ':' + (fullSec.toString().length == 1 ? '0' + fullSec : fullSec);
                        var span = document.createElement('span');
                        LastFM.tracks[i].span.innerHTML = time;
                        LastFM.tracks[i].div.className = 'finded';
                        LastFM.tracks[i].div.data = data.response[k];
                        LastFM.tracks[i].div.a.href = data.response[k].url;
                        data.response[k].div = LastFM.tracks[i].div;

                        LastFM.tracks[i].div.onclick = (function (track, i) {
                            return function () {
                                Player.currentTrack = track;
                                Player.currentNumber = i;
                                Player.play(track.url, true);
                            }
                        })(data.response[k], i)
                        //Player.playlist.push(data.response[1])
                        Player.playlist[i] = data.response[k];
                        if (i == 0) {
                            Player.currentTrack = data.response[k];
                            Player.currentNumber = i;
                            Player.play(data.response[k].url)
                        };
                    } else if (data.error) {
                        //alert(JSON.stringify(data))
                        App.vkFindStack.push(setTimeout(function () { q(i) }, 500));
                    } else if (data.response && data.response[0] == 0) {
                        Player.findTrackWithoutLyrics(i)
                    }
                })
            }
        })(i), 500 * l))
    }
}

Player.findTrackByTag = function () {
    Player.firstPlay = false;
    if (App.radio) {
        uppodSend("player1", 'stop');
        uppodSend("player1", 'time0');
        App.radio = false;
        clearInterval(App.radioInt);
        App.ultra.currentTrack = '';
        //App.s = setInterval(Player.q, 1000);
    }
    App.clearVkFindStack()

    App.vkFindStack = [];
    App.vkFind = true;
    Player.currentNumber = 0;
    Player.playlist = [];
    for (var i = 0; i < LastFM.tracks.length; i++) {
        App.vkFindStack.push(setTimeout((function (i) {
            return function q() {
                if (!LastFM.tracks[i] || !LastFM.tracks[i].name || App.vkFind == false) { return 1 }
                VK.api('audio.search', { q: LastFM.tracks[i].artist.name + ' ' + LastFM.tracks[i].name, sort: 2, count: 8, lyrics: 1 }, function (data) {
                    //
                    if (i > LastFM.tracks.length) { return 1 };
                    if (data.response && data.response[0] != 0 && App.vkFind == true) {
                        for (var j = 0; j < data.response.length; j++) {
                            if (LastFM.tracks[i].artist.name == data.response[j].artist && LastFM.tracks[i].name == data.response[j].title) {
                                var k = j;
                                break;
                            }
                        }
                        var k = k || 1;
                        var fullTime = data.response[k].duration;
                        var fullMin = Math.floor(fullTime / 60);
                        var fullSec = Math.floor(fullTime - fullMin * 60);
                        var time = fullMin + ':' + (fullSec.toString().length == 1 ? '0' + fullSec : fullSec);
                        var span = document.createElement('span');
                        LastFM.tracks[i].span.innerHTML = time;
                        LastFM.tracks[i].div.className = 'finded';
                        LastFM.tracks[i].div.data = data.response[k];
                        data.response[k].div = LastFM.tracks[i].div;
                        LastFM.tracks[i].div.a.href = data.response[k].url;
                        LastFM.tracks[i].div.onclick = (function (track, i) {
                            return function () {
                                Player.currentTrack = track;
                                Player.currentNumber = i;
                                Player.play(track.url, true);
                            }
                        })(data.response[k], i)
                        //Player.playlist.push(data.response[1])
                        Player.playlist[i] = data.response[k];
                        if (i == 0) {
                            Player.currentTrack = data.response[k];
                            Player.currentNumber = i;
                            Player.play(data.response[k].url)
                        }
                    } else if (data.error) {
                        //alert(JSON.stringify(data))
                        App.vkFindStack.push(setTimeout(function () { q(i) }, 2000));
                    } else if (data.response && data.response[0] == 0) {
                        Player.findTrackByTagWithoutLyrics(i)
                    }
                })
            }
        })(i), 800 * i))
    }

}

Player.findTrackByTagWithoutLyrics = function (i) {
    App.vkFindStack.push(setTimeout((function () {
        return function q2() {
            if (!arguments.callee.col) { arguments.callee.col = 0 }
            arguments.callee.col++;
            if (arguments.callee.col > 3) { return 1 };
            if (!LastFM.tracks[i] || !LastFM.tracks[i].name || App.vkFind == false) { return 1 }
            VK.api('audio.search', { q: LastFM.tracks[i].artist_name + ' ' + LastFM.tracks[i].name, sort: 2, count: 8 }, function (data) {
                //
                if (data.response && data.response[0] != 0) {
                    for (var j = 0; j < data.response.length; j++) {
                        if (LastFM.artistName == data.response[j].artist && LastFM.tracks[i].name == data.response[j].title) {
                            var k = j;
                            break;
                        }
                    }
                    var k = k || 1;
                    var fullTime = data.response[k].duration;
                    var fullMin = Math.floor(fullTime / 60);
                    var fullSec = Math.floor(fullTime - fullMin * 60);
                    var time = fullMin + ':' + (fullSec.toString().length == 1 ? '0' + fullSec : fullSec);
                    var span = document.createElement('span');
                    LastFM.tracks[i].span.innerHTML = time;
                    LastFM.tracks[i].div.className = 'finded';
                    LastFM.tracks[i].div.data = data.response[k];
                    LastFM.tracks[i].div.a.href = data.response[k].url;
                    data.response[k].div = LastFM.tracks[i].div;
                    LastFM.tracks[i].div.onclick = (function (track, i) {
                        return function () {
                            Player.currentTrack = track;
                            Player.currentNumber = i;
                            Player.play(track.url, true);
                        }
                    })(data.response[k], i)
                    //Player.playlist.push(data.response[1])
                    Player.playlist[i] = data.response[k];
                } else if (data.error) {
                    //alert(JSON.stringify(data))

                    App.vkFindStack.push(setTimeout(function () { q2(i) }, 500));
                    //setTimeout(function () { Player.findSong(Player.findSong.div) }, 500)
                }
            })
        }
    })(), 500)
    )
}


Player.findTrackWithoutLyrics = function (i) {
    App.vkFindStack.push(setTimeout((function () {
        return function q2() {
            if (!arguments.callee.col) { arguments.callee.col = 0 }
            arguments.callee.col++;
            if (arguments.callee.col > 3) { return 1 };
            if (!LastFM.tracks[i] || !LastFM.tracks[i].name || App.vkFind == false) { return 1 }
            VK.api('audio.search', { q: LastFM.artistName + ' ' + LastFM.tracks[i].name, sort: 2, count: 8 }, function (data) {
                //
                if (data.response && data.response[0] != 0) {
                    for (var j = 0; j < data.response.length; j++) {
                        if (LastFM.artistName == data.response[j].artist && LastFM.tracks[i].name == data.response[j].title) {
                            var k = j;
                            break;
                        }
                    }
                    var k = k || 1;
                    var fullTime = data.response[k].duration;
                    var fullMin = Math.floor(fullTime / 60);
                    var fullSec = Math.floor(fullTime - fullMin * 60);
                    var time = fullMin + ':' + (fullSec.toString().length == 1 ? '0' + fullSec : fullSec);
                    var span = document.createElement('span');
                    LastFM.tracks[i].span.innerHTML = time;
                    LastFM.tracks[i].div.className = 'finded';
                    LastFM.tracks[i].div.data = data.response[k];
                    LastFM.tracks[i].div.a.href = data.response[k].url;
                    data.response[k].div = LastFM.tracks[i].div;
                    LastFM.tracks[i].div.onclick = (function (track, i) {
                        return function () {
                            Player.currentTrack = track;
                            Player.currentNumber = i;
                            Player.play(track.url, true);
                        }
                    })(data.response[k], i)
                    //Player.playlist.push(data.response[1])
                    Player.playlist[i] = data.response[k];
                } else if (data.error) {
                    //alert(JSON.stringify(data))

                    App.vkFindStack.push(setTimeout(function () { q2(i) }, 500));
                    //setTimeout(function () { Player.findSong(Player.findSong.div) }, 500)
                }
            })
        }
    })(), 500)
    )
}

Player.changeAlbum = function (album) {
    //alert(album.data.name);
    setTimeout(function () {
        var scr = document.createElement('script');
        scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=album.getInfo&artist=' + LastFM.q + '&album=' + album.data.name + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&callback=LastFM.responceTracks&lang=ru';
        document.body.appendChild(scr)
    }, 100)
}

LastFM.responceAddTrack = function (data) {
    //  alert(JSON.stringify(data))
}

LastFM.findTag = function () {
    App.MT = false;
    App.radio = false;
    if (Player.init) {
        uppodSend("player1", 'stop');
    }
    clearInterval(App.radioInt);
    setTimeout(function () {
        var scr = document.createElement('script');
        scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=tag.getInfo&tag=' + LastFM.currentTag + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&callback=LastFM.responceTagInfo&lang=ru';
        document.body.appendChild(scr)
    }, 170)

    setTimeout(function () {
        var scr = document.createElement('script');
        scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=tag.getTopArtists&tag=' + LastFM.currentTag + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&callback=LastFM.responceTagArtist&lang=ru&limit=5';
        document.body.appendChild(scr)
    }, 270)

    setTimeout(function () {
        var scr = document.createElement('script');
        scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=tag.getSimilar&tag=' + LastFM.currentTag + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&callback=LastFM.responceTagSim&lang=ru&limit=5';
        document.body.appendChild(scr)
    }, 370)

    setTimeout(function () {
        var scr = document.createElement('script');
        scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=tag.getTopAlbums&tag=' + LastFM.currentTag + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&callback=LastFM.responceTagAlbums&lang=ru&limit=50';
        document.body.appendChild(scr)
    }, 470)

    setTimeout(function () {
        var scr = document.createElement('script');
        scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=tag.getTopTracks&tag=' + LastFM.currentTag + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&callback=LastFM.responceTagTracks&lang=ru&limit=50';
        document.body.appendChild(scr)
    }, 770)
}

LastFM.responceTagInfo = function (data) {
    if (!data.error) {
        if (data.tag.name) { LastFM.tagName = data.tag.name }
        document.getElementById("title").innerHTML = data.tag.name + '<a title="Перейти на страницу тэга на Last.fm" target="_blank" href="' + data.tag.url + '"> >> </a>';
        var div = document.getElementById('info');
        div.innerHTML = '';
        div.style.display = 'block';
        var bio = document.createElement('div');
        if (data.tag.wiki && data.tag.wiki.summary) {
            bio.innerHTML = data.tag.wiki.summary;
        } else {
            bio.innerHTML = "Информации не найдено";
        }
        div.appendChild(bio);
    }
}

LastFM.responceTagArtist = function (data) {
    var sim = document.getElementById('similar');
    sim.innerHTML = 'Лучшие исполнители : ';
    sim.style.display = 'block';
    if (data.topartists && data.topartists.artist) {
        var simArt = data.topartists.artist;
        for (var i = 0; i < simArt.length; i++) {
            var li = document.createElement('span');
            li.innerHTML = simArt[i].name;
            li.onclick = function () {
                document.getElementById('find').value = this.innerHTML;
                App.radio = false;
                App.ultra.currentTrack = '';
                App.suche(this.innerHTML);
            }
            sim.appendChild(li)
        }
    } else {
        sim.innerHTML = 'Исполнителей не найдено';
    }
}

LastFM.responceTagSim = function (data) {
    var tags = document.getElementById('tags');
    tags.innerHTML = 'Тэги : ';
    tags.style.display = 'block';
    if (data.similartags && data.similartags.tag) {
        var tag = data.similartags.tag;
        for (var i = 0; i < tag.length; i++) {
            var li = document.createElement('span');
            li.innerHTML = tag[i].name;
            li.onclick = function () {
                /*document.getElementById('find').value = this.innerHTML;
                App.radio = false;
                App.ultra.currentTrack = '';
                App.suche(this.innerHTML);*/
                App.radio = false;
                LastFM.currentTag = this.innerHTML;
                App.ultra.currentTrack = '';
                LastFM.findTag()
            }
            tags.appendChild(li)
        }
    } else {
        tags.innerHTML = 'Тэгов не найдено';
    }
}

LastFM.responceTagAlbums = function (data) {
    //alert(JSON.stringify(data));

    var div = document.getElementById('albums');
    div.innerHTML = '';
    div.style.display = 'block';
    LastFM.albums = data.topalbums.album
    var h4 = document.createElement('h2');
    h4.innerHTML = 'Лучшие песни';
    div.appendChild(h4);

    var bestTracks = document.createElement("div");
    div.appendChild(bestTracks);
    bestTracks.className = 'best'

    var album = document.createElement('div');
    var h4 = document.createElement('h3');
    h4.innerHTML = '25';
    album.appendChild(h4);
    album.className = 'album';
    album.onclick = function () {
        var scr = document.createElement('script');
        scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=tag.getTopTracks&tag=' + LastFM.tagName + '&api_key=809dffc5f629c1d4871323f01379bc0d&limit=25&format=json&callback=LastFM.responceTagTracks&lang=ru';
        //scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=artist.getTopAlbums&artist=' + LastFM.artistName + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&callback=LastFM.responceAlbums&lang=ru';
        document.body.appendChild(scr)
    }
    bestTracks.appendChild(album);

    var album = document.createElement('div');
    var h4 = document.createElement('h3');
    h4.innerHTML = '50';
    album.appendChild(h4);
    album.className = 'album';
    album.onclick = function () {
        var scr = document.createElement('script');
        scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=tag.getTopTracks&tag=' + LastFM.tagName + '&api_key=809dffc5f629c1d4871323f01379bc0d&limit=50&format=json&callback=LastFM.responceTagTracks&lang=ru';
        //scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=artist.getTopAlbums&artist=' + LastFM.artistName + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&callback=LastFM.responceAlbums&lang=ru';
        document.body.appendChild(scr)
    }
    bestTracks.appendChild(album);

    var album = document.createElement('div');
    var h4 = document.createElement('h3');
    h4.innerHTML = '100';
    album.appendChild(h4);
    album.className = 'album';
    album.onclick = function () {
        var scr = document.createElement('script');
        scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=tag.getTopTracks&tag=' + LastFM.tagName + '&api_key=809dffc5f629c1d4871323f01379bc0d&limit=100&format=json&callback=LastFM.responceTagTracks&lang=ru';
        //scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=artist.getTopAlbums&artist=' + LastFM.artistName + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&callback=LastFM.responceAlbums&lang=ru';
        document.body.appendChild(scr)
    }
    bestTracks.appendChild(album);


    var album = document.createElement('div');
    var h4 = document.createElement('h2');
    h4.innerHTML = '50 лучших песен';
    album.appendChild(h4);
    album.className = 'album';
    album.onclick = function () {
        var scr = document.createElement('script');
        scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=tag.getTopTracks&tag=' + LastFM.tagName + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&callback=LastFM.responceTagTracks&lang=ru';
        //scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=artist.getTopAlbums&artist=' + LastFM.artistName + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&callback=LastFM.responceAlbums&lang=ru';
        document.body.appendChild(scr)
    }
    div.appendChild(album);


    var titleAlbum = document.createElement('h3');
    titleAlbum.innerHTML = 'Альбомы';
    div.appendChild(titleAlbum);
    if (data.topalbums && data.topalbums.album) {
        for (var i = 0; i < data.topalbums.album.length; i++) {
            var album = document.createElement('div');
            var h4 = document.createElement('h4');
            h4.innerHTML = data.topalbums.album[i].artist.name + ' - ' + data.topalbums.album[i].name;
            album.appendChild(h4);
            album.className = 'album';
            album.data = data.topalbums.album[i];
            album.onclick = function () {
                LastFM.artistName = this.data.artist.name
                Player.changeAlbum(this);

            }
            var cover = document.createElement("img");
            cover.src = data.topalbums.album[i].image[2]['#text'];
            album.appendChild(cover);
            div.appendChild(album)
        }
    }
    else {
        var album = document.createElement('div');
        album.innerHTML = 'Альбомов не найдено';
        div.appendChild(album)
    }
}

LastFM.responceTagTracks = function (data) {
    if (data.error) {
        App.showPopup('Error')
    }
    LastFM.tracks = data.toptracks.track;
    var div = document.getElementById('playlist');
    div.innerHTML = '';
    Player.playlist = [];
    div.scrollTop = 0;
    div.style.display = 'block';
    var titleAlbum = document.createElement('h3');
    titleAlbum.className = 'titleAlbum';
    titleAlbum.innerHTML = 'Лучшие песни';
    div.appendChild(titleAlbum);

    LastFM.titleAlbum = 'best';
    if (LastFM.tracks && LastFM.tracks[0]) {
        for (var i = 0; i < LastFM.tracks.length; i++) {
            //LastFM.tracks[i].name = LastFM.tracks[i].artist.name;
            var track = document.createElement('div');
            var fullTime = LastFM.tracks[i].duration;
            var fullMin = Math.floor(fullTime / 60);
            var fullSec = Math.floor(fullTime - fullMin * 60);
            var time = fullMin + ':' + (fullSec.toString().length == 1 ? '0' + fullSec : fullSec);
            var span = document.createElement('span');
            span.innerHTML = time;
            span.className = 'duration';
            track.appendChild(span)
            div.appendChild(track);
            track.innerHTML = '<a id="' + 'aL' + (i + 1) + '" class="noA" onclick="return false">' + (i + 1) + '</a>. ' + LastFM.tracks[i].artist.name + ' - ' + LastFM.tracks[i].name;
            track.a = document.getElementById('aL' + (i + 1));

            LastFM.tracks[i].div = track;
            LastFM.tracks[i].span = span;

        }
        Player.findTrackByTag()
    } else {
        var track = document.createElement('div')
        track.innerHTML = 'Аудиозаписей не найдено'
        div.appendChild(track)
    };
}




LastFM.responceTopTracks = function (data) {
    document.getElementById("preload").style.display = 'none';
    LastFM.tracks = data.toptracks.track;
    LastFM.album = '';
    var div = document.getElementById('playlist');
    div.innerHTML = '';
    Player.playlist = [];
    div.scrollTop = 0;
    div.style.display = 'block';
    var titleAlbum = document.createElement('h3');
    titleAlbum.className = 'titleAlbum';
    titleAlbum.innerHTML = LastFM.tracks.length + ' лучших песен';
    div.appendChild(titleAlbum);

    LastFM.titleAlbum = 'best';
    if (LastFM.tracks && LastFM.tracks[0]) {
        for (var i = 0; i < LastFM.tracks.length; i++) {
            var track = document.createElement('div');
            var fullTime = LastFM.tracks[i].duration;
            var fullMin = Math.floor(fullTime / 60);
            var fullSec = Math.floor(fullTime - fullMin * 60);
            var time = fullMin + ':' + (fullSec.toString().length == 1 ? '0' + fullSec : fullSec);
            var span = document.createElement('span');
            span.innerHTML = time;
            span.className = 'duration';


            div.appendChild(track);

            track.innerHTML = '<a id="' + 'aL' + (i + 1) + '" class="noA" onclick="return false">' + (i + 1) + '</a>. ' + LastFM.tracks[i].name;
            track.a = document.getElementById('aL' + (i + 1));


            track.appendChild(span)
            //track.innerHTML = (i + 1) + '. ' + LastFM.tracks[i].name;

            LastFM.tracks[i].div = track;
            LastFM.tracks[i].span = span;

        }
        App.clearVkFindStack();
        setTimeout(Player.firstFind, 2000)

        //Player.findTrack()
    } else {
        var track = document.createElement('div')
        track.innerHTML = 'Аудиозаписей не найдено'
        div.appendChild(track)
    }
}

LastFM.responceArtistMT = function (data) {
    if (!data.error) {
        document.getElementById("title").innerHTML = data.artist.name + '<a title="Перейти на страницу исполнителя на Last.fm" target="_blank" href="' + data.artist.url + '"> >> </a>';
        if (data.artist.name) {
            LastFM.q = encodeURIComponent(data.artist.name);
            LastFM.artistName = data.artist.name;
            document.getElementById("find").value = LastFM.artistName;
        }
        var div = document.getElementById('info');
        div.innerHTML = '';
        div.style.display = 'block';
        if (data.artist && data.artist.image && data.artist.image[2]['#text']) {
            var img = document.createElement('img');
            img.src = data.artist.image[2]['#text'];
            div.appendChild(img);
        }
        var bio = document.createElement('div');
        if (data.artist && data.artist.bio && data.artist.bio.summary) {
            bio.innerHTML = data.artist.bio.summary;
        } else {
            bio.innerHTML = 'Информации об исполнителе или группе не найдено. Возможно некорректно указаны тэги'
        }
        div.appendChild(bio);

        var sim = document.getElementById('similar');
        sim.innerHTML = 'Похожие исполнители : ';
        sim.style.display = 'block';
        if (data.artist.similar && data.artist.similar.artist) {
            var simArt = data.artist.similar.artist;
            for (var i = 0; i < simArt.length; i++) {
                var li = document.createElement('span');
                li.innerHTML = simArt[i].name;
                li.onclick = function () {
                    document.getElementById('find').value = this.innerHTML;
                    App.radio = false;
                    App.ultra.currentTrack = '';
                    App.suche(this.innerHTML);
                }
                sim.appendChild(li)
            }
        } else {
            sim.innerHTML = 'Похожих исполнителей не найдено';
        }

        var tags = document.getElementById('tags');
        tags.innerHTML = 'Тэги : ';
        tags.style.display = 'block';
        if (data.artist.tags && data.artist.tags.tag) {
            var tag = data.artist.tags.tag;
            for (var i = 0; i < tag.length; i++) {
                var li = document.createElement('span');
                li.innerHTML = tag[i].name;
                li.onclick = function () {
                    /*document.getElementById('find').value = this.innerHTML;
                    App.radio = false;
                    App.ultra.currentTrack = '';
                    App.suche(this.innerHTML);*/
                    App.radio = false;
                    LastFM.currentTag = this.innerHTML;
                    App.ultra.currentTrack = '';
                    LastFM.findTag()
                }
                tags.appendChild(li)
            }
        } else {
            tags.innerHTML = 'Тэгов не найдено';
        }

        setTimeout(function () {
            var scr = document.createElement('script');
            scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=artist.getTopAlbums&artist=' + LastFM.q + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&callback=LastFM.responceAlbums&lang=ru';
            document.body.appendChild(scr)
        }, 170)

    }
}
LastFM.responceArtist = function (data) {
    if (!data.error) {
        document.getElementById("title").innerHTML = data.artist.name + '<a title="Перейти на страницу исполнителя на Last.fm" target="_blank" href="' + data.artist.url + '"> >> </a>';
        if (data.artist.name) {
            LastFM.q = data.artist.name;
            LastFM.artistName = data.artist.name;
            LastFM.artistBio = data.artist.bio.summary;
            VK.callMethod("setLocation", "artist=" + encodeURIComponent(LastFM.artistName));
            document.getElementById("find").value = LastFM.artistName;
        }


        var s = document.createElement("img");
        s.src = 'http://vk.hart-flamov.ru/JS/VK/img/sendArtist.png';
        s.title = 'Отправить исполнителя на стену другу';
        s.id = 'toWall'
        s.onmouseover = function () {
            this.src = 'http://vk.hart-flamov.ru/JS/VK/img/sendArtist2.png';
        }
        s.onmouseout = function () {
            this.src = 'http://vk.hart-flamov.ru/JS/VK/img/sendArtist.png';
        }
        s.onclick = App.sendArtistToWall;
        document.getElementById("title").appendChild(s);

        var div = document.getElementById('info');
        div.innerHTML = '';
        div.style.display = 'block';
        if (data.artist && data.artist.image && data.artist.image[2]['#text']) {
            var img = document.createElement('img');
            img.src = data.artist.image[2]['#text'];
            div.appendChild(img);
        }
        var bio = document.createElement('div');
        bio.innerHTML = data.artist.bio.summary;
        div.appendChild(bio)

        var sim = document.getElementById('similar');
        sim.innerHTML = 'Похожие исполнители : ';
        sim.style.display = 'block';
        if (data.artist.similar && data.artist.similar.artist) {
            var simArt = data.artist.similar.artist;
            for (var i = 0; i < simArt.length; i++) {
                var li = document.createElement('span');
                li.innerHTML = simArt[i].name;
                li.onclick = function () {
                    document.getElementById('find').value = this.innerHTML;
                    App.radio = false;
                    App.ultra.currentTrack = '';
                    App.suche(this.innerHTML);
                }
                sim.appendChild(li)
            }
        } else {
            sim.innerHTML = 'Похожих исполнителей не найдено';
        }

        var tags = document.getElementById('tags');
        tags.innerHTML = 'Тэги : ';
        tags.style.display = 'block';
        if (data.artist.tags && data.artist.tags.tag) {
            var tag = data.artist.tags.tag;
            for (var i = 0; i < tag.length; i++) {
                var li = document.createElement('span');
                li.innerHTML = tag[i].name;
                li.onclick = function () {
                    /*document.getElementById('find').value = this.innerHTML;
                    App.radio = false;
                    App.ultra.currentTrack = '';
                    App.suche(this.innerHTML);*/
                    App.radio = false;
                    LastFM.currentTag = this.innerHTML;
                    App.ultra.currentTrack = '';
                    LastFM.findTag()
                }
                tags.appendChild(li)
            }
        } else {
            tags.innerHTML = 'Тэгов не найдено';
        }
        setTimeout(function () {
            var scr = document.createElement('script');
            scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=artist.getTopTracks&artist=' + encodeURIComponent(LastFM.q) + '&api_key=809dffc5f629c1d4871323f01379bc0d&limit=50&format=json&callback=LastFM.responceTopTracks&lang=ru';
            //scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=artist.getTopAlbums&artist=' + LastFM.artistName + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&callback=LastFM.responceAlbums&lang=ru';
            document.body.appendChild(scr)
        }, 500)
        setTimeout(function () {
            var scr = document.createElement('script');
            scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=artist.getTopAlbums&artist=' + encodeURIComponent(LastFM.q) + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&callback=LastFM.responceAlbums&lang=ru';
            document.body.appendChild(scr)
        }, 1000)
        if (!App.lastGrp){ App.lastGrp = [] };

        for (var k = 0; k < App.lastGrp.length; k++) {
            if (LastFM.artistName == App.lastGrp[k]) {
                for (var k2 = k; k2 < App.lastGrp.length - 1; k2++) {
                    App.lastGrp[k2] = App.lastGrp[k2 + 1];
                }
            }
            if (typeof (App.lastGrp[k]) != "string") {
                App.lastGrp[k] = "";
            }
        }
        App.lastGrp.unshift(decodeURIComponent(LastFM.artistName));
        App.lastGrp.length = 25;

        if (localStorage) {
            localStorage.setItem("lastGrp", App.lastGrp);
        }
    } else {
        App.showPopup('Такого исполнителя не найдено');
        document.getElementById("preload").style.display = 'none';
    }
}




LastFM.responceAlbums = function (data) {

    var div = document.getElementById('albums');
    div.innerHTML = '';
    div.style.display = 'block';
    LastFM.albums = data.topalbums.album
    var h4 = document.createElement('h2');
    h4.innerHTML = 'Лучшие песни';
    div.appendChild(h4);

    var bestTracks = document.createElement("div");
    div.appendChild(bestTracks);
    bestTracks.className = 'best'

    var album = document.createElement('div');
    var h4 = document.createElement('h3');
    h4.innerHTML = '25';
    album.appendChild(h4);
    album.className = 'album';
    album.onclick = function () {
        var scr = document.createElement('script');
        scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=artist.getTopTracks&artist=' + LastFM.q + '&api_key=809dffc5f629c1d4871323f01379bc0d&limit=25&format=json&callback=LastFM.responceTopTracks&lang=ru';
        //scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=artist.getTopAlbums&artist=' + LastFM.artistName + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&callback=LastFM.responceAlbums&lang=ru';
        document.body.appendChild(scr)
    }
    bestTracks.appendChild(album);

    var album = document.createElement('div');
    var h4 = document.createElement('h3');
    h4.innerHTML = '50';
    album.appendChild(h4);
    album.className = 'album';
    album.onclick = function () {
        var scr = document.createElement('script');
        scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=artist.getTopTracks&artist=' + LastFM.q + '&api_key=809dffc5f629c1d4871323f01379bc0d&limit=50&format=json&callback=LastFM.responceTopTracks&lang=ru';
        //scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=artist.getTopAlbums&artist=' + LastFM.artistName + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&callback=LastFM.responceAlbums&lang=ru';
        document.body.appendChild(scr)
    }
    bestTracks.appendChild(album);

    var album = document.createElement('div');
    var h4 = document.createElement('h3');
    h4.innerHTML = '100';
    album.appendChild(h4);
    album.className = 'album';
    album.onclick = function () {
        var scr = document.createElement('script');
        scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=artist.getTopTracks&artist=' + LastFM.q + '&api_key=809dffc5f629c1d4871323f01379bc0d&limit=100&format=json&callback=LastFM.responceTopTracks&lang=ru';
        //scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=artist.getTopAlbums&artist=' + LastFM.artistName + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&callback=LastFM.responceAlbums&lang=ru';
        document.body.appendChild(scr)
    }
    bestTracks.appendChild(album);


    var titleAlbum = document.createElement('h2');
    titleAlbum.innerHTML = 'Альбомы';
    div.appendChild(titleAlbum);
    if (data.topalbums && data.topalbums.album) {
        for (var i = 0; i < data.topalbums.album.length; i++) {
            var album = document.createElement('div');
            var h4 = document.createElement('h4');
            h4.innerHTML = data.topalbums.album[i].name;
            album.appendChild(h4);
            album.className = 'album';
            album.data = data.topalbums.album[i];
            album.onclick = function () {
                Player.changeAlbum(this);
            }
            var cover = document.createElement("img");
            cover.src = data.topalbums.album[i].image[2]['#text'];
            album.appendChild(cover);
            div.appendChild(album)
        }
    }
    else {
        var album = document.createElement('div');
        album.innerHTML = 'Альбомов исполнителя не найдено';
        div.appendChild(album)
    }
    /*    setTimeout(function () {
    var scr = document.createElement('script');
    scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=album.getInfo&artist=' + LastFM.artistName + '&album=' + LastFM.albums[0].name + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&callback=LastFM.responceTracks&lang=ru';
    document.body.appendChild(scr)
    }, 100)*/
}

LastFM.responceTracks = function (data) {
    document.getElementById("preload").style.display = 'none';
    LastFM.tracks = data.album.tracks.track;
    var div = document.getElementById('playlist');
    div.innerHTML = '';
    div.style.display = 'block';
    var titleAlbum = document.createElement('h3');
    titleAlbum.className = 'titleAlbum';
    titleAlbum.innerHTML = data.album.name;
    LastFM.album = data.album.name;
    div.appendChild(titleAlbum);

    LastFM.titleAlbum = data.album.name;
    if (LastFM.tracks && LastFM.tracks[0]) {
        for (var i = 0; i < LastFM.tracks.length; i++) {
            var track = document.createElement('div');
            LastFM.tracks[i].name = LastFM.tracks[i].name.replace(/\(.+\)/, "");
            var fullTime = LastFM.tracks[i].duration;
            var fullMin = Math.floor(fullTime / 60);
            var fullSec = Math.floor(fullTime - fullMin * 60);
            var time = fullMin + ':' + (fullSec.toString().length == 1 ? '0' + fullSec : fullSec);
            var span = document.createElement('span');
            span.innerHTML = time;
            span.className = 'duration';
            // track.innerHTML = '<a id="' + 'a' + App.ultra.i + '" class="noA" onclick="return false">' + (App.ultra.i) + '</a>. ' + App.ultra.currentTrack;
            // track.href = document.getElementById('a' + App.ultra.i);

            div.appendChild(track);
            track.innerHTML = '<a id="' + 'aL' + (i + 1) + '" class="noA" onclick="return false">' + (i + 1) + '</a>. ' + LastFM.tracks[i].name;
            track.a = document.getElementById('aL' + (i + 1));

            track.appendChild(span)
            LastFM.tracks[i].div = track;
            LastFM.tracks[i].span = span;

        }
        Player.firstFind();
        //Player.findTrack();
    } else {
        var track = document.createElement('div')
        track.innerHTML = 'Аудиозаписей не найдено'
        div.appendChild(track)
    }

}

LastFM.responceUser = function (data) {
    if (data.session) {
        LastFM.user.sk = data.session.key;
        document.getElementById('scrob').innerHTML = 'Скробблинг выполняется';
        LastFM.scrob = true;
    } else if (data.error) {
        App.showPopup('Ошибка авторизации');

    }
}

LastFM.getKey = function (username, password) {
    LastFM.api_key = '809dffc5f629c1d4871323f01379bc0d';
    var authToken = hex_md5(username + hex_md5(password));
    LastFM.userName = username;
    LastFM.password = password;
    LastFM.authToken = authToken;
    //var api_sig = hex_md5("api_key809dffc5f629c1d4871323f01379bc0dauthToken" + authToken + "callbackLastFM.responceUser" + "formatjson" + "methodauth.getMobileSession" + "username" + username + "e69db535e502129eb7473f0052204099")
    //scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=auth.getMobileSession&username=' + username + '&authToken=' + authToken + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&callback=LastFM.responceUser&api_sig=' + api_sig;
    ////var api_sig = hex_md5("api_key809dffc5f629c1d4871323f01379bc0dauthToken" + authToken + "methodauth.getMobileSession"+ "username" + username +  "e69db535e502129eb7473f0052204099");
    ////scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=auth.getMobileSession&username=' + username + '&authToken=' + authToken + '&api_key=809dffc5f629c1d4871323f01379bc0d&api_sig=' + api_sig;
    var api_sig = hex_md5("api_key809dffc5f629c1d4871323f01379bc0dauthToken" + authToken + "methodauth.getMobileSession" + "username" + username + "e69db535e502129eb7473f0052204099");
    LastFM.user.api_sig = api_sig;
    var scr = document.createElement('script');
    scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=auth.getMobileSession&username=' + username + '&authToken=' + authToken + '&api_key=809dffc5f629c1d4871323f01379bc0d&api_sig=' + api_sig + '&callback=LastFM.responceUser&format=json';
    document.body.appendChild(scr);
}

LastFM.responceChart = function (data) {
    LastFM.chart = data.artists.artist;
    App.showStartup();
}

LastFM.scrooble = function () {
    //if (App.radio) {
    var track = LastFM.trackName
    //} else {
    //    var track = Player.currentTrack.title;
    //}
    var time = Math.round((new Date()).getTime() / 1000);
    //var track = LastFM.trackName || Player.currentTrack.title;
    /*if (LastFM.album) {
        var api_sig = hex_md5("api_key809dffc5f629c1d4871323f01379bc0dalbum" + LastFM.album + "artist" + LastFM.artistName + "methodtrack.scrobble" + "sk" + LastFM.user.sk + 'timestamp' + time + "track" + decodeURIComponent(track) + "e69db535e502129eb7473f0052204099");
        var post = 'method=track.scrobble&album='+LastFM.album+'&artist=' + LastFM.artistName + '&timestamp=' + time + '&track=' + track + '&api_key=809dffc5f629c1d4871323f01379bc0d&api_sig=' + api_sig + '&sk=' + LastFM.user.sk;
    } else {*/
    var api_sig = hex_md5("api_key809dffc5f629c1d4871323f01379bc0d" + "artist" + LastFM.artistName + "methodtrack.scrobble" + "sk" + LastFM.user.sk + 'timestamp' + time + "track" + decodeURIComponent(track) + "e69db535e502129eb7473f0052204099");
    var post = 'method=track.scrobble&artist=' + LastFM.artistName + '&timestamp=' + time + '&track=' + track + '&api_key=809dffc5f629c1d4871323f01379bc0d&api_sig=' + api_sig + '&sk=' + LastFM.user.sk;
    var url = 'http:' + '//ws.audioscrobbler.com/2.0/';
    CROSS.XSS.post(url, post);
    clearTimeout(LastFM.scronTimout);
}

function uppodInit(playerID) {
    uppodSend("player1", 'play');
    Player.init = true;
    setTimeout(function () {
        uppodSend('player1', 'v' + Player.volume.getValue())
        Player.volume.setValue(Player.volume.getValue() + 1);
    }, 100)
    //Player.volume.setValue(uppodGet("player1", 'getv'));
    //valueVolume.style.height = volume.offsetHeight * (curVolume / 100) + 'px';
    //if (!App.radio) { App.s = setInterval(Player.q, 300) }
};

function uppodTheEnd() {
    //alert(32);
    if (App.radio) {
        uppodSend("player1", 'stop');
        setTimeout(function () {
            uppodSend("player1", 'file\:' + App.currentRadio.url);
            uppodSend("player1", 'play');
            //alert(41);
        }, 1000)
    }else {
        setTimeout(Player.next, 300);

    }
    //
}

function uppodOnEnd(playerID) {
    //alert(42);
}

function uppodErrorReport() {
    if (!App.radio) {
        Player.next()
    }
}


document.getElementById('scrob').onclick = function () {
    if (App.popupLastFM) { return 1 }
    App.popupLastFM = true;
    var shadow = document.getElementById('shadow');
    shadow.style.display = 'block';
    var div = document.createElement('div');
    div.className = 'formLastFM';
    shadow.appendChild(div);
    var field = document.createElement('fieldset');
    var legend = document.createElement('legend');
    legend.innerHTML = 'Авторизация Last.fm';
    field.appendChild(legend);
    div.appendChild(field);
    var chek = '<br/><input id="likeEQLove" check type="checkbox" ';
    if (App.define.likeEQLove) {
        chek += 'checked="checked"';
    }
    chek += '><span class="comment"> Помечать треки как “любимые” на Last.fm при добавлении к себе в аудиозаписи</span>'
    if (LastFM.scrob) {
        field.innerHTML += '<input type="text" id="username" value="' + LastFM.userName + '" /> Имя <br /><input type="password" id="password" value="' + LastFM.password + '" /> Пароль ' + chek + '<br /> <button id="saveButton"> Сохранить </button> <button id="cancelButton"> Отмена </button> <a class="reg" href="http:\/\/www.lastfm.ru/join" > Регистрация </a>';
    } else {
        field.innerHTML += '<input type="text" id="username" /> Имя <br /><input type="password" id="password" /> Пароль ' + chek + '<br /> <button id="saveButton"> Сохранить </button> <button id="cancelButton"> Отмена </button> <a class="reg" href="http:\/\/www.lastfm.ru/join" > Регистрация </a>';
    }
    shadow.style.display = 'block';
    document.getElementById('saveButton').onclick = App.saveUser;
    document.getElementById('cancelButton').onclick = function () {
        document.getElementById('shadow').style.display = 'none';
        document.getElementById('shadow').innerHTML = '';
        App.popupLastFM = false;
    }
}

document.getElementById("find").onfocus = function () {
    this.value = '';
    var d = document.createElement("div");
    d.id = "tooltip";
    d.style.top = this.offsetTop + this.offsetHeight + 2 + 'px';
    d.style.left = this.offsetLeft + 'px';
    d.style.width = this.offsetWidth + 'px';

    for (var i = 0; i < 4; i++) {
        if (App.lastGrp && App.lastGrp[i]) {
            var div = document.createElement("div");
            div.innerHTML = App.lastGrp[i];
            div.dataText = App.lastGrp[i];
            div.onclick = function () {
                document.getElementById("find").value = this.dataText.replace("&amp;", "&").replace("&#39;", "'");
                App.suche(this.dataText.replace("&amp;", "&").replace("&#39;", "'"));
                if (document.getElementById("tooltip")) {
                    document.getElementById("tooltip").parentNode.removeChild(document.getElementById("tooltip"));
                }
            }
            d.appendChild(div);
        }
    }
    d.currentDiv = 0;
    this.parentNode.appendChild(d);
}
document.getElementById("find").onblur = function () {
    //alert();
    if (this.value == '') {
        this.value = 'Искать группу';
    }else {
        this.style.color = 'black';
    }
    setTimeout(function () {
        if (document.getElementById("tooltip")) {
            document.getElementById("tooltip").parentNode.removeChild(document.getElementById("tooltip"));
        }
    }, 200)

}

document.getElementById("find").onkeyup = function (e) {
    var event = e || window.event;
    //if (document.getElementById("find").backValue == document.getElementById("find").value) { return 1 }
    var d = document.getElementById("tooltip");
    document.getElementById("find").backValue = document.getElementById("find").value;
    switch (event.keyCode ? event.keyCode : event.which ? event.which : null) {
        case 0x26:
            //up
            return 1;
            break;
        case 0x28:
            return 1;
            //down
            break;
    }
    d.innerHTML = '';
    d.style.display = 'block';
    var k = 0;
    if (App.lastGrp && App.lastGrp.length > 0) {
        for (var i = 0; i < App.lastGrp.length; i++) {
            if (App.lastGrp[i] && App.lastGrp[i].toLowerCase().indexOf(this.value.toLowerCase()) != -1) {
                var div = document.createElement("div");

                div.innerHTML = App.lastGrp[i];
                div.dataText = App.lastGrp[i];
                if (document.getElementById("find").value != '') {
                    var pos = div.innerHTML.toLowerCase().indexOf(document.getElementById("find").value.toLowerCase())
                    var str1 = div.firstChild.nodeValue.substring(0, pos);
                    var str2 = '<span class="colorText">' + div.firstChild.nodeValue.substring(pos, pos + document.getElementById("find").value.length) + '</span>';
                    var str3 = div.firstChild.nodeValue.substring(pos + document.getElementById("find").value.length);
                    div.innerHTML = str1 + str2 + str3;
                }




                div.onclick = function () {
                    document.getElementById("find").value = this.dataText.replace("&amp;", "&").replace("&#39;", "'");
                    App.suche(this.dataText.replace("&amp;", "&").replace("&#39;", "'"))
                    document.getElementById("tooltip").parentNode.removeChild(document.getElementById("tooltip"));
                }
                d.appendChild(div);
                k++;
                if (k > 2){ break }
            }
        }
    }
    App.tooltip = d;
    //App.suggest = document.getElementById("find").value.length;
    //d.appendChild(document.createElement("hr"));

    var s = document.createElement("script");
    s.src = 'http://developer.echonest.com/api/v4/artist/suggest?api%5Fkey=F21KT0VKI1NVX3CIF&name=' + encodeURIComponent(document.getElementById("find").value) + '&results=5&format=jsonp&callback=App.addTooltip'
    document.body.appendChild(s);
    //if (k == 0)  d.style.display = 'none';
    //var ch = document.getElementById("tooltip").childNodes;
    //for (var i = 0; i < ch.length; i++) {
    //    ch[i].className = '';
    //}
    //ch[d.currentDiv - 1].className = "active";
    //this.value = ch[d.currentDiv - 1].innerHTML;
}

App.addTooltip = function (data) {
    //var ch = document.getElementById("tooltip").childNodes;
    //for (var i = 0; i < ch.length; i++) {
    //    if (ch[i].q == 42) {

    //    }
    //}
    if (document.getElementById("firstSugg")) {
        while (document.getElementById("firstSugg").nextSibling) {
            document.getElementById("firstSugg").nextSibling.parentNode.removeChild(document.getElementById("firstSugg").nextSibling)
        }
        document.getElementById("firstSugg").parentNode.removeChild(document.getElementById("firstSugg"));
    }
    //if (document.getElementById("find").value.length != App.suggest){ return 1 }
    if (data.response && data.response.status && data.response.status.code == 0) {
        var d = App.tooltip;
        //d.appendChild(document.createElement("hr"));
        for (var i = 0; i < data.response.artists.length; i++) {
            var div = document.createElement("div");
            if (i == 0) {
                div.id = "firstSugg"
            }
            div.q = 42;
            div.innerHTML = data.response.artists[i].name;
            div.dataText = data.response.artists[i].name;
            if (document.getElementById("find").value != '') {
                var pos = div.innerHTML.toLowerCase().indexOf(document.getElementById("find").value.toLowerCase())
                var str1 = div.firstChild.nodeValue.substring(0, pos);
                var str2 = '<span class="colorText">' + div.firstChild.nodeValue.substring(pos, pos + document.getElementById("find").value.length) + '</span>';
                var str3 = div.firstChild.nodeValue.substring(pos + document.getElementById("find").value.length);
                div.innerHTML = str1 + str2 + str3;
            }




            div.onclick = function () {
                document.getElementById("find").value = this.dataText.replace("&amp;", "&").replace("&#39;", "'");
                App.suche(this.dataText.replace("&amp;", "&").replace("&#39;", "'"))
                document.getElementById("tooltip").parentNode.removeChild(document.getElementById("tooltip"));
            }
            d.appendChild(div);
        }

    }
}

document.getElementById("find").onkeydown = function (e) {
    var event = e || window.event;
    var d = document.getElementById("tooltip")
    switch (event.keyCode ? event.keyCode : event.which ? event.which : null) {
        case 0x26:
            //up
            d.currentDiv--;
            if (d.currentDiv < 1){ d.currentDiv = d.childNodes.length };
            break;
        case 0x28:
            d.currentDiv++;
            if (d.currentDiv > d.childNodes.length){ d.currentDiv = 1 };
            //down
            break;
        default:
            return 1;
            break;
    }

    var ch = document.getElementById("tooltip").childNodes;

    for (var i = 0; i < ch.length; i++) {
        ch[i].className = '';
    }
    if (ch[d.currentDiv - 1]) {
        ch[d.currentDiv - 1].innerHTML = ch[d.currentDiv - 1].dataText;
        ch[d.currentDiv - 1].className = "active";
        this.value = ch[d.currentDiv - 1].dataText;
    }
}

document.getElementById("leader").onclick = function () {
    App.suche(this.innerHTML);
}

document.getElementById('title').innerHTML = 'Загрузка..';
