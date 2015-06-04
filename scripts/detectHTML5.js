(function () {
    //if (swfobject.hasFlashPlayerVersion("9.0.18")) {
    //    var s = document.createElement("script");
    //    s.src = 'uppod/uppod_player.js';
    //    document.body.appendChild(s);
    //    return 1;
    //}
    if (navigator.userAgent.toLocaleLowerCase().indexOf("linux") != -1 && navigator.userAgent.toLocaleLowerCase().indexOf("webkit") != -1) {
        var s = document.createElement("script");
        s.src = 'uppod/swfobject.js';
        document.body.appendChild(s);
        var s = document.createElement("script");
        s.src = 'uppod/uppod_player.js';
        document.body.appendChild(s);
        return 1;
    }

    var audio = document.createElement("audio");
    if (audio != null && audio.canPlayType && audio.canPlayType("audio/mpeg")) {
        var s = document.createElement("script");
        s.src = 'scripts/audio.js';
        document.body.appendChild(s);
    }else {
        var s = document.createElement("script");
        s.src = 'uppod/swfobject.js';
        document.body.appendChild(s);
        var s = document.createElement("script");
        s.src = 'uppod/uppod_player.js';
        document.body.appendChild(s);
    }
})()

