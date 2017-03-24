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
    $(".first-menu").each(function(index) {
        $(this).click(function() {
            $(".first-menu").children("a").removeClass("selectednav");
            $(".first-menu").children("a").eq(index).addClass("selectednav");


            // if ($(".first-menu").eq(index).children("ul").css("display") == "none") {
            //     $(".first-menu").children("ul").hide().fadeOut(1000);
            //     $(".first-menu").eq(index).children("ul").show().fadeIn(1000);
            // } else {
            //     $(".first-menu").eq(index).children("ul").hide().fadeOut(1000);
            // }

            // $(".first-menu").eq(index).children("ul").toggle(function() {
                // $(".first-menu").eq(index).children("ul").removeClass("show").addClass("second-menus");
                 $(".first-menu").eq(index).children("ul").removeClass("second-menus").addClass("show");
            // }, function() {
            //     $(".first-menu").eq(index).children("ul").removeClass("second-menus").addClass("show");
            // });
            

        });
    });



    $(".first-menu").mouseover(function() {
        // 一级菜单li第几个
        var firstLiIndex = $(this).index() - 1;
        // console.log(firstLiIndex);
        var domFLiList = $(this).eq(firstLiIndex);
        var domFImgList = $(".fm").eq(firstLiIndex);
        var domLImgList = $(".arrow").eq(firstLiIndex);
        $(domFImgList).attr("src", srcFirstList[firstLiIndex]);
        $(domLImgList).attr("src", srcFirstList[11]);

        // }, function() {
        // 一级菜单li第几个
        // var firstLiIndex = $(this).index() - 1;
        // // console.log(firstLiIndex);
        // var domFLiList = $(".first-menu").eq(firstLiIndex);
        // var domFImgList = $(".fm").eq(firstLiIndex);
        // var domLImgList = $(".arrow").eq(firstLiIndex);
        // $(domFImgList).attr("src", srcFirstList[firstLiIndex + 5]);
        // $(domLImgList).attr("src", srcFirstList[10]);

    });
    $(".first-menu").mouseout(function() {
        var firstLiIndex = $(this).index() - 1;
        // console.log(firstLiIndex);
        var domFLiList = $(".first-menu").eq(firstLiIndex);
        var domFImgList = $(".fm").eq(firstLiIndex);
        var domLImgList = $(".arrow").eq(firstLiIndex);
        $(domFImgList).attr("src", srcFirstList[firstLiIndex + 5]);
        $(domLImgList).attr("src", srcFirstList[10]);
    });



    // 二级菜单
    $(".second-menu").click(function() {
        $(this).parents().siblings("a").css('color', '#68b0ff');
        // $(this).parents().siblings("a").addClass("selectednav");
    });


});
