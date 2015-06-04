var swfobject = {};
try {
    HTMLAudioElement.prototype.stop = function () {
        this.pause();
        var src = this.src;
        this.src = 'http://web.meridianvk.com/stop.mp3';
        this.pause();
        this.src = src;
    }
} catch (e) {
    
}
swfobject.embedSWF = function (a, b, c, d, e, f, flashvars, params, attributes) {
    var a = document.createElement("audio");
    a.src = flashvars.file;
    a.addEventListener("ended", uppodTheEnd, false);
    a.addEventListener("error", uppodErrorReport, false);

    document.getElementById(attributes.name).appendChild(a);
    swfobject.a = a;
    //a.volume = 0.8;
    //Player.volume.setValue(80)
    Player.init = true;
    uppodInit()
}

uppodSend = function (a, b) {
    if (b == "play") {
        swfobject.a.play();
    }
    if (b.charAt(0) == "v") {
        swfobject.a.volume = parseInt(b.substring(1)) / 100;
    }
    if (b == "stop") {
        swfobject.a.stop();
    }
    if (b == "toggle") {
        if (swfobject.a.paused) {
            swfobject.a.play()
        }else {
            swfobject.a.pause();
        }
    }
    if (b.indexOf("file\:") != -1) {
        swfobject.a.src = b.substring(5);
    }
    if (b.indexOf("seek\:") != -1) {
        swfobject.a.currentTime = b.substring(5);
    }
}

uppodGet = function (a, b) {
    if (b == 'getstatus') {
        if (swfobject.a.paused) {
            return 0;
        }else {
            return 1;
        }
    }
    if (b == "getimed") {
        return swfobject.a.duration;
    }
    if (b == "getime") {
        return swfobject.a.currentTime;
    }
    if (b == "getprocent") {
        var loaded = swfobject.a.buffered.length > 0 ? loaded = swfobject.a.buffered.end(0) / swfobject.a.duration : 0;
        loaded = loaded * 100;
        if (loaded > 100) {
            loaded = 100;
        }
        return loaded;
    }

    //e.buffered.length>0?loaded=e.buffered.end(0)/e.duration
}

uppodStopAll = function () {
    swfobject.a.pause();
}

