
$(function(){
    $.post("data.json",function(res){
        console.log(res);
    });
    var ids=["ad_b1","banner_right","cpro_u2392861","ad_b2","clubHeader_panelNews","QQcom_all_Width1:1"];
var cls=["couponSlide","pvs","a4content"];
 
$.each(ids, function(index, val) {
     /* iterate through array or object */
     $("#"+val).remove();
});
$.each(cls, function(index, val) {
     /* iterate through array or object */
     $("."+val).remove();
});
})
