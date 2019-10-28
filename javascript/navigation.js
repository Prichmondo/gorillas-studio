window.gs = !window.gs ? {} : window.gs;

(function(gs, window, document, $){

    var mobileMenuBtn;
    var mobileNav;
    var menuShadow;
    var hideNavBtn;

    function handleOpenMenuClick(){
        menuShadow.show();
        mobileNav.addClass('open');
    }

    function handleHideMenuClick(){
        menuShadow.hide();
        mobileNav.removeClass('open');
    }


    function initNavigation(){
        
        mobileMenuBtn = $("#mobile-menu-button");
        mobileNav = $("#top-nav");
        menuShadow = $("#top-mobile-menu-shadow");
        hideNavBtn = $('#btn-hide-nave');

        mobileMenuBtn.click(handleOpenMenuClick);
        hideNavBtn.click(handleHideMenuClick);

    }

    gs.navigation = {
        init: initNavigation
    };

})(gs, window, document, $);

  
