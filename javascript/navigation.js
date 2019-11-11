window.gs = !window.gs ? {} : window.gs;

(function(gs, window, document, $){

    var mobileMenuBtn;
    var mobileNav;
    var mobileMenuShadow;
    var mobileHideNavBtn;
    var menuItems;

    function handleOpenMenuClick(){
        mobileMenuShadow.show();
        mobileNav.addClass('open');
    }

    function handleHideMenuClick(){
        mobileMenuShadow.hide();
        mobileNav.removeClass('open');
    }

    function handleMenuHover(el) {
        const menu = $(el.target).find('ul');
        // menu.addClass('hover');
        menu.show();
    }

    function handleMenuLeave(el) {
        const menu = $(el.target).find('ul');
        // menu.removeClass('hover');
        menu.hide();
    }

    function initMenu() {
        menuItems.mouseenter(handleMenuHover);
        menuItems.mouseleave(handleMenuLeave);
    }

    function initNavigation(){
        
        mobileMenuBtn = $("#mobile-menu-button");
        mobileNav = $("#top-nav");
        mobileMenuShadow = $("#top-mobile-menu-shadow");
        mobileHideNavBtn = $('#btn-hide-nave');
        menuItems = $("#main-nav > ul > li");

        initMenu();
        mobileMenuBtn.click(handleOpenMenuClick);
        mobileHideNavBtn.click(handleHideMenuClick);
    }

    gs.navigation = {
        init: initNavigation
    };

})(gs, window, document, $);

  
