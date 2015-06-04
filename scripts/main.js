document.getElementById('title').innerHTML = 'Загрузка.';
var Player = {};
var LastFM = {};
var MB = {};
App.user = {};
App.ultra = {};
App.vkFindStack = [];
App.util = {};
App.define.likeEQLove = false;
App.define.animation = true;
App.define.showBio = true;
App.define.autoplay = true;
App.define.customScroll = false;
App.searchState = 'группа';
App.scrobTime = 25;
//App.define.urlTags = 'http\://vk.hart-flamov.ru/PHP/';
//App.define.urlRadioLogo = 'http\://vk.hart-flamov.ru/img/radio/';
MB.pipes_id = ['b1e3171467489ca1ae4bffe93e81af63', 'f1ba0b64f66d54d6d36e8cd036fc7d3e', 'bffe0119b6f1d70c57c4edd0679121e1', 'f786cae5e66699833b8325251f837ab7', 'affcd55ab36926aae17e9cba6e9c49ac', '4d39911264a3e7be0979c30f99110bff', '1188da33a75217ce8a65332d96e89aa6', 'ed7c11e5c4985c3a33ee703329ba0cee', '1b63088bf0514ad972fb3a36f2dd6507', '9e9a1ba150e10f33e1b2e259548ada88', "d7186b198ab556d6cd50b4dfb54dd50b", "d9855abf521d0b969aa7676ca8fea525", "9216bc9621f8e3f4cdfe3f59a6282c51", "f11066183340a59fc64b7b2e5804a6a5", "c16bc726e5489fc0e13d32a0e978c49c", "0012596abcca6897f58255014278c46c", "88f00b94b5995a6f15cba3b385e3a5f0", "201e88cffa4c037781903b3b4020734d", "78807d29478db76019a68ed7129724b0", "801b2ba4d262e2bfcfa717f6d95a4fb6"];
MB.pipes_id_albums = ['b44081de109ae1107c76eade00fc7e3f', '8f3f03bf3fb4a253adb61d070d828907', 'c7ee63dee14bc29db1a6168e9d916621', '92cd8e9998b81818c1dcb023901750f4', 'c3c0005d9b95b865b138f71eb08d5665', 'acd97143f00bc964fe047b6759744200', 'f0b694ce73c2c2ee4a7c85b34e4261eb'];
App.stateCurrentNamber = -1;
App.lastTags = [];
App.radioList = [
{ name: "Ultra", russName: "Ультра", logo: App.define.urlRadioLogo + "ultra2.png", url: 'http\:\/\/94.25.53.133:80/ultra-192', tags: 'stream.php' },
{ name: "Maximum", russName: "Максимум", logo: App.define.urlRadioLogo + "max.png", url: 'http:/\/radio.north.kz:8000/rmaximum' /*'http:\//92.242.10.5:8008/;stream.nsv'*/, tags: 'streamMax.php' },
{ name: "Rock FM Ru", russName: "Рок ФМ", logo: App.define.urlRadioLogo + "rock.jpg", url: 'http:\//94.25.53.133/rock-192', tags: 'streamRockru.php' },
{ name: "Nashe", russName: "Наше", logo: App.define.urlRadioLogo + "nashe.jpg", url: 'http:\//94.25.53.133/nashe-192', tags: 'streamNashe.php' },
{ name: "RocketRadio", russName: "Рокет", logo: App.define.urlRadioLogo + "rocketRadio2.png", url: 'http:\/\/air.rocketradio.ru/256', tags: 'streamRocketRadio.php' },
{ name: "42fm", russName: "42fm", logo: App.define.urlRadioLogo + "42.png", url: 'http:\/\/listen.42fm.ru:8000/stealkill', tags: 'tags42.php' },
{ name: "Hitroe", russName: "ХИТрое", logo: App.define.urlRadioLogo + "hitr2.png", url: 'http:\/\/www.hitroe.com:8000/stream', tags: 'tagsHitroe.php' },
{ name: "Grind.FM", russName: "Grind.FM", logo: App.define.urlRadioLogo + "grind.png", url: 'http:\//radio.goha.ru:8000/grind.fm', tags: 'grind.php' },
{ name: "Radio Metal", russName: "Radio Metal", logo: App.define.urlRadioLogo + "metal.jpg", url: 'http:\//s3.radioheart.ru:8015/radio-metal', tags: 'metal.php' },
{ name: "Rock.FM", russName: "Rock.FM", logo: App.define.urlRadioLogo + "rock2.png", url: 'http:\//216.235.94.10/play?s=wwwrockfm&d=LIVE365&r=0&membername=&session=wwwrockfm:0&AuthType=NORMAL&app_id=live365%3AWidget365&SaneID=89.218.116.130-1316542056143401&rnd=0.13509975979104638&tag=live365&caller=live365%3AWidget365&token=fa4005e3c52b134416c33a26be2b5bc8-1920290080101251', tags: 'streamRock.php' },
{ name: "RelaxFM", russName: "Релакс Фм", logo: App.define.urlRadioLogo + "relax.png", url: 'http:\//live26.kiwi.kz:8000/relaxfm?type=.flv', tags: 'streamRelax.php' },
{ name: "Europa plus", russName: "Европа+", logo: App.define.urlRadioLogo + "europa.png", url: 'http:\//webcast.emg.fm:55655/europaplus128.mp3', tags: 'streamEuropa.php' },
{ name: "Monte Carlo", russName: "Монте Карло", logo: App.define.urlRadioLogo + "monte.png", url: 'http:\//fm.kiwi.kz/montecarlospb', tags: 'streamMonte.php' },
{ name: "Love Radio", russName: "Love Radio", logo: App.define.urlRadioLogo + "love.png", url: 'http:\//fm.kiwi.kz/loveradiokz', tags: 'streamLove.php' },
{ name: "NRG Rock", russName: "NRG Rock", logo: App.define.urlRadioLogo + "energy.png", url: 'http:/\/radio.mv.ru:8080/101.ru_NRJ_Rock', tags: 'streamEnergy.php' },
{ name: "Mega Radio", russName: "Мега", logo: App.define.urlRadioLogo + "mega.png", url: 'http:\//radio.mv.ru:8080/MegaRadio', tags: 'streamMega.php' },
{ name: "Radio Record", russName: "Рекорд", logo: App.define.urlRadioLogo + "record.png", url: 'http:\//online.radiorecord.ru:8101/rr_128?type=.mp3', tags: 'streamRecord.php' },
{ name: "Sound Of Love", russName: "Sound Of Love", logo: App.define.urlRadioLogo + "slove.jpg", url: 'http:\//my.stepservice.ru:10149/love', tags: 'slove.php' },
{ name: "Alternative HD", russName: "Alternative HD", logo: App.define.urlRadioLogo + "alter.jpg", url: 'http:\//184.105.145.85:8000/;stream.nsv ', tags: 'streamAlter.php' },
{ name: "Es Radio", russName: "Es Radio", logo: App.define.urlRadioLogo + "esradio.jpg", url: 'http\://188.134.24.54:8123/live', tags: 'esradio.php' },
{ name: "KissFM", russName: "KissFM", logo: App.define.urlRadioLogo + "kissfm.jpg", url: 'http\://stream.kissfm.ua:8000/kiss', tags: 'kissfm.php' },
{ name: "djFM", russName: "djFM", logo: App.define.urlRadioLogo + "djfm.jpg", url: 'http\://media.brg.ua:8010/;stream.nsv', tags: 'djfm.php' },
{ name: "Pianorama", russName: "Pianorama (без тэгов)", logo: App.define.urlRadioLogo + "pianorama.png", url: 'http:\//188.127.226.185/;stream.nsv', tags: '' },
{ name: "Radio ROKS", russName: "ROKS(ua)", logo: App.define.urlRadioLogo + "roksua.jpg", url: 'http\://online-radioroks.tavrmedia.ua/RadioROKS_256', tags: 'roksua.php' },

{ name: "Trancemission", russName: "Trancemission", logo: App.define.urlRadioLogo + "rectm.png", url: 'http\://online.radiorecord.ru:8102/tm_128?type=.mp3', tags: 'record/streamtm.php' },
{ name: "Pirate Station", russName: "Pirate Station", logo: App.define.urlRadioLogo + "recps.png", url: 'http\://online.radiorecord.ru:8102/ps_128?type=.mp3', tags: 'record/streampt.php' },
{ name: "Vip Mix", russName: "Vip Mix", logo: App.define.urlRadioLogo + "recvip.png", url: 'http\://online.radiorecord.ru:8102/vip_128?type=.mp3', tags: 'record/streamvip.php' },
{ name: "Teodor Hardstyle", russName: "Teodor Hardstyle", logo: App.define.urlRadioLogo + "recteo.png", url: 'http\://online.radiorecord.ru:8102/teo_128?type=.mp3', tags: 'record/streamteo.php' },
{ name: "Dancecore", russName: "Dancecore", logo: App.define.urlRadioLogo + "recdc.png", url: 'http\://online.radiorecord.ru:8102/dc_128?type=.mp3', tags: 'record/streamdc.php' },
{ name: "Breaks", russName: "Breaks", logo: App.define.urlRadioLogo + "recbrks.png", url: 'http\://online.radiorecord.ru:8102/brks_128?type=.mp3', tags: 'record/streambrks.php' },
{ name: "Chill-Out", russName: "Chill-Out", logo: App.define.urlRadioLogo + "recchil.png", url: 'http\://online.radiorecord.ru:8102/chil_128?type=.mp3', tags: 'record/streamchil.php' },
{ name: "Dubstep", russName: "Dubstep", logo: App.define.urlRadioLogo + "recdub.png", url: 'http\://online.radiorecord.ru:8102/dub_128?type=.mp3', tags: 'record/streamdub.php' },


//{ name: "hitfm.ua", russName: "Hit FM(ua)", logo: App.define.urlRadioLogo + "hitfmua.png", url: 'http:\//online-hitfm.tavrmedia.ua/HitFM', tags: '' },
{ name: "Alternative Rock", russName: "Alternative Rock", logo: App.define.urlRadioLogo + "skyfm.png", url: 'http:\//u16.sky.fm:80/sky_altrock', tags: '/sky.fm/altRock.php' },
{ name: "Christian Pop", russName: "Christian Pop", logo: App.define.urlRadioLogo + "skyfm.png", url: 'http:\//u16.sky.fm:80/sky_christian', tags: '/sky.fm/christian.php' },
{ name: "Classical Piano", russName: "Classical Piano", logo: App.define.urlRadioLogo + "skyfm.png", url: 'http\://u16.sky.fm:80/sky_classicalpianotrios', tags: '/sky.fm/classicalpianotrios.php' },
{ name: "Hip Hop Rap", russName: "Hip Hop Rap", logo: App.define.urlRadioLogo + "skyfm.png", url: 'http\://u16.sky.fm:80/sky_classicrap', tags: '/sky.fm/classicrap.php' },
{ name: "Classic Rock 70-80", russName: "Classic Rock 70-80", logo: App.define.urlRadioLogo + "skyfm.png", url: 'http\://u16.sky.fm:80/sky_classicrock', tags: '/sky.fm/classicrock.php' },
{ name: "Electronic Chillout", russName: "Electronic Chillout", logo: App.define.urlRadioLogo + "skyfm.png", url: 'http\://u16.sky.fm:80/sky_dreamscapes', tags: '/sky.fm/dreamscapes.php' },
{ name: "Flamenco Guitar", russName: "Flamenco Guitar", logo: App.define.urlRadioLogo + "skyfm.png", url: 'http\://u16.sky.fm:80/sky_guitar', tags: '/sky.fm/guitar.php' },
{ name: "Indie Rock", russName: "Indie Rock", logo: App.define.urlRadioLogo + "skyfm.png", url: 'http\://u16.sky.fm:80/sky_indierock', tags: '/sky.fm/indierock.php' },
{ name: "Japan Pop", russName: "Japan Pop", logo: App.define.urlRadioLogo + "skyfm.png", url: 'http\://u16.sky.fm:80/sky_jpop', tags: '/sky.fm/jpop.php' },
{ name: "Love Romantic", russName: "Love Romantic", logo: App.define.urlRadioLogo + "skyfm.png", url: 'http\://u16.sky.fm:80/sky_lovemusic', tags: '/sky.fm/lovemusic.php' },
{ name: "New Age Nature", russName: "New Age Nature", logo: App.define.urlRadioLogo + "skyfm.png", url: 'http\://u16.sky.fm:80/sky_nature', tags: '/sky.fm/nature.php' },
{ name: "Pop Punk", russName: "Pop Punk", logo: App.define.urlRadioLogo + "skyfm.png", url: 'http\://u16.sky.fm:80/sky_poppunk', tags: '/sky.fm/poppunk.php' },
{ name: "Solo Piano", russName: "Solo Piano", logo: App.define.urlRadioLogo + "skyfm.png", url: 'http\://u16.sky.fm:80/sky_solopiano', tags: '/sky.fm/solopiano.php' },
{ name: "Soundtracks", russName: "Soundtracks", logo: App.define.urlRadioLogo + "skyfm.png", url: 'http\://u16.sky.fm:80/sky_soundtracks', tags: '/sky.fm/soundtracks.php' },
{ name: "Bebop", russName: "Bebop", logo: App.define.urlRadioLogo + "skyfm.png", url: 'http\://u16.sky.fm:80/sky_bebop', tags: '/sky.fm/bepop.php' }
];

App.favoritesRadioList = [
{ name: "Ultra", russName: "Ультра", logo: App.define.urlRadioLogo + "ultra2.png", url: 'http\:\/\/94.25.53.133:80/ultra-192', tags: 'http\://vk.hart-flamov.ru/PHP/stream.php' },
{ name: "Maximum", russName: "Максимум", logo: App.define.urlRadioLogo + "max.png", url: 'http:\//92.242.10.5:8008/;stream.nsv', tags: 'http\://vk.hart-flamov.ru/PHP/streamMax.php' },
{ name: "RocketRadio", russName: "Рокет", logo: App.define.urlRadioLogo + "rocketRadio2.png", url: 'http:\/\/air.rocketradio.ru/256', tags: 'http\://vk.hart-flamov.ru/PHP/streamRocketRadio.php' },
{ name: "NRG Rock", russName: "NRG Rock", logo: App.define.urlRadioLogo + "energy.png", url: 'http:/\/radio.mv.ru:8080/101.ru_NRJ_Rock', tags: 'streamEnergy.php' },
{ name: "RelaxFM", russName: "Релакс Фм", logo: App.define.urlRadioLogo + "relax.png", url: 'http:\//live26.kiwi.kz:8000/relaxfm?type=.flv', tags: 'http\://vk.hart-flamov.ru/PHP/streamRelax.php' }
];



LastFM.user = {};
Player.playlist = [];
Player.currentNumber = 0;
window.onload = function () {
    VK.init(function () {
        App.begin();
    });
}

App.begin = function () {
    VK.callMethod('setTitle', 'Музыкальный плеер Meridian');
    Player.volume = new Slider({ min: 0, max: 100 }).insertTo('slider')
    Player.volume.setStyle("height", "5px");
    Player.volume.setStyle("width", "115px");
    Player.volume.setValue(100);
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


    Player.scrobTimeSlider = new Slider({ min: 0, max: 120, snap: 5, value: App.scrobTime }).insertTo('scrobTimeSlider');
    Player.scrobTimeSlider.on("change", function () {
        document.getElementById("scrobTime").innerHTML = Player.scrobTimeSlider.getValue();
    });
    if (localStorage && localStorage.getItem("mer_scrobTime")) {
        Player.scrobTimeSlider.setValue(localStorage.getItem("mer_scrobTime"));
        document.getElementById("scrobTime").innerHTML = localStorage.getItem("mer_scrobTime");
        App.scrobTime = localStorage.getItem("mer_scrobTime");
    }else {
        Player.scrobTimeSlider.setValue(App.scrobTime);
        document.getElementById("scrobTime").innerHTML = App.scrobTime;
    }


    if (localStorage && localStorage.getItem("mer_lastGrp")) {
        App.lastGrp = localStorage.getItem("mer_lastGrp").split(",");
    }
    if (localStorage && localStorage.getItem("mer_lastTags")) {
        App.lastTags = localStorage.getItem("mer_lastTags").split(",");
    }
    if (localStorage && localStorage.getItem("mer_favRadio")) {
        var fav = decodeURIComponent(localStorage.getItem("mer_favRadio"));
        App.favoritesRadioList = JSON.parse(fav);
    }
    if (localStorage && localStorage.getItem("mer_volume")) {
        Player.volume.setValue(localStorage.getItem("mer_volume"));
        document.getElementById("levelVolume").innerHTML = localStorage.getItem("mer_volume");
    }
    Player.volume.on("change", Player.changeVolume);

    if (localStorage && localStorage.getItem("mer_rand")) {
        if (localStorage.getItem("mer_rand") == 1) {
            Player.rand = true;
            document.getElementById('random').src = 'img/shuffle_icon.png';
        }
        else {
            Player.rand = false;
        }
    }
    if (localStorage && localStorage.getItem("mer_showAnimation")) {
        if (localStorage.getItem("mer_showAnimation") == 1) {
            App.define.animation = true;
            document.getElementById('showAnimation').checked = true;
        }
        else {
            App.define.animation = false;
            document.getElementById('showAnimation').checked = false;
        }
    }
    if (localStorage && localStorage.getItem("mer_customScroll")) {
        if (localStorage.getItem("mer_customScroll") == 1) {
            App.define.customScroll = true;
            document.getElementById('customScroll').checked = true;
        }
        else {
            App.define.customScroll = false;
            document.getElementById('customScroll').checked = false;
        }
    }
    if (localStorage && localStorage.getItem("mer_autoplay")) {
        if (localStorage.getItem("mer_autoplay") == 1) {
            App.define.autoplay = true;
            document.getElementById('autoplay').checked = true;
        }
        else {
            App.define.autoplay = false;
            document.getElementById('autoplay').checked = false;
        }
    }
    if (localStorage.getItem("mer_LastFMshowBio")) {
        document.getElementById("showBio").checked = (localStorage.getItem("mer_LastFMshowBio") == "true" ? true : false);
        App.define.showBio = (localStorage.getItem("mer_LastFMshowBio") == "true" ? true : false);;
    }
    if (localStorage && localStorage.getItem("mer_likeLove")) {
        document.getElementById("likeLove").checked = localStorage.getItem("mer_likeLove");
        if (localStorage.getItem("mer_likeLove") == 'yes') {
            App.define.likeEQLove = true;

        }
        else {
            App.define.likeEQLove = false;
        }
    }

    if (localStorage && localStorage.getItem("mer_LastFMusername") && localStorage.getItem("mer_LastFMpassword")) {
        var username = localStorage.getItem("mer_LastFMusername");
        var password = localStorage.getItem("mer_LastFMpassword");
        document.getElementById("username").value = username;
        document.getElementById("password").value = password;
        if (username && password) {
            LastFM.getKey(username, password);
        }
    }else if (localStorage.getItem("mer_s_key")) {
        LastFM.user.sk = localStorage.getItem("mer_s_key");
    }


    var user_id = App.uid || App.parse("viewer_id");
    App.uid = user_id;

    var str = 'return [API.getProfiles({ uids: ' + user_id + ',fields: "photo"}), API.friends.get({ fields: "photo, photo_medium, photo_big", name_case: "nom" }), API.audio.getAlbums({count:100}), API.audio.get({ uid: ' + user_id + '})];';

    VK.api("execute", { code: str }, function (data) {
        if (data.response) {
            setTimeout(function () {
                var scr = document.createElement('script');
                scr.src = "http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=809dffc5f629c1d4871323f01379bc0d&limit=12&format=json&callback=LastFM.responceChart&lang=ru";
                document.body.appendChild(scr);
            }, 100)
            App.loaded = true;
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
                if (localStorage && localStorage.getItem("mer_leader") && localStorage.getItem("mer_dayOfLeader") == (new Date()).getDay()) {
                    document.getElementById("leader").innerHTML = localStorage.getItem("mer_leader");
                }else {
                    App.findAtrist()
                }
            }, 400);
            if (App.parse('hash')) {
                var hash = decodeURIComponent(App.parse('hash'));
            }else {
                hash = '';
            }
            document.getElementById('title').innerHTML = '';
            if (App.parseHash('radio', hash)) {
                if (App.parseHash('radio', hash) == "last") {
                    document.getElementById("preload").style.display = 'block';
                    App.currentRadio = App.favoritesRadioList[0];
                    App.startRadio = true;
                    App.showRadio();
                    return 1;
                }
                for (var i = 0; i < App.radioList.length; i++) {
                    if (App.radioList[i].name == decodeURIComponent(App.parseHash('radio', hash))) {
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
            } else if (App.parseHash('frend', hash)) {
                App.showFrends(App.parseHash('frend', hash));
                return 1;
            } else if (App.parseHash('group', hash)) {
                App.showGroups(App.parseHash('group', hash));
                return 1;
            } else if (App.parseHash('tag', hash)) {
                LastFM.findTag(decodeURIComponent(App.parseHash('tag', hash)));
                return 1;
            } else if (App.parseHash('sendTrack', hash)) {
                var data = JSON.parse(decodeURIComponent(App.parseHash('sendTrack', hash)));
                App.exportTrack(data);
                document.getElementById('title').parentNode.removeChild(document.getElementById('title'));
                document.getElementById("preload").style.display = 'none';
                return 1;
            }
            App.state = 'start';

            document.getElementById('title').parentNode.removeChild(document.getElementById('title'));

            document.getElementById("preload").style.display = 'none';
        }
    })
}

