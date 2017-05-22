//商品数量加减
function fun(obj,flag){
    if(flag){
        var res=parseInt($(obj).next('input').val());
        res++;
        $(obj).next('input').val(res); 
    }else{
        var res=parseInt($(obj).prev('input').val());
        res--;
        if(res==0){
         return;
        }
        $(obj).prev('input').val(res);
    }
}
//商品图片切换
$('.small-img img').mouseover(function(){
    var src = $(this).attr('qjimg');
    $('.goods-img img').attr('src',src);
    $(this).addClass("aa").siblings().removeClass("aa");
})