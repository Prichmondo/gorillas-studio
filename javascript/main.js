

window.gs = !window.gs ? {} : window.gs;

(function(gs, window, document, $){

    function init(){
        gs.templates.load("header", gs.navigation.init);
        gs.templates.load("footer");
    }

    window.addEventListener('load', function(){
        init();
    });

})(gs, window, document, $);

  
