/*
 * @Author: MEDCON 
 * @Date: 2021-03-15 15:31:17 
 * @Last Modified by:   MEDCON美迪康会务通 
 * @Last Modified time: 2021-03-15 15:31:17 
 */
// 文字缩放
$(document).ready(function() {
    if($('.content-cic').length>=1){
        //min font size
    var min = 14;
    //max font size
    var max = 20;
    //grab the default font size
    var reset = $('.content-cic').css('fontSize');
    //font resize these elements
    var elm = $('.content-cic');
    //set the default font size and remove px from the value
    var size = str_replace(reset, 'px', '');
    //Increase font size
    $('.js-fd').click(function() {
        //if the font size is lower or equal than the max value
        if (size <= max) {
            //increase the size
            size++;
            //set the font size
            elm.css({
                'fontSize': size
            });
        }
        //cancel a click event
        return false;
    });
    $('.js-sx').click(function() {
        //if the font size is greater or equal than min value
        if (size >= min) {
            //decrease the size
            size--;
            //set the font size
            elm.css({
                'fontSize': size
            });
        }
        //cancel a click event
        return false;
    });
    }
});
//A string replace function
function str_replace(haystack, needle, replacement) {
    var temp = haystack.split(needle);
    return temp.join(replacement);
};
// 倒计时
$(function() {
    $(".deadtime").each(function() {
        countDown($(this).attr("data"), "#" + $(this).attr("id"))
    })
});
function countDown(time, id) {
    var day_elem = $(id).find('.day');
    var hour_elem = $(id).find('.hour');
    var minute_elem = $(id).find('.minute');
    var second_elem = $(id).find('.second');
    var end_time = new Date(time.replace(/-/g,'\/')).getTime(), //月份是实际月份-1
        sys_second = (end_time - new Date().getTime()) / 1000;
    var timer = setInterval(function() {
        if (sys_second > 1) {
            sys_second -= 1;
            var day = Math.floor((sys_second / 3600) / 24);
            var hour = Math.floor((sys_second / 3600) % 24);
            var minute = Math.floor((sys_second / 60) % 60);
            var second = Math.floor(sys_second % 60);
            day_elem && $(day_elem).text(day); //计算天
            $(hour_elem).text(hour < 10 ? "0" + hour : hour); //计算小时
            $(minute_elem).text(minute < 10 ? "0" + minute : minute); //计算分钟
            $(second_elem).text(second < 10 ? "0" + second : second); //计算秒杀
        } else {
            clearInterval(timer);
            $(id).html("对不起，已经结束！")
        }
    }, 1000);
};
// 展开更多
window.onload=function () {
    $(".tgmorew-140").each(function () {
        if($(this).height()>140){
            $(this).height(140);
            $(this).next(".tgmorebtn").show();
        }
    });
    $(".tgmorew-558").each(function () {
        if($(this).height()>558){
            $(this).height(558);
            $(this).next(".tgmorebtn").show();
        }
    });
}
$(function () {
    $(".tgmorebtn").on("click",function () {
        if ($(this).prev(".tgmorew").hasClass("opend")) {
            $(this).prev(".tgmorew").removeClass("opend");
            $(this).find("a").html('<i class="iconfont icon-angle-down"></i>展开更多')
        }else{
            $(this).prev(".tgmorew").addClass("opend");
            $(this).find("a").html('<i class="iconfont icon-angle-up"></i>收起更多')
        };
    })
});