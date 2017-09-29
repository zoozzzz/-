/**
 * Created by Cai on 2017/9/21.
 */
$(function () {
    $(window).on("resize", changeImgUrl);

    //一进来出发resize事件
    $(window).trigger("resize");

    function changeImgUrl(){
        //获取屏幕宽度
        var windowWidth = $(window).width();
        //是否显示小图
        var isShowSmallImg = windowWidth < 720;
        //console.log(isShowSmallImg);
        //获取所有item标签
        var item = $("#wjs_banner .item");
        console.log(item);
        //遍历
        item.each(function (index, obj) {
            //console.log($(obj).data("sm-img"));
            var imgUrl = isShowSmallImg ? $(obj).data("sm-img") : $(obj).data("lg-img");
            console.log(imgUrl);
            //console.log(obj);

            $(obj).css({
                backgroundImage :'url('+imgUrl+')'
            });

            if(isShowSmallImg){
                $(obj).empty();
                $(obj).prepend($("<img src='"+ imgUrl +"'/>"));
            }else{
                //console.log('url(../' + imgUrl + ')');
                $(obj).empty();
                //$(obj).css({
                //    backgroundImage :'url(../'+imgUrl+')'
                //});
            }

        })
    }


    //根据屏幕大小改变选项卡ul的宽度
    $(window).on("resize", function () {
        var $ul = $("#wjs_product .nav-tabs");
        var $aLi = $("#wjs_product .nav-tabs li[role='presentation']");
        //获取ul宽度
        //var width_ul = $ul.width();
        var width_ul = 0;
        //获取ul父元素的宽度
        var width_parent = $ul.parent().width();

        $aLi.each(function (index, obj) {
            width_ul += $(obj).width();
        })

        if(width_ul > width_parent){
            $ul.css({
                width: width_ul
            });
        }
        else{
            $ul.removeAttr("style");
        }
    })
})