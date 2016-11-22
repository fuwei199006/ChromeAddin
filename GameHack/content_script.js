
$(".btn").click(function(){
	 setInterval(function(){
	 	var eArr=$("#box span");
	 	var len=eArr.length;
	 	var cColor=$(eArr[0]).css("background-color");
	 	for (var i = 1; i < len-1; i++) {
	 		var cElement=$(eArr[i]);
	 		if(cElement.css("background-color")!==cColor){
	 			var nElement=$(eArr[i+1]);
	 			if(nElement.css("background-color")!==cColor){

	 			     $(eArr[0]).click();
	 			}
	 			else  {
	 				cElement.click();
	 			}


	 		}else{
	 			var nElement=$(eArr[i+1]);
	 			if(nElement.css("background-color")!==cColor){

	 			     nElement.click();
	 			} 
	 		}
	 	}
	 	 
	 },1);
});
