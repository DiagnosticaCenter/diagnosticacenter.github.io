(function() {
    $(function() {
        var collapseMyMenu, expandMyMenu, hideMenuTexts, showMenuTexts;
        expandMyMenu = function() {
            return $("nav.sidebar").removeClass("sidebar-menu-collapsed").addClass("sidebar-menu-expanded");
        };
        collapseMyMenu = function() {
            return $("nav.sidebar").removeClass("sidebar-menu-expanded").addClass("sidebar-menu-collapsed");
        };
        showMenuTexts = function() {
            return $("nav.sidebar ul a span.expanded-element").show();
        };
        hideMenuTexts = function() {
            return $("nav.sidebar ul a span.expanded-element").hide();
        };
        return $("#justify-icon").click(function(e) {
            if ($(this).parent("nav.sidebar").hasClass("sidebar-menu-collapsed")) {
                expandMyMenu();
                showMenuTexts();
                $(this).css({
                    color: "#000"
                });
            } else if ($(this).parent("nav.sidebar").hasClass("sidebar-menu-expanded")) {
                collapseMyMenu();
                hideMenuTexts();
                $(this).css({
                    color: "#FFF"
                });
            }
            return false;
        });
    });

}).call(this);

$(document).ready(function(){

    //toggle menu
    $('.hamburger-container').click(function(){
        $('#menu').slideToggle();
    });

    //to fix issue that toggle adds style(hides) to nav
    $(window).resize(function(){
        if(window.innerWidth > 1024) {
            $('#menu').removeAttr('style');
        }
    });

    //icon animation
    var topBar = $('.hamburger li:nth-child(1)'),
        middleBar = $('.hamburger li:nth-child(2)'),
        bottomBar = $('.hamburger li:nth-child(3)');

    $('.hamburger-container').on('click', function() {
        if (middleBar.hasClass('rot-45deg')) {
            topBar.removeClass('rot45deg');
            middleBar.removeClass('rot-45deg');
            bottomBar.removeClass('hidden');
        } else {
            bottomBar.addClass('hidden');
            topBar.addClass('rot45deg');
            middleBar.addClass('rot-45deg');
        }
    });

});