App.exportTrack = function (data2) {
    VK.api('wall.post', data2, function (data) {
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
}

App.parse = function (variable) {
    var query = window.location.search.substring(1);

    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return false;
}

App.parseHash = function (variable, str) {

    var query = str || window.location.hash.substring(1);
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
    document.getElementById("myTracks").className = 'aspan';
    document.getElementById("frendsTracks").className = 'aspan';
    document.getElementById("recom2").className = 'aspan';
    document.getElementById("radio").className = 'aspan';
    document.getElementById("find").className = 'aspan';
    document.getElementById("main").className = 'aspan';
    document.getElementById("groups").className = 'aspan';
}

document.getElementById("recom2").onclick = function () {
    if (!App.loaded){ return 1 }
    VK.callMethod("setLocation", "");
    App.clearAkMenu(true);
    App.clearPopup(true);
    document.getElementById("recom2").className = 'aspanAk'
    document.getElementById("preload").style.display = 'none';
    App.clearPopup();
    var listEl = [];
    var list = document.getElementById("list");

    list.innerHTML = '';
    if (App.define.animation) {
        $(list).slide('in', { direction: "top" });
    }
    list.style.display = 'block';
    App.util.addScroll(list);
    var album = document.createElement('div');
    if (App.state == 'recom' && App.stateCurrentNamber == 0) {
        album.className = "currentBest"
    } else {
        album.className = 'best';
    }
    album.innerHTML = 'по любимым группам';

    album.onclick = function () {
        for (var l = 0; l < listEl.length; l++) {
            listEl[l].className = 'best';
        }
        this.className = "currentBest"
        App.state = 'recom';
        App.findRecommendation();
        App.stateCurrentNamber = 0;
    }
    list.appendChild(album);
    listEl.push(album);

    var album = document.createElement('div');
    if (App.state == 'recom' && App.stateCurrentNamber == 1) {
        album.className = "currentBest"
    } else {
        album.className = 'best';
    }
    album.innerHTML = 'по жанрам';

    album.onclick = function () {
        for (var l = 0; l < listEl.length; l++) {
            listEl[l].className = 'best';
        }
        this.className = "currentBest"
        App.state = 'recom';
        App.findRecommendationByGenres();
        App.stateCurrentNamber = 1;
    }
    list.appendChild(album);
    listEl.push(album);

    var album = document.createElement('div');
    if (App.state == 'recom' && App.stateCurrentNamber == 2) {
        album.className = "currentBest"
    } else {
        album.className = 'best';
    }
    album.innerHTML = 'по настроению';

    album.onclick = function () {
        for (var l = 0; l < listEl.length; l++) {
            listEl[l].className = 'best';
        }
        this.className = "currentBest"
        App.state = 'recom';
        App.findRecommendationByEmotions();
        App.stateCurrentNamber = 2;
    }
    list.appendChild(album);
    listEl.push(album);

    var album = document.createElement('div');
    album.innerHTML = 'от Вконтакте';
    if (App.state == 'recom' && App.stateCurrentNamber == 3) {
        album.className = "currentBest"
    } else {
        album.className = 'best';
    }
    album.onclick = function () {
        for (var l = 0; l < listEl.length; l++) {
            listEl[l].className = 'best';
        }
        this.className = "currentBest"
        App.loadRecommendationVK();
        App.state = 'recom';
        App.stateCurrentNamber = 3;
    }
    list.appendChild(album);
    listEl.push(album);

    //var album = document.createElement('div');
    //album.innerHTML = 'популярное';
    //if (App.state == 'recom' && App.stateCurrentNamber == 3) {
    //    album.className = "currentBest"
    //} else {
    //    album.className = 'best';
    //}
    //album.onclick = function () {
    //    for (var l = 0; l < listEl.length; l++) {
    //        listEl[l].className = 'best';
    //    }
    //    this.className = "currentBest"
    //    App.loadPopularVK();
    //    App.state = 'recom';
    //    App.stateCurrentNamber = 3;
    //}
    //list.appendChild(album);
    //listEl.push(album);

}

App.loadPopularVK = function () {
    App.clearPopup(true);
    App.clearAkMenu();
    App.currentRadio = '';

    App.MT = true;
    var uid = App.uid || App.parse("viewer_id");
    App.vkFind = false;
    Player.playlist = [];
    App.clearVkFindStack();
    document.getElementById("preload").style.display = 'block';
    VK.api('audio.get_popular', { al: 1, id: uid, offset: 0 }, function (data) {
        var div = document.getElementById('playlist');
        //div.style.left = '165px';
        div.innerHTML = '';
        if (App.define.animation) {
            $(div).fade('in');
        }
        div.style.display = 'block';
        App.util.addScroll(div);


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

                var song = document.createElement("h3");
                song.innerHTML = '<span class="numberTrack">' + (i + 1) + '</span>. ' + tracks[i].title;

                var art = document.createElement("div");
                art.innerHTML = tracks[i].artist;
                art.className = "art";
                track.art = art;


                track.appendChild(song);
                track.appendChild(art);

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
            if (App.define.autoplay) {
                Player.play(tracks[0].url);
            }

        }
        document.getElementById("preload").style.display = 'none';

    })

};

App.findRecommendationByEmotions = function () {
    var d = document.getElementById("genres");
    d.style.display = 'block';
    d.innerHTML = '';

    var h2 = document.createElement("h2");
    h2.innerHTML = "Настроение";
    d.appendChild(h2);
    App.util.addScroll(d, true);
    Echonest.moods.sort(function (a, b) {
        if (a.title > b.title) {
            return 1;
        }else {
            return -1;
        }
    })
    for (var i = 0; i < Echonest.moods.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = Echonest.moods[i].title;
        div.dataText = Echonest.moods[i];
        div.onclick = function () {
            App.searchEchonestByEmotion(this.dataText.name)
            document.getElementById('genres').style.display = 'none';
            document.getElementById('genres').removeScrollBar();
        }
        d.appendChild(div);
    }
    var span = document.createElement('span');
    span.innerHTML = 'х';
    span.className = 'aspan';
    span.id = 'closeGenres';
    span.onclick = function () {
        document.getElementById('genres').style.display = 'none';
        document.getElementById('genres').removeScrollBar();
    }
    d.appendChild(span);
}

App.searchEchonestByEmotion = function (genre) {
    var str = 'http:\//developer.echonest.com/api/v4/playlist/static?bucket=audio%5Fsummary&api%5Fkey=F21KT0VKI1NVX3CIF&format=jsonp&type=artist-description';
    str += "&description=" + genre + "&mood=" + genre;
    str += "&variety=0.5&adventurousness=0.1&artist_min_familiarity=0.7&results=50&callback=App.loadRecommendationEchonest&" + Math.random();
    var s = document.createElement("script");
    s.src = str;
    document.body.appendChild(s);
    document.getElementById("preload").style.display = 'block';
    //http://developer.echonest.com/api/v4/playlist/static?bucket=audio%5Fsummary&api%5Fkey=F21KT0VKI1NVX3CIF&format=jsonp&type=artist-description&description=alternative&style=alternative&results=50&callback=App.loadRecommendationEchonest
}

App.findRecommendationByGenres = function () {
    var d = document.getElementById("genres");
    d.style.display = 'block';
    d.innerHTML = '';

    var h2 = document.createElement("h2");
    h2.innerHTML = "Жанр";
    d.appendChild(h2);
    App.util.addScroll(d, true);
    Echonest.genres.sort(function (a, b) {
        if (a.title > b.title) {
            return 1;
        }else {
            return -1;
        }
    })
    for (var i = 0; i < Echonest.genres.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = Echonest.genres[i].title;
        div.dataText = Echonest.genres[i];
        div.onclick = function () {
            App.searchEchonestByGenre(this.dataText.name)
            document.getElementById('genres').style.display = 'none';
            document.getElementById('genres').removeScrollBar();
        }
        d.appendChild(div);
    }
    var span = document.createElement('span');
    span.innerHTML = 'х';
    span.className = 'aspan';
    span.id = 'closeGenres';
    span.onclick = function () {
        document.getElementById('genres').style.display = 'none';
        document.getElementById('genres').removeScrollBar();
    }
    d.appendChild(span);
}

App.searchEchonestByGenre = function (genre) {
    var str = 'http:\//developer.echonest.com/api/v4/playlist/static?bucket=audio%5Fsummary&api%5Fkey=F21KT0VKI1NVX3CIF&format=jsonp&type=artist-description';
    str += "&description=" + genre + "&style=" + genre;
    str += "&variety=0.5&adventurousness=0.1&artist_min_familiarity=0.7&results=50&callback=App.loadRecommendationEchonest&" + Math.random();
    var s = document.createElement("script");
    s.src = str;
    document.body.appendChild(s);
    document.getElementById("preload").style.display = 'block';
    //http://developer.echonest.com/api/v4/playlist/static?bucket=audio%5Fsummary&api%5Fkey=F21KT0VKI1NVX3CIF&format=jsonp&type=artist-description&description=alternative&style=alternative&results=50&callback=App.loadRecommendationEchonest
}

App.findRecommendation = function () {
    if (App.findR){ return 1 };
    App.echonestArtistQ = 0;
    App.echonestArtist = "";
    App.findR = true;
    App.clearAkMenu();
    document.getElementById("recom2").className = 'aspanAk'

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
    //LastFM.album = '';
    App.currentRadio = '';
    document.getElementById("preload").style.display = 'none';
    if (data.response && data.response.status && data.response.status.code == 0) {
        App.findR = false;
        App.MT = true;
        LastFM.tracks = data.response.songs;
        Player.playlist = [];
        document.getElementById("preload").style.display = 'none';
        //LastFM.album = '';
        var div = document.getElementById('playlist');
        //div.style.left = '165px';
        div.innerHTML = '';
        if (App.define.animation) {
            $(div).fade('in');
        }
        div.style.display = 'block';
        App.util.addScroll(div);


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
                var song = document.createElement("h3");
                song.innerHTML = '<span class="numberTrack">' + (i + 1) + '</span>. ' + LastFM.tracks[i].name;

                var art = document.createElement("div");
                art.innerHTML = LastFM.tracks[i].artist.name;
                art.className = "art";
                track.art = art;
                track.className = "notFinded";

                track.appendChild(song);
                track.appendChild(art);
                track.appendChild(span);

                div.appendChild(track);

                track.appendChild(span)
                LastFM.tracks[i].div = track;
                LastFM.tracks[i].span = span;

            }
            Player.firstPlay = false;
            Player.findTrackByTag()
        } else {
            var track = document.createElement('div')
            track.innerHTML = 'Аудиозаписей не найдено'
            div.appendChild(track)
        };
        document.getElementById("preload").style.display = 'none';
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
        localStorage.setItem("mer_leader", data.response.songs[0].artist_name)
        localStorage.setItem("mer_dayOfLeader", d.getDay())
        document.getElementById("leader").innerHTML = data.response.songs[0].artist_name;
    }

}

App.searchVK = function (q) {
    if (!App.loaded){ return 1 }
    document.getElementById("find").className = 'aspanAk';
    VK.callMethod("setLocation", "");
    document.getElementById("preload").style.display = 'none';
    App.clearPopup();

    var list = document.getElementById("list");

    if (App.state != 'searchVK') {
        App.util.addScroll(list);
        App.searchVK.listEl = [];
    }
    list.innerHTML = '';

    App.state = 'searchVK'
    if (App.define.animation) {
        $(list).slide('in', { direction: "top" });
    }
    list.style.display = 'block';


    for (var l = 0; l < App.searchVK.listEl.length; l++) {
        var album = document.createElement('div');
        album.innerHTML = App.searchVK.listEl[l].q;
        album.q = App.searchVK.listEl[l].q;
        album.className = 'best';
        album.onclick = function () {
            for (var l = 0; l < App.searchVK.listEl.length; l++) {
                App.searchVK.listEl[l].className = 'best';
            }
            this.className = "currentBest";
            App.searchVK.ww(this.innerHTML);
        }
        list.appendChild(album);
    }

    var album = document.createElement('div');
    album.innerHTML = q;
    album.q = q;
    album.className = 'currentBest';
    album.onclick = function () {
        for (var l = 0; l < App.searchVK.listEl.length; l++) {
            App.searchVK.listEl[l].className = 'best';
        }
        App.searchVK(this.innerHTML);
    }
    list.appendChild(album);

    App.searchVK.listEl.push(album);
    App.searchVK.ww = function (q) {
        App.clearPopup(true);
        App.clearAkMenu(true);
        App.currentRadio = '';

        App.MT = true;
        var uid = App.uid || App.parse("viewer_id");
        App.vkFind = false;
        Player.playlist = [];
        App.clearVkFindStack();
        document.getElementById("preload").style.display = 'block';
        VK.api('audio.search', { q: App.util.changeHTMLSymbols(q), count: 100, lyrics: 1 }, function (data) {
            var div = document.getElementById('playlist');
            div.innerHTML = '';
            if (App.define.animation) {
                $(div).fade('in');
            }
            div.style.display = 'block';
            App.util.addScroll(div);


            var tracks = data.response;
            if (tracks && tracks[0]) {
                for (var i = 1; i < tracks.length; i++) {
                    var track = document.createElement('div');
                    var fullTime = tracks[i].duration;
                    var fullMin = Math.floor(fullTime / 60);
                    var fullSec = Math.floor(fullTime - fullMin * 60);
                    var time = fullMin + ':' + (fullSec.toString().length == 1 ? '0' + fullSec : fullSec);
                    var span = document.createElement('span');
                    span.innerHTML = time;
                    span.className = 'duration';

                    var song = document.createElement("h3");
                    song.innerHTML = '<span class="numberTrack">' + (i + 1) + '</span>. ' + tracks[i].title;

                    var art = document.createElement("div");
                    art.innerHTML = tracks[i].artist;
                    art.className = "art";
                    track.art = art;


                    track.appendChild(song);
                    track.appendChild(art);

                    //track.innerHTML = '<a class="noA" onclick="return false" href="' + tracks[i].url + '">' + (i + 1) + '</a>. ' + "<span id=aid" + i + ">" + tracks[i].artist + ' - ' + tracks[i].title + "</span>";
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
                Player.currentTrack = tracks[1];
                Player.currentNumber = 1;
                LastFM.artistName = tracks[1].artist;
                document.getElementById("preload").style.display = 'none';
                Player.firstPlay = false;
                if (App.define.autoplay) {

                    Player.play(tracks[1].url);
                }

            }
            document.getElementById("preload").style.display = 'none';

        })
    }
    App.searchVK.ww(q);
}

App.loadRecommendationVK = function () {
    App.clearPopup(true);
    App.clearAkMenu();
    App.currentRadio = '';

    App.MT = true;
    var uid = App.uid || App.parse("viewer_id");
    App.vkFind = false;
    Player.playlist = [];
    App.clearVkFindStack();
    document.getElementById("preload").style.display = 'block';
    VK.api('audio.getRecommendations', { al: 1, id: uid, offset: 0 }, function (data) {
        var div = document.getElementById('playlist');
        //div.style.left = '165px';
        div.innerHTML = '';
        if (App.define.animation) {
            $(div).fade('in');
        }
        div.style.display = 'block';
        App.util.addScroll(div);


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

                var song = document.createElement("h3");
                song.innerHTML = '<span class="numberTrack">' + (i + 1) + '</span>. ' + tracks[i].title;

                var art = document.createElement("div");
                art.innerHTML = tracks[i].artist;
                art.className = "art";
                track.art = art;


                track.appendChild(song);
                track.appendChild(art);

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
            if (App.define.autoplay) {

                Player.play(tracks[0].url);
            }
        }
        document.getElementById("preload").style.display = 'none';

    })

}

document.getElementById("main").onclick = function () {
    App.showStartup();
}

App.showStartup = function () {

    //App.state = 'start';
    App.clearAkMenu();
    //document.getElementById("list").style.display = 'none';
    document.getElementById("main").className = 'aspanAk';
    VK.callMethod("setLocation", "");
    var div = document.getElementById("startup");
    if (App.define.animation) {
        document.getElementById("startup").style.left = '-15px';
        App.util.anim(document.getElementById("startup"), "left", 0, 100);


        //$(div).slide('in', { direction: "top" });
    }
    div.style.display = 'block';
    div.innerHTML = '';
    var strGroup = document.createElement("div");
    strGroup.className = 'strGroup';
    div.appendChild(strGroup);
    var h2 = document.createElement("h4");
    h2.innerHTML = "Самые популярные исполнители этой недели";
    strGroup.appendChild(h2);
    for (var i = 0; i < LastFM.chart.length; i++) {

        var li = document.createElement('div');
        var img = document.createElement("img");
        img.src = LastFM.chart[i].image[3]['#text'];
        li.appendChild(img);
        li.artist = LastFM.chart[i].name;
        var span = document.createElement("span");
        span.appendChild(document.createTextNode(LastFM.chart[i].name));
        li.appendChild(span);
        li.onclick = function () {
            document.getElementById('find').value = this.artist;
            App.radio = false;
            App.ultra.currentTrack = '';

            var that = this;
            setTimeout(function () {
                App.suche(that.artist);
            }, 500);

        }
        strGroup.appendChild(li)


    }
    /* var radGroup = document.createElement("div");
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
    radGroup.appendChild(fullList);*/
}



App.showPopup = function (str, time) {
    var time = time || 500;
    var s = document.createElement("div");
    s.className = "popup";
    document.body.appendChild(s);
    s.innerHTML = str;
    var span = document.createElement("span");
    span.id = 'closePopup';
    span.className = "aspan";
    span.innerHTML = "x"
    s.appendChild(span);
    span.onclick = function () {
        s.innerHTML = '';
        s.parentNode.removeChild(s);
    }
    setTimeout(function () {
        App.util.anim(s, "opacity", 0, 400, function () {
            s.innerHTML = '';
            if (s.parentNode) {
                s.parentNode.removeChild(s);
            }
        });
    }, time);
}

App.util.removeTrash = function (str) {
    str = str.replace(/<A(.*?)>/g, '').replace(/<\/A>/g, '').replace(/<a(.*?)>/g, '').replace(/<\/a>/g, '');
    str = str.replace(/<\/span>/g, '').replace(/<span(.*?)>/g, '');
    str = str.replace(/\&quot\;/g, '"');
    str = str.replace(/\n/g, '<br />');
    return str;
}

App.util.changeHTMLSymbols = function (str) {
    str = str.replace(/\&/g, 'and');
    return str;
}

App.util.anim = function (elem, prop, value, time, callback) {
    if (prop == "opacity") {
        if (!elem.style.opacity) { elem.style.opacity = 1 };
        var offset = (value - elem.style.opacity) / Math.floor(time / 10);
        var str = '';
    }
    if (prop == "left") {
        var offset = (value - parseInt(elem.style[prop])) / Math.floor(time / 10);
        var str = 'px';
    }
    var k = Math.floor(time / 10);
    var int2 = setInterval(function q() {
        if (elem) {
            elem.style[prop] = parseFloat(elem.style[prop]) + offset + str;
            k = k - 1;
            if (k == 0) {
                clearInterval(int2);
                if (callback) {
                    callback();
                }
            }
        }
    }, 10)
}

App.util.endScroll = function (div) {
    if (App.state == 'search' && LastFM.album == '' && !App.util.endScroll.start) {
        App.util.endScroll.start = true;
        setTimeout(function myfunction() {
            App.util.endScroll.start = false;
        }, 2000)
        if (LastFM.a2 < 100) {
            LastFM.responceTopTracks(LastFM.tracks, LastFM.a2, LastFM.a2 + 25);
            //LastFM.a2 += 25;
            div.removeScrollBar();
            //div.scrollTo(0);
            div.scrolltop = div.scrollHeight - div.offsetHeight;
            div.scrollValue = div.scrollHeight - div.offsetHeight;
            App.util.addScroll(div);
            div.scrollValue = false;
            div.onmouseover();
        }
    }
}

