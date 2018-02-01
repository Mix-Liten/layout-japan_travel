$(function () {
    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    });
    wow.init(); //啟動wow

    /* ----------------指定高度---------------- */

    $("nav li a").click(function () {
        var _target = $(this).data("target");
        var _offset = $("#" + _target).offset().top;
        $("html,body").animate({
            scrollTop: _offset
        }, 300);
        return false; //讓href失效，#符號本身有回到頂端的設定，也可將#改為javascript:;即可，
    });

    /* ----------------goTop---------------- */
    $("#gotop").click(function () {
        $("html,body").animate({
            scrollTop: 0
        });
        return false;
    });

    $("#gotop").hide(); //預設隱藏
    $(window).scroll(function () { //至指定高度時淡入淡出
        var q = $(window).scrollTop();
        if (q >= 54) {
            $("#gotop").fadeIn();
        } else {
            $("#gotop").fadeOut();
        }
    });

    /* ----------------humburger---------------- */
    $("nav .hamburger").click(function () {
        $("nav .hamburger").toggleClass("hamburger-x");
        $("nav .menu").slideToggle();
    });
    $(window).resize(function () {
        var w = $(window).width();
        if (w > 600) {
            $("nav .menu").show();
        } else {
            $("nav .menu").hide();
            $("nav .hamburger").removeClass("hamburger-x");
        }
    });

    /* ----------------slick_rwd---------------- */
    $("#news .slick").slick({
        autoplay: true,
        autoplaySpeed: 2000,//自動撥放 & 撥放速度
        speed: 1500,//圖片切換速度
        arrows: true,//預設為true，顯示上一張/下一張的按鍵
        dots: true,//下方出現目前第幾張的圖示
        slidesToShow: 3,
        responsive: [{
                breakpoint: 1200, //寬度臨界點
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
                    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    fade: true,
                    autoplaySpeed: 1500,
                }
                    }
                ]
    });

})
