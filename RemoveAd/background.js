
$(function(){
	var ids=["ad_b1","banner_right","cpro_u2392861","ad_b2"];
var cls=["couponSlide","pvs"];
 
$.each(ids, function(index, val) {
     /* iterate through array or object */
     $("#"+val).remove();
});
$.each(cls, function(index, val) {
     /* iterate through array or object */
     $("."+val).remove();
});
})
