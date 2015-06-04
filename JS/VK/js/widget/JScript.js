var App = {};

window.onload = function () {
    VK.init(function () {

    });
}


App.play = document.getElementById('play').onclick = function () {
    if (App.state == 1) { return 1 }
    if (App.init) {
        uppodSend("player1", 'play');
    } else {
        var url = 'http\:\/\/94.25.53.133:80/ultra-192';
        var flashvars = { st: "audio53-1229.txt", file: url, uid: "player1" };
        var params = { bgcolor: "#ffffff", allowFullScreen: "true", allowScriptAccess: "always" };
        var attributes = { id: "player1", name: "player" };
        swfobject.embedSWF("uppod.swf", "player", "0", "0", "10.0.0", false, flashvars, params, attributes);
    }
    App.state == 1;
    document.getElementById("img").style.display = 'block';
    App.int = setInterval(App.update, 20000);
    App.update();
}

App.stop = document.getElementById('stop').onclick = function () {
    if (App.state == 0) { return 1 }
    uppodSend("player1", 'stop');
    App.state == 0;
    document.getElementById("img").style.display = 'none';
    document.getElementById("title").innerHTML = '--------------';
}

App.update = function () {
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
    xhr.open('GET', 'http\://vk.hart-flamov.ru/PHP/stream.php' + '?' + (new Date()).getTime(), false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200 && xhr.getResponseHeader('Ultra') == 'ok') {
            if ((xhr.responseText.replace(/\n/g, "") != 'error') && (xhr.responseText.replace(/\n/g, "") != "")) {
                if (xhr.responseText != App.currentTrack) {
                    App.currentTrack = xhr.responseText;
                    var text = xhr.responseText.replace(/\n/g, "").split(" - ");
                    document.getElementById("title").innerHTML = xhr.responseText;
                    VK.callMethod('setTitle', xhr.responseText);
                }
            } else {
                setTimeout(App.update, 2500)
            }
        }
    }
    xhr.send(null);
}

function uppodInit(playerID) {
    uppodSend("player1", 'play');
    App.init = true;
};

function uppodTheEnd() {
    uppodSend("player1", 'stop');
    setTimeout(function () {
        uppodSend("player1", 'file\:' + 'http\://vk.hart-flamov.ru/PHP/stream.php');
        uppodSend("player1", 'play');
        //alert(41);
    }, 1000)
}