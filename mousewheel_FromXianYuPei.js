window.onload=function(){
	//获取到要运动的最外层的div；
	var demoWrap=document.getElementById("demoWrap");
	//获取demo的四个div
	var demos=demoWrap.getElementsByTagName("div");
	//运动num；
	var demoMoveNum=0;
	//开关；
	var onoff=true;
	//右侧边栏；
	var demoPointWrap=document.getElementById("demoPointWrap");
	//右侧边栏的点；
	var demoPoints=demoPointWrap.getElementsByTagName("li");
	var demoPointsLength=demoPoints.length;

	//滚轮事件；
	addWheelEvent(document,wheelDown,wheelUp);
	
	function wheelMove(){
		demoWrap.style.top=-demoMoveNum*100+"vh";
		onoff=false;
		setTimeout(function(){
			onoff=true;
		},2000);
	};
	
	//滚轮向后；
	function wheelDown(){
		if(onoff){
			demoMoveNum++;
			if(demoMoveNum>3){
				demoMoveNum=3;
			};
			wheelMove();
			resetActive(demoMoveNum);
		};
	};
	
	//滚轮向前；
	function wheelUp(){
		if(onoff){
			demoMoveNum--;
			if(demoMoveNum<0){
				demoMoveNum=0;
			};
			wheelMove();
			resetActive(demoMoveNum);
		};
	};
	
	//右侧边栏的点——点击事件；
	for(var i=0;i<demoPointsLength;i++){
		(function(index){
			demoPoints[index].addEventListener("click",function(){
				resetActive(index);
				demoMoveNum=index;
				demoWrap.style.top=-demoMoveNum*100+"vh";
			},false);
		})(i);
	};
	
	//右侧边栏的点——重置颜色；
	function resetActive(index){
		for(var i=0;i<demoPointsLength;i++){
			demoPoints[i].className="";
		};
		demoPoints[index].className="active";
	};
	
	
	
};
