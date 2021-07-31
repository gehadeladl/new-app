$(function(){
//عشان السليدر يكون بحجم الشاشه
	var winH = $(window).height(),
	
	    upperH = $('.upper-bar1').innerHeight(),
		
		navH = $('.navbar').innerHeight();
		
	$('.slider, .carousel-item').height( winH - (upperH + navH ));
//#############################
//عشان لما اتكى على لى الاكتف يروح عليها ويتشال من على الباقى
    $('.featured-work .list-unstyled li').on('click',function(){
		
		$(this).addClass('active').siblings().removeClass('active')
		
		if ($(this).data('class') === 'all'){
			
			$('.image-box1 .col-md').css('opacity','1');
			
		}else{
			
			$('.image-box1 .col-md').css('opacity','0.08');
			
			$($(this).data('class')).parent().css('opacity','1');
		}
	})
	
	
})