App.util.addScroll = function (div, fewer) {
    if (navigator.userAgent.indexOf("Phone") != -1 || App.define.customScroll) {
        div.style.overflow = "scroll";
        setTimeout(function () {
            div.style.overflow = "scroll";
        }, 1500)
        if (div.removeScrollBar) {
            div.removeScrollBar();
            div.scrollBar = false;
        }
        return 1;
    }
    if (div.removeScrollBar) {
        div.removeScrollBar();
        div.scrollBar = false;
    }
    div.scrolled = true;
    div.onmouseover = function () {
        clearTimeout(div.scrollTime);
        if (div.scrollBar && div.backOffsetHeight == div.offsetHeight){ return 1 };
        if (div.backOffsetHeight != div.offsetHeight){ div.removeScrollBar() };
        if (div.scrollHeight > div.offsetHeight) {
            //div.updateScroll = setTimeout(div.onmouseover, 500);
            div.backOffsetHeight = div.offsetHeight
            var d = document.createElement("div");
            d.className = "scroll"
            d.id = "sl" + div.id;
            if (fewer) {
                d.style.top = div.offsetTop + 5 + 'px';//
            }else {
                d.style.top = div.offsetTop + 'px';//
            }

            d.style.position = "absolute";
            if (window.getComputedStyle) {
                var zI = window.getComputedStyle(div, null).zIndex;
            }else {
                var zI = div.currentStyle.zIndex;
            }
            if (zI == 'auto') {
                zI = 10;
            }else {
                zI += 10;
            }
            d.style.zIndex = zI;
            div.parentNode.appendChild(d);
            div.scrollBar = d;
            var slider = new Slider({ min: 0, max: div.scrollHeight - div.offsetHeight, direction: 'y', round: 3 }).insertTo('sl' + div.id);
            div.slider = slider;
            slider.setStyle("border", "none");
            slider.setStyle("border-radius", "0px");
            slider.setStyle("width", "8px");
            if (fewer) {
                slider.setStyle("height", div.offsetHeight - 10 + "px");//div.offsetHeight - 25 +
            }else {
                slider.setStyle("height", div.offsetHeight + "px");//div.offsetHeight - 25 +
            }
            if (navigator.userAgent.indexOf("Chrome") != -1 || navigator.userAgent.indexOf("Firefox") != -1) {
                var offset = 13;
            } else if (navigator.userAgent.indexOf("MSIE") != -1) {
                var offset = 13;
            }else {
                var offset = 13;
            }

            if (window.opera) {
                if (div.id == 'textBack' || div.id == 'frendsList') {
                    var offset = (document.documentElement.offsetWidth - document.body.offsetWidth) / 2 + 20
                    d.style.left = div.offsetLeft + div.offsetWidth - offset + 'px';
                }else {
                    if (fewer) {
                        d.style.left = div.offsetLeft + div.offsetWidth - 16 + 'px';
                    }else {
                        d.style.left = div.offsetLeft + div.offsetWidth - 13 + 'px';
                    }
                }
            }else {
                if (fewer) {
                    d.style.left = div.offsetLeft + div.offsetWidth - 16 + 'px';
                }else {
                    d.style.left = div.offsetLeft + div.offsetWidth - offset + 'px';
                }
            }


            if (div.scrollValue || div.scrollValue === 0) {
                slider.setValue(div.scrollValue);
            }else {
                slider.setValue(div.scrollHeight - div.scrollTop - div.offsetHeight);
            }
            var w = function (e) {
                e = e || window.event;
                if (e.wheelDelta) {
                    var delta = e.wheelDelta / 120;
                }else if (e.detail) {
                    var delta = -e.detail / 3;
                }
                var k = 20;
                if (delta > 0) {
                    if (slider.getValue() + delta * k < div.scrollHeight - div.offsetHeight) {
                        slider.setValue(slider.getValue() + delta * k)
                    }
                    else {
                        slider.setValue(div.scrollHeight - div.offsetHeight);
                    }
                } else {
                    if (slider.getValue() + delta * k > 0) {
                        slider.setValue(slider.getValue() + delta * k)
                    }
                    else {
                        slider.setValue(0);
                    }
                }

                scrolling();
                //uppodSend('player1', 'v' + Player.volume.getValue());
                if (e.preventDefault) {
                    e.preventDefault();
                }
                e.returnValue = false;
            }

            d.onmouseover = function () {
                clearTimeout(div.scrollTime);
            }
            d.onmouseout = function () {
                clearTimeout(div.scrollTime);
                div.scrollTime = setTimeout(function () {
                    if (div.scrollBar && div.scrollBar.parentNode) {
                        div.scrollBar.parentNode.removeChild(div.scrollBar);
                        div.scrollBar = null;
                        //if (navigator.userAgent.indexOf("Firefox") != -1) {
                        //    div.removeEventListener("DOMMouseScroll", w, false)
                        //}
                    }
                }, 300)
            }
            var scrolling = function () {
                //d.top = div.scrollHeight - div.offsetHeight - Player.volume.getValue() + 'px';
                if (document.getElementById('menuTracks')) {
                    document.getElementById('menuTracks').style.display = 'none';
                }
                div.scrollTop = div.scrollHeight - div.offsetHeight - slider.getValue();
                clearTimeout(div.scrollTime);
                var that = div;
                //div.scrollValue = slider.getValue();
                /*div.scrollTime = setTimeout(function () {
                    if (that.scrollBar && that.scrollBar.parentNode) {
                        that.scrollBar.parentNode.removeChild(that.scrollBar);
                        that.scrollBar = null;
                        //if (navigator.userAgent.indexOf("Firefox") != -1) {
                        //    div.removeEventListener("DOMMouseScroll", w, false)
                        //}
                    }
                }, 2000);*/
                if (slider.getValue() == 0 && div.id == 'playlist') {
                    App.util.endScroll(div);
                }
            }
            slider.on("change", scrolling);
            if (navigator.userAgent.indexOf("Firefox") == -1) {
                div.onmousewheel = w;
            }else {
                div.w = w;
                div.addEventListener("DOMMouseScroll", w, false);
            }
        }else if (div.scrollBar) {
            div.removeScrollBar();
        }

    }
    div.scrollTo = function (x) {
        if (this.slider) {
            this.slider.setValue(x);
        }
    }
    div.onmouseout = function () {
        clearTimeout(div.scrollTime);
        var that = this;
        div.myMouseOver = false;
        div.scrollTime = setTimeout(function () {
            if (that.scrollBar && that.scrollBar.parentNode) {
                try {
                    that.scrollBar.parentNode.removeChild(that.scrollBar);
                } catch (e) {

                }
                that.scrollBar = null;
                //    if (navigator.userAgent.indexOf("Firefox") != -1) {
                //        div.removeEventListener("DOMMouseScroll", div.w, false)
                //    }
            }else {
                that.scrollBar = null;
                //if (navigator.userAgent.indexOf("Firefox") != -1) {
                //    div.removeEventListener("DOMMouseScroll", div.w, false)
                //}
            }
        }, 300);
    }
    div.removeScrollBar = function () {
        if (this.scrollBar && this.scrollBar.parentNode) {
            try {
                this.scrollBar.parentNode.removeChild(this.scrollBar);
            } catch (e) {

            }
            this.scrollBar = null;
            if (navigator.userAgent.indexOf("Firefox") != -1) {
                this.removeEventListener("DOMMouseScroll", div.w, false)
            }
        }else {
            this.scrollBar = null;
            if (navigator.userAgent.indexOf("Firefox") != -1) {
                this.removeEventListener("DOMMouseScroll", div.w, false)
            }
        }
    }
    div.onmousemove = function () {
        if (div.myMove) { return }
        div.onmouseover();
        div.myMove = true;
        setTimeout(function () {
            div.myMove = false;
        }, 500)
    }


    //div.onmousemove = function () {
    //    clearTimeout(div.scrollTime);
    //    var that = this;
    //    div.scrollTime = setTimeout(function () {
    //        if (that.scrollBar && that.scrollBar.parentNode) {
    //            that.scrollBar.parentNode.removeChild(that.scrollBar);
    //            that.scrollBar = null;
    //            if (navigator.userAgent.indexOf("Firefox") != -1) {
    //                div.removeEventListener("DOMMouseScroll", div.w, false)
    //            }
    //        }
    //    }, 2000);
    //}
}


App.showRadio = document.getElementById("radio").onclick = function () {
    if (!App.loaded){ return 1 }
    document.getElementById("preload").style.display = 'none';
    App.clearAkMenu();
    document.getElementById("radio").className = 'aspanAk';
    App.clearPopup(true);
    var listEl = [];
    var list = document.getElementById("list");
    //list.style.width = "165px"
    //var myTracks = document.getElementById("myTracks");
    //var d = document.getElementById("playlists");
    list.innerHTML = '';
    if (App.define.animation) {
        $(list).slide('in', { direction: 'top' });
    }
    list.style.display = 'block';
    App.util.addScroll(list);

    var sss = true;
    if (App.favoritesRadioList) {
        var div = document.createElement('h3');
        div.innerHTML = 'последние';
        list.appendChild(div);
        for (var i = 0; i < App.favoritesRadioList.length; i++) {
            var div = document.createElement('div');
            if (App.favoritesRadioList[i].logo) {
                var img = document.createElement('img');
                img.src = App.favoritesRadioList[i].logo;
                div.appendChild(img);
            }
            var span = document.createElement('span');
            span.innerHTML = App.favoritesRadioList[i].russName;
            div.appendChild(span);
            div.data = App.favoritesRadioList[i];

            if (App.state == 'radio' && App.stateCurrentNamber == i && !sss) {
                div.className = "currentRadio";
            } else {
                div.className = 'radio';
            }


            if (App.state == 'radio' && App.stateCurrentNamber && sss) {
                sss = false;
                div.className = "currentRadio";
                App.stateCurrentNamber = -1;
            }



            div.onclick = (function (k) {
                return function () {
                    document.getElementById("preload").style.display = 'block';
                    for (var l = 0; l < listEl.length; l++) {
                        listEl[l].className = 'radio';
                    }
                    this.className = "currentRadio";
                    App.stateCurrentNamber = k
                    App.currentRadio = this.data;
                    App.radioListen();
                }
            })(i)

            list.appendChild(div);
            listEl.push(div);
            if (App.currentRadio && (App.favoritesRadioList[i].name == App.currentRadio.name) && App.startRadio) {
                App.startRadio = false;
                div.onclick()
            }

        }
    }
    var div = document.createElement('h3');
    div.innerHTML = 'все радиостанции';
    list.appendChild(div);
    var j = i;
    for (var i=0; i < App.radioList.length; i++) {
        var div = document.createElement('div');
        if (App.radioList[i].logo) {
            var img = document.createElement('img');
            img.src = App.radioList[i].logo;
            div.appendChild(img);
        }
        var span = document.createElement('span');
        span.innerHTML = App.radioList[i].russName;
        div.appendChild(span);
        div.data = App.radioList[i];
        if (App.state == 'radio' && App.stateCurrentNamber == i+j) {
            div.className = "currentRadio";
        } else {
            div.className = 'radio';
        }


        div.onclick = (function (k) {
            return function () {
                document.getElementById("preload").style.display = 'block';
                for (var l = 0; l < listEl.length; l++) {
                    listEl[l].className = 'radio';
                }
                this.className = "currentRadio";
                App.stateCurrentNamber = k
                App.currentRadio = this.data;
                App.radioListen();
            }
        })(i+j)

        list.appendChild(div);
        listEl.push(div);
        if (App.currentRadio && (App.radioList[i].name == App.currentRadio.name) && App.startRadio) {
            App.startRadio = false;
            div.onclick()
        }

    }

    list.style.display = 'block';
}

App.preventMemoryLeak = function () {
    return 1;
    uppodSend("player1", 'stop');
    uppodSend("player1", 'time0');
    uppodSend("player1", "set[radio]:0");
    uppodSend("player1", 'file\:""');
    setTimeout(function () {
        uppodSend("player1", 'file\:' + App.ultra.url);
        uppodSend("player1", 'play');
    }, 200);
    //App.preventMemoryLeakTimeout = setTimeout(App.preventMemoryLeak, 60000 * 30);
}

App.radioListen = function (contin) {
    App.state = 'radio';
    //LastFM.album = '';
    //if (App.radio){ return 1 };
    clearTimeout(LastFM.scronTimout);
    clearInterval(App.s);
    App.clearAkMenu();
    document.getElementById("info").style.display = 'none';
    document.getElementById("radio").className = 'aspanAk';
    App.clearPopup(true);
    VK.callMethod("setLocation", "radio=" + encodeURIComponent(App.currentRadio.name));
    //App.ultra.currentTrack = '';
    clearInterval(App.radioInt);
    App.radio = true;
    App.clearVkFindStack();
    App.vkFind = false;
    if (window.pinnedRadio) {
        window.pinnedRadio(true)
    }
    if (window.isPlay) {
        window.isPlay(true)
    }
    if (window.addJump) {
        window.addJump("radio", App.currentRadio.name, App.currentRadio.russName)
    }
    var div = document.getElementById('playlist');
    //div.style.left = '165px';
    div.innerHTML = '';
    if (App.define.animation) {
        $(div).fade('in');
    }
    div.style.display = 'block';
    App.util.addScroll(div);

    clearTimeout(App.preventMemoryLeakTimeout);
    App.preventMemoryLeakTimeout = setTimeout(App.preventMemoryLeak, 60000 * 30);
    var live = document.getElementById('progLive');
    var load = document.getElementById('progLoad');
    var cont = document.getElementById('prog');
    var len = cont.offsetWidth;
    load.style.width = len + 'px';
    live.style.width = '0px';
    //document.getElementById("data").innerHTML = '0:00 / 0:00';
    document.getElementById("currentTime").innerHTML = "0:00";
    document.getElementById("totalTime").innerHTML = "0:00";



    clearInterval(App.s)
    if (!contin) {
        Player.playlist = [];
        App.ultra.currentTrack = '';

        //document.getElementById('audio').style.display = 'block';
        App.ultra.url = App.currentRadio.url; //'http\:\/\/94.25.53.133:80/ultra-192'; //'http\:\/\/radio.north.kz:8000/ultra-192'; //
        div.innerHTML = '';

        //var img = document.createElement("img");
        //img.src = 'http://vk.hart-flamov.ru/JS/VK/img/continue.png';
        //titleAlbum.appendChild(img);
        //img.id = 'continue';
        //img.title = "Перезапустить радиостанцию"
        //img.onmouseover = function () {
        //    this.src = 'http://vk.hart-flamov.ru/JS/VK/img/continue2.png';
        //}
        //img.onmouseout = function () {
        //    this.src = 'http://vk.hart-flamov.ru/JS/VK/img/continue.png';
        //}
        //img.onclick = function () {
        //    for (var i = 0; i < Player.playlist.length; i++) {
        //        if (Player.playlist[i]) {
        //            Player.playlist[i].div.style.color = 'black';//color = '#00A3EF';
        //        }
        //    }
        //    Player.playlist[Player.playlist.length - 1].div.style.color = '#00A3EF';
        //    var resText = App.ultra.currentTrack.replace(/\n/g, "").replace(/\r/g, "");
        //    var text = resText.split(" - ");
        //    LastFM.artistName = text[0];
        //    LastFM.trackName = text[1];
        //    var scr = document.createElement('script');
        //    scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + LastFM.artistName + '&api_key=809dffc5f629c1d4871323f01379bc0d&autocorrect=1&format=json&callback=LastFM.responceArtistMTv2&lang=ru&qq=' + (new Date()).getTime();
        //    document.body.appendChild(scr);
        //    document.getElementById("titleTrack").innerHTML = resText + "<span id='eq'><img src='http:/\/vk.hart-flamov.ru/JS/VK/img/eq.gif'></span>";
        //    VK.callMethod('setTitle', resText);
        //    Player.currentTrack = App.ultra.currentTrack;
        //    LastFM.currentTrack = Player.currentTrack
        //    //LastFM.scronTimout = setTimeout(LastFM.scrooble, App.scrobTime);
        //    App.radioListen(true);
        //}
        //div.appendChild(titleAlbum);

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
        xhr.open('GET', App.define.urlTags + App.currentRadio.tags + '?' + (new Date()).getTime(), true);
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
                        scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + LastFM.artistName + '&api_key=809dffc5f629c1d4871323f01379bc0d&autocorrect=1&format=json&callback=LastFM.responceArtistMTv2&lang=ru';
                        document.body.appendChild(scr);
                        document.getElementById("titleTrack").innerHTML = resText; //+ "<span id='eq'><img src='http:/\/vk.hart-flamov.ru/JS/VK/img/eq.gif'></span>";
                        VK.callMethod('setTitle', xhr.responseText);
                        var track = document.createElement('div');
                        App.ultra.i++;
                        div.appendChild(track);
                        //track.innerHTML = '<a id="' + 'a' + App.ultra.i + '" class="noA" onclick="return false">' + (App.ultra.i) + '</a>. ' + App.ultra.currentTrack;
                        //track.a = document.getElementById('a' + App.ultra.i);
                        var song = document.createElement("h3");
                        song.innerHTML = '<span class="numberTrack">' + (App.ultra.i) + '</span>. ' + LastFM.trackName;

                        var art = document.createElement("div");
                        art.innerHTML = LastFM.artistName;
                        art.className = "art";
                        track.art = art;
                        track.className = "notFinded";


                        track.appendChild(song);
                        track.appendChild(art);
                        //track.appendChild(span);

                        div.appendChild(track);
                        Player.currentTrack = App.ultra.currentTrack;

                        LastFM.currentTrack = Player.currentTrack;
                        clearTimeout(LastFM.scronTimout);
                        LastFM.scronTimout = setTimeout(LastFM.scrooble, App.scrobTime * 1000);

                        var scr = document.createElement('script');
                        scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=track.search&artist=' + LastFM.artistName + '&track=' + LastFM.trackName + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&limit=1&callback=LastFM.responceCoverTrack&lang=ru';
                        document.body.appendChild(scr);


                        var url = 'http:' + '//ws.audioscrobbler.com/2.0/';
                        var time = Math.round((new Date()).getTime() / 1000);
                        var api_sig = hex_md5("api_key809dffc5f629c1d4871323f01379bc0d" + "artist" + LastFM.artistName + "methodtrack.updateNowPlaying" + "sk" + LastFM.user.sk + 'timestamp' + time + "track" + LastFM.trackName + "e69db535e502129eb7473f0052204099");
                        var post = 'method=track.updateNowPlaying&artist=' + LastFM.artistName + '&timestamp=' + time + '&track=' + LastFM.trackName + '&api_key=809dffc5f629c1d4871323f01379bc0d&api_sig=' + api_sig + '&sk=' + LastFM.user.sk;
                        CROSS.XSS.post(url, post);



                        document.getElementById("find").value = LastFM.artistName;
                        App.ultra.findSong = false;
                        Player.findSong(track);
                    }
                }
            }
        }
        xhr.send(null);
    }
    if (App.currentRadio.tags != '') {
        App.updatePHP()
        App.radioInt = setInterval(App.updatePHP, 20000);
    }
    document.getElementById("playButton").src = "img/pause.png";
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
    var flashvars = { st: "flash/audio53-1229.txt", file: App.ultra.url, uid: "player1" };
    var params = { bgcolor: "#ffffff", allowFullScreen: "true", allowScriptAccess: "always" };
    var attributes = { id: "player1", name: "player" };
    swfobject.embedSWF("flash/uppod.swf", "player", "0", "0", "10.0.0", false, flashvars, params, attributes);
    document.getElementById("preload").style.display = 'none';
    for (var k = 0; k < App.favoritesRadioList.length; k++) {
        if (App.currentRadio.name == App.favoritesRadioList[k].name) {
            for (var k2 = k; k2 < App.favoritesRadioList.length - 1; k2++) {
                App.favoritesRadioList[k2] = App.favoritesRadioList[k2 + 1];
            }
        }
    }
    App.favoritesRadioList.unshift(App.currentRadio);
    App.favoritesRadioList.length = 5;
    if (JSON && localStorage) {
        localStorage.setItem("mer_favRadio", encodeURI(JSON.stringify(App.favoritesRadioList)));
    }
}

document.getElementById('groups').onclick = function () {
    App.showGroups()
}

App.showGroups = function (str) {
    if (!App.loaded){ return 1 }
    App.clearAkMenu();

    document.getElementById("groups").className = 'aspanAk';
    App.user.groups =
    document.getElementById("preload").style.display = 'block';
    App.clearPopup(true);


    VK.api('groups.get', { extended: 1 }, function (data) {
        document.getElementById("preload").style.display = 'none';
        var listEl = [];
        var list = document.getElementById("list");
        //list.style.width = "165px"
        //var myTracks = document.getElementById("myTracks");
        //var d = document.getElementById("playlists");
        App.user.groups = data.response;
        list.innerHTML = '';
        if (App.define.animation) {
            $(list).slide('in', { direction: 'top' });
        }
        list.style.display = 'block';
        App.util.addScroll(list);

        for (var i = 1; i < App.user.groups[0]; i++) {
            var div = document.createElement('div');
            div.innerHTML = App.user.groups[i].name;
            div.data = App.user.groups[i];
            if (App.state == 'group' && App.stateCurrentNamber == i) {
                div.className = "currentGroup";
            } else {
                div.className = 'group';
            }

            div.onclick = (function (k) {
                return  function () {
                    LastFM.group = this.data;
                    document.getElementById("preload").style.display = 'block';
                    for (var l = 0; l < listEl.length; l++) {
                        listEl[l].className = 'group';
                    }
                    this.className = "currentGroup";
                    App.stateCurrentNamber = k
                    //App.state = 'group';
                    App.titleGroup = this.data.name;
                    //App.loadMyTrack("groups", this.data.gid)
                    this.data.div = this;
                    App.showPlaylistsGroups(this.data)
                }
            })(i)
            list.appendChild(div);
            listEl.push(div);
            if (str == div.data.gid) {
                div.onclick();
            }
        }
    })

    //listEl[0].onclick();
}
App.showPlaylistsGroups = function (data2) {
    document.getElementById("preload").style.display = 'block';
    VK.api('audio.getAlbums', { gid: data2.gid,count:100 }, function (data) {
        App.findPlaylists = true;
        if (data.response && data.response[0] != 0) {
            var d = document.getElementById("playlists");
            d.innerHTML = '';
            d.style.display = 'block';
            var h2 = document.createElement("h2");
            h2.innerHTML = "плэйлисты";
            d.appendChild(h2);
            App.util.addScroll(d);
            document.getElementById("preload").style.display = 'none';
            var div = document.createElement("div");
            div.innerHTML = 'все аудиозаписи';
            div.onclick = function () {
                document.getElementById("preload").style.display = 'block';
                document.getElementById('playlists').style.display = 'none';
                App.loadMyTrack("groups", data2.gid);
                if (d.removeScrollBar) {
                    d.removeScrollBar()
                }
            }
            d.appendChild(div);

            for (var i = 1; i <= data.response[0]; i++) {
                var div = document.createElement("div");
                div.innerHTML = data.response[i].title;
                div.dataText = data.response[i];
                div.onclick = function () {
                    document.getElementById("preload").style.display = 'block';
                    var album = this.dataText.album_id;
                    App.loadMyTrack("groups", data2.gid, this.dataText.album_id);
                    if (d.removeScrollBar) {
                        d.removeScrollBar()
                    }
                    document.getElementById('playlists').style.display = 'none';
                }
                d.appendChild(div);
            }
            var span = document.createElement('span');
            span.innerHTML = 'х';
            span.className = 'aspan';
            span.id = 'closePlaylists';
            span.onclick = function () {
                document.getElementById('playlists').style.display = 'none';
                data2.div.className = 'group';
                if (d.removeScrollBar) {
                    d.removeScrollBar()
                }
                App.showGroups();
            }
            d.appendChild(span);
        }else {
            App.loadMyTrack("groups", data2.gid)
        }
    })
}

document.getElementById('frendsTracks').onclick = function () {
    App.showFrends()
}
App.showFrends = function (str) {
    if (!App.loaded){ return 1 }
    App.clearAkMenu();
    document.getElementById("frendsTracks").className = 'aspanAk';
    document.getElementById("preload").style.display = 'none';
    App.clearPopup(true);
    var listEl = [];
    var list = document.getElementById("list");
    //list.style.width = "165px"
    //var myTracks = document.getElementById("myTracks");
    //var d = document.getElementById("playlists");
    list.innerHTML = '';
    if (App.define.animation) {
        $(list).slide('in', { direction: 'top' });
    }
    list.style.display = 'block';
    App.util.addScroll(list);

    for (var i = 0; i < App.user.frends.length; i++) {
        var div = document.createElement('div');
        var img = document.createElement('img');
        img.src = App.user.frends[i].photo;
        img.className = 'fotoFrend';
        div.appendChild(img);
        var span = document.createElement('span');
        span.innerHTML = App.user.frends[i].first_name;
        div.appendChild(span);
        div.data = App.user.frends[i];
        if (App.state == 'frend' && App.stateCurrentNamber == i) {
            div.className = "currentFrend";
        }else {
            div.className = 'frend';
        }
        div.onclick = (function (k) {
            return function () {
                LastFM.frend = this.data;
                LastFM.fr = true;
                //alert(this.data.uid + ' - ' + this.data.first_name);
                document.getElementById("preload").style.display = 'block';
                for (var l = 0; l < listEl.length; l++) {
                    listEl[l].className = 'frend';
                }
                App.stateCurrentNamber = k
                this.className = "currentFrend";
                this.data.div = this;
                App.titleFrend = this.data.first_name;
                App.showPlaylistsFrends(this.data);
                //App.loadMyTrack("frend", this.data.uid)
            }
        })(i)
        list.appendChild(div);
        listEl.push(div);
        if (str == div.data.uid) {
            div.onclick();
        }
    }
    //listEl[0].onclick();
}

