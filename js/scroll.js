$(document).ready(
    function() {
        $.scrollify({
            section : ".section",
            interstitialSection : ".footer",
            easing: "easeOutExpo",
            scrollSpeed: 1000,
            offset : 100,
            scrollbars: true,
            standardScrollElements: "",
            before:function() {},
            after:function() {},
            afterResize:function() {},
            afterRender:function() {}
        });
        $(".bounce").click(function() {
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#target").offset().top
            }, 1000);
        });
    }

);

  