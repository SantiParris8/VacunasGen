function addTextToImage(text, ci) {
var circle_canvas = document.getElementById("canvas");
var context = circle_canvas.getContext("2d");

// Draw Image function
var img = new Image();
img.src = "aaa.jpg";
img.onload = function () {
    context.drawImage(img, 0, 0);
    context.lineWidth = 1;
    context.fillStyle = "#000000";
    context.lineStyle = "#000000";
    context.font = "bold 20px sans-serif";
    context.fillText(text.toUpperCase(), 90, 565);
    context.font = "bold 24px sans-serif";
    context.fillText(ci, 88, 700);
    document.getElementById("h1").style.display = "block";
};
}
