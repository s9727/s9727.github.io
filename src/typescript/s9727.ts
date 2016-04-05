/// <reference path="./jquery.d.ts" />

class Hoge {
    public piyo:string;
    constructor(private pp:string) {
        this.piyo == pp;
    }
}
var hoge:Hoge = new Hoge("aaa");
//alert(hoge.piyo);

var box : JQuery = $(".box");
//box.css("background-color", "#aaabbb");

var screenHeight = window.innerHeight;
$(".header,.panel").height(screenHeight);
//var panels = document.querySelectorAll(".panel");
//panels.item.a = screenHeight ;
//alert(screenHeight);
function setup() {

}


function draw() {
    ellipse(50, 50, 80, 80);
}
