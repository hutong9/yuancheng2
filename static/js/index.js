/*
 * @Author: MEDCON 
 * @Date: 2021-03-15 15:30:43 
 * @Last Modified by:   MEDCON美迪康会务通 
 * @Last Modified time: 2021-03-15 15:30:43 
 */
$(function () {
    var len = $('#huiyi-ul li').length;
    var count = 0;
    $('#huiyi-ul li').each(function (index) {
        if ((index+1)%7 == 1 || (index+1)%7 == 3 || (index+1)%7 == 4 || (index+1)%7 == 6){
            $(this).addClass('marginModuleItem');
        }
        if ((index+1)%7 == 2 || (index+1)%7 == 6){
            $(this).addClass('doubleMoudleItem');
            if ((index+1)%7 == 6){
                $(this).find('p').addClass('align-self-flex-end');
                $(this).find('i').addClass('align-self-flex-end');
                $(this).find('a').addClass('align-self-flex-end');
                $(this).addClass('bigerBg1');
            }else if ((index+1)%7 == 2){
                $(this).find('p').addClass('align-self-flex-start');
                $(this).find('i').addClass('align-self-flex-start');
                $(this).find('a').addClass('align-self-flex-start');
                $(this).addClass('bigerBg2');
            }
        }
        if (((index+1)%7 == 2 || (index+1)%7 == 5 || (index+1)%7 ==0) && index!=0){
            $(this).addClass('marginModuleItem0');
        }
    });


    //设置时间
    (function(){
        var oDom = $("[data-end-day]");
        var today = +(new Date());
        if(!oDom.length){
            return false;
        }
        for(var i = 0; i < oDom.length; i++){
            var endTime = $(oDom[i]).attr('data-end-day').replace(/-/g, "/");
            endTime = +(new Date(endTime));
            var time = (endTime - today)/86400000;
            time = time > 0 ? time : '0';
            $(oDom[i]).children().children('i').html(Math.ceil(time)).addClass('fb').append('<span class="menu-today">天</span>');
            $()
        }
    })()
});