App.showPlaylistsFrends = function (data2) {
    document.getElementById("preload").style.display = 'block';
    VK.api('audio.getAlbums', { uid: data2.uid,count:100 }, function (data) {
        App.findPlaylists = true;
        if (data.response && data.response[0] != 0) {
            var d = document.getElementById("playlists");
            d.innerHTML = '';
            d.style.display = 'block';
            var h2 = document.createElement("h2");
            h2.innerHTML = "плэйлисты";
            d.appendChild(h2);
            App.util.addScroll(d);
            document.getElementById("preload").style.display = 'none';
            var div = document.createElement("div");
            div.innerHTML = 'все аудиозаписи';
            div.onclick = function () {
                document.getElementById("preload").style.display = 'block';
                document.getElementById('playlists').style.display = 'none';
                App.loadMyTrack("frend", data2.uid);
                if (d.removeScrollBar) {
                    d.removeScrollBar()
                }
            }
            d.appendChild(div);

            for (var i = 1; i <= data.response[0]; i++) {
                var div = document.createElement("div");
                div.innerHTML = data.response[i].title;
                div.dataText = data.response[i];
                div.onclick = function () {
                    document.getElementById("preload").style.display = 'block';
                    var album = this.dataText.album_id;
                    App.loadMyTrack("frend", data2.uid, this.dataText.album_id);
                    document.getElementById('playlists').style.display = 'none';
                    if (d.removeScrollBar) {
                        d.removeScrollBar()
                    }
                }
                d.appendChild(div);
            }
            var span = document.createElement('span');
            span.innerHTML = 'х';
            span.className = 'aspan';
            span.id = 'closePlaylists';
            span.onclick = function () {
                document.getElementById('playlists').style.display = 'none';
                data2.div.className = 'frend';
                if (d.removeScrollBar) {
                    d.removeScrollBar()
                }
                App.showFrends();
            }
            d.appendChild(span);
        }else {
            App.loadMyTrack("frend", data2.uid)
        }
    })
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
    h2.innerHTML = "отправить в…";
    d.appendChild(h2);
    if (!d.scrolled) {
        App.util.addScroll(d, true);
    }

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
    span.innerHTML = 'х';
    span.className = 'aspan';
    span.id = 'closePlaylists';
    span.onclick = function () {
        document.getElementById('playlists').style.display = 'none';
    }
    d.appendChild(span);
}

App.loadMyTrackFromMyWall = function () {
    //LastFM.album = '';
    App.MT = true;
    App.currentRadio = '';
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
            //div.style.left = '165px';
            div.style.display = 'block';
            Player.playlist = [];
            App.util.addScroll(div);
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

                            var song = document.createElement("h3");
                            song.innerHTML = '<span class="numberTrack">' + (i + 1) + '</span>. ' + tracks[i].title;

                            var art = document.createElement("div");
                            art.innerHTML = tracks[i].artist;
                            art.className = "art";
                            track.art = art;



                            track.appendChild(song);
                            track.appendChild(art);

                            //track.innerHTML = '<a class="noA" onclick="return false" href="' + tracks[i].url + '">' + (i + 1) + '</a>. ' + "<span id=aid" + i + ">" + tracks[i].artist + ' - ' + tracks[i].title + "</span>";
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
                        if (App.define.autoplay) {

                            Player.play(tracks[0].url);
                        }

                        document.getElementById("preload").style.display = 'none';
                    }
                }
            })
        }
    })
};

App.showPlaylists = function (str) {
    var str = str || "";
    document.getElementById("preload").style.display = 'none';
    App.clearPopup(true);
    var listEl = [];
    App.clearAkMenu();
    document.getElementById("myTracks").className = 'aspanAk';
    var list = document.getElementById("list");
    //list.style.width = "165px"
    //var myTracks = document.getElementById("myTracks");
    //var d = document.getElementById("playlists");
    list.innerHTML = '';
    if (!list.scrolled) {
        App.util.addScroll(list);
    }

    var div = document.createElement("div");
    div.innerHTML = "все аудиозаписи";
    if (App.state == "I" && App.stateCurrentNamber == 0) {
        div.className = "elementOfListAk"
    } else {
        div.className = "elementOfList"
    }
    div.onclick = function () {
        App.currentPlaylist = null;
        document.getElementById("preload").style.display = 'block';
        for (var l = 0; l < listEl.length; l++) {
            listEl[l].className = 'elementOfList';
        }
        this.className = "elementOfListAk"
        App.loadMyTrack("my");
        App.stateCurrentNamber = 0;
    }
    list.appendChild(div);
    listEl.push(div);
    if (str == 'all') {
        div.onclick();
    }

    var div = document.createElement("div");
    div.innerHTML = "неотсортированные";
    if (App.state == "I" && App.stateCurrentNamber == 1) {
        div.className = "elementOfListAk"
    } else {
        div.className = "elementOfList"
    }

    div.onclick = function () {
        App.currentPlaylist = null;
        document.getElementById("preload").style.display = 'block';
        for (var l = 0; l < listEl.length; l++) {
            listEl[l].className = 'elementOfList';
        }
        this.className = "elementOfListAk"
        App.loadMyTrack("my", "noSort");
        App.stateCurrentNamber = 1;
    }
    list.appendChild(div);
    listEl.push(div);

    var div = document.createElement("div");
    if (App.state == "I" && App.stateCurrentNamber == 2) {
        div.className = "elementOfListAk"
    } else {
        div.className = "elementOfList"
    }
    div.innerHTML = "аудиозаписи со стены";

    div.onclick = function () {
        App.currentPlaylist = null;
        document.getElementById("preload").style.display = 'block';
        for (var l = 0; l < listEl.length; l++) {
            listEl[l].className = 'elementOfList';
        }
        this.className = "elementOfListAk"
        App.loadMyTrackFromMyWall();
        App.stateCurrentNamber = 2;
    }
    list.appendChild(div);
    listEl.push(div);

    //if (App.playlists.length > 0) {
    //    var div = document.createElement("hr");
    //    div.className = 'sep';
    //    d.appendChild(div);
    //}
    for (var i = 0; i < App.playlists.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = App.playlists[i].title;
        div.dataText = App.playlists[i];
        if (App.state == "I" && App.stateCurrentNamber == i + 3) {
            div.className = "elementOfListAk"
        } else {
            div.className = "elementOfList"
        }
        div.onclick = (function (k) {
            return function () {
                document.getElementById("preload").style.display = 'block';
                App.currentPlaylist = this.dataText;
                for (var l = 0; l < listEl.length; l++) {
                    listEl[l].className = 'elementOfList';
                }
                this.className = "elementOfListAk";
                App.stateCurrentNamber = k + 3;
                App.titleAlbum = this.dataText.title;
                App.loadMyTrack("my", this.dataText.album_id);
            }
        })(i)
        list.appendChild(div);
        listEl.push(div);
        if (str == div.dataText.album_id) {
            div.onclick();
        }
    }
    if (App.define.animation) {
        $(list).slide('in', { direction: 'top' });
    }
    list.style.display = 'block';
}


