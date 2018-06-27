/* header */
$("#app_down").click(function(){
    $(".app_down").css("display","block");
});
$(".close").click(function () {
    $(".app_down").css("display","none");
});
$(".ios_icon").click(function () {
    $(".QR").attr("src","images/iosQrcodeDownload.png")
});
$(".android_icon").click(function () {
    $(".QR").attr("src","images/android.png")
});

/* footer */
