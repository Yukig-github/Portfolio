// JavaScript Document
$(function(){
function popupImage() {
  var popup = document.getElementById('js-popup');
  if(!popup) return;

  var blackBg = document.getElementById('js-black-bg');
  var closeBtn = document.getElementById('js-close-btn');
  var showBtn = document.getElementById('js-show-popup');

  closePopUp(blackBg);
  closePopUp(closeBtn);
  closePopUp(showBtn);
  function closePopUp(elem) {
    if(!elem) return;
    elem.addEventListener('click', function() {
      popup.classList.toggle('is-show');
    });
  }
}
popupImage();
	
function popupImage2() {
  var popup = document.getElementById('js-popup2');
  if(!popup) return;

  var blackBg = document.getElementById('js-black-bg2');
  var closeBtn = document.getElementById('js-close-btn2');
  var showBtn = document.getElementById('js-show-popup2');

  closePopUp(blackBg);
  closePopUp(closeBtn);
  closePopUp(showBtn);
  function closePopUp(elem) {
    if(!elem) return;
    elem.addEventListener('click', function() {
      popup.classList.toggle('is-show');
    });
  }
}
popupImage2();
	
	function popupImage3() {
  var popup = document.getElementById('js-popup3');
  if(!popup) return;

  var blackBg = document.getElementById('js-black-bg3');
  var closeBtn = document.getElementById('js-close-btn3');
  var showBtn = document.getElementById('js-show-popup3');

  closePopUp(blackBg);
  closePopUp(closeBtn);
  closePopUp(showBtn);
  function closePopUp(elem) {
    if(!elem) return;
    elem.addEventListener('click', function() {
      popup.classList.toggle('is-show2');
    });
  }
}
popupImage3();
	
	function popupImage4() {
  var popup = document.getElementById('js-popup4');
  if(!popup) return;

  var blackBg = document.getElementById('js-black-bg4');
  var closeBtn = document.getElementById('js-close-btn4');
  var showBtn = document.getElementById('js-show-popup4');

  closePopUp(blackBg);
  closePopUp(closeBtn);
  closePopUp(showBtn);
  function closePopUp(elem) {
    if(!elem) return;
    elem.addEventListener('click', function() {
      popup.classList.toggle('is-show4');
    });
  }
}
popupImage4();
	
});

//nav scroll
$(function(){
	var id =$("#nav_box"),
			set = id.offset(),
			paddingTop = 300;
	
	$(window).scroll(function(){
		if($(window).scrollTop() > $('.box_profile').offset().top){
				id.stop().animate({
					marginTop: $(window).scrollTop() - set.top
				});		
		}else if($(window).scrollTop() > set.top){
			id.stop().animate({
				marginTop: $(window).scrollTop() - set.top + paddingTop
			},1200,'swing');
		}else{
			id.stop().animate({
				marginTop:0
			},800)
		}
	})
	
});

//arrow move
$(function arrow() {
	if($(window).scrollTop() >= $('.work_box_content').offset().top){
		$('#nav_scroll').css('opacity','0');
		$('#nav_top').stop().animate({
			opacity:'1'
		},800,'swing',function(){
			$('#nav_top').stop().animate({
				marginTop:'0px'
			},1500,'swing',function(){
				$('#nav_top').stop().animate({
					marginTop:'40px'
				},1500,'swing',function(){
					setTimeout(
					arrow()
					),400
				});
			});
		});
		
	}else{
		$('#nav_top').css('opacity','0');
		$('#nav_scroll').stop().animate({
			opacity:'1'
		},800,'swing')
		$('#arrow_box').stop().animate({
		height:'150px'
	},1500,'swing',function(){
		$('#arrow_box').stop().animate({
			height:'90px'
		},1500,'swing',function(){
			setTimeout(
				arrow()
			),400
			
		});
	});
	}
	
})

/*color change*/
$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() > $('#colorchange3').offset().top){
			$('.nav_content').css('color','whitesmoke');
			$('.nav_content2').css('color','whitesmoke');
			$('.nav_content3').css('color','black');
			
		}	else if($(window).scrollTop()> $('#colorchange2').offset().top){
			$('.nav_content').css('color','whitesmoke');
			$('.nav_content2').css('color','black');
			$('.nav_content3').css('color','whitesmoke');
			
		} else if($(window).scrollTop() > $('#colorchange1').offset().top){
			$('.nav_content').css('color','black');
			$('.nav_content2').css('color','whitesmoke');
			$('.nav_content3').css('color','whitesmoke');
		}
	})
});





