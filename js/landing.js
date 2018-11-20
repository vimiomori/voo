$(document).ready(
    function(){
        $("body").css("display", "none")
        $("body").fadeIn(500);
        $('.shing').each(
            function(){
                $(this).attr('effect', $(this).text());
            }
        );
    }
);