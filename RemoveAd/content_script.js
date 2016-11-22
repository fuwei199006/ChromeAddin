var ids=["ad_b1","banner_right","cpro_u2392861","ad_b2","clubHeader_panelNews","QQcom_all_Width1:1","ad_b3","ad_b4","ad-left","cpro_u2392791","cpro_u2392861"];
var cls=["couponSlide","pvs","a4content","ad-under","ad-float","slide-outer"];
$(function(){
    $.each(ids, function(index, val) {
     /* iterate through array or object */
     $("#"+val).remove();
});
$.each(cls, function(index, val) {
     /* iterate through array or object */
     $("."+val).remove();
});
$("[class^=ad]").remove();
$("[class$=ad]").remove();

$("[id^=ad]").remove();
$("[id$=ad]").remove();
$("[id^=BAIDU_SSP]").remove();
 
$.get('http://www.2345.com/?k70759262', function(res) {
    /*optional stuff to do after success */
});
 
});
