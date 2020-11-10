$(document).ready(function(){
    $(this).scrollTop(0);
    $(".navbar a").on('click', function(e) {
        if (this.hash !== ''){
            e.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top-60
            }, 900, function(){
                window.location.hash = hash-60;
            });
        }
        if($('.navbar-collapse').hasClass("in") ) {
            $(".navbar-collapse").removeClass("in").fadeOut(1000);
            $('[data-toggle="collapse"]').find('span').removeClass('la-times').addClass('la-navicon');
        }
    });

    $(window).on("scroll", function() {
        if($(window).scrollTop() > 60) {
            $(".header").addClass("active-bg");
        } else {
            $(".header").removeClass("active-bg");
        }
    });
    $("#lefthamburger").on('click', function(e) {

        if($(this).find('span').hasClass('la-navicon')){
            $(".left-sidebar").css("display", "block");
            $(".left-parent").addClass("left-parent-style");
            $(".dash-main-content").css("overflow", "hidden");
        }
        else{
            $(".left-sidebar").css("display", "none");
            $(".left-parent").removeClass("left-parent-style");
            $(".dash-main-content").css("overflow", "auto");
        }

    });

    $('[data-toggle="collapse"]').on('click', function() {
        if($(this).find('span').hasClass('la-navicon')){
            $(this).find('span').removeClass('la-navicon').addClass('la-times');
        }
        else{
            $(this).find('span').removeClass('la-times').addClass('la-navicon');
        }
    });

    var href = document.location.href;
    var lastPathSegment = href.substr(href.lastIndexOf('/') + 1);
    switch (lastPathSegment) {
        case 'register.php':
            $('body').addClass('bg-aliceblue');
            break;
        case 'login.php':
            $('body').addClass('bg-aliceblue');
            break;
        case 'forgot_password.php':
            $('body').addClass('bg-aliceblue');
            break;
    }

    $(".custom-select").each(function(){
        $(this).wrap("<span class='select-wrapper'></span>");
        $(this).after("<span class='holder'></span>");
    });
    $(".custom-select").change(function(){
        var selectedOption = $(this).find(":selected").text();
        $(this).next(".holder").text(selectedOption);
    }).trigger('change');

    //My account show/hide
    $(".nav-tabs li a").click(function(e){
        e.preventDefault();
        var parent_ele=$(this).parent();
        $(parent_ele).addClass('active').siblings().removeClass('active');
        var active_div=($(this).attr("href"));
        $(active_div).show().siblings(".my-account").hide();
        return false;
    })



    $(document)
        .on('show.bs.modal', '.modal', function () { $(".header").addClass("pad-r-15"); })
        .on('hidden.bs.modal', '.modal', function () { $(".header").removeClass("pad-r-15"); })



    /*$("[data-target='#emailverify']").click(function(e){
        $(".header").css("padding-right", "15px");
    });
*/

});