$(document).ready(
    function(){
        $(".container").css("display", "none")
        $(".container").fadeIn(2000);
        $("#intro").css("display", "none");
        $(".arrow").css("display", "none");
        $("#intro").fadeIn(1500);
        $(".arrow").fadeIn(1500);
        baguetteBox.run('.gallery');
    }
);