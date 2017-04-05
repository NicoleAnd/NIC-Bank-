$(document).ready(function() {
    var srcFirstList = [
        'img/icon/onlineTransactionB.png',
        'img/icon/platformParametersB.png',
        'img/icon/equipmentParametersB.png',
        'img/icon/trasiMonitorB.png',
        'img/icon/reportB.png',
        'img/icon/onlineTransaction.png',
        'img/icon/platformParameters.png',
        'img/icon/equipmentParameters.png',
        'img/icon/trasiMonitor.png',
        'img/icon/report.png',
        'img/icon/arrow.png',
        'img/icon/arrowB.png',
    ];
    var count = 0;
    $(".first-menu").each(function(index) {

        $(".first-menu > a").click(function() {

            var firstLiIndex = $(this).parents().index() - 1;
            count = firstLiIndex;

            // $(".first-menu > a").mousedown(function () {
            //     $(this).css("background", "#fff");
            // })
            //     .mouseup(function () {
            //         $(this).css("background", "#222");
            //     })
            // $(this).eq(firstLiIndex).parents().siblings("a").addClass("navdown").siblings().removeClass("navdown");

            $(this).next("ul").toggle().closest("li").siblings("li").children("ul").hide(500);


            $(".second-menu a").each(function(index) {
                $(this).click(function() {
                    $(".second-menu").parents().siblings("a").css({ 'backgroud': '#fff' });
                });

                $(this).hover(function() {
                    $(".second-menu").eq(index).parents().siblings("a").css({ 'color': '#68b0ff', 'background': '#fff' });
                    // $(".second-menu").eq(index).parents().siblings("a").addClass("colordown").siblings().removeClass("colordown");
                });
            });
            // $(".second-menu a").hover(function(){
            //     $(".second-menu").eq(index).parents().siblings("a").addClass("navdown").siblings().removeClass("navdown");
            // });

            // 点击样式
            // $(".first-menu").css({ 'backgroud': '#222' });


        }).next("ul").hide(500);

        // if (!$(".second-menus").is(":hidden")) {
        //     $(".first-menu").hover(function() {
        //     var firstLiIndex = $(this).index() - 1;
        //     // console.log(firstLiIndex);
        //     var domFLiList = $(this).eq(firstLiIndex);
        //     var domFImgList = $(".fm").eq(firstLiIndex);
        //     var domLImgList = $(".arrow").eq(firstLiIndex);
        //     $(domFImgList).attr("src", srcFirstList[firstLiIndex]);
        //     $(domLImgList).attr("src", srcFirstList[11]);
        // });
        // }



    });
    $(".first-menu").hover(function() {
        var firstLiIndex = $(this).index() - 1;
        // console.log(firstLiIndex);
        var domFLiList = $(this).eq(firstLiIndex);
        var domFImgList = $(".fm").eq(firstLiIndex);
        var domLImgList = $(".arrow").eq(firstLiIndex);
        $(domFImgList).attr("src", srcFirstList[firstLiIndex]);
        $(domLImgList).attr("src", srcFirstList[11]);

    }, function() {
        var firstLiIndex = $(this).index() - 1;
        if (count != firstLiIndex) {
            // console.log(firstLiIndex);
            var domFLiList = $(".first-menu").eq(firstLiIndex);
            var domFImgList = $(".fm").eq(firstLiIndex);
            var domLImgList = $(".arrow").eq(firstLiIndex);
            $(domFImgList).attr("src", srcFirstList[firstLiIndex + 5]);
            $(domLImgList).attr("src", srcFirstList[10]);

        }

    });
});
