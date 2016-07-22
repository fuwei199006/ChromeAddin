/* 
* @Author: anchen
* @Date:   2016-07-18 15:44:20
* @Last Modified by:   anchen
* @Last Modified time: 2016-07-18 16:12:04
*/

var ids=["ad_b1","banner_right","cpro_u2392861"];
var cls=["couponSlide","pvs"];

$.each(ids, function(index, val) {
     /* iterate through array or object */
     $("#"+val).remove();
});
$.each(cls, function(index, val) {
     /* iterate through array or object */
     $("."+val).remove();
});