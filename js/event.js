$(document).ready(function(){
    // Appear Animation
    $("main").fadeIn(500);
    $("main").css({"display": "flex"});

    // Notification Event
    $(".notification").click(function(){
        $(".notification-modal").fadeIn(200);
        $(".notification-modal").css({"display": "flex"});
    });

    $(".ok-btn").click(function(){
        $(".notification-modal").fadeOut(200);
    });


    // Add Task Button Event
    $(".add-btn").click(function(){
        $(".add-task-modal").fadeIn(200);
        $(".add-task-modal").css({"display": "flex"});
    })

    $(".cencel-btn").click(function(){
        $(".add-task-modal").fadeOut(200);
    })

    
    // Switch Section Event
    $(".active-task").click(function(){
        if($(".section-2").css("display") === "block"){
            $(".section-2").hide();
            $(".all-task").css({"color":"#3C3C3C"});
        }else{
            $(".hidden-section-2").hide();
            $(".completed-task").css({"color":"#3C3C3C"});
        }

        $(".active-task").css({"color":"#0267C5"});
        $(".hidden-section-1").fadeIn(500);
    });

    $(".all-task").click(function(){
        if($(".hidden-section-1").css("display") === "block"){
            $(".hidden-section-1").hide();
            $(".active-task").css({"color":"#3C3C3C"});
        }else{
            $(".hidden-section-2").hide();
            $(".completed-task").css({"color":"#3C3C3C"});
        }

        $(".all-task").css({"color":"#0267C5"});
        $(".section-2").fadeIn(500);
    });

    $(".completed-task").click(function(){
        if($(".section-2").css("display") === "block"){
            $(".section-2").hide();
            $(".all-task").css({"color":"#3C3C3C"});
        }else{
            $(".hidden-section-1").hide();
            $(".active-task").css({"color":"#3C3C3C"});
        }

        $(".completed-task").css({"color":"#0267C5"});
        $(".hidden-section-2").fadeIn(500);
    });
});