
$(function() {    
    $(".navigation_options ul li a").on("mouseenter", function() {
        $(this).addClass("hovered");
    });

    $(".navigation_options ul li a").on("mouseleave", function() {
        $(this).removeClass("hovered");
    });

    $("#introduction_front_face_image").waypoint( 
        function () {
            $("#introduction_front_face_image_div").addClass(
                "animate__animated animate__fadeInRight fixImage"
            );
            console.log("waypoint1");
        }, {offset: "80%"}
    );

    $("#introduction_motto").waypoint(
        function () {
            $("#introduction_motto").addClass(
                "animate__animated animate__fadeInLeft"
            );
        }, {offset: "80%"}
    );

    $("#introduction_name").waypoint(
        function () {
            $("#introduction_name_div").addClass(
                "animate__animated animate__fadeInLeft"
            );
        }, {offset: "80%"}
    );

    /* About Me */

    $(".about_me_title_div").waypoint(
        function () {
            $(".about_me_title_div").addClass(
                "animate__animated animate__lightSpeedInRight"
            );
        }, {offset: "80%"}
    );

    $(".about_me_text_div").waypoint(
        function () {
            $(".about_me_text_div").addClass(
                "animate__animated animate__lightSpeedInLeft"
            );
        }, {offset: "70%"}
    );

    /* Skills */

    $("#skills_anchor").waypoint(
        function () {
            $("#skills_title").addClass(
                "animate__animated animate__rollIn"
            );
        }, {offset: "80%"}
    );

    $("#skills_anchor").waypoint(
        function () {
            $(".java .skill_progress").addClass(
                "java_progress"
            );
            $(".python .skill_progress").addClass(
                "python_progress"
            );
            $(".html .skill_progress").addClass(
                "html_progress"
            );
            $(".skill_progress").removeClass(
                "progress_not_shown"
            );
        }, {offset: "30%"}
    );

    $(".skill_name").waypoint(
        function () {
            $(".progress_bar").addClass(
                "animate__animated animate__fadeInUp"
            )
            $(".skill_name").addClass(
                "animate__animated animate__fadeInUp"
            )
        }, {offset: "52%"}
    );

    $("#projects_title").waypoint(
        function() {
            $("#projects_title").addClass(
                "animate__animated animate__heartBeat"
            )
        }, {offset: "52%"}
    );
    $("#projects_title").waypoint(
        function() {
            $(".card_animate_1").addClass(
                "animate__animated animate__fadeInDown"
            )
        }, {offset: "48%"}
    );
    $("#projects_title").waypoint(
        function() {
            $(".card_animate_2").addClass(
                "animate__animated animate__fadeInDown"
            )
        }, {offset: "44%"}
    );
    $("#projects_title").waypoint(
        function() {
            $(".card_animate_3").addClass(
                "animate__animated animate__fadeInDown"
            )
        }, {offset: "40%"}
    );
    $("#projects_title").waypoint(
        function() {
            $(".card_animate_4").addClass(
                "animate__animated animate__fadeInDown"
            )
        }, {offset: "36%"}
    );
    $("#projects_title").waypoint(
        function() {
            $(".card_animate_5").addClass(
                "animate__animated animate__fadeInDown"
            )
        }, {offset: "32%"}
    );
    $("#projects_title").waypoint(
        function() {
            $(".card_animate_6").addClass(
                "animate__animated animate__fadeInDown"
            )
        }, {offset: "28%"}
    );
    $("#projects_title").waypoint(
        function() {
            $(".card_animate_7").addClass(
                "animate__animated animate__fadeInDown"
            )
        }, {offset: "24%"}
    );
    $("#projects_title").waypoint(
        function() {
            $(".card_animate_8").addClass(
                "animate__animated animate__fadeInDown"
            )
        }, {offset: "20%"}
    );

    $(".left_arrow_button").on("click", function () {
        var currentReview = $(".active_testimonial");
        var prevReview = currentReview.prev(".slide_content");

        if (prevReview.length) {
            currentReview.removeClass('active_testimonial');
            prevReview.addClass('active_testimonial');
        }
    });
    
    $(".right_arrow_button").on("click", function () {
        var currentReview = $(".active_testimonial");
        console.log(currentReview);
        var nextReview = currentReview.next(".slide_content");

        if (nextReview.length) {
            currentReview.removeClass('active_testimonial');
            nextReview.addClass('active_testimonial');
        }
    });

    $(".testimonial_title").waypoint(
        function() {
            $(".testimonial_title").addClass(
                "animate__animated animate__bounceInRight"
            )
        }, {offset: "70%"}
    );

    $(".testimonial_inner_animation").waypoint(
        function() {
            $(".testimonial_inner_animation").addClass(
                "animate__animated animate__slideInUp"
            )
        }, {offset: "70%"}
    )
});

$("#form_validation").validate({
    rules: {
        name: {
            minLength:3
        }
    }, messages: {
        required: "Please enter your name",
        minLength: "Your name must include at least 1 character" /* Yes, I have met someone who had only a single letter for their first name*/
    }
})

// personal notes

// parameters
// 1. time in milliseconds (transition effect/ time it takes to close/open an element with slide anim)
// 2. function() {executes codeblock after element task finished executing}

// .hide() - hides selected element by sliding up into itself
// .toggle() - hides/shows selected element depending on prior state
// .slideToggle() - looks virtually similar to toggle, IDK lol
// .fadeOut() - fades the element away
// .fadeIn() - fades the element in
// .fadeToggle() - toggles fadeIn/fadeOut
// .fadeTo(speed, opacity)

// $('.class/#id/element').animate(
//    {
//       attribute1: "newValue",
//       attribute2: "+=addedValue",
//    }, "animation speed"
// ); note: use camelCase for dashed attributes

// .text("String") - sets text of element to String. gets text of element if parameter value not provided 
// .html("String") - same as .text(), but includes html elements as it is written in editor 
// .val("String") - Sets the value of an element. Returns the 'value' of the selected element if not provided

// $('.class/#id/element').addClass("Class Name"); - adds a class to an element
// $('.class/#id/element').removeClass("Class Name"); - removes a class to an element
// $('.class/#id/element').toggleClass("Class Name"); - toggles a class on an element

// $('.class/#id/element').css("CSS attribute name"); - gets css attribute
// $('.class/#id/element').css({"CSS attribute name" : CSS attribute option, ...});

// Waypoints
// $(".class/#id/element").waypoint(function () { // activates function when element reaches top of page
//    $(".class/#id/element").addClass("animate__animated ...") // insert animation class from Animate.css 
// }, {offset: "50 - 80%"}); // 50 - 80% to offset the waypoint to the bottom of the page


// in style.css:
// #element {
//     opacity: 0;    
// } invisible before reaching waypoint

// #element.animate__animated {
//     opacity: 1;
// } visible when animation is meant to play