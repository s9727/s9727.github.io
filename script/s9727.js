/* this script reference to http://julian.com/research/velocity/demo.html */


$.Velocity.defaults.easing = "easeInOutsine";
var petalCount = 40,
    petalsHtml = "";
var screenWidth = window.screen.availWidth,
    screenHeight = window.screen.availHeight,
    chromeHeight = screenHeight - (document.documentElement.clientHeight || screenHeight);
var translateZMin = -725,
    translateZMax = 600;

var containerAnimationMap = {
    perspective: [ 215, 50 ]
};

$("#header").css("height", screenHeight * 0.95 + "px");

for (var i = 0; i < petalCount; i++) {
    petalsHtml += "<div class='dot'><img src='images/sakura.svg' class='sakura' /></div>";
}
$petals = $(petalsHtml);

var header = $("#header");
header
    .css("perspective-origin", screenWidth/2 + "px " + ((screenHeight * 0.45) - chromeHeight) + "px")
    .velocity(containerAnimationMap, { duration: 8000, loop: false, easing: 'ease-in', delay: 3250 });

$petals
    .velocity({
        translateX: [
            function() { return "+=" + r(-screenWidth/2.5, screenWidth/2.5) },
            function() { return r(0, screenWidth) }
        ],
        translateY: [
            function() { return "+=" + r(-screenHeight/2.75, screenHeight/2.75) },
            function() { return r(0, screenHeight) }
        ],
        translateZ: [
            function() { return "+=" + r(translateZMin, translateZMax) },
            function() { return r(translateZMin, translateZMax) }
        ],
        opacity: [
            function() { return Math.random() },
            function() { return Math.random() + 0.1 }
        ]
}, { duration: 6000 ,
    loop: true})
    .velocity("reverse", { easing: "easeOutQuad" })
    .appendTo(header);


$(".sakura").each(function( index ) {
    $(this).velocity({
        rotateX: r(-180, 360) + "deg",
        rotateY: r(-360, 360) + "deg",
        rotateZ: r(-180, 360) + "deg"
    }, {
        duration: r(800, 2500),
        easing: 'ease-in',
        loop: true
    });
});
$(".greeting").velocity({
    opacity: [1, 0.5]
}, {
    duration: 1000,
   // easing: 'ease-in',
    loop: 0,
    delay: 1000
});


// tags
var scrollHeight = 40;
$("#uiux,#dev").each(function(){
    var target = $(this).attr("id");
    var tags = $(this).find(".skill_table>.skillbox>.skill_tag>li");
    var st = tags.length * scrollHeight ;
    var ed = st - scrollHeight;
    console.log(st + ":" + ed);
    tags.each(function(){
        //console.log($(this).html());
        $(this).attr("data-anchor-target", "#" + target);
        //        $(this).attr("data-" + st + "-top", "display:none;");
        //        $(this).attr("data-" + ed + "-bottom", "display:block;");
        $(this).attr("data-" + st + "-top", "opacity:0;");
        $(this).attr("data-" + ed + "-bottom", "opacity:1;");
        st = st - scrollHeight;
        ed = ed - scrollHeight;
    });
});


function r (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
