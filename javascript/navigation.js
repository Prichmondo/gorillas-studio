var mobileMenuBtn;
var mobileNav;
var mobileMenuShadow;
var mobileHideNavBtn;

function handleOpenMenuClick(){
    mobileNav.addClass('open');
}

function handleHideMenuClick(){
    mobileNav.removeClass('open');
}

function initNavigation(){
    
    mobileMenuBtn = $("#mobile-menu-button");
    mobileNav = $("#top-nav");
    mobileMenuShadow = $("#top-mobile-menu-shadow");
    mobileHideNavBtn = $('#btn-hide-nave');

    mobileMenuBtn.click(handleOpenMenuClick);
    mobileHideNavBtn.click(handleHideMenuClick);
}

$().ready(function(){
    initNavigation();
});