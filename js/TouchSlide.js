/*!
 * TouchSlide v1.1
 * javascript瑙﹀睆婊戝姩鐗规晥鎻掍欢锛岀Щ鍔ㄧ婊戝姩鐗规晥锛岃Е灞忕劍鐐瑰浘锛岃Е灞廡ab鍒囨崲锛岃Е灞忓鍥惧垏鎹㈢瓑
 * 璇﹀敖淇℃伅璇风湅瀹樼綉锛歨ttp://www.SuperSlide2.com/TouchSlide/
 *
 * Copyright 2013 澶ц瘽涓诲腑
 *
 * 璇峰皧閲嶅師鍒涳紝淇濈暀澶撮儴鐗堟潈
 * 鍦ㄤ繚鐣欑増鏉冪殑鍓嶆彁涓嬪彲搴旂敤浜庝釜浜烘垨鍟嗕笟鐢ㄩ€�

 * 1.1 瀹藉害鑷€傚簲锛堜慨澶嶅畨鍗撴í灞忔椂婊戝姩鑼冨洿涓嶅彉鐨刡ug锛�
 */
var TouchSlide = function(a){
	
	a = a||{};
	var opts = {
		slideCell:a.slideCell || "#touchSlide", //杩愯鏁堟灉涓诲璞★紝蹇呴』鐢╥d锛侊紝渚嬪 slideCell:"#touchSlide"
		titCell:a.titCell || ".hd li", // 瀵艰埅瀵硅薄锛屽綋鑷姩鍒嗛〉璁句负true鏃朵负鈥滃鑸璞″寘瑁瑰眰鈥�
		mainCell:a.mainCell || ".bd", // 鍒囨崲瀵硅薄鍖呰９灞�
		effect:a.effect || "left", // 鏁堟灉锛屾敮鎸� left銆乴eftLoop
		autoPlay:a.autoPlay || false, // 鑷姩鎾斁
		delayTime:a.delayTime || 200, // 鏁堟灉鎸佺画鏃堕棿
		interTime:a.interTime ||2500, // 鑷姩杩愯闂撮殧
		defaultIndex:a.defaultIndex ||0, // 榛樿鐨勫綋鍓嶄綅缃储寮曘€�0鏄涓€涓紱 defaultIndex:1 鏃讹紝鐩稿綋浜庝粠绗�2涓紑濮嬫墽琛�
		titOnClassName:a.titOnClassName ||"on", // 褰撳墠瀵艰埅瀵硅薄娣诲姞鐨刢lassName
		autoPage:a.autoPage || false, // 鑷姩鍒嗛〉锛屽綋涓簍rue鏃秚itCell涓衡€滃鑸璞″寘瑁瑰眰鈥�
		prevCell:a.prevCell ||".prev", // 鍓嶄竴椤垫寜閽�
		nextCell:a.nextCell ||".next", // 鍚庝竴椤垫寜閽�
		pageStateCell:a.pageStateCell ||".pageState", // 鍒嗛〉鐘舵€佸璞★紝鐢ㄤ簬鏄剧ず鍒嗛〉鐘舵€侊紝渚嬪锛�2/3
		pnLoop:a.pnLoop=='undefined '?true:a.pnLoop , // 鍓嶅悗鎸夐挳鐐瑰嚮鏄惁缁х画鎵ц鏁堟灉锛屽綋涓烘渶鍓�/鍚庨〉鏄細鑷姩娣诲姞鈥減revStop鈥�/鈥渘extStop鈥濇帶鍒舵牱鑹�
		startFun:a.startFun || null, // 姣忔鍒囨崲鏁堟灉寮€濮嬫椂鎵ц鍑芥暟锛岀敤浜庡鐞嗙壒娈婃儏鍐垫垨鍒涘缓鏇村鏁堟灉銆傜敤娉� satrtFun:function(i,c){ }锛� 鍏朵腑i涓哄綋鍓嶅垎椤碉紝c涓烘€婚〉鏁�
		endFun:a.endFun || null, // 姣忔鍒囨崲鏁堟灉缁撴潫鏃舵墽琛屽嚱鏁帮紝鐢ㄤ簬澶勭悊鐗规畩鎯呭喌鎴栧垱寤烘洿澶氭晥鏋溿€傜敤娉� endFun:function(i,c){ }锛� 鍏朵腑i涓哄綋鍓嶅垎椤碉紝c涓烘€婚〉鏁�
		switchLoad:a.switchLoad || null //姣忔鍒囨崲鏁堟灉缁撴潫鏃舵墽琛屽嚱鏁帮紝鐢ㄤ簬澶勭悊鐗规畩鎯呭喌鎴栧垱寤烘洿澶氭晥鏋溿€傜敤娉� endFun:function(i,c){ }锛� 鍏朵腑i涓哄綋鍓嶅垎椤碉紝c涓烘€婚〉鏁�
	}

	var slideCell = document.getElementById(opts.slideCell.replace("#",""));
	if( !slideCell ) return false;


	//绠€鍗曟ā鎷焜query閫夋嫨鍣�
	var obj = function(str,parEle){ 
		str = str.split(" ");
		var par = [];
		parEle = parEle||document;
		var retn = [ parEle ] ;
		for( var i in str ){ if(str[i].length!=0) par.push(str[i]) } //鍘绘帀閲嶅绌烘牸
		for( var i in par ){ 
			if( retn.length==0 ) return false;
			var _retn = [];
			for ( var r in retn )
			{
				if( par[i][0] =="#" ) _retn.push( document.getElementById( par[i].replace("#","") ) );
				else if( par[i][0] =="." ){
					var tag = retn[r].getElementsByTagName('*');
					for( var j=0; j<tag.length; j++ ){
						var cln = tag[j].className;
						if( cln && cln.search(new RegExp("\\b" + par[i].replace(".","") + "\\b"))!=-1 ){ _retn.push( tag[j] ); }
					}
				}
				else { var tag = retn[r].getElementsByTagName( par[i] ); for( var j=0; j<tag.length; j++ ){ _retn.push( tag[j] ) } }
			}
			retn =_retn;
		}
		
		return retn.length==0 || retn[0] == parEle ? false:retn;
	}// obj E

	// 鍒涘缓鍖呰９灞�
	var wrap = function(el, v){
			var tmp = document.createElement('div');
			tmp.innerHTML = v;
			tmp = tmp.children[0];
			var _el = el.cloneNode(true);
			tmp.appendChild(_el);
			el.parentNode.replaceChild(tmp, el);
			conBox = _el; // 閲嶇疆conBox
			return tmp;
	};

	// 鑾峰彇鏍疯壊鏁板€�
	var getStyleVal =function(el, attr){ var v=0; if(el.currentStyle){ v= el.currentStyle[attr] } else { v= getComputedStyle(el,false)[attr]; } return parseInt(v.replace("px","")) } 

	// class澶勭悊
	var addClass =function(ele, className){
		 if (!ele || !className || (ele.className && ele.className.search(new RegExp("\\b" + className + "\\b")) != -1)) return;
		 ele.className += (ele.className ? " " : "") + className;
	}

	var removeClass = function(ele, className){
		 if (!ele || !className || (ele.className && ele.className.search(new RegExp("\\b" + className + "\\b")) == -1)) return;
		 ele.className = ele.className.replace(new RegExp("\\s*\\b" + className + "\\b", "g"), "");
	}

	//鍏ㄥ眬瀵硅薄
	var effect = opts.effect;
	var prevBtn = obj( opts.prevCell,slideCell )[0];
	var nextBtn = obj( opts.nextCell,slideCell )[0];
	var pageState = obj( opts.pageStateCell )[0];
	var conBox = obj( opts.mainCell,slideCell )[0];//鍐呭鍏冪礌鐖跺眰瀵硅薄
	if( !conBox ) return false;
	var conBoxSize= conBox.children.length;
	var navObj = obj( opts.titCell,slideCell );//瀵艰埅瀛愬厓绱犵粨鍚�
	var navObjSize = navObj?navObj.length:conBoxSize;
	var sLoad=opts.switchLoad;

	/*瀛楃涓茶浆鎹�*/
	var index=parseInt(opts.defaultIndex);
	var delayTime=parseInt(opts.delayTime);
	var interTime=parseInt(opts.interTime);
	var autoPlay = (opts.autoPlay=="false"||opts.autoPlay==false)?false:true;
	var autoPage = (opts.autoPage=="false"||opts.autoPage==false)?false:true;
	var loop = (opts.pnLoop=="false"||opts.pnLoop==false)?false:true;
	var oldIndex = index;
	var inter=null;// autoPlay鐨剆etInterval
	var timeout = null; // leftLoop鐨剆etTimeout
	var endTimeout = null;  //translate鐨剆etTimeout
	
	var startX = 0;
	var startY = 0;
	var distX = 0;
	var distY = 0;
	var dist = 0; //鎵嬫寚婊戝姩璺濈
	var isTouchPad = (/hp-tablet/gi).test(navigator.appVersion);
	var hasTouch = 'ontouchstart' in window && !isTouchPad;
	var touchStart = hasTouch ? 'touchstart' : 'mousedown';
	//var touchMove = hasTouch ? 'touchmove' : 'mousemove';
	var touchMove = hasTouch ? 'touchmove' : '';
	var touchEnd = hasTouch ? 'touchend' : 'mouseup';
	var slideH=0;
	var slideW= conBox.parentNode.clientWidth;// mainCell婊戝姩璺濈
	var twCell;
	var scrollY ;
	var tempSize = conBoxSize;
	
	//澶勭悊鍒嗛〉
	if( navObjSize==0 )navObjSize=conBoxSize;
	if( autoPage ){
		navObjSize=conBoxSize;
		navObj=navObj[0];
		navObj.innerHTML=""; 
		var str="";

		if( opts.autoPage==true|| opts.autoPage=="true" ){ for( var i=0; i<navObjSize; i++ ){ str+="<li>"+(i+1)+"</li>" } }
		else{ for( var i=0; i<navObjSize; i++ ){ str+=opts.autoPage.replace("$",(i+1))  } }
		
		navObj.innerHTML=str;
		navObj = navObj.children;//閲嶇疆navObj
	}

	
	
	if( effect == "leftLoop" ){
		tempSize +=2;
		conBox.appendChild( conBox.children[0].cloneNode(true) );
		conBox.insertBefore( conBox.children[conBoxSize-1].cloneNode(true),conBox.children[0] );
	}
	twCell = wrap(conBox,'<div class="tempWrap" style="overflow:hidden; position:relative;"></div>');
	conBox.style.cssText="width:"+tempSize*slideW+"px;"+"position:relative;overflow:hidden;padding:0;margin:0;";
	for ( var i =0; i<tempSize; i++ ){  conBox.children[i].style.cssText="display:table-cell;vertical-align:top;width:"+slideW+"px"  }
	

	var doStartFun=function(){ if ( typeof opts.startFun =='function' ){ opts.startFun( index,navObjSize ) } }
	var doEndFun=function(){ if (  typeof opts.endFun =='function' ){ opts.endFun( index,navObjSize ) } }
	var doSwitchLoad=function( moving ){ 
				var curIndex = ( effect=="leftLoop"?index+1:index ) + moving;
				var changeImg = function( ind ){
						var img = conBox.children[ind].getElementsByTagName("img");
						for ( var i=0; i<img.length ; i++ )
						{
							if ( img[i].getAttribute(sLoad) ){ 
								img[i].setAttribute("src", img[i].getAttribute(sLoad) ); 
								img[i].removeAttribute( sLoad );
							} 
						}
				}// changeImg E
				changeImg( curIndex );
				if( effect=="leftLoop" ){
					switch ( curIndex )
					{
						case 0: changeImg( conBoxSize );break;
						case 1: changeImg( conBoxSize+1 );break;
						case conBoxSize: changeImg( 0 );break;
						case conBoxSize+1: changeImg( 1 );break;
					}
				}
	}// doSwitchLoad E

	//鍔ㄦ€佽缃粦鍔ㄥ搴�
	var orientationChange = function(){ 
		slideW = twCell.clientWidth;
		conBox.style.width = tempSize*slideW +"px";
		for ( var i =0; i<tempSize; i++ ){  conBox.children[i].style.width=slideW+"px";  }
		var ind = effect == "leftLoop"? index+1:index;
		translate(  -ind*slideW ,0 );
	} 
	window.addEventListener("resize", orientationChange, false); 


	//婊戝姩鏁堟灉
	var translate = function( dist, speed, ele ) {
		if( !!ele ){ ele=ele.style; }else{ ele=conBox.style; }
		ele.webkitTransitionDuration =  ele.MozTransitionDuration = ele.msTransitionDuration = ele.OTransitionDuration = ele.transitionDuration =  speed + 'ms';
		ele.webkitTransform = 'translate(' + dist + 'px,0)' + 'translateZ(0)';
		ele.msTransform = ele.MozTransform = ele.OTransform = 'translateX(' + dist + 'px)';		
	}

	//鏁堟灉鍑芥暟
	var doPlay=function(isTouch){
		
		switch (effect)
		{
			case "left": 
				if ( index >= navObjSize) { index = isTouch?index-1:0; } else if( index < 0) { index = isTouch?0:navObjSize-1; } 
				if( sLoad!=null ){ doSwitchLoad(0) } 
				translate(  (-index*slideW),delayTime ); oldIndex=index; break;
				
				
			case "leftLoop":
				if( sLoad!=null ){ doSwitchLoad(0) }
				translate(  -(index+1)*slideW ,delayTime );
				if ( index==-1){ 
						timeout= setTimeout( function(){ translate( -navObjSize*slideW ,0 ); }, delayTime );
						index = navObjSize-1; 
				}
				else if( index==navObjSize ){ timeout= setTimeout( function(){ translate( -slideW ,0 ); }, delayTime );
						index = 0; 
				}
				oldIndex=index;
				break;// leftLoop end

		}//switch end
		doStartFun();
		endTimeout= setTimeout( function(){ doEndFun() }, delayTime );

		//璁剧疆className
		for ( var i=0; i<navObjSize; i++ )
		{
			removeClass(navObj[i],opts.titOnClassName);
			if( i == index ){ addClass(navObj[i],opts.titOnClassName) }
		}

		if( loop==false ){ //loop鎺у埗鏄惁缁х画寰幆
			removeClass( nextBtn,"nextStop" );removeClass( prevBtn,"prevStop" );
			if (index==0 ){ addClass( prevBtn,"prevStop" ) }
			else if (index==navObjSize-1 ){ addClass( nextBtn,"nextStop" ) }
		}
		if(pageState){ pageState.innerHTML= "<span>"+(index+1)+"</span>/"+navObjSize; }

	};// doPlay end

	//鍒濆鍖栨墽琛�
	doPlay();
	
	//鑷姩鎾斁
	if (autoPlay) {
		 inter=setInterval(function(){ index++; doPlay() }, interTime); 
	}

	//鐐瑰嚮浜嬩欢
	if( navObj ){
		for ( var i=0; i<navObjSize; i++ )
		{		
			(function(){
				var j = i;
				navObj[j].addEventListener('click', function(e){ clearTimeout( timeout ); clearTimeout( endTimeout );  index=j; doPlay();  })
			})()
			
		}
	}
	if(nextBtn){ nextBtn.addEventListener('click', function(e){ if ( loop==true || index!=navObjSize-1 ){ clearTimeout( timeout ); clearTimeout( endTimeout ); index++; doPlay(); } }) }
	if(prevBtn){ prevBtn.addEventListener('click', function(e){ if ( loop==true || index!=0 ){ clearTimeout( timeout ); clearTimeout( endTimeout ); index--; doPlay(); } }) }



	//瑙︽懜寮€濮嬪嚱鏁�
	var tStart = function(e){
		clearTimeout( timeout );clearTimeout( endTimeout );
		scrollY = undefined;
		distX = 0;
		var point = hasTouch ? e.touches[0] : e;
		startX =  point.pageX;
		startY =  point.pageY;

		//娣诲姞鈥滆Е鎽哥Щ鍔ㄢ€濅簨浠剁洃鍚�
		conBox.	addEventListener(touchMove, tMove,false);
		//娣诲姞鈥滆Е鎽哥粨鏉熲€濅簨浠剁洃鍚�
		conBox.addEventListener(touchEnd, tEnd ,false);
	}

	//瑙︽懜绉诲姩鍑芥暟
	var tMove = function(e){
		if( hasTouch ){ if ( e.touches.length > 1 || e.scale && e.scale !== 1) return }; //澶氱偣鎴栫缉鏀�

		var point = hasTouch ? e.touches[0] : e;
		distX = point.pageX-startX;
		distY = point.pageY-startY;

		if ( typeof scrollY == 'undefined') { scrollY = !!( scrollY || Math.abs(distX) < Math.abs(distY) ); }
		if( !scrollY ){ 
			e.preventDefault(); if(autoPlay){clearInterval(inter) }
			switch (effect){
				case "left":
					if( (index==0 && distX>0) || (index>=navObjSize-1&&distX<0 )){ distX=distX*0.4 }
					translate( -index*slideW+distX ,0 );
				break;
				case "leftLoop":translate( -(index+1)*slideW+distX ,0 );break;
			}
			
			if(  sLoad!=null && Math.abs(distX)>slideW/3 ){ 
				doSwitchLoad( distX>-0?-1:1 ) 
			}
		}
	}

	//瑙︽懜缁撴潫鍑芥暟
	var tEnd = function(e){
		if(distX==0) return;
		e.preventDefault(); 
		if( !scrollY )
		{
			if( Math.abs(distX) > slideW/10  ){ distX>0? index--: index++; }
			doPlay( true );  
			if (autoPlay) {
				 inter=setInterval(function(){ index++; doPlay() }, interTime); 
			}
		}

		conBox.removeEventListener(touchMove, tMove, false);
		conBox.removeEventListener(touchEnd, tEnd, false);
	}


	//娣诲姞鈥滆Е鎽稿紑濮嬧€濅簨浠剁洃鍚�
	conBox.addEventListener(touchStart, tStart ,false);


}// TouchSlide E
