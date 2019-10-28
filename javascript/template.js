window.gs = !window.gs ? {} : window.gs;

(function(gs, window, document, $){

    function renderTemplate(name, containerId){
        var template = $("#template-" + name);
        var placeholder = $("#" + name);
        if(template.length && placeholder.length) {
            placeholder.replaceWith(template.html());
            $("body").remove("#" + containerId)
        } else {
            throw new Error("ERROR: Template or Placeholder not available");
        }
    }
    
    function loadTemplate(name, cb) {
        
        var baseTemplateUrl = "templates/";
        var containerId = "template-container";
        var container = $("#" + containerId);
    
        if(container.length === 0) {
            $("body").append("<div id='" + containerId + "'></div>");
            container = $("#" + containerId);
        }
        
        container
            .load( baseTemplateUrl + name + ".html", function(){
                renderTemplate(name, containerId);
                if(cb) {
                    cb();
                }
            });    
    }

    gs.templates = {
        render: renderTemplate,
        load: loadTemplate
    };

})(gs, window, document, $);
  
