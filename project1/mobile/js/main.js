$(function(){
	/*탭 메뉴*/
		$(".tab").click(function(e){
		e.preventDefault();

		if( $(this).hasClass("active") == false ){
			$("body").addClass("fixed");
			$(this).addClass("active");
			$(".tab_menu").addClass("active");
			$(".dim").addClass("active");
		}
		else {
			$("body").removeClass("fixed");
			$(this).removeClass("active");
			$(".tab_menu").removeClass("active");
			$(".dim").removeClass("active");
		}
	});
//메뉴 누르고 닫기
		$(".list > ul > li").click(function(e){
			e.preventDefault();

		if( $(this).hasClass("active") == false ){
			$(".list > ul > li").removeClass("active");
			//$("body").removeClass("fixed"); fixed class가 안없어져요..
			$(this).addClass("active");
			$(".list ul ul").slideUp(300);
			$(this).find("ul").slideDown(300);
		}
		else {
			$(this).removeClass("active");
			$(this).find("ul").slideUp(300);
		}
	});

	$(window).scroll(function(){

		if ( $("body").hasClass("fixed") == true ){
			$(".tab_menu").removeClass("active");
			$(".dim").removeClass("active");
		}

		else {
			$("body").removeClass("fixed");
			$(".tab").removeClass("active");
			$(".tab_menu").removeClass("active");
		}
	});

/*메인 슬라이더 */
	var t=0;

	$(window).scroll(function(){
		t=$(window).scrollTop();

		if(t > 100) {
			if($(".tab_menu").hasClass("active") == true) {
				$(".tab_menu").removeClass("active");
				$(".dim").removeClass("active");
			}
		}
	});

	var swiper = new Swiper(".mySwiper", {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

/*서브 슬라이더 (추천 레시피) */
	var sub_slider=new Swiper("#sub_slider .swiper-container", {
		slidesPerView: 1.5,
		spaceBetween: 12,
		pagination: {
			el: "#sub_slider .swiper-pagination",
			type: "progressbar"
		},
		navigation: {
		nextEl: "#sub_slider .swiper-button-next",
		prevEl: "#sub_slider .swiper-button-prev",
		},
		breakpoints: {
			640: {
				slidesPerView: 3.5,
				spaceBetween: 5
		}
	},
		on: {
			init: function(){
				var subSliderLength=$("#sub_slider .swiper-slide").length;
				$("#sub_slider .tot").text("/ "+subSliderLength);
			},
			slideChange: function(){
				var currentSlider=sub_slider.activeIndex;
				currentSlider+=1;
				$("#sub_slider .num").text(currentSlider);
			}
		}
	});
});