$(function(){
	// 1) 페이지 이동 관련
	var scrollT=0;
	var pageN=0;
	var targetY=0;
	var winHalf;
	var categoryFlag=false;
	var posY;
	var projectN=1;

	$(".global_menu .menu li").eq(pageN).addClass("active");

	$(window).scroll(function(){
		scrollT=$(window).scrollTop();

		if(scrollT <= $("#page1").offset().top-winHalf){
			pageN=0;
		}
		else if(scrollT <= $("#page2").offset().top-winHalf){
			pageN=1;
		}
		else if(scrollT <= $("#page3").offset().top-winHalf){
			pageN=2;
		}
		else if(scrollT <= $("#page4").offset().top-winHalf){
			pageN=3;
		}
		else{
			pageN=4;
		}

		$(".global_menu .menu li").removeClass("active");
		$(".global_menu .menu li").eq(pageN).addClass("active");
		$(".float li").removeClass("active");
		$(".float li").eq(pageN).addClass("active");

		if(pageN != 0){
			$(".global_menu").addClass("dark");
			$(".tab_menu").addClass("dark");
			$(".download").addClass("dark");
		}
		else{
			$(".global_menu").removeClass("dark");
			$(".tab_menu").removeClass("dark");
			$(".download").removeClass("dark");
		}

		if(categoryFlag){
			return;
		}
		else{
			if(pageN == 0){
			$("#header").addClass("active");
		}
		else{
			$("#page"+pageN).addClass("active");

			if(pageN == 4){
				categoryFlag=true;
				}
			}
		}
	});

	// 2) 화면 크기 조정 관련
	$(window).resize(function(){
		winHalf=$(window).height()/2;
		$(window).trigger("scroll");
	});
	$(window).trigger("resize");

	$(".tab_menu").click(function(e){
		e.preventDefault();
		$(this).toggleClass("active");
		$(".floating_menu").toggleClass("active");
	});
	$(".global_menu .menu li").click(function(e){
		e.preventDefault();
			pageN=$(this).index();

		if(pageN == 0){
			targetY=0;
		}
		else{
			targetY=$("#page"+pageN).offset().top;
		}

		$("html").animate({"scrollTop":targetY}, 300);
	});
	$(".float li").click(function(e){
		e.preventDefault();
		pageN=$(this).index();

		$(".tab_menu").removeClass("active");
		$(".floating_menu").removeClass("active");

		if(pageN == 0){
			targetY=0;
		}
		else{
			targetY=$("#page"+pageN).offset().top;
		}

		$("html").delay(400).animate({"scrollTop":targetY}, 300);
	});

	$(".project:first").addClass("active");
	$(".project .title").click(function(e){
		e.preventDefault();

		var project=$(this).parents(".project");

		if(projectN != project.index()){
			projectN=project.index();
			$(".project").removeClass("active");
			project.addClass("active");

			var projectY=$(this).offset().top-60;
			$("html").animate({scrollTop:projectY}, 800);
		}
	});

	// 4) 비디오 구현 관련
	var videoUrl=["makeup1", "makeup2"];
	var videoTotal=videoUrl.length-1;
	var videoN=0;
	var videoPath="";
	var video=document.getElementById("my_video");
	video.play();
	video.muted=true;

	function videoDimmed(){
		$(".media video").hide().css({opacity:0});

		setTimeout(function(){
			$(".media video").show().animate({opacity:1}, 300);
		}, 800);
	}

	videoDimmed();

	video.addEventListener("ended", function(){
		if(videoN < videoTotal){
			videoN+=1;
		}
		else{
			videoN=0;
		}

		video.pause();
		videoPath="video/"+videoUrl[videoN]+".mp4";
		$("#my_video").attr({src:videoPath});
		video.play();
		videoDimmed();
	});

	if(isMobile){
		$(".project1").attr({"href" : "project1/mobile/index.html"});
	}
	else{
		$(".project1").attr({"href" : "project1/pc/index.html"});
		$(".project2").attr({"href" : "project2/index.html"});
	}
});