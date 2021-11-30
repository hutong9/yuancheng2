var COMMON = {
    init : function(){
        COMMON.subAslideTabFun();
    },

    //二级左侧导航弹出与关闭
    subAslideTabFun:function(){
        // 导航开启
        $('.js_sub_menu_btn').bind('click',function(){
            $('.js_sub_menu_btn,.js_sub_aslide_wrapper').toggleClass('active');
        })

        // 导航关闭
        $('.js_sub_aslide_bg').on('click',function(){
            $('.js_sub_menu_btn,.js_sub_aslide_wrapper').removeClass('active');

        })
    },
}

$(function(){
    COMMON.init();
})
