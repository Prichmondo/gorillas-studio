window.gs = !window.gs ? {} : window.gs;

(function(gs, window, document, $){

    function initNavigation(){
        var currentUrl = document.location.pathname;
        var links = $('#main-nav a');
        var link;
        if(links.length > 0) {
            links.each(function(i){
                link = links.eq(i);
                if(link.attr('href') === currentUrl){
                    link.attr('data-selected', 'true');
                } else {
                    link.attr('data-selected', 'false');
                }
            })
        }
    }

    gs.navigation = {
        init: initNavigation
    };

})(gs, window, document, $);

  
