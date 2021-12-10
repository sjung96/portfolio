$(function(){	
	/* 코드를 쓸 준비가 됨 (ready)=  위의 코드를 작성하면 body문 위에 스크립트 작성 가능 */
	/*$가 jQuery의 시그널이다*/
	$("nav > ul > li").hover( /*nav > ul > li 에 */
		function(){	/* 마우스를 올리면 */
			$("nav").addClass("active"); /* active 클래스를 추가한다 */
		},
		function(){	/* 마우스를 내리면 */
			$("nav").removeClass("active"); /* active 클래스를 제거한다 */
		}
	);

	 var swiper = new Swiper(".slider .mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });
});