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
