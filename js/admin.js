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
    $(".left-nav-bar ul li.first-menu").hover(function() {
        // 一级菜单li第几个
        var firstLiIndex = $(this).index() - 1;
        // console.log(firstLiIndex);
        var domFLiList = $(".first-menu").eq(firstLiIndex);
        var domFImgList = $(".fm").eq(firstLiIndex);
        var domLImgList = $(".arrow").eq(firstLiIndex);
        // firstLiIndex*2+1
        $(domFImgList).attr("src", srcFirstList[firstLiIndex]);
        $(domLImgList).attr("src", srcFirstList[11]);
        $(domFLiList).css('border-left', '0.2rem solid #68b0ff');
    }, function() {
        // 一级菜单li第几个
        var firstLiIndex = $(this).index() - 1;
        // console.log(firstLiIndex);
        var domFLiList = $(".first-menu").eq(firstLiIndex);
        var domFImgList = $(".fm").eq(firstLiIndex);
        var domLImgList = $(".arrow").eq(firstLiIndex);
        // firstLiIndex*2+1
        $(domFImgList).attr("src", srcFirstList[firstLiIndex + 5]);
        $(domLImgList).attr("src", srcFirstList[10]);
        $(domFLiList).css('border-left', '0.2rem solid #68b0ff');
    });

    // 二级菜单
    $('.second-menus li.second-menu').hover(function() {
        $(this).css({
            'background-color': '#68b0ff',
            'border-top-left-radius': '2rem',
            'border-bottom-left-radius': '2rem',
            'transition': '1s'
        });
    }, function() {
        $(this).css({ 'background-color': '#222', 'transition': '0.5s' });
    });
    $('.second-menus li.second-menu').click(function() {
        $(this).css({
            'background-color': '#fff',
            'border-top-left-radius': '2rem',
            'border-bottom-left-radius': '2rem'
        });
        $('.second-menus li.second-menu a').css({ 'color': '#68b0ff', });
    });
    $('.second-menus li.second-menu').mouseleave(function() {
        $(this).css({
            'background-color': '#fff',
            'border-top-left-radius': '2rem',
            'border-bottom-left-radius': '2rem'
        });
        $('.second-menus li.second-menu a').css({ 'color': '#68b0ff', 'backgound-color': '#fff' });
    });
});
