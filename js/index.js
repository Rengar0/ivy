$(function(){
	if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
	    new WOW().init();
	};
	//		bannerSwiper
	var s = new Swiper('.banner',{
		direction: 'horizontal',
		loop: true,
		autoplay : 3000,
		speed:1000,
		initialSlide :1,
		autoplayDisableOnInteraction:false,
		grabCursor:true,
		// 如果需要分页器
		pagination:'.swiper-pagination',
		paginationClickable:true
	});
	$('.banner').mouseenter(function(){
		s.stopAutoplay();
	});
	$('.banner').mouseleave(function(){
		s.startAutoplay();
	});
	
	// 大药房swiper
	$('.pharmacy_title li').mouseenter(function(){
		$(this).addClass('phar_t_active').siblings().removeClass('phar_t_active');
		pharmacy_items.slideTo( $(this).index() )
	});
	var pharmacy_items = new Swiper('.pharmacy_items',{
		direction: 'horizontal',
		// loop: true,
		speed:1000,
		autoplayDisableOnInteraction:false,
		onSlideChangeStart: function(swiper){
			$('.pharmacy_title li').eq(swiper.activeIndex).addClass('phar_t_active').siblings().removeClass('phar_t_active');
		}
	})
	
	// 健康小常识swiper
	$('.HCS_title li').mouseenter(function(){
		$(this).addClass('phar_t_active').siblings().removeClass('phar_t_active');
		HCS_items.slideTo( $(this).index() )
	});
	var HCS_items = new Swiper('.HCS_items',{
		direction: 'horizontal',
		// loop: true,
		speed:1000,
		autoplayDisableOnInteraction:false,
		onSlideChangeStart: function(swiper){
			$('.HCS_title li').eq(swiper.activeIndex).addClass('phar_t_active').siblings().removeClass('phar_t_active');
		}
	})
	
	//手机号验证button
	function tel(phoneNumber){
	  if (!(/^1[34578]\d{9}$/.test(phoneNumber))) {
		return false;
	  }else{
		return true;
	  }
	}
	
// 	$('.link_banner').click(function(){
// 		alert(toVaild());
// 	});
// 	$('.username,.tel,#message').bind('focus',function(){
// 		$(this).css('border','1px solid #E5E5E5');
// 		$('.nameErr').hide();
// 		$('.telErr').hide();
// 	});
	function toVaild(){
		var val = document.querySelector(".tel").value;
		// alert(val);
		if(tel(val) == true){
			alert("校验成功，之后进行提交");
			return true;
		}
		else{
			alert("校验失败，不进行提交");
			return false;
		}
	}
	//表单验证
// 	function toVaild(){
// 		var name = document.querySelector(".username").value;
// 		var phone = document.querySelector(".tel").value;
// 		var message = document.querySelector("#message").value;
// 		// alert('name:' + name + 'tel:' + phone + 'msg:' + message);
// 		alert(tel(phone));
// 		if(name == '' || name == null || name == undefined){
// 			$('.username').css('border','1px solid red');
// 			$('.nameErr').show();
// 			return false;
// 		}else if(tel(phone) == false){
// 			$('.tel').css('border','1px solid red');
// 			$('.telErr').show();
// 			return false;
// 		}else if(message == '' || message == null || message == undefined){
// 			alert("校验失败，不进行提交");
// 			$('#message').css('border','1px solid red');
// 			$('.msgErr').show();
// 			return false;
// 		}else if(name !== '' || name !== null || name !== undefined && tel(phone) !== false && message !== '' || message !== null || message !== undefined){
// 			alert('好的，您的留言我们已收到，感谢您的留言!');
// 			return true;
// 		}
// 	}

	// 页面下滑到一定程度时，新闻资讯导航固定定位
	$('.recommend').scrollToFixed({
		marginTop: 30,
		limit: function() {
			var limit = $('.dibu').offset().top - $('.recommend').outerHeight(true) - 0;
			return limit;
		},
		zIndex: 1
	});
	
	// 健康资讯swiper
	var news_banner = new Swiper('.news_banner',{
		spaceBetween: 10,
		direction: 'horizontal',
		loop: true,
		// autoplay : 3000,
		speed:1000,
		initialSlide :1,
		autoplayDisableOnInteraction:false,
		grabCursor:true,
		// 如果需要分页器
		pagination:'.swiper-pagination',
		paginationClickable:true
	})
	
	// 商品展示Swiper
	var galleryThumbs = new Swiper('.gallery-thumbs', {
		spaceBetween: 10,
		slidesPerView: 5,
		// loop: true,
		freeMode: true,
		loopedSlides: 5, //looped slides should be the same
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});
	var galleryTop = new Swiper('.gallery-top', {
		slidesPerView: 1,
		spaceBetween: 10,
		// loop:true,
		loopedSlides: 5, //looped slides should be the same
		navigation: {
			nextEl: '.top-next',
			prevEl: '.top-prev',
		},
		thumbs: {
			swiper: galleryThumbs,
		},
	});
})