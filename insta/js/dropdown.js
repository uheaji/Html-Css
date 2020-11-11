var container = $(".dropdirect");
var activity = $(".menu__activity");



$(".dropdirect").hide();
$(document).mouseup(function (e) {
    activity.click(function () {
        container.toggle();
        if ( container.css("display") == "none" ) $("#activity-icon").attr("src", "images/like_outline.png");
    else $("#activity-icon").attr("src", "images/like.png");

    })
    if (container.has(e.target).length == 0){
        container.hide();
        $("#activity-icon").attr("src", "images/like_outline.png");
    }
 
        // $("#activity-icon").attr("src", "../images/like_outline.png");
  
        
    
    
});