document.getElementById("myTracks").onclick = function () {
    if (!App.loaded){ return 1 };
    App.clearAkMenu();
    document.getElementById("myTracks").className = 'aspanAk';
    document.getElementById("preload").style.display = 'block';
    if (App.playlists && App.playlists.length > 0) {
        App.showPlaylists();
    }else if (App.playlists && App.playlists.length == 0) {
        App.currentPlaylist = null;
        App.showPlaylists();
    } else {
        VK.api('audio.getAlbums', { count: 100 }, function (data) {
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

App.loadMyTrack = function (str, album_id, album) {

    App.currentRadio = "";
    clearTimeout(App.preventMemoryLeakTimeout);
    //App.clearAkMenu(true);
    document.getElementById("preload").style.display = 'block';
    App.my = false;
    Player.firstPlay = false;
    App.clearPopup(true);
    if (str == "my") {
        App.state = 'I';
        LastFM.fr = false;
        document.getElementById("myTracks").className = 'aspanAk';
        App.MT = true;
        App.my = true;
        var album_id = album_id || "";
        var uid = App.uid || App.parse("viewer_id");
        if (album_id) {
            VK.callMethod("setLocation", "audio=" + album_id)
            if (window.addJump) {
                window.addJump("audio", album_id, App.titleAlbum)
            }
        } else {
            VK.callMethod("setLocation", "audio=all");
            if (window.addJump) {
                window.addJump("audio", "all");
            }
        }

    } else if (str == "groups") {
        //document.getElementById("frendsTracks").className = 'aspanAk';
        var gid = album_id;
        VK.callMethod("setLocation", "group=" + album_id);
        App.state = 'group'
        App.MT = true;
        album_id = album;
        if (window.addJump) {
            window.addJump("group", album_id, App.titleGroup)
        }
    }else {
        var uid = album_id;
        App.state = 'frend';
        VK.callMethod("setLocation", "frend=" + album_id)
        App.MT = true
        album_id = album;
        if (window.addJump) {
            window.addJump("frend", album_id, App.titleFrend)
        }
    }

    App.vkFind = false;
    clearTimeout(LastFM.scronTimout);
    App.clearVkFindStack();
    function q(data) {

        //document.getElementById("preload").style.display = 'none';
        //LastFM.tracks = data.album.tracks.track;
        var div = document.getElementById('playlist');
        //div.style.left = '165px';
        div.innerHTML = '';
        if (App.define.animation) {
            $(div).fade('in');
        }
        div.style.display = 'block';

        App.util.addScroll(div);
        //var titleAlbum = document.createElement('h3');
        //titleAlbum.className = 'titleAlbum';
        //if (!LastFM.fr) {
        //    if (App.currentPlaylist) {
        //        titleAlbum.innerHTML = 'Мои аудиозаписи ( ' + App.currentPlaylist.title + ' )';
        //    }
        //    else if (album_id == 'noSort') {
        //        titleAlbum.innerHTML = 'Неотсортированные аудиозаписи';
        //    }
        //    else {
        //        titleAlbum.innerHTML = 'Все мои аудиозаписи';
        //    }
        //} else {
        //    titleAlbum.innerHTML = "Аудиозаписи " + LastFM.frend.first_name;
        //}
        //div.appendChild(titleAlbum);

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
                    App.showPopup("Плэйлист пуст");
                    document.getElementById("preload").style.display = 'none';
                    return 1;
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

                var song = document.createElement("h3");
                song.innerHTML = '<span class="numberTrack">' + (i + 1) + '</span>. ' + tracks[i].title;
                song.id = "aid" + i;

                var art = document.createElement("div");
                art.innerHTML = tracks[i].artist;
                art.className = "art";
                art.id = "art" + i;
                track.art = art;

                track.appendChild(song);
                track.appendChild(art);

                //track.innerHTML = '<a class="noA" onclick="return false" href="' + tracks[i].url + '">' + (i + 1) + '</a>. ' + "<span id=aid" + i + ">" + tracks[i].artist + ' - ' + tracks[i].title + "</span>";
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



                    var opt = document.createElement("img");
                    opt.src = 'img/options_icon_black2.png';
                    opt.track = track;
                    opt.data = tracks[i];
                    opt.i = i;
                    opt.spanPlay = config.firstChild;
                    opt.onclick = function (e) {
                        if (this.track.menu) {
                            delete this.track.menu;
                            if (document.getElementById('menuTracks')) {
                                document.getElementById('menuTracks').parentNode.removeChild(document.getElementById('menuTracks'));
                                this.track.className = "finded";
                                this.track.onmouseover();
                            }

                            if (e.stopPropagation) {
                                e.stopPropagation();
                            }else {
                                e.сancelBubble = true;
                            }
                            return 1;
                        }else {
                            if (document.getElementById('menuTracks')) {
                                document.getElementById('menuTracks').track.className = "finded";
                                delete document.getElementById('menuTracks').track.menu;
                                document.getElementById('menuTracks').track.onmouseout();
                                document.getElementById('menuTracks').parentNode.removeChild(document.getElementById('menuTracks'));
                            }
                        }

                        if (document.getElementById('menuTracks')) {
                            document.getElementById('menuTracks').parentNode.removeChild(document.getElementById('menuTracks'));
                        }
                        var div = document.createElement("div");
                        div.className = 'options';
                        var y = e.clientY + this.offsetHeight - (e.offsetY ? e.offsetY : e.layerY) - 3;
                        div.style.top = y + 'px';//this.track.offsetTop + this.track.offsetHeight - this.track.parentNode.scrollTop + 'px';
                        //div.style.left = 585 + 'px';//this.track.offsetLeft + this.track.offsetWidth - 4
                        div.id = 'menuTracks';
                        div.style.display = "block";
                        document.body.appendChild(div);
                        this.track.menu = div;
                        div.track = this.track;
                        div.track.className = "Myfinded";
                        div.onmouseover = function () {
                            var that = this;
                            clearTimeout(that.interval);
                            //that.interval = setTimeout(function () {
                            //    if (that) {
                            //        that.parentNode.removeChild(that);
                            //        delete that.track;
                            //    }
                            //}, 4000);
                        }
                        div.onmouseout = function () {
                            var that = this;
                            clearTimeout(that.interval);
                            that.interval = setTimeout(function () {
                                if (that) {
                                    if (that.parentNode) {
                                        that.parentNode.removeChild(that);
                                    }
                                    delete that.track.menu;
                                    that.track.className = "finded";
                                    that.track.onmouseout();
                                }
                            }, 1000);
                        }
                        document.body.appendChild(div);
                        div.onclick = function () {
                            delete div.track.menu
                        }
                        var span = document.createElement("div");
                        span.innerHTML = "редактировать";
                        span.className = 'varMenu';
                        div.appendChild(span);
                        span.data = this.data;
                        span.i = this.i;
                        span.track = this.track;
                        span.div = this.track.menu;
                        span.onclick = function () {
                            App.editTrack(this);
                            div.parentNode.removeChild(div);
                            this.track.className = "finded";
                            delete this.track.menu;
                            this.track.onmouseout();
                        }

                        var span = document.createElement("div");
                        span.innerHTML = "переместить…";
                        span.className = 'varMenu';
                        div.appendChild(span);
                        span.spanPlay = this.spanPlay;
                        span.data = this.data;
                        span.i = this.i;
                        span.track = this.track;
                        span.div = this.track.menu;
                        span.onclick = function () {
                            this.track.className = "finded";

                            document.getElementById("preload").style.display = 'block';
                            App.showPlaylistsForMove(this, all);
                            div.parentNode.removeChild(div);
                            delete this.track.menu;
                            this.track.onmouseout();
                        }


                        var span = document.createElement("div");
                        span.innerHTML = "удалить";
                        span.className = 'varMenu';
                        div.appendChild(span);
                        span.data = this.data;
                        span.i = this.i;
                        span.track = this.track;
                        span.div = this.track.menu;
                        span.onclick = function () {
                            var that = this;
                            this.track.className = "finded";

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

                                                data.div.style.color = 'black';

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
                                                        //if (this.triangle) {
                                                        //    this.triangle.style.borderLeft = '10px solid white';
                                                        //}
                                                        if (track.config) {
                                                            track.config.style.display = 'block';
                                                        }
                                                        if (track.div.menu) {
                                                            clearTimeout(track.div.menu.interval);
                                                            track.div.menu.interval = setTimeout(function () {
                                                                if (track.div.menu) {
                                                                    track.div.menu.parentNode.removeChild(track.div.menu);
                                                                    delete track.div.menu;
                                                                }
                                                            }, 1000);
                                                        }
                                                    }
                                                })(tracks[that.i], that.i)

                                                data.div.onmouseout = (function (track, i) {
                                                    return function () {
                                                        //if (this.triangle) {
                                                        //    this.triangle.style.borderLeft = '10px solid black';
                                                        //}
                                                        if (track.config) {
                                                            track.config.style.display = 'none';
                                                        }
                                                        if (track.div.menu) {
                                                            clearTimeout(track.div.menu.interval);
                                                            track.div.menu.interval = setTimeout(function () {
                                                                if (track.div.menu) {
                                                                    if (track.div.menu.parentNode) {
                                                                        track.div.menu.parentNode.removeChild(track.div.menu);
                                                                    }
                                                                    delete track.div.menu;
                                                                }
                                                            }, 1000);
                                                        }
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
                            div.parentNode.removeChild(div);
                            delete this.track.menu;
                            this.track.onmouseout();
                        }


                        if (e.stopPropagation) {
                            e.stopPropagation();
                        }else {
                            e.сancelBubble = true;
                        }
                    }

                    config.appendChild(opt);


                    track.appendChild(config);
                }
                div.appendChild(track);
                tracks[i].div = track;
                tracks[i].span = span;

                tracks[i].config = config;


                tracks[i].div.onmouseover = (function (track, i) {
                    return function () {
                        //if (this.triangle) {
                        //    this.triangle.style.borderLeft = '10px solid white';
                        //}
                        if (track.config) {
                            track.config.style.display = 'block';
                        }
                        if (track.div.menu) {
                            clearTimeout(track.div.menu.interval);
                            //track.div.menu.interval = setTimeout(function () {
                            //    track.div.className = "finded";
                            //    if (track.div.menu) {
                            //        track.div.menu.parentNode.removeChild(track.div.menu);
                            //        delete track.div.menu;
                            //    }
                            //    track.div.onmouseout();
                            //}, 1000);
                        }

                    }
                })(tracks[i], i)

                tracks[i].div.onmouseout = (function (track, i) {
                    return function () {
                        if (track.div.menu) {
                            clearTimeout(track.div.menu.interval);
                            track.div.menu.interval = setTimeout(function () {
                                track.div.className = "finded";
                                if (track.div.menu) {

                                    if (track.div.menu.parentNode) {
                                        track.div.menu.parentNode.removeChild(track.div.menu);
                                    }

                                    delete track.div.menu;
                                }
                                track.div.onmouseout();
                            }, 1000);
                            return 1
                        }
                        this.art.style.color = "#ccc";
                        //if (this.triangle) {
                        //    this.triangle.style.borderLeft = '10px solid black';
                        //}
                        if (track.config) {
                            track.config.style.display = 'none';
                        }
                        if (track.div.menu) {
                            clearTimeout(track.div.menu.interval);
                            track.div.menu.interval = setTimeout(function () {
                                track.div.className = "finded";
                                if (track.div.menu) {

                                    if (track.div.menu.parentNode) {
                                        track.div.menu.parentNode.removeChild(track.div.menu);
                                    }

                                    delete track.div.menu;
                                }
                                track.div.onmouseout();
                            }, 1000);
                        }
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
                App.radioInt = false;
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
            if (App.define.autoplay) {
                Player.play(tracks[0].url);
            }else {
                Player.firstPlay = true;
            }
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
        if (uid) {
            VK.api("audio.get", { uid: uid /*album_id: album_id*/ }, function (data) {
                if (data.response) {
                    q(data);
                }
            });
        }else if (gid) {
            VK.api("audio.get", { gid: gid /*album_id: album_id*/ }, function (data) {
                if (data.response) {
                    q(data);
                }
            });
        }
    }
}


App.editTrack = function (img) {
    App.clearPopup();
    var div = document.getElementById("editTrack");
    div.innerHTML = '';
    div.style.display = 'block';

    var h2 = document.createElement("h2");
    h2.innerHTML = 'редактировать трек';
    div.appendChild(h2);

    var d = document.createElement("div");
    div.appendChild(d);

    var artist = document.createElement("input");
    artist.type = 'text';
    artist.value = img.data.artist;
    d.appendChild(artist);
    d.appendChild(document.createTextNode("Исполнитель"));


    d.appendChild(document.createElement("br"));

    var title = document.createElement("input");
    title.type = 'text';
    title.value = img.data.title;
    d.appendChild(title);
    d.appendChild(document.createTextNode("Название трека"));


    d.appendChild(document.createElement("br"));
    d.appendChild(document.createElement("br"));

    var ok = document.createElement("input");
    ok.type = 'button';
    ok.value = 'ИЗМЕНИТЬ'
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
                document.getElementById("aid" + img.i).innerHTML = title.value;
                document.getElementById("art" + img.i).innerHTML = artist.value;
                if (img.i == Player.currentNumber) {
                    LastFM.artistName = artist.value;
                    LastFM.trackName = title.value;
                    document.getElementById('titleTrack').innerHTML = artist.value + ' - ' + title.value;
                    var scr = document.createElement('script');
                    scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + Player.currentTrack.artist + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&callback=LastFM.responceArtistMTv2&lang=ru';
                    document.body.appendChild(scr);
                    //Player.findSong(img.data.div);
                }
            }
        });
    }

    var cancel = document.createElement("input");
    cancel.type = 'button';
    cancel.value = 'ОТМЕНА'
    cancel.id = 'cancelEditButton';
    d.appendChild(cancel);

    cancel.onclick = function () {
        document.getElementById('editTrack').style.display = 'none';
    }

    //d.innerHTML += '<div>Название <input type="text" id="titleNewPlaylist"/></div>'
    //d.innerHTML += '<div><input type="button" id="createNewPlaylist" value="Создать"/></div>'
}


App.saveUser = function () {
    LastFM.scrobling = true;
    LastFM.userName = document.getElementById('username').value;
    LastFM.password = document.getElementById('password').value;

    App.define.showBio = document.getElementById("showBio").checked;
    App.define.animation = document.getElementById("showAnimation").checked;
    App.define.likeEQLove = document.getElementById("likeLove").checked;
    App.define.autoplay = document.getElementById("autoplay").checked;
    App.define.customScroll = document.getElementById("customScroll").checked;
    if (Player.scrobTimeSlider && Player.scrobTimeSlider.getValue && Player.scrobTimeSlider.getValue()) {
        App.scrobTime = Player.scrobTimeSlider.getValue();
    }
    if (App.define.likeEQLove) {
        var str = 'yes';
    }else {
        var str = 'no';
    }
    if (App.define.animation) {
        var str2 = 1;
    }else {
        var str2 = 0;
    }
    if (App.define.autoplay) {
        var str3 = 1;
    }else {
        var str3 = 0;
    }
    if (App.define.customScroll) {
        var str4 = 1;
    }else {
        var str4 = 0;
    }
    if (localStorage) {
        localStorage.setItem("mer_likeLove", str)
        localStorage.setItem("mer_LastFMusername", LastFM.userName);
        localStorage.setItem("mer_LastFMpassword", LastFM.password);
        localStorage.setItem("mer_LastFMshowBio", App.define.showBio);
        localStorage.setItem("mer_showAnimation", str2);
        localStorage.setItem("mer_scrobTime", App.scrobTime);
        localStorage.setItem("mer_autoplay", str3);
        localStorage.setItem("mer_customScroll", str4);
    }
    if (LastFM.userName != '' && LastFM.password != '') {
        LastFM.getKey(LastFM.userName, LastFM.password);
    }
    document.getElementById("settingsScreen").style.display = "none";
    App.popupLastFM = false;
}
document.getElementById("finding").onclick = function () {
    if (!App.loaded){ return 1 }
    if (App.searchState == "группа") {
        var q = document.getElementById("find").value;
        if (q == 'Искать группу' || q == "") {
            App.showPopup("Введите название группы");
        }else {
            App.suche(q);
        }
    }else if (App.searchState == "тэг") {
        var q = document.getElementById("find").value;
        if (q == 'Искать тэг' || q == "") {
            App.showPopup("Введите тэг");
        }else {
            LastFM.findTag(q);
        }
    }else  if (App.searchState == "vk.com") {
        var q = document.getElementById("find").value;
        if (q == 'Искать вконтакте' || q == "") {
            App.showPopup("Введите запрос");
        }else {
            App.searchVK(q);
        }
    }
}
document.getElementById("volumeButton").onclick = function () {
    if (!App.loaded){ return 1 }
    var t = this;
    if (t.noSound) {
        t.noSound = false;
        Player.volume.setValue(t.levelSound);
        t.src = "img/volume_icon.png";
    }else {
        t.noSound = true;
        t.levelSound = Player.volume.getValue();
        t.src = "img/volume_off_icon.png";
        Player.volume.setValue(0);
    }
}

App.suche = function (q) {
    if (!App.loaded){ return 1 }
    App.state = 'search';
    Player.firstPlay = false;
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
    App.clearAkMenu();
    document.getElementById("find").className = 'aspanAk';
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
    scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + q + '&api_key=809dffc5f629c1d4871323f01379bc0d&autocorrect=1&format=json&callback=LastFM.responceArtistv2&lang=ru';
    document.body.appendChild(scr);


}

App.clearPopup = function (q) {
    document.getElementById("textBack").style.display = 'none';
    document.getElementById("playlists").style.display = 'none';
    document.getElementById("newPlaylistDialog").style.display = 'none';
    document.getElementById("editTrack").style.display = 'none';
    document.getElementById("settingsScreen").style.display = 'none';
    App.popupLastFM = false;
    if (q) {
        document.getElementById("startup").style.display = 'none';
    }
}

document.getElementById('addTrack').onclick = function () {
    if (!App.loaded){ return 1 }
    document.getElementById("preload").style.display = 'block';
    App.addingTrackNum = 3;
    if (App.addingTrack) {
        App.showPopup("Добавление трека уже выполняется");
        return 1;
    }
    if (!App.findPlaylists) {
        VK.api('audio.getAlbums', { count: 100 }, function (data) {
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
    h2.innerHTML = "Добавить в плэйлист…";
    d.appendChild(h2);

    App.util.addScroll(d, true);
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
    span.innerHTML = 'х';
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
                        App.myTracksNotChanged = false;
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
    if (!App.loaded){ return 1 }
    var d = document.getElementById('frendsList');
    d.style.display = 'block';
    d.scrollTop = 0;
    d.innerHTML = '';
    //        <span class="aspan" id="closeFrendsList">Закрыть</span>
    var span = document.createElement('span');
    span.innerHTML = 'x';
    span.className = 'aspan';
    span.id = 'closeFrendsList';
    span.onclick = function () {
        document.getElementById('frendsList').style.display = 'none';
        if (document.getElementById('frendsList').scrollBar) {
            document.getElementById('frendsList').scrollBar.parentNode.removeChild(document.getElementById('frendsList').scrollBar);
        }

    }
    d.appendChild(span);
    App.util.addScroll(d, true);
    var h3 = document.createElement('h3');
    h3.innerHTML = 'Отправить информацию о группе и лучшие песни на стену';
    d.appendChild(h3);

    var div = document.createElement('div');
    var img = document.createElement('img');
    img.src = App.user[0].photo;
    div.appendChild(img);
    var span = document.createElement('span');
    span.innerHTML = "Мне";
    div.appendChild(span);
    div.data = App.user[0];
    div.className = 'frend';
    div.onclick = function () {
        document.getElementById("preload").style.display = 'block';
        var str = '';
        for (var j = 0; j < 9; j++) {
            if (Player.playlist[j]) {
                str += 'audio' + Player.playlist[j].owner_id + "_" + Player.playlist[j].aid + ',';
            }
        }
        //str += 'audio' + Player.playlist[8].owner_id + "_" + Player.playlist[8].aid;
        VK.api('wall.post', { owner_id: this.data.uid, message: LastFM.artistBioSummary + '( http\://vkontakte.ru/meridianweb#artist=' + encodeURIComponent(LastFM.artistName) + ' )', attachments: str }, function (data) {
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
    d.appendChild(div);


    for (var i = 0; i < App.user.frends.length; i++) {
        var div = document.createElement('div');
        var img = document.createElement('img');
        img.src = App.user.frends[i].photo;
        div.appendChild(img);
        var span = document.createElement('span');
        span.innerHTML = App.user.frends[i].first_name;
        div.appendChild(span);
        div.data = App.user.frends[i];
        div.className = 'frend';
        div.onclick = function () {
            document.getElementById("preload").style.display = 'block';
            var str = '';
            for (var j = 0; j < 9; j++) {
                if (Player.playlist[j]) {
                    str += 'audio' + Player.playlist[j].owner_id + "_" + Player.playlist[j].aid + ',';
                }
            }
            //str += 'audio' + Player.playlist[8].owner_id + "_" + Player.playlist[8].aid;
            VK.api('wall.post', { owner_id: this.data.uid, message: LastFM.artistBioSummary + '( http\://vkontakte.ru/meridianweb#artist=' + encodeURIComponent(LastFM.artistName) + ' )', attachments: str }, function (data) {
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
        d.appendChild(div);
    }
}

App.addTrackWall = document.getElementById('addTrackWall').onclick = function () {

    //alert(JSON.stringify(Player.currentTrack));
    var d = document.getElementById('frendsList');
    d.scrollTop = 0;
    d.innerHTML = '';
    d.style.display = 'block';
    //        <span class="aspan" id="closeFrendsList">Закрыть</span>
    var span = document.createElement('span');
    span.innerHTML = 'x';
    span.className = 'aspan';
    span.id = 'closeFrendsList';
    span.onclick = function () {
        document.getElementById('frendsList').style.display = 'none';
        if (document.getElementById('frendsList').scrollBar) {
            document.getElementById('frendsList').scrollBar.parentNode.removeChild(document.getElementById('frendsList').scrollBar);
        }
    }
    d.appendChild(span);
    var h3 = document.createElement('h3');
    h3.innerHTML = 'отправить сообщение';
    d.appendChild(h3);
    var text = document.createElement('textarea');
    text.id = 'messageForWall';
    d.appendChild(text);
    var h3 = document.createElement('h3');
    h3.innerHTML = 'и аудиозапись';
    d.appendChild(h3);

    var div = document.createElement('div');
    var img = document.createElement('img');
    img.src = App.user[0].photo;
    div.appendChild(img);
    var span = document.createElement('span');
    span.innerHTML = "Мне";
    div.appendChild(span);
    div.data = App.user[0];
    div.className = 'frend';
    div.onclick = function () {
        document.getElementById("preload").style.display = 'block';
        VK.api('wall.post', { owner_id: this.data.uid, message: document.getElementById('messageForWall').value, attachments: "audio" + Player.currentTrack.owner_id + "_" + Player.currentTrack.aid }, function (data) {
            if (data.response) {
                document.getElementById("preload").style.display = 'none';
                App.showPopup('Аудиозапись успешно добавлена');
            }
        })

        //alert(this.data.uid + ' - ' + this.data.first_name);

        document.getElementById('frendsList').style.display = 'none';
    }
    d.appendChild(div);

    App.util.addScroll(d, true);
    for (var i = 0; i < App.user.frends.length; i++) {
        var div = document.createElement('div');
        var img = document.createElement('img');
        img.src = App.user.frends[i].photo;
        div.appendChild(img);
        var span = document.createElement('span');
        span.innerHTML = App.user.frends[i].first_name;
        div.appendChild(span);
        div.data = App.user.frends[i];
        div.className = 'frend';
        div.onclick = function () {
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
        d.appendChild(div);
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
                App.util.addScroll(div, true);
                var h3 = document.createElement('h3');
                h3.innerHTML = Player.currentTrack.title;
                div.appendChild(h3);
                var p = document.createElement('div');
                p.innerHTML = data.response.text.replace(/\n/g, "<br/>")
                div.appendChild(p);
                var span = document.createElement('span');
                span.innerHTML = 'x';
                span.className = 'aspan';
                span.id = 'closeTextBack';
                document.getElementById("preload").style.display = 'none';
                span.onclick = function () {
                    document.getElementById('textBack').style.display = 'none';
                    this.parentNode.removeChild(this);
                    if (document.getElementById('textBack').scrollBar) {
                        document.getElementById('textBack').scrollBar.parentNode.removeChild(document.getElementById('textBack').scrollBar);
                    }
                }
                document.body.appendChild(span);
            }
            else {
                document.getElementById("preload").style.display = 'none';
                App.showPopup('Не найдено')
            }
        })
    } else {
        VK.api('audio.search', { q: App.util.changeHTMLSymbols(Player.currentTrack.artist + ' ' + Player.currentTrack.title), auto_complete: 1, sort: 2, count: 8, lyrics: 1 }, function (data) {
            if (data.response && data.response[0] != 0) {
                Player.currentTrack.lyrics_id = data.response[1].lyrics_id
                VK.api("audio.getLyrics", { lyrics_id: Player.currentTrack.lyrics_id }, function (data) {
                    if (data.response && data.response.text) {
                        var div = document.getElementById("textBack");
                        div.style.display = 'block'
                        App.util.addScroll(div, true);
                        div.innerHTML = '';
                        var h3 = document.createElement('h3');
                        h3.innerHTML = Player.currentTrack.title;
                        div.appendChild(h3);
                        var p = document.createElement('div');
                        p.innerHTML = data.response.text.replace(/\n/g, "<br/>")
                        div.appendChild(p);
                        var span = document.createElement('span');
                        span.innerHTML = 'x';
                        span.className = 'aspan';
                        span.id = 'closeTextBack';
                        document.getElementById("preload").style.display = 'none';
                        span.onclick = function () {
                            document.getElementById('textBack').style.display = 'none';
                            this.parentNode.removeChild(this);
                            if (document.getElementById('textBack').scrollBar) {
                                document.getElementById('textBack').scrollBar.parentNode.removeChild(document.getElementById('textBack').scrollBar);
                            }

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
    if (!App.loaded){ return 1 }
    var d = document.getElementById("newPlaylistDialog");
    d.innerHTML = '';
    d.style.display = 'block';

    var h2 = document.createElement("h2");
    h2.innerHTML = 'новый плэйлист';
    d.appendChild(h2);

    d.innerHTML += '<div id="titleNewPlaylistDiv">Название <input type="text" id="titleNewPlaylist"/></div>'
    d.innerHTML += '<div id="createNewPlaylistDiv"><input type="button" id="createNewPlaylist" value="СОЗДАТЬ"/><input type="button" id="cancelNewPlaylist" value="ОТМЕНА"/></div>'
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

    document.getElementById("cancelNewPlaylist").onclick = function () {
        document.getElementById("newPlaylistDialog").style.display = 'none';
    }
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
        document.getElementById('random').src = 'img/notshuffle_icon.png';

    } else {
        Player.rand = true;
        document.getElementById('random').src = 'img/shuffle_icon.png';
    }
    var r = Player.rand ? 1 : 0;
    if (localStorage) {
        localStorage.setItem("mer_rand", r)
    }
}

Player.repeat = document.getElementById('repeat').onclick = function () {
    if (Player.rep) {
        Player.rep = false;
        document.getElementById('repeat').src = 'img/notrepeat_icon.png';
    } else {
        Player.rep = true;
        document.getElementById('repeat').src = 'img/repeat_icon.png';
    }
}


Player.div = document.getElementById('audio');
Player.uppod = document.getElementById('player1');

Player.toggle = document.getElementById('playButton').onclick = function () {
    if (App.radio) {
        if (uppodGet("player1", 'getstatus') == -1 || uppodGet("player1", 'getstatus') == 0) {
            uppodSend("player1", 'play');
            App.updatePHP();
            App.radioInt = setInterval(App.updatePHP, 20000);
            document.getElementById('playButton').src = 'img/pause.png';
            if (window.isPlay) {
                window.isPlay(true)
            }
        } else if (uppodGet("player1", 'getstatus') == 1) {
            uppodSend("player1", 'stop');
            clearInterval(App.radioInt);
            if (window.isPlay) {
                window.isPlay()
            }
            document.getElementById('playButton').src = 'img/play.png';; //
        }
    } else {
        uppodSend("player1", 'toggle');
        if (uppodGet("player1", 'getstatus') == 0 || uppodGet("player1", 'getstatus') == -1) {
            document.getElementById('playButton').src = 'img/play.png'; //
            if (window.isPlay) {
                window.isPlay()
            }
        }
        else {
            document.getElementById('playButton').src = 'img/pause.png';
            if (window.isPlay) {
                window.isPlay(true)
            }
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
    if (Player.init) {
        uppodSend('player1', 'v' + Player.volume.getValue());
    }
    if (Player.volume.getValue() > 0) {
        document.getElementById("volumeButton").src = "img/volume_icon.png";
    }else {
        document.getElementById("volumeButton").src = "img/volume_off_icon.png";
    }
    if (Player.volume.getValue()) {
        document.getElementById("levelVolume").innerHTML = Player.volume.getValue();
    }else {
        document.getElementById("levelVolume").innerHTML = 0;
    }
    if (localStorage) {
        localStorage.setItem("mer_volume", Player.volume.getValue());
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
    //if (Player.rand && !Player.firstPlay) {
    //    Player.firstPlay = true;
    //    Player.next();
    //    return 1;
    //}
    Player.firstPlay = true;
    if (window.pinnedRadio) {
        window.pinnedRadio(false);
    }
    if (window.isPlay) {
        window.isPlay(true)
    }
    document.getElementById("preload").style.display = 'none';
    App.currentRadio = '';
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
    document.getElementById('titleTrack').innerHTML = LastFM.artistName + ' - ' + LastFM.trackName; //+ "<span id='eq'><img src='http:/\/vk.hart-flamov.ru/JS/VK/img/eq.gif'></span>";
    VK.callMethod('setTitle', LastFM.artistName + ' - ' + LastFM.trackName);
    document.getElementById("textTrack").enabled = false;
    document.getElementById('playButton').src = 'img/pause.png';

    /*    for (var i = 0; i < Player.playlist.length; i++) {
        if (Player.playlist[i]) {
            Player.playlist[i].div.style.color = 'black';
        }
    }
    Player.currentTrack.div.style.color = '#00A3EF';*/
    if (document.getElementById("trainge")) {
        document.getElementById("trainge").parentNode.removeChild(document.getElementById("trainge"));
    }

    var trainge = document.createElement("span");
    var a = document.createElement("a");
    // || App.uid == '6396349'
    if (App.uid == '3424338') {
        a.href = url;
    }
    trainge.id = "trainge";
    trainge.appendChild(a);
    Player.currentTrack.div.triangle = trainge;
    Player.currentTrack.div.appendChild(trainge);
    /*var scr = document.createElement('script');
    scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=library.addTrack&artist=' + LastFM.artistName + '&track=' + Player.currentTrack.title + '&api_key=809dffc5f629c1d4871323f01379bc0d&api_sig=' +api_sig + '&sk='+LastFM.user.sk+'&callback=LastFM.responceAddTrack&format=json';*/
    //document.body.appendChild(scr);

    var time = Math.round((new Date()).getTime() / 1000);
    var api_sig = hex_md5("api_key809dffc5f629c1d4871323f01379bc0d" + "artist" + LastFM.artistName + "methodtrack.updateNowPlaying" + "sk" + LastFM.user.sk + 'timestamp' + time + "track" + LastFM.trackName + "e69db535e502129eb7473f0052204099");
    var post = 'method=track.updateNowPlaying&artist=' + LastFM.artistName + '&timestamp=' + time + '&track=' + LastFM.trackName + '&api_key=809dffc5f629c1d4871323f01379bc0d&api_sig=' + api_sig + '&sk=' + LastFM.user.sk;

    var scr = document.createElement('script');
    scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=track.search&artist=' + LastFM.artistName + '&track=' + LastFM.trackName + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&limit=1&callback=LastFM.responceCoverTrack&lang=ru';
    document.body.appendChild(scr);


    if (Player.init) {
        uppodSend("player1", 'file\:' + url);
        uppodSend("player1", 'play');
        var volume = document.getElementById('volume');
        var valueVolume = document.getElementById('valueVolume');
        /*var curVolume = uppodGet("player1", 'getv');
        valueVolume.style.height = volume.offsetHeight * (curVolume / 100) + 'px';*/
        LastFM.currentTrack = Player.currentTrack;
        LastFM.scronTimout = setTimeout(LastFM.scrooble, App.scrobTime * 1000);

        var url = 'http:' + '//ws.audioscrobbler.com/2.0/';
        CROSS.XSS.post(url, post);
        document.getElementById("find").value = LastFM.artistName;
        //if (App.MT) {

        //}
        if (App.MT) {
            var scr = document.createElement('script');
            scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + LastFM.artistName + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&callback=LastFM.responceArtistMTv2&lang=ru';
            document.body.appendChild(scr);
        }
        if (notSrcoll){ return 1 }
        cont = document.getElementById('playlist');
        if (Player.currentNumber < 8) {
            var h = 0;
        } else {
            var h = Player.playlist[Player.currentNumber].div.offsetTop - 65;
        }
        //cont.scrollTop = h - 27;
        var anim = function () {
            cont.scrollTop += anim.step;
            anim.i++;
            if (anim.i == anim.steps) {
                clearInterval(anim.interval)
            }
        }
        anim.h = h - 45;
        anim.steps = 8;
        anim.i = 0;
        anim.step = (h - cont.scrollTop) / anim.steps;
        if (App.define.animation) {
            anim.interval = setInterval(anim, 50);
        }else {
            cont.scrollTop = h - 45;
        }
        if (document.getElementById("playlist").scrollValue) {
            document.getElementById("playlist").scrollValue = false;
        }
        return 1;
    }
    var flashvars = { st: "flash/audio53-1229.txt", file: url, uid: "player1" };
    var params = { bgcolor: "#ffffff", allowFullScreen: "true", allowScriptAccess: "always" };
    var attributes = { id: "player1", name: "player" };
    swfobject.embedSWF("flash/uppod.swf", "player", "0", "0", "10.0.0", false, flashvars, params, attributes);
    var url = 'http:' + '//ws.audioscrobbler.com/2.0/';
    LastFM.currentTrack = Player.currentTrack;
    LastFM.scronTimout = setTimeout(LastFM.scrooble, App.scrobTime * 1000);
    CROSS.XSS.post(url, post);
    if (App.MT) {
        var scr = document.createElement('script');
        scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + LastFM.artistName + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&callback=LastFM.responceArtistMTv2&lang=ru';
        document.body.appendChild(scr);
    }
    if (App.MT) {
        document.getElementById("find").value = LastFM.artistName;
    }
    if (notSrcoll){ return 1 }
    var cont = document.getElementById('playlist');
    if (Player.currentNumber < 10) {
        var h = 0;
    } else {
        var h = Player.playlist[Player.currentNumber].div.offsetTop - 65;
    }
    //cont.scrollTop = h - 27;
    var anim = function () {
        cont.scrollTop += anim.step;
        anim.i++;
        if (anim.i == anim.steps) {
            clearInterval(anim.interval)
        }
    }
    anim.h = h - 45;
    anim.steps = 8;
    anim.i = 0;
    anim.step = (h - cont.scrollTop) / anim.steps;
    if (App.define.animation) {
        anim.interval = setInterval(anim, 50);
    }else {
        cont.scrollTop = h - 45;
    }
    if (document.getElementById("playlist").scrollValue) {
        document.getElementById("playlist").scrollValue = false;
    }
    //document.getElementById("player1").style.display = 'none';
}

/*Player.stop = document.getElementById("stopButton").onclick = function () {
    uppodStopAll();
    clearTimeout(LastFM.scronTimout);
    clearInterval(App.s)
    clearInterval(App.radioInt);
    document.getElementById('playButton').style.backgroundImage = 'url(http://vk.hart-flamov.ru/JS/VK/img/play.png)';
    if (document.getElementById("eq")) {
        document.getElementById("eq").innerHTML = '';
        //document.getElementById("eq").innerHTML = "<img src='http:/\/vk.hart-flamov.ru/JS/VK/img/eq.gif'>";
    }
}*/


Player.q = function () {
    if (App.radio || !Player.init) { return 1 };
    var fullTime = fullTime || Player.currentTrack.duration || uppodGet("player1", "getimed");
    var currentTime = uppodGet("player1", "getime");
    var fullMin = Math.floor(fullTime / 60);
    var currentMin = Math.floor(currentTime / 60);
    var fullSec = Math.floor(fullTime - fullMin * 60);
    var currentSec = Math.floor(currentTime - currentMin * 60);
    //document.getElementById("currentTime").innerHTML = currentMin + ':' + (currentSec.toString().length == 1 ? '0' + currentSec : currentSec) + ' / ' + fullMin + ':' + (fullSec.toString().length == 1 ? '0' + fullSec : fullSec);
    document.getElementById("currentTime").innerHTML = currentMin + ':' + (currentSec.toString().length == 1 ? '0' + currentSec : currentSec);
    document.getElementById("totalTime").innerHTML = fullMin + ':' + (fullSec.toString().length == 1 ? '0' + fullSec : fullSec);
    //progress-bar with load and live %
    var cont = document.getElementById('prog');
    var len = cont.offsetWidth;
    var live = document.getElementById('progLive');
    var load = document.getElementById('progLoad');
    var curLoad = uppodGet("player1", 'getprocent') / 100;
    var curLive = currentTime / fullTime;
    if (curLive > 1) { curLive = 1 }
    load.style.width = len * curLoad + 'px';
    live.style.width = len * curLive + 'px';
    if (fullTime - currentTime < 1) { Player.next(); return 1; }
}


Player.findSong = function (div) {
    //Player.firstPlay = false;
    Player.findSong.div = div;
    for (var i = 0; i < Player.playlist.length; i++) {
        if (Player.playlist[i]) {
            Player.playlist[i].div.style.color = 'black';//color = '#00A3EF';
        }
    }
    VK.api('audio.search', { q: App.util.changeHTMLSymbols(LastFM.artistName + ' ' + LastFM.trackName), auto_complete: 1, sort: 2, count: 8, lyrics: 1 }, function (data) {
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
            //            div.a.href = data.response[1].url;
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

            if (document.getElementById("trainge")) {
                document.getElementById("trainge").parentNode.removeChild(document.getElementById("trainge"));
            }


            var trainge = document.createElement("span");
            trainge.id = "trainge";
            div.triangle = trainge;
            div.appendChild(trainge);

            //Player.currentTrack.div.style.color = '#00A3EF';
            var h = Player.currentTrack.div.offsetTop;
            cont = document.getElementById('playlist');
            //cont.scrollTop = h - 27;
            var anim = function () {
                cont.scrollTop += anim.step;
                anim.i++;
                if (anim.i == anim.steps) {
                    clearInterval(anim.interval)
                }
            }
            anim.h = h - 45;
            anim.steps = 8;
            anim.i = 0;
            anim.step = (h - cont.scrollTop) / anim.steps;
            if (App.define.animation) {
                anim.interval = setInterval(anim, 50);
            }else {
                cont.scrollTop = h - 45;
            }
        } else if (data.error) {
            //alert(JSON.stringify(data))
            setTimeout(function () { Player.findSong(Player.findSong.div) }, 500)
        } else if (data.response && data.response[0] == 0) {
            Player.findSongWithoutLyrics(div)
        }

    })
}

Player.findSongWithoutLyrics = function (div) {
    //Player.firstPlay = false;
    VK.api('audio.search', { q: App.util.changeHTMLSymbols(LastFM.artistName + ' ' + LastFM.trackName), auto_complete: 1, sort: 2, count: 8 }, function (data) {
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
            //div.a.href = data.response[1].url;
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

            if (document.getElementById("trainge")) {
                document.getElementById("trainge").parentNode.removeChild(document.getElementById("trainge"));
            }


            var trainge = document.createElement("span");
            trainge.id = "trainge";
            div.triangle = trainge;
            div.appendChild(trainge);


            var h = Player.currentTrack.div.offsetTop;
            cont = document.getElementById('playlist');
            //cont.scrollTop = h - 27;
            var anim = function () {
                cont.scrollTop += anim.step;
                anim.i++;
                if (anim.i == anim.steps) {
                    clearInterval(anim.interval)
                }
            }
            anim.h = h - 45;
            anim.steps = 8;
            anim.i = 0;
            anim.step = (h - cont.scrollTop) / anim.steps;
            if (App.define.animation) {
                anim.interval = setInterval(anim, 50);
            }else {
                cont.scrollTop = h - 45;
            }
        }else if (data.response && data.response[0] == 0) {
            if (document.getElementById("trainge")) {
                document.getElementById("trainge").parentNode.removeChild(document.getElementById("trainge"));
            }


            var trainge = document.createElement("span");
            trainge.id = "trainge";
            div.triangle = trainge;
            div.appendChild(trainge);
        } else if (data.error) {
            //alert(JSON.stringify(data))
            setTimeout(function () { Player.Player.findSongWithoutLyrics(div) }, 1500)
        }
    })
}

Player.firstFind = function () {
    //Player.firstPlay = false;
    if (App.radio) {
        uppodSend("player1", 'stop');
        uppodSend("player1", 'time0');
        App.radio = false;
        clearInterval(App.radioInt);
        App.ultra.currentTrack = '';
        App.s = setInterval(Player.q, 1000);
    }
    App.clearVkFindStack();
    App.vkFindStack = [];
    App.vkFind = true;
    Player.currentNumber = 0;

    Player.preFind = true;
    VK.api('audio.search', { q: App.util.changeHTMLSymbols(LastFM.artistName), sort: 2, count: 200, lyrics: 1, sort: 2 }, function q(data) {
        //
        if (data.response && data.response[0] != 0 && App.vkFind == true) {
            var q = function (i) {
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
                //LastFM.tracks[i].div.a.href = data.response[k].url;
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
                if (App.define.autoplay) {
                    if (i == 0) {
                        setTimeout((function (i, k) {
                            return function () {
                                Player.currentTrack = data.response[k];
                                Player.currentNumber = i;
                                Player.play(data.response[k].url)
                            }
                        })(i, k), 250)

                    };
                }

                return true;
            }
            for (var i = 0; i < LastFM.tracks.length; i++) {
                if (LastFM.tracks[i].div && !LastFM.tracks[i].find)
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
        App.s = setInterval(Player.q, 1000);
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
        if (LastFM.tracks[i].find || !LastFM.tracks[i].div) { continue };
        l++;
        App.vkFindStack.push(setTimeout((function (i) {
            return function q() {
                if (!LastFM.tracks[i] || !LastFM.tracks[i].name || App.vkFind == false) { return 1 }
                VK.api('audio.search', { q: App.util.changeHTMLSymbols(LastFM.artistName + ' ' + LastFM.tracks[i].name), sort: 2, count: 25, lyrics: 1 }, function (data) {
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
                        LastFM.tracks[i].find = true;
                        //LastFM.tracks[i].div.a.href = data.response[k].url;
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
                        if (App.define.autoplay) {
                            if (i == 0) {
                                Player.currentTrack = data.response[k];
                                Player.currentNumber = i;
                                Player.play(data.response[k].url)
                            };

                        }
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
        App.s = setInterval(Player.q, 1000);
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
                VK.api('audio.search', { q: App.util.changeHTMLSymbols(LastFM.tracks[i].artist.name + ' ' + LastFM.tracks[i].name), sort: 2, count: 8, lyrics: 1 }, function (data) {
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
                        //LastFM.tracks[i].div.a.href = data.response[k].url;
                        LastFM.tracks[i].div.onclick = (function (track, i) {
                            return function () {
                                Player.currentTrack = track;
                                Player.currentNumber = i;
                                Player.play(track.url, true);
                            }
                        })(data.response[k], i)
                        //Player.playlist.push(data.response[1])
                        Player.playlist[i] = data.response[k];
                        if (App.define.autoplay) {
                            if (i == 0) {
                                Player.currentTrack = data.response[k];
                                Player.currentNumber = i;
                                Player.play(data.response[k].url)
                            };

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
            if (arguments.callee.col > 3) {
                $(LastFM.tracks[i].div).fade('out');
                return 1
            };
            if (!LastFM.tracks[i] || !LastFM.tracks[i].name || App.vkFind == false) { return 1 }
            VK.api('audio.search', { q: App.util.changeHTMLSymbols(LastFM.tracks[i].artist_name + ' ' + LastFM.tracks[i].name), sort: 2, count: 8 }, function (data) {
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
                    //         LastFM.tracks[i].div.a.href = data.response[k].url;
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
                }else if (data.response && data.response[0] == 0) {
                    App.vkFindStack.push(setTimeout(function () { q2(i) }, 500));
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
            VK.api('audio.search', { q: App.util.changeHTMLSymbols(LastFM.artistName + ' ' + LastFM.tracks[i].name), sort: 2, count: 8 }, function (data) {
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
                    //                LastFM.tracks[i].div.a.href = data.response[k].url;
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

Player.changeAlbum = function (album, tag) {
    //alert(album.data.name);
    LastFM.album = '42';
    setTimeout(function () {
        var scr = document.createElement('script');
        scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=album.getInfo&artist=' +  album.data.artist.name + '&album=' + album.data.name + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&callback=LastFM.responceTracks&lang=ru';
        document.body.appendChild(scr)
    }, 100)
}

LastFM.responceAddTrack = function (data) {
    //findTag
    //  alert(JSON.stringify(data))
}

LastFM.findTag = function (q) {
    document.getElementById("preload").style.display = 'block';
    setTimeout(function () {
        var scr = document.createElement('script');
        scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=tag.getInfo&tag=' + q + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&callback=LastFM.responceTagInfo&lang=ru';
        document.body.appendChild(scr)
    }, 170)



    //setTimeout(function () {
    //    var scr = document.createElement('script');
    //    scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=tag.getTopTracks&tag=' + LastFM.currentTag + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&callback=LastFM.responceTagTracks&lang=ru&limit=50';
    //    document.body.appendChild(scr)
    //}, 770)
}

LastFM.responceTagInfo = function (data) {
    if (!data.error && data.tag && data.tag.name) {
        LastFM.tagName = LastFM.currentTag = data.tag.name
        VK.callMethod("setLocation", "tag=" + encodeURIComponent(data.tag.name));
        if (window.addJump) {
            window.addJump("tag", data.tag.name, data.tag.name);
        }
        if (document.getElementById("search1")) {
            document.getElementById("search1").onclick();
        }
        document.getElementById("preload").style.display = 'none';
        App.state = 'tag';
        App.MT = false;
        App.radio = false;
        App.clearAkMenu(true);
        App.clearPopup(true);
        document.getElementById("finding").className = "aspanAk"
        if (Player.init) {
            uppodSend("player1", 'stop');
        }
        clearInterval(App.radioInt);
        var div = document.getElementById('info');
        App.util.addScroll(div);
        div.innerHTML = '';
        //div.style.left = '632px'
        //div.style.width = '175px'
        div.style.display = 'block';
        var bio = document.createElement('div');
        bio.id = "bio";

        if (data.tag && data.tag.wiki && data.tag.wiki.summary) {
            LastFM.bio = App.util.removeTrash(data.tag.wiki.summary);
        }

        var h5 = document.createElement("h5");
        h5.innerHTML = data.tag.name.toLowerCase();
        bio.appendChild(h5);
        //bio.appendChild(document.createTextNode(text))
        div.appendChild(bio);

        for (var k = 0; k < App.lastTags.length; k++) {
            if (LastFM.currentTag == App.lastTags[k]) {
                for (var k2 = k; k2 < App.lastTags.length - 1; k2++) {
                    App.lastTags[k2] = App.lastTags[k2 + 1];
                }
            }
            if (typeof (App.lastTags[k]) != "string") {
                App.lastTags[k] = "";
            }
        }
        App.lastTags.unshift(decodeURIComponent(LastFM.currentTag));
        App.lastTags.length = 25;

        if (localStorage) {
            localStorage.setItem("mer_lastTags", App.lastTags);
        }

        setTimeout(function () {
            var scr = document.createElement('script');
            scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=tag.getSimilar&tag=' + LastFM.currentTag + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&callback=LastFM.responceTagSim&lang=ru&limit=5';
            document.body.appendChild(scr)
        }, 170)

        setTimeout(function () {
            var scr = document.createElement('script');
            scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=tag.getTopAlbums&tag=' + LastFM.currentTag + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&callback=LastFM.responceTagAlbums&lang=ru&limit=50';
            document.body.appendChild(scr)
        }, 470)
        //

    }else {
        App.showPopup("Введите тэг")
    }
}

LastFM.responceTagArtist = function (data) {
    var div = document.getElementById("bio");
    var sim = document.createElement('div');
    sim.id = 'similar2'
    sim.style.display = 'block';
    if (data.topartists && data.topartists.artist) {
        var simArt = data.topartists.artist;

        for (var i = 0; i < simArt.length; i++) {
            var li = document.createElement('div');
            var img = document.createElement("img");
            img.src = simArt[i].image[3]["#text"];
            li.appendChild(img);
            li.artist = simArt[i].name;
            var span = document.createElement("span");
            span.appendChild(document.createTextNode(simArt[i].name));
            li.appendChild(span);
            li.onclick = function () {
                document.getElementById('find').value = this.artist;
                App.radio = false;
                App.ultra.currentTrack = '';
                App.suche(this.artist);
            }
            sim.appendChild(li)
        }

    }
    div.appendChild(sim);
}

LastFM.responceTagSim = function (data) {
    var div = document.getElementById("bio");
    if (data.similartags && data.similartags.tag) {
        var tags = document.createElement('div');
        var tag = data.similartags.tag;
        tags.id = "tags";
        tags.style.display = "block";
        for (var i = 0; i < 4; i++) {
            var li = document.createElement('span');
            li.innerHTML = tag[i].name + ", ";
            li.onclick = function () {
                /*document.getElementById('find').value = this.innerHTML;
                    App.radio = false;
                    App.ultra.currentTrack = '';
                    App.suche(this.innerHTML);*/
                App.radio = false;
                App.ultra.currentTrack = '';
                LastFM.findTag(this.innerHTML)
            }
            tags.appendChild(li)
        }
        div.appendChild(tags);
    }
    setTimeout(function () {
        var scr = document.createElement('script');
        scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=tag.getTopArtists&tag=' + LastFM.currentTag + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&callback=LastFM.responceTagArtist&lang=ru&limit=5';
        document.body.appendChild(scr)
    }, 70)
}

LastFM.responceTagAlbums = function (data) {
    //alert(JSON.stringify(data));

    document.getElementById("preload").style.display = 'none';
    App.clearPopup();
    var listEl = [];
    var list = document.getElementById("list");
    //list.style.width = "165px"
    //var myTracks = document.getElementById("myTracks");
    //var d = document.getElementById("playlists");
    if (App.define.animation) {
        $(list).slide('in', { direction: "top" });
    }
    list.innerHTML = '';
    list.style.display = 'block';
    App.util.addScroll(list);


    var album = document.createElement('div');
    album.innerHTML = '25 лучших песен';
    album.className = 'best';
    album.onclick = function () {
        for (var l = 0; l < listEl.length; l++) {
            if (l > 2) {
                listEl[l].className = 'album';
            }else {
                listEl[l].className = 'best';
            }
        }
        this.className = "currentBest"
        var scr = document.createElement('script');
        scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=tag.getTopTracks&tag=' + LastFM.tagName + '&api_key=809dffc5f629c1d4871323f01379bc0d&limit=25&format=json&callback=LastFM.responceTagTracks&lang=ru';
        //scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=artist.getTopAlbums&artist=' + LastFM.artistName + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&callback=LastFM.responceAlbums&lang=ru';
        document.body.appendChild(scr)
    }
    list.appendChild(album);
    listEl.push(album);
    album.onclick();




    var album = document.createElement('div');
    album.innerHTML = '50 лучших песен';
    album.className = 'best';
    album.onclick = function () {
        for (var l = 0; l < listEl.length; l++) {
            if (l > 2) {
                listEl[l].className = 'album';
            }else {
                listEl[l].className = 'best';
            }
        }
        this.className = "currentBest"
        var scr = document.createElement('script');
        scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=tag.getTopTracks&tag=' + LastFM.tagName + '&api_key=809dffc5f629c1d4871323f01379bc0d&limit=50&format=json&callback=LastFM.responceTagTracks&lang=ru';
        //scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=artist.getTopAlbums&artist=' + LastFM.artistName + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&callback=LastFM.responceAlbums&lang=ru';
        document.body.appendChild(scr)
    }
    list.appendChild(album);
    listEl.push(album);

    var album = document.createElement('div');
    album.innerHTML = '100 лучших песен';
    album.className = 'best';
    album.onclick = function () {
        for (var l = 0; l < listEl.length; l++) {
            if (l > 2) {
                listEl[l].className = 'album';
            }else {
                listEl[l].className = 'best';
            }
        }
        this.className = "currentBest"
        var scr = document.createElement('script');
        scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=tag.getTopTracks&tag=' + LastFM.tagName + '&api_key=809dffc5f629c1d4871323f01379bc0d&limit=100&format=json&callback=LastFM.responceTagTracks&lang=ru';
        //scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=artist.getTopAlbums&artist=' + LastFM.artistName + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&callback=LastFM.responceAlbums&lang=ru';
        document.body.appendChild(scr)
    }
    list.appendChild(album);
    listEl.push(album);



    if (data.topalbums && data.topalbums.album) {
        for (var i = 0; i < data.topalbums.album.length; i++) {
            var div = document.createElement('div');
            var img = document.createElement('img');
            img.src = data.topalbums.album[i].image[2]['#text'];
            //h4.innerHTML =
            div.appendChild(img);
            var span = document.createElement('span');
            span.innerHTML = data.topalbums.album[i].name;
            div.appendChild(span);
            div.data = data.topalbums.album[i];
            div.className = 'album';

            div.onclick = function () {
                for (var l = 0; l < listEl.length; l++) {
                    if (l > 2) {
                        listEl[l].className = 'album';
                    }else {
                        listEl[l].className = 'best';
                    }
                }
                this.className = "currentAlbum"

                Player.changeAlbum(this, true);
            }
            list.appendChild(div)
            listEl.push(div);
        }
    }
    else {
        var album = document.createElement('div');
        album.innerHTML = 'Альбомов не найдено';
        div.appendChild(album)
    }
}

LastFM.responceTagTracks = function (data) {
    document.getElementById("preload").style.display = 'none';
    LastFM.tracks = data.toptracks.track;
    //LastFM.album = '';
    var div = document.getElementById('playlist');
    //div.style.left = '165px';
    div.innerHTML = '';
    if (App.define.animation) {
        $(div).fade('in');
    }
    div.style.display = 'block';
    App.util.addScroll(div);


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


            var song = document.createElement("h3");
            song.innerHTML = '<span class="numberTrack">' + (i + 1) + '</span>. ' + LastFM.tracks[i].name;

            var art = document.createElement("div");
            art.innerHTML = LastFM.tracks[i].artist.name;
            art.className = "art";
            track.art = art;
            track.className = "notFinded";

            track.appendChild(song);
            track.appendChild(art);
            track.appendChild(span);

            div.appendChild(track);

            //track.innerHTML = '<a id="' + 'aL' + (i + 1) + '" class="noA" onclick="return false">' + (i + 1) + '</a>. ' + LastFM.tracks[i].name;
            track.a = document.getElementById('aL' + (i + 1));


            track.appendChild(span)
            //track.innerHTML = (i + 1) + '. ' + LastFM.tracks[i].name;

            LastFM.tracks[i].div = track;
            LastFM.tracks[i].span = span;

        }
        App.clearVkFindStack();
        Player.findTrackByTag()

        //Player.findTrack()
    } else {
        var track = document.createElement('div')
        track.innerHTML = 'Аудиозаписей не найдено'
        div.appendChild(track)
    }


    /*if (data.error) {
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
    };*/
}




LastFM.responceTopTracks = function (data, a1, a2) {
    var a1 = a1 || 0;
    var a2 = a2 || 25;
    LastFM.a2 = a2;
    if (!MB.find) {
        document.getElementById("preload").style.display = 'none';
    }
    var div = document.getElementById('playlist');
    if (a2 == 25) {
        LastFM.tracks = data.toptracks.track;
        div.innerHTML = '';
        Player.playlist = [];
    }else {
        LastFM.tracks = data;
    }
    LastFM.album = "";
    //div.style.left = '165px';
    if (App.define.animation) {
        $(div).fade('in');
    }
    div.style.display = 'block';
    App.util.addScroll(div);


    if (LastFM.tracks && LastFM.tracks[0]) {
        for (var i = a1; i < a2; i++) {
            var track = document.createElement('div');
            var fullTime = LastFM.tracks[i].duration;
            var fullMin = Math.floor(fullTime / 60);
            var fullSec = Math.floor(fullTime - fullMin * 60);
            var time = fullMin + ':' + (fullSec.toString().length == 1 ? '0' + fullSec : fullSec);
            var span = document.createElement('span');
            span.innerHTML = time;
            span.className = 'duration';


            var song = document.createElement("h3");
            song.innerHTML = '<span class="numberTrack">' + (i + 1) + '</span>. ' + LastFM.tracks[i].name;

            var art = document.createElement("div");
            art.innerHTML = LastFM.tracks[i].artist.name;
            art.className = "art";
            track.art = art;
            track.className = "notFinded";


            track.appendChild(song);
            track.appendChild(art);
            track.appendChild(span);

            div.appendChild(track);

            //track.innerHTML = '<a id="' + 'aL' + (i + 1) + '" class="noA" onclick="return false">' + (i + 1) + '</a>. ' + LastFM.tracks[i].name;
            track.a = document.getElementById('aL' + (i + 1));


            track.appendChild(span)
            //track.innerHTML = (i + 1) + '. ' + LastFM.tracks[i].name;

            LastFM.tracks[i].div = track;
            LastFM.tracks[i].span = span;

        }
        App.clearVkFindStack();
        setTimeout(Player.firstFind, 100)

        //Player.findTrack()
    } else {
        var track = document.createElement('div')
        track.innerHTML = 'Аудиозаписей не найдено'
        div.appendChild(track)
    }
}
LastFM.responceArtistMTv2 = function (data) {

    if (App.define.showBio && LastFM.backArtist != data.artist.name) {
        if (!data.error && data.artist.name && data.artist.bio.summary != "") {

            //document.getElementById("title").innerHTML = data.artist.name + '<a title="Перейти на страницу исполнителя на Last.fm" target="_blank" href="' + data.artist.url + '"> >> </a>';
            if (data.artist.name) {
                LastFM.q = data.artist.name;
                LastFM.backArtist = LastFM.artistName = data.artist.name;

                LastFM.artistBio = App.util.removeTrash(data.artist.bio.content);
                LastFM.artistBioSummary = App.util.removeTrash(data.artist.bio.summary);
                //VK.callMethod("setLocation", "artist=" + encodeURIComponent(LastFM.artistName));
                document.getElementById("find").value = LastFM.artistName;
            }

            var div = document.getElementById('info');
            App.util.addScroll(div);
            div.innerHTML = '';
            //div.style.left = '632px';
            //div.style.width = '175px';
            if (App.define.animation) {
                $(div).slide('in', { direction: "right" });
            }
            div.style.display = 'block';
            var bio = document.createElement('div');
            bio.id = "bio";
            if (data.artist && data.artist.bio && data.artist.bio.summary) {
                LastFM.bio = App.util.removeTrash(data.artist.bio.summary);
            }

            if (data.artist && data.artist.image && data.artist.image[2]['#text']) {
                var a = document.createElement("a");
                a.href = data.artist.url;
                a.title = "Перейти на страницу исполнителя на Last.fm";
                a.setAttribute('target', '_blank');
                var img = document.createElement('img');
                img.src = data.artist.image[2]['#text'];
                a.appendChild(img)
                bio.appendChild(a);
            }

            var h5 = document.createElement("h5");
            h5.innerHTML = data.artist.name.toLowerCase();
            h5.onclick = function () {
                App.suche(this.innerHTML)
            }
            h5.style.cursor = 'pointer';
            bio.appendChild(h5);

            var h6 = document.createElement("h6");
            h6.innerHTML = "БИОГРАФИЯ";
            h6.onclick = function () {
                App.showAddBio();
            }
            bio.appendChild(h6);
            div.h6 = bio;
            //var h6 = document.createElement("h6");
            //h6.innerHTML = "ПОДЕЛИТЬСЯ С ДРУГОМ";
            //h6.onclick = function () {
            //    App.sendArtistToWall();
            //}
            //h5.appendChild(h6);



            if (data.artist && data.artist.bio && data.artist.bio.summary) {
                //bio.appendChild(document.createTextNode(text))
                //bio.innerHTML = data.artist.bio.summary;
            } else {
                bio.innerHTML = 'Информации об исполнителе или группе не найдено. Возможно некорректно указаны тэги'
            }

            div.appendChild(bio);

            var tags = document.createElement('div');
            tags.style.display = 'block';
            tags.id = 'tags'
            if (data.artist.tags && data.artist.tags.tag) {
                var tag = data.artist.tags.tag;
                for (var i = 0; i < tag.length; i++) {
                    var li = document.createElement('span');
                    li.innerHTML = tag[i].name + ', ';
                    li.art = tag[i].name;
                    li.onclick = function () {
                        /*document.getElementById('find').value = this.innerHTML;
                    App.radio = false;
                    App.ultra.currentTrack = '';
                    App.suche(this.innerHTML);*/
                        App.radio = false;
                        App.ultra.currentTrack = '';
                        LastFM.findTag(this.art)
                    }
                    tags.appendChild(li)
                }
            }

            div.appendChild(tags);

            var h3 = document.createElement('h3');
            h3.innerHTML = 'похожие'
            div.appendChild(h3);

            var sim = document.createElement("div");
            sim.id = 'similar2'
            sim.style.display = 'block';
            if (data.artist.similar && data.artist.similar.artist) {
                var simArt = data.artist.similar.artist;
                for (var i = 0; i < simArt.length; i++) {
                    var li = document.createElement('div');
                    li.title = simArt[i].name;
                    var img = document.createElement("img");
                    img.src = simArt[i].image[3]["#text"];
                    li.appendChild(img);
                    li.artist = simArt[i].name;
                    var span = document.createElement("span");
                    span.appendChild(document.createTextNode(simArt[i].name));
                    li.appendChild(span);
                    li.onclick = function () {
                        document.getElementById('find').value = this.artist;
                        App.radio = false;
                        App.ultra.currentTrack = '';
                        App.suche(this.artist);
                    }
                    sim.appendChild(li)
                }
            }

            div.appendChild(sim);

            /*setTimeout(function () {
            var scr = document.createElement('script');
            scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=artist.getTopAlbums&artist=' + LastFM.q + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&callback=LastFM.responceAlbums&lang=ru';
            document.body.appendChild(scr)
        }, 170)*/

        }else {
            document.getElementById('info').style.display = 'none';
        }
    }
}

LastFM.responceArtistv2 = function (data) {
    if (App.define.showBio && LastFM.backArtist != data.artist.name) {
        if (!data.error) {

            //document.getElementById("title").innerHTML = data.artist.name + '<a title="Перейти на страницу исполнителя на Last.fm" target="_blank" href="' + data.artist.url + '"> >> </a>';
            if (data.artist.name) {
                LastFM.q = data.artist.name;
                LastFM.backArtist = LastFM.artistName = data.artist.name;
                LastFM.artistBio = App.util.removeTrash(data.artist.bio.content);
                LastFM.artistBioSummary = App.util.removeTrash(data.artist.bio.summary);
                VK.callMethod("setLocation", "artist=" + encodeURIComponent(LastFM.artistName));
                if (window.addJump) {
                    window.addJump("artist", data.artist.name, data.artist.name)
                }
                document.getElementById("find").value = LastFM.artistName;
            }

            var div = document.getElementById('info');
            App.util.addScroll(div);
            div.innerHTML = '';
            //div.style.left = '632px';
            //div.style.width = '175px';
            if (App.define.animation) {
                $(div).slide('in', { direction: "right" });
            }
            div.style.display = 'block';
            var bio = document.createElement('div');
            bio.id = "bio";
            if (data.artist && data.artist.bio && data.artist.bio.summary) {
                LastFM.bio = App.util.removeTrash(data.artist.bio.summary);
            }

            if (data.artist && data.artist.image && data.artist.image[2]['#text']) {
                var a = document.createElement("a");
                a.href = data.artist.url;
                a.title = "Перейти на страницу исполнителя на Last.fm";
                a.setAttribute('target', '_blank');
                var img = document.createElement('img');
                img.src = data.artist.image[2]['#text'];
                a.appendChild(img)
                bio.appendChild(a);
            }


            var h5 = document.createElement("h5");
            h5.innerHTML = data.artist.name.toLowerCase();
            //h5.onclick = function () {
            //    App.suche(this.innerHTML)
            //}
            bio.appendChild(h5);

            var h6 = document.createElement("h6");
            h6.innerHTML = "БИОГРАФИЯ";
            h6.onclick = function () {
                App.showAddBio();
            }
            bio.appendChild(h6);

            var h6 = document.createElement("h6");
            h6.innerHTML = "ПОДЕЛИТЬСЯ С ДРУГОМ";
            h6.onclick = function () {
                App.sendArtistToWall();
            }
            bio.appendChild(h6);


            if (data.artist && data.artist.bio && data.artist.bio.summary) {
                //bio.appendChild(document.createTextNode(text))
                //bio.innerHTML = data.artist.bio.summary;
            } else {
                bio.innerHTML = 'Информации об исполнителе или группе не найдено. Возможно некорректно указаны тэги'
            }

            div.appendChild(bio);

            var tags = document.createElement('div');
            tags.style.display = 'block';
            tags.id = 'tags'
            if (data.artist.tags && data.artist.tags.tag) {
                var tag = data.artist.tags.tag;
                for (var i = 0; i < tag.length; i++) {
                    var li = document.createElement('span');
                    li.innerHTML = tag[i].name + ", ";
                    li.art = tag[i].name;
                    li.onclick = function () {
                        /*document.getElementById('find').value = this.innerHTML;
                    App.radio = false;
                    App.ultra.currentTrack = '';
                    App.suche(this.innerHTML);*/
                        App.radio = false;
                        App.ultra.currentTrack = '';
                        LastFM.findTag(this.art)
                    }
                    tags.appendChild(li)
                }
            }

            div.appendChild(tags);
            var h3 = document.createElement('h3');
            h3.innerHTML = 'похожие'
            div.appendChild(h3);

            var sim = document.createElement("div");
            sim.id = 'similar2'
            sim.style.display = 'block';
            if (data.artist.similar && data.artist.similar.artist) {
                var simArt = data.artist.similar.artist;
                for (var i = 0; i < simArt.length; i++) {
                    var li = document.createElement('div');
                    li.title = simArt[i].name;
                    var img = document.createElement("img");
                    img.src = simArt[i].image[3]["#text"];
                    li.appendChild(img);
                    li.artist = simArt[i].name;
                    var span = document.createElement("span");
                    span.appendChild(document.createTextNode(simArt[i].name));
                    li.appendChild(span);
                    li.onclick = function () {
                        document.getElementById('find').value = this.artist;
                        App.radio = false;
                        App.ultra.currentTrack = '';
                        App.suche(this.artist);
                    }
                    sim.appendChild(li)
                }
            }

            div.appendChild(sim);

            //setTimeout(function () {
            //    var scr = document.createElement('script');
            //    scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=artist.getTopTracks&artist=' + LastFM.q + '&api_key=809dffc5f629c1d4871323f01379bc0d&limit=25&format=json&callback=LastFM.responceTopTracks&lang=ru';
            //    //scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=artist.getTopAlbums&artist=' + LastFM.artistName + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&callback=LastFM.responceAlbums&lang=ru';
            //    document.body.appendChild(scr)
            //}, 500)



            setTimeout(function () {
                var scr = document.createElement('script');
                scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=artist.getTopAlbums&artist=' + encodeURIComponent(LastFM.q) + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&callback=LastFM.responceAlbums&lang=ru';
                document.body.appendChild(scr)
            }, 500)
            if (!App.lastGrp){ App.lastGrp = [] };

            LastFM.bestTracks(data)

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
                localStorage.setItem("mer_lastGrp", App.lastGrp);
            }



        } else {
            App.showPopup('Такого исполнителя не найдено');
            document.getElementById("preload").style.display = 'none';
        }
    }else {
        VK.callMethod("setLocation", "artist=" + encodeURIComponent(LastFM.artistName));
        if (window.addJump) {
            window.addJump("artist", data.artist.name, data.artist.name)
        }

        var h6 = document.createElement("h6");
        h6.innerHTML = "ПОДЕЛИТЬСЯ С ДРУГОМ";
        h6.onclick = function () {
            App.sendArtistToWall();
        }
        if (document.getElementById('info').h6 && !document.getElementById('info').h6.yep) {
            document.getElementById('info').h6.appendChild(h6);
            document.getElementById('info').h6.yep = true;
        }

        setTimeout(function () {
            var scr = document.createElement('script');
            scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=artist.getTopAlbums&artist=' + encodeURIComponent(LastFM.q) + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&callback=LastFM.responceAlbums&lang=ru';
            document.body.appendChild(scr)
        }, 500)
        if (!App.lastGrp){ App.lastGrp = [] };

        LastFM.bestTracks(data)

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
            localStorage.setItem("mer_lastGrp", App.lastGrp);
        }
        LastFM.q = data.artist.name;
        LastFM.artistName = data.artist.name;
    }
}

LastFM.bestTracks = function (data) {

    App.clearPopup();
    var listEl = [];
    var list = document.getElementById("list");
    list.el = listEl;
    //list.style.width = "165px"
    //var myTracks = document.getElementById("myTracks");
    //var d = document.getElementById("playlists");
    list.innerHTML = '';
    if (App.define.animation) {
        $(list).slide('in', { direction: "top" });
    }
    list.style.display = 'block';
    // App.util.addScroll(list);

    var album = document.createElement('div');
    album.innerHTML = 'лучшие треки';
    album.className = 'best';
    album.onclick = function () {
        for (var l = 0; l < listEl.length; l++) {
            if (l > 0) {
                listEl[l].className = 'album';
            }else {
                listEl[l].className = 'best';
            }
        }
        this.className = "currentBest"
        var scr = document.createElement('script');
        scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=artist.getTopTracks&artist=' + encodeURIComponent(LastFM.q) + '&api_key=809dffc5f629c1d4871323f01379bc0d&limit=100&format=json&callback=LastFM.responceTopTracks&lang=ru';
        //scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=artist.getTopAlbums&artist=' + LastFM.artistName + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&callback=LastFM.responceAlbums&lang=ru';
        document.body.appendChild(scr)
    }
    list.appendChild(album);
    listEl.push(album);
    album.onclick();

    if (data.artist.mbid) {
        MB.requestAlbums(data.artist.mbid);
    }else {
        var s = document.createElement("script");
        s.src = 'http:' + '//developer.echonest.com/api/v4/artist/search?bucket=id:musicbrainz&api%5Fkey=F21KT0VKI1NVX3CIF&name=' + encodeURIComponent(LastFM.artistName) + '&results=1&format=jsonp&callback=MB.resposeMBID'
        document.body.appendChild(s);
    }
}


LastFM.responceAlbums = function (data) {
    LastFM.albums = data;

    document.getElementById("preload").style.display = 'none';
    MB.find = true;
    var list = document.getElementById("list");
    App.util.addScroll(list);
    var listEl = list.el;



    if (data.topalbums && data.topalbums.album) {
        var h3 = document.createElement("h3");
        h3.innerHTML = 'Лучшие релизы';
        list.appendChild(h3);
        if (!data.topalbums.album.length) {
            var div = document.createElement('div');
            var img = document.createElement('img');
            if (data.topalbums.album.image) {
                img.src = data.topalbums.album.image[2]['#text'];
            }else {
                img.src = 'img/cover_default.png';
            }
            //h4.innerHTML =
            div.appendChild(img);
            var span = document.createElement('span');
            span.innerHTML = data.topalbums.album.name;
            div.appendChild(span);
            div.data = data.topalbums.album;
            div.className = 'album';

            div.onclick = function () {
                for (var l = 0; l < listEl.length; l++) {
                    if (l > 0) {
                        listEl[l].className = 'album';
                    }else {
                        listEl[l].className = 'best';
                    }
                }
                this.className = "currentAlbum"

                Player.changeAlbum(this);
            }
            list.appendChild(div)
            listEl.push(div);
        }else {
            var l = data.topalbums.album.length < 10 ? data.topalbums.album.length : 10;
            for (var i = 0; i < l; i++) {
                var div = document.createElement('div');
                var img = document.createElement('img');
                if (data.topalbums.album[i].image) {
                    img.src = data.topalbums.album[i].image[2]['#text'];
                }else {
                    img.src = 'img/cover_default.png';
                }
                div.appendChild(img);
                var span = document.createElement('span');
                span.innerHTML = data.topalbums.album[i].name;
                div.appendChild(span);
                div.data = data.topalbums.album[i];
                div.className = 'album';

                div.onclick = function () {
                    for (var l = 0; l < listEl.length; l++) {
                        if (l > 0) {
                            listEl[l].className = 'album';
                        }else {
                            listEl[l].className = 'best';
                        }
                    }
                    this.className = "currentAlbum"

                    Player.changeAlbum(this);
                }
                list.appendChild(div)
                listEl.push(div);
            }

        }
    }

    /*document.getElementById("preload").style.display = 'none';
    App.clearPopup();
    var listEl = [];
    var list = document.getElementById("list");
    list.style.width = "165px"
    //var myTracks = document.getElementById("myTracks");
    //var d = document.getElementById("playlists");
    list.innerHTML = '';
    if (App.define.animation) {
        $(list).slide('in', { direction: "top" });
    }
    list.style.display = 'block';
    App.util.addScroll(list);

    var album = document.createElement('div');
    album.innerHTML = '25 лучших песен';
    album.className = 'best';
    album.onclick = function () {
        for (var l = 0; l < listEl.length; l++) {
            if (l > 2) {
                listEl[l].className = 'album';
            }else {
                listEl[l].className = 'best';
            }
        }
        this.className = "currentBest"
        var scr = document.createElement('script');
        scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=artist.getTopTracks&artist=' + LastFM.q + '&api_key=809dffc5f629c1d4871323f01379bc0d&limit=25&format=json&callback=LastFM.responceTopTracks&lang=ru';
        //scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=artist.getTopAlbums&artist=' + LastFM.artistName + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&callback=LastFM.responceAlbums&lang=ru';
        document.body.appendChild(scr)
    }
    list.appendChild(album);
    listEl.push(album);


    var album = document.createElement('div');
    album.innerHTML = '50 лучших песен';
    album.className = 'best';
    album.onclick = function () {
        for (var l = 0; l < listEl.length; l++) {
            if (l > 2) {
                listEl[l].className = 'album';
            }else {
                listEl[l].className = 'best';
            }
        }
        this.className = "currentBest"

        var scr = document.createElement('script');
        scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=artist.getTopTracks&artist=' + LastFM.q + '&api_key=809dffc5f629c1d4871323f01379bc0d&limit=50&format=json&callback=LastFM.responceTopTracks&lang=ru';
        //scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=artist.getTopAlbums&artist=' + LastFM.artistName + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&callback=LastFM.responceAlbums&lang=ru';
        document.body.appendChild(scr)
    }
    list.appendChild(album);
    listEl.push(album);
    album.onclick();


    var album = document.createElement('div');
    album.innerHTML = '100 лучших песен';
    album.className = 'best';
    album.onclick = function () {
        for (var l = 0; l < listEl.length; l++) {
            if (l > 2) {
                listEl[l].className = 'album';
            }else {
                listEl[l].className = 'best';
            }
        }
        this.className = "currentBest"

        var scr = document.createElement('script');
        scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=artist.getTopTracks&artist=' + LastFM.q + '&api_key=809dffc5f629c1d4871323f01379bc0d&limit=100&format=json&callback=LastFM.responceTopTracks&lang=ru';
        //scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=artist.getTopAlbums&artist=' + LastFM.artistName + '&api_key=809dffc5f629c1d4871323f01379bc0d&format=json&callback=LastFM.responceAlbums&lang=ru';
        document.body.appendChild(scr)
    }
    list.appendChild(album);
    listEl.push(album);




    */
}

LastFM.responceTracks = function (data) {
    document.getElementById("preload").style.display = 'none';
    LastFM.tracks = data.album.tracks.track;
    //LastFM.album = '';
    var div = document.getElementById('playlist');
    //div.style.left = '165px';
    div.innerHTML = '';
    Player.playlist = [];
    if (App.define.animation) {
        $(div).fade('in');
    }
    div.style.display = 'block';
    App.util.addScroll(div);


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


            var song = document.createElement("h3");
            song.innerHTML = '<span class="numberTrack">' + (i + 1) + '</span>. ' + LastFM.tracks[i].name;

            var art = document.createElement("div");
            art.innerHTML = LastFM.tracks[i].artist.name;
            art.className = "art";
            track.art = art;
            track.className = "notFinded";


            track.appendChild(song);
            track.appendChild(art);
            track.appendChild(span);

            div.appendChild(track);

            //track.innerHTML = '<a id="' + 'aL' + (i + 1) + '" class="noA" onclick="return false">' + (i + 1) + '</a>. ' + LastFM.tracks[i].name;
            track.a = document.getElementById('aL' + (i + 1));


            track.appendChild(span)
            LastFM.tracks[i].div = track;
            LastFM.tracks[i].span = span;

        }
        if (App.state == 'tag') {
            Player.findTrackByTag();
        }else {
            Player.firstFind();
        }
        //Player.findTrack();
    } else {
        var track = document.createElement('div')
        track.innerHTML = 'Аудиозаписей не найдено'
        div.appendChild(track)
    }

}

LastFM.responceCoverTrack = function (data) {
    if (data.results && data.results.trackmatches && data.results.trackmatches.track && data.results.trackmatches.track.image && data.results.trackmatches.track.image[0]["#text"]) {
        document.getElementById("cover").src = data.results.trackmatches.track.image[1]["#text"]
    }else {
        document.getElementById("cover").src = "img/cover_default.png";
    }
}

LastFM.responceUser = function (data) {
    if (data.session) {
        LastFM.user.sk = data.session.key;
        //document.getElementById('scrob').innerHTML = 'Скробблинг выполняется';
        LastFM.scrob = true;
        //document.getElementById("lastlogo").style.display = 'block';
    } else if (data.error) {
        App.showPopup('Ошибка авторизации');

    }
}

LastFM.responceUser2 = function (data) {
    if (data.session) {
        LastFM.user.sk = data.session.key;
        clearInterval(LastFM.interval);
        localStorage.setItem("mer_s_key", LastFM.user.sk);
        //document.getElementById('scrob').innerHTML = 'Скробблинг выполняется';
        LastFM.scrob = true;
    } else if (data.error) {
        App.showPopup('Ошибка авторизации');

    }
}

document.getElementById("Oauth").onmousedown = function () {
    LastFM.interval = setInterval(function () {
        var api_sig = hex_md5("api_key809dffc5f629c1d4871323f01379bc0dmethodauth.getSessiontoken" + LastFM.user.token + "e69db535e502129eb7473f0052204099");
        var scr = document.createElement('script');
        scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=auth.getSession&token=' + LastFM.user.token + '&api_key=809dffc5f629c1d4871323f01379bc0d&api_sig=' + api_sig + '&callback=LastFM.responceUser2&format=json';
        document.body.appendChild(scr);
    }, 20000);
    LastFM.user.token = LastFM.user.token2;
}


LastFM.getToken = function (data) {
    if (data.token) {
        //clearInterval(LastFM.interval);
        LastFM.user.token2 = data.token;
        document.getElementById("Oauth").href = 'http://www.last.fm/api/auth/?api_key=809dffc5f629c1d4871323f01379bc0d&token=' + data.token;
    }
}

function requestToken() {

    var api_sig = hex_md5("api_key809dffc5f629c1d4871323f01379bc0dmethodauth.getTokene69db535e502129eb7473f0052204099");
    var scr = document.createElement('script');
    scr.src = 'http://' + 'ws.audioscrobbler.com/2.0/?method=auth.getToken&api_key=809dffc5f629c1d4871323f01379bc0d&api_sig=' + api_sig + '&callback=LastFM.getToken&format=json&' + (new Date()).getTime();
    document.body.appendChild(scr);
}

setTimeout(requestToken, 4000);

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
    if (App.state == 'start') {
        App.showStartup();
    }
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
        Player.volume.setValue(Player.volume.getValue());
        document.getElementById("levelVolume").innerHTML = Player.volume.getValue();
    }, 100)
    //Player.volume.setValue(uppodGet("player1", 'getv'));
    //valueVolume.style.height = volume.offsetHeight * (curVolume / 100) + 'px';
    if (!App.radio) { App.s = setInterval(Player.q, 300) }
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

App.showAddBio = function () {
    var div = document.getElementById("addBio");
    div.style.display = 'block';
    div.style.left = '-15px';
    div.innerHTML = '';
    App.util.anim(div, "left", 0, 100)
    setTimeout(function () {
        App.util.addScroll(div);
        div.onmouseover();
    }, 1000)
    var h3 = document.createElement("h3");
    var img = document.createElement("img");
    img.src = '/img/back_icon.png';
    img.onclick = function () {
        div.style.display = 'none';
        div.removeScrollBar();
    }
    h3.appendChild(img);
    h3.appendChild(document.createTextNode(LastFM.artistName.toLowerCase()));
    div.appendChild(h3);
    div.appendChild(document.createElement("br"));
    div.appendChild(document.createElement("br"));
    var text = document.createElement("div");
    text.innerHTML = LastFM.artistBio;
    div.appendChild(text);

    //var span = document.createElement("span");
    //span.innerHTML = 'x';
    //span.id = 'closeAddBio';
    //span.onclick = function () {
    //    div.style.display = 'none';
    //    div.removeScrollBar();
    //}
    //div.appendChild(span);


}

document.getElementById("meridian").onclick = function () {
    if (!App.loaded){ return 1 }
    if (App.popupLastFM) {
        App.popupLastFM = false;
        document.getElementById("settingsScreen").style.display = "none";
        return 1
    }
    App.popupLastFM = true;
    var listEl = [];
    document.getElementById("settingsScreen").style.display = "block";
    document.getElementById("settingsScreen").style.left = '-15px';
    App.util.anim(document.getElementById("settingsScreen"), "left", 0, 100);
    //if (App.define.animation) {
    //    $(document.getElementById("settingsScreen")).slide("in", { direction: "left" })
    //}
    var div = document.getElementById("listSettings");
    div.innerHTML = '';
    function hideSettings() {
        document.getElementById("mainSettings").style.display = "none";
        document.getElementById("lastfmSettings").style.display = "none";
        document.getElementById("aboutApp").style.display = 'none'
    }
    function hideList() {
        for (var i = 0; i < listEl.length; i++) {
            listEl[i].className = "aspan";
        }
    }

    var item1 = document.createElement("div");
    item1.innerHTML = "общие";
    item1.onclick = function () {
        hideSettings();
        hideList();
        this.className = "aspanAk";
        document.getElementById("mainSettings").style.display = "block";
    }
    listEl.push(item1);
    item1.className = "aspan";
    div.appendChild(item1);
    item1.onclick();


    var item2 = document.createElement("div");
    item2.innerHTML = "last.fm";
    item2.onclick = function () {
        hideSettings();
        hideList();
        this.className = "aspanAk";
        document.getElementById("lastfmSettings").style.display = "block";
        setTimeout(function () {
            Player.scrobTimeSlider.setValue(App.scrobTime);
        }, 100)

    }
    listEl.push(item2)
    item2.className = "aspan";
    div.appendChild(item2);

    var item3 = document.createElement("div");
    item3.innerHTML = "о приложении";
    item3.onclick = function () {
        hideSettings();
        hideList();
        this.className = "aspanAk";
        document.getElementById("aboutApp").style.display = "block";
    }
    listEl.push(item3)
    item3.className = "aspan";
    div.appendChild(item3);

    document.getElementById("saveSettings").onclick = App.saveUser;
    document.getElementById("cancelSettings").onclick = function () {
        App.popupLastFM = false;
        document.getElementById("settingsScreen").style.display = "none";
    };
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
    if (!App.loaded){ return 1 }
    this.value = '';
    this.style.color = 'black';
    if (App.searchState == "группа") {


        //
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
    }else if (App.searchState == "тэг") {
        var d = document.createElement("div");
        d.id = "tooltip";
        d.style.top = this.offsetTop + this.offsetHeight + 2 + 'px';
        d.style.left = this.offsetLeft + 'px';
        d.style.width = this.offsetWidth + 'px';

        for (var i = 0; i < 4; i++) {
            if (App.lastTags && App.lastTags[i]) {
                var div = document.createElement("div");
                div.innerHTML = App.lastTags[i];
                div.dataText = App.lastTags[i];
                div.onclick = function () {
                    document.getElementById("find").value = this.dataText.replace("&amp;", "&").replace("&#39;", "'");
                    LastFM.findTag(this.dataText.replace("&amp;", "&").replace("&#39;", "'"));
                    if (document.getElementById("tooltip")) {
                        document.getElementById("tooltip").parentNode.removeChild(document.getElementById("tooltip"));
                    }
                }
                d.appendChild(div);
            }
        }
    }
    else {
        return 1;
    }
    d.currentDiv = 0;
    this.parentNode.appendChild(d);
}
document.getElementById("find").onblur = function () {
    if (!App.loaded){ return 1 }
    //alert();
    this.style.color = 'silver';
    if (this.value == '') {
        switch (document.getElementById("value").innerHTML) {
            case "группа":
                this.value = 'Искать группу';
                break;
            case "тэг":
                this.value = 'Искать тэг';
                break;
            case "vk.com":
                this.value = 'Искать вконтакте ';
                break;
            default: this.value = 'Искать ';
                break;

        }
    }
    setTimeout(function () {
        if (document.getElementById("tooltip")) {
            document.getElementById("tooltip").parentNode.removeChild(document.getElementById("tooltip"));
        }
    }, 200)

}

document.getElementById("find").onkeyup = function (e) {
    if (!App.loaded){ return 1 }
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
        case 13:
            if (App.searchState == "группа") {
                App.suche(document.getElementById("find").value)
            }else if (App.searchState == "тэг") {
                LastFM.findTag(document.getElementById("find").value)
            }else if (App.searchState == "vk.com") {
                App.searchVK(document.getElementById("find").value)
            }
            return 1;
            break
    }
    if (App.searchState == "группа") {
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

    }else if (App.searchState == "тэг") {
        d.innerHTML = '';
        d.style.display = 'block';
        var k = 0;
        if (App.lastTags && App.lastTags.length > 0) {
            for (var i = 0; i < App.lastTags.length; i++) {
                if (App.lastTags[i] && App.lastTags[i].toLowerCase().indexOf(this.value.toLowerCase()) != -1) {
                    var div = document.createElement("div");

                    div.innerHTML = App.lastTags[i];
                    div.dataText = App.lastTags[i];
                    if (document.getElementById("find").value != '') {
                        var pos = div.innerHTML.toLowerCase().indexOf(document.getElementById("find").value.toLowerCase())
                        var str1 = div.firstChild.nodeValue.substring(0, pos);
                        var str2 = '<span class="colorText">' + div.firstChild.nodeValue.substring(pos, pos + document.getElementById("find").value.length) + '</span>';
                        var str3 = div.firstChild.nodeValue.substring(pos + document.getElementById("find").value.length);
                        div.innerHTML = str1 + str2 + str3;
                    }




                    div.onclick = function () {
                        document.getElementById("find").value = this.dataText.replace("&amp;", "&").replace("&#39;", "'");
                        LastFM.findTag(this.dataText.replace("&amp;", "&").replace("&#39;", "'"));
                        document.getElementById("tooltip").parentNode.removeChild(document.getElementById("tooltip"));
                    }
                    d.appendChild(div);
                    k++;
                    if (k > 2){ break }
                }
            }
        }
        App.tooltip = d;

    }

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
    if (!App.loaded){ return 1 }
    if (App.searchState != "группа"){ return 1 }
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
document.onunload = function () {
    alert('bye');
}

document.getElementById("leader").onclick = function () {
    App.suche(this.innerHTML);
}

document.getElementById('title').innerHTML = 'Загрузка..';

MB.requestAlbums = function (mbid, noCache) {
    MB.find = true;
    MB.mbid = mbid;
    var rnd = Math.round(Math.random() * MB.pipes_id.length);
    var pipe_id = MB.pipes_id[rnd];// 'f1ba0b64f66d54d6d36e8cd036fc7d3e';//bffe0119b6f1d70c57c4edd0679121e1//
    if (noCache) {
        var soul = '&' + Math.random();
    }
    else {
        var soul = "";
    }
    if (!window.opera) {
        var xhrObject = window.XDomainRequest || XMLHttpRequest;
        var xhr = new xhrObject();
        var art = encodeURIComponent(LastFM.artistName);//1f36a3a2-9687-4819-ac55-54d7ff0b8b88
        var url = 'http:' + '//pipes.yahoo.com/pipes/pipe.run?_id=' + pipe_id + '&_render=json&api_key=b25b959554ed76058ac220b7b2e0a026&artistmbid=' + mbid + '&artistname=' + art + soul;
        //var url = 'http://' + 'pipes.yahoo.com/pipes/pipe.run?_id=f1ba0b64f66d54d6d36e8cd036fc7d3e&_render=json&api_key=b25b959554ed76058ac220b7b2e0a026&artistmbid=f4a31f0a-51dd-4fa7-986d-3095c40c5ed9&artistname=Evanescence'
        xhr.open('GET', url, true);
        xhr.onload = MB.responceAlbums;
        MB.xhr = xhr;
        xhr.send();
        MB.find = true;

    }else {
        //     "http://pipes.yahoo.com/pipes/pipe.run?u="+ encodeURIComponent(url) + "&_id=332d9216d8910ba39e6c2577fd321a6a&_render=json&_callback=" + callback name
        MB.operaB = setInterval(function () {
            if (!MB.operaB){ return 1 };
            MB.mbid = mbid;
            var rnd = Math.round(Math.random() * MB.pipes_id.length);
            var pipe_id = MB.pipes_id[rnd];
            var url = 'http:' + '//pipes.yahoo.com/pipes/pipe.run?_id=' + pipe_id + '&_render=json&api_key=b25b959554ed76058ac220b7b2e0a026&artistmbid=' + mbid + '&artistname=' + LastFM.artistName;
            //var url = encodeURIComponent('http:' + '//pipes.yahoo.com/pipes/pipe.run?_id=' + pipe_id + '&_render=json&api_key=b25b959554ed76058ac220b7b2e0a026&artistmbid=' + mbid + '&artistname=' + LastFM.artistName);
            var s = document.createElement("script");
            s.src = url + '&_callback=MB.responceAlbums&' + Math.random();
            //s.src = "http://pipes.yahoo.com/pipes/pipe.run?u=" + url + "&_id=332d9216d8910ba39e6c2577fd321a6a&_render=json&_callback=MB.responceAlbums&" + Math.random();
            document.body.appendChild(s);
        }, 5000)

        MB.mbid = mbid;
        var rnd = Math.round(Math.random() * MB.pipes_id.length);
        var pipe_id = MB.pipes_id[rnd];
        var url = 'http:' + '//pipes.yahoo.com/pipes/pipe.run?_id=' + pipe_id + '&_render=json&api_key=b25b959554ed76058ac220b7b2e0a026&artistmbid=' + mbid + '&artistname=' + LastFM.artistName;
        var s = document.createElement("script");
        s.src = url + '&_callback=MB.responceAlbums&' + Math.random();
        //s.src = "http://pipes.yahoo.com/pipes/pipe.run?u=" + url + "&_id=332d9216d8910ba39e6c2577fd321a6a&_render=json&_callback=MB.responceAlbums&" + Math.random();
        document.body.appendChild(s);
    }
}

MB.resposeMBID = function (data) {
    //{"response": {"status": {"version": "4.2", "code": 0, "message": "Success"}, "artists": [{"foreign_ids": [{"catalog": "musicbrainz", "foreign_id": "musicbrainz:artist:1f36a3a2-9687-4819-ac55-54d7ff0b8b88"}], "name": "Ария", "id": "ARO1Z2S1187B9ADA71"}]}}
    if (data.response.status && data.response.status.code == 0) {
        var field = data.response.artists[0].foreign_ids[0].foreign_id;
        var mbid = field.substring(field.lastIndexOf(":") + 1);
        MB.requestAlbums(mbid);
    }
}

MB.responceAlbums = function (data) {
    if (MB.operaB && data && data.value && data.value.items[0]) {
        clearInterval(MB.operaB)
        MB.operaB = false;
        var albums = data;
    }else {
        if (MB.xhr.status = 999 && MB.xhr.responseText.cont == 0) {
            setTimeout(function () {
                MB.requestAlbums(MB.mbid, true)
            }, 1500)
            return 1;
        }
        var albums = JSON.parse(MB.xhr.responseText);
    }


    if (!albums || albums.count == 0) {
        setTimeout(function () {
            MB.requestAlbums(MB.mbid, true)
        }, 1500)
        return 1;
    }
    document.getElementById("preload").style.display = 'none';
    MB.find = true;
    var list = document.getElementById("list");

    var alb = [];
    var singl = [];

    function arSort(a, b) {
        if (parseInt(a["first-release-date"]) > parseInt(b["first-release-date"])) {
            return -1
        }
        else if (parseInt(a["first-release-date"]) < parseInt(b["first-release-date"])) {
            return 1
        }else {
            return 0;
        }
    }

    albums.value.items.sort(arSort);
    listEl = list.el;
    MB.find = false;
    function qq(russ, eng) {
        var h3 = document.createElement("h3");
        h3.innerHTML = russ;
        list.appendChild(h3);

        for (var i = 0; i < albums.count; i++) {
            if (albums.value.items[i].type != eng){ continue; }
            var div = document.createElement('div');
            var img = document.createElement('img');
            if (albums.value.items[i].image) {
                img.src = albums.value.items[i].image[2];
            }else {
                img.src = 'img/cover_default.png';
            }//['#text'];
            //h4.innerHTML =
            div.appendChild(img);
            var span = document.createElement('span');
            span.innerHTML = albums.value.items[i].title;
            if (parseInt(albums.value.items[i]["first-release-date"])) {
                span.innerHTML += ' (' + parseInt(albums.value.items[i]["first-release-date"]) + ')'
            }
            div.appendChild(span);
            div.data = albums.value.items[i];
            div.className = 'album';

            div.onclick = function () {
                for (var l = 0; l < listEl.length; l++) {
                    if (l > 0) {
                        listEl[l].className = 'album';
                    }else {
                        listEl[l].className = 'best';
                    }
                }
                this.className = "currentAlbum"
                document.getElementById("preload").style.display = 'block';
                MB.requestAlbum(this.data.id);
            }
            list.appendChild(div)
            listEl.push(div);
        }
    }
    if (albums.count && albums.count > 0) {
        qq("Альбомы", "Album");
        qq("Синглы", "Single");
        // qq("EP", "EP");
        //qq("Сборники", "Compilation");
    }

    list.removeScrollBar();
    App.util.addScroll(list);
}

MB.requestAlbum = function (rid, noCache) {
    MB.rid = rid;
    MB.find_true = true;
    var rnd = Math.round(Math.random() * MB.pipes_id.length);
    var pipe_id = MB.pipes_id_albums[rnd]

    MB.pipes_id_albums
    if (noCache) {
        var soul = '&' + Math.random();
    }
    else {
        var soul = "";
    }
    if (!window.opera) {
        var xhrObject = window.XDomainRequest || XMLHttpRequest;
        var xhr = new xhrObject();
        //var art = encodeURIComponent(LastFM.artistName);//1f36a3a2-9687-4819-ac55-54d7ff0b8b88
        //var url = 'http:' + '//pipes.yahoo.com/pipes/pipe.run?_id=bffe0119b6f1d70c57c4edd0679121e1&_render=json&api_key=b25b959554ed76058ac220b7b2e0a026&artistmbid=' + mbid + '&artistname=' + art;
        var url = 'http://pipes.yahoo.com/pipes/pipe.run?_id=' + pipe_id + '&_render=json&albummbid=' + rid + soul;
        //var url = 'http://' + 'pipes.yahoo.com/pipes/pipe.run?_id=RrJubzf72xG4I4SW1fC6Jw&_render=json&artist='+art+'&type=Album+Official';
        xhr.open('GET', url, true);
        xhr.onload = MB.changeAlbum;
        MB.xhr = xhr;
        xhr.send();
    }else {
        MB.operaC = setInterval(function () {
            if (!MB.operaC){ return 1 };
            MB.rid = rid;
            MB.find_true = true;
            var rnd = Math.round(Math.random() * MB.pipes_id.length);
            var pipe_id = MB.pipes_id_albums[rnd];

            var url = 'http://pipes.yahoo.com/pipes/pipe.run?_id=' + pipe_id + '&_render=json&albummbid=' + rid;
            var s = document.createElement("script");
            url += "&_callback=MB.changeAlbum&" + Math.random();
            s.src = url;
            document.body.appendChild(s);
        }, 5000);

        var url = 'http://pipes.yahoo.com/pipes/pipe.run?_id=' + pipe_id + '&_render=json&albummbid=' + rid;
        var s = document.createElement("script");
        url += "&_callback=MB.changeAlbum&" + Math.random();
        s.src = url;
        document.body.appendChild(s);
    }
}

MB.changeAlbum = function (data) {
    if (data && data.value) {
        var res = data;
        clearInterval(MB.operaC)
        MB.operaC = false;
    }else {
        var res = JSON.parse(MB.xhr.responseText)
    }

    if (!res) {
        setTimeout(function () {
            MB.requestAlbum(MB.rid, true)
        }, 1000)
    }
    LastFM.album = '42';
    if (res.count > 0) {
        if (res.value.items && res.value.items.length) {
            var max = 0;
            var album = 0;
            for (var i = 0; i < res.value.items.length; i++) {
                if (res.value.items[i]["medium-list"].medium && res.value.items[i]["medium-list"].medium.length) {
                    var MBTracks = res.value.items[i]["medium-list"].medium[0]["track-list"].track;
                    MBTracks = MBTracks.concat(res.value.items[i]["medium-list"].medium[1]["track-list"].track)
                    if (MBTracks.length > max) {
                        var album = MBTracks;
                        max = MBTracks.length;
                    }
                    LastFM.album = res.value.items[i].title;
                }else {
                    if (res.value.items[i]["medium-list"].medium.length) {
                        var MBTracks = res.value.items[i]["medium-list"].medium[0]["track-list"].track;
                        MBTracks = MBTracks.concat(res.value.items[i]["medium-list"].medium[1]["track-list"].track)
                        LastFM.album = res.value.items[i].title;
                        if (MBTracks.length > max) {
                            var album = MBTracks;
                            max = MBTracks.length;
                        }
                    }else {
                        var MBTracks = res.value.items[i]["medium-list"].medium["track-list"].track;
                        LastFM.album = res.value.items[i].title;
                        if (MBTracks.length > max) {
                            var album = MBTracks;
                            max = MBTracks.length;
                        }
                    }
                }
            }
        }else {
            LastFM.album = res.value.items.title;
            var MBTracks = res.value.items["medium-list"].medium["track-list"].track;
            album = MBTracks;
        }

    } else {
        setTimeout(function () {
            MB.requestAlbum(MB.rid, true)
        }, 1000);
        return 1;
    }

    MBTracks = album;
    document.getElementById("preload").style.display = 'none';
    LastFM.tracks = [];
    for (var i = 0; i < MBTracks.length; i++) {
        var o = {};
        o.artist = {};
        o.artist.name = LastFM.artistName;
        o.duration = Math.round(MBTracks[i].recording.length / 1000);
        o.name = MBTracks[i].recording.title;
        LastFM.tracks.push(o);
    }


    document.getElementById("preload").style.display = 'none';
    //LastFM.tracks = data.album.tracks.track;

    var div = document.getElementById('playlist');
    //div.style.left = '165px';
    div.innerHTML = '';
    if (App.define.animation) {
        $(div).fade('in');
    }
    div.style.display = 'block';
    App.util.addScroll(div);



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


            var song = document.createElement("h3");
            song.innerHTML = '<span class="numberTrack">' + (i + 1) + '</span>. ' + LastFM.tracks[i].name;

            var art = document.createElement("div");
            art.innerHTML = LastFM.tracks[i].artist.name;
            art.className = "art";
            track.art = art;
            track.className = "notFinded";

            track.appendChild(song);
            track.appendChild(art);
            track.appendChild(span);

            div.appendChild(track);

            //track.innerHTML = '<a id="' + 'aL' + (i + 1) + '" class="noA" onclick="return false">' + (i + 1) + '</a>. ' + LastFM.tracks[i].name;
            track.a = document.getElementById('aL' + (i + 1));


            track.appendChild(span)
            LastFM.tracks[i].div = track;
            LastFM.tracks[i].span = span;

        }
        if (App.state == 'tag') {
            Player.findTrackByTag();
        }else {
            Player.firstFind();
        }
        //Player.findTrack();
    } else {
        var track = document.createElement('div')
        track.innerHTML = 'Аудиозаписей не найдено'
        div.appendChild(track)
    }
};

if (document.getElementById("listSearch")) {
    var valueDiv = document.getElementById("value");
    var listDiv = document.getElementById("listBox");
    valueDiv.onclick = function () {
        listDiv.style.display = 'block';
        listDiv.onmouseover = function () {
            clearTimeout(listDiv.timeout);
        }
        listDiv.onmouseout = function () {
            listDiv.timeout = setTimeout(function myfunction() {
                listDiv.style.display = 'none';
            }, 800)
        }
        if (document.getElementById("tooltip")) {
            document.getElementById("tooltip").parentNode.removeChild(document.getElementById("tooltip"));
        }
        valueDiv.onmouseover = function () {
            clearTimeout(listDiv.timeout);
        }
        valueDiv.onmouseout = function () {
            listDiv.timeout = setTimeout(function myfunction() {
                listDiv.style.display = 'none';
            }, 800)
        }
    }
    var n = listDiv.childNodes;
    for (var i = 0; i < n.length; i++) {
        if (n[i].nodeType == 1) {
            n[i].onclick = function () {
                valueDiv.innerHTML = this.innerHTML;
                App.searchState = this.innerHTML;
                listDiv.style.display = 'none';
                switch (this.innerHTML) {
                    case "группа":
                        document.getElementById("find").value = 'Искать группу';
                        break;
                    case "тэг":
                        document.getElementById("find").value = 'Искать тэг';
                        break;
                    case "vk.com":
                        document.getElementById("find").value = 'Искать вконтакте ';
                        break;
                    default: this.value = 'Искать ';
                        break;
                }
            }
        }
    }
}
if (document.getElementById("addFrend")) {
    document.getElementById("addFrend").onclick = function () {
        VK.callMethod("showInviteBox");
    }
}
if (document.getElementById("AddToRightMenu")) {
    document.getElementById("AddToRightMenu").onclick = function () {
        VK.callMethod("showSettingsBox", 256);
    }
}
//