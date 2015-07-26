$(function() {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    $("body").css("background-image","url(img/bg"+getRandomInt(1,79)+".jpg)");
});