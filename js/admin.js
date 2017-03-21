$(document).ready(function() {
    $('.left-nav-bar ul li:nth-child(2)').hover(function() {
        $('.left-nav-bar ul li:nth-child(2) img:first-child').attr("src", "img/icon/onlineTransactionB.png");
        $('.left-nav-bar ul li:nth-child(2) img:last-child').attr("src", "img/icon/arrowB.png");
    }, function() {
        $('.left-nav-bar ul li:nth-child(2) img:first-child').attr("src", "img/icon/onlineTransaction.png");
        $('.left-nav-bar ul li:nth-child(2) img:last-child').attr("src", "img/icon/arrow.png");
    });
    $('.left-nav-bar ul li:nth-child(3)').hover(function() {
        $('.left-nav-bar ul li:nth-child(3) img:first-child').attr("src", "img/icon/platformParametersB.png");
        $('.left-nav-bar ul li:nth-child(3) img:last-child').attr("src", "img/icon/arrowB.png");
    }, function() {
        $('.left-nav-bar ul li:nth-child(3) img:first-child').attr("src", "img/icon/platformParameters.png");
        $('.left-nav-bar ul li:nth-child(3) img:last-child').attr("src", "img/icon/arrow.png");
    });
    $('.left-nav-bar ul li:nth-child(4)').hover(function() {
        $('.left-nav-bar ul li:nth-child(4) img:first-child').attr("src", "img/icon/equipmentParametersB.png");
        $('.left-nav-bar ul li:nth-child(4) img:last-child').attr("src", "img/icon/arrowB.png");
    }, function() {
        $('.left-nav-bar ul li:nth-child(4) img:first-child').attr("src", "img/icon/equipmentParameters.png");
        $('.left-nav-bar ul li:nth-child(4) img:last-child').attr("src", "img/icon/arrow.png");
    });
    $('.left-nav-bar ul li:nth-child(5)').hover(function() {
        $('.left-nav-bar ul li:nth-child(5) img:first-child').attr("src", "img/icon/trasiMonitorB.png");
        $('.left-nav-bar ul li:nth-child(5) img:last-child').attr("src", "img/icon/arrowB.png");
    }, function() {
        $('.left-nav-bar ul li:nth-child(5) img:first-child').attr("src", "img/icon/trasiMonitor.png");
        $('.left-nav-bar ul li:nth-child(5) img:last-child').attr("src", "img/icon/arrow.png");
    });
    $('.left-nav-bar ul li:nth-child(6)').hover(function() {
        $('.left-nav-bar ul li:nth-child(6) img:first-child').attr("src", "img/icon/reportB.png");
        $('.left-nav-bar ul li:nth-child(6) img:last-child').attr("src", "img/icon/arrowB.png");
    }, function() {
        $('.left-nav-bar ul li:nth-child(6) img:first-child').attr("src", "img/icon/report.png");
        $('.left-nav-bar ul li:nth-child(6) img:last-child').attr("src", "img/icon/arrow.png");
    });

    $('.second-menus li.second-menu').hover(function(){
        $(this).css('background-color','#68b0ff');
        $(this).css('border-radius','2rem');

    },function(){
        $(this).css('background-color','#222');
    });
});
