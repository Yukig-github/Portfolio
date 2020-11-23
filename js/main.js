// JavaScript Document
/*eslint no-undef: "error"*/
/*eslint-env node*/


//animation of the main boxes
$(function (){
	//set parameter
		var motion ='swing';
		var speed1 = 900; //first showing
		var speed2 = 100; //hide
		var openSp = 1200;	//open
	
	//waiting
		var waitHide = 900;
		var waitOpen = 1700;
		var waitShow = 3800;
		var waitExtend =6500;
		var waitShowP =10000;
	
	
	//waiting function
	
		//to wait for hiding
		function hideW(){  
			setTimeout(function(){
				hideBoxes();
			},waitHide)
		}
		//to wait for opening
		function openW(){
			setTimeout(function(){
				openBoxes();
			},waitOpen)
		}
		//to wait for showing pictures
		function showW(){
			setTimeout(function(){
				showPic();
			},waitShow)
		}
		//to wait for extending message
		function extendW(){
			setTimeout(function(){
				extendBoxes();
			},waitExtend)
		}
	
		//to wait for showing profile
	
		function showPW(){
			setTimeout(function(){
				
			},waitShowP)
		}
	
	
	
	// to move boxes at first
	function move(){		
		$('.hide_box1').animate({
			right:'0'
		},speed1,motion)

		$('.hide_box2').animate({
			left:'0'
		},speed1,motion);
	}
	
	//to hide boxes
	function hideBoxes(){
			//second boxes
			$('.hide_box3').animate({
				left:'50%'
			},speed2,motion)

			$('.hide_box4').animate({
				left:'0%'
			},speed2,motion,
				
				function (){
				//box 1 and 2 hide
				$('.hide_box1')
					.css('z-index','-1')
				
				$('.hide_box2')
					.css('z-index','-1')				
			});
		}
	
	function showPic(){//Random showing the main pictures
	//list set up
	var $list = $("ul.main_box li");
	
	//set up numbers by class length
	Array.prototype.shuffle = function(){
		var i = this.length;
		while(i){
			var rand = Math.floor(Math.random()*i);
			var sec = this[--i];
			this[i] = this[rand];
			this[rand] = sec;
		}
		return this;
	}
	var random = [];//set random
	
	$list.each(function(i){
		random.push(i);
	});
	random.shuffle();
	
	//show $list
	$list
		.css({opacity:0})
		.each(function(i){
					$(this).delay(random[i]*350).animate({opacity:1},motion);
		});
	}
	
	//to open boxes
	function openBoxes(){
		$('.main_mes')
			.css('background-color','white')
		$('.hide_box1')
			.css('opacity','0')
		$('.hide_box2')
			.css('opacity','0')
		$('.hide_box3').animate({
			left:'150%'
		},openSp,motion)
		
		$('.hide_box4').animate({
			left:'-100%'
		},openSp,motion,function(){
			$('.main_mes').animate({
				marginTop:'600px',
				height:'50px',
			},400,motion)
			$('.main_mes p').animate({
				fontSize:'23px',
				marginTop:'7px'
			},400,motion)
		})
	}
	
		var judge ;
		var check = 0; //break function (comment out)
	
	//to extend boxes
	function extendBoxes(){
			$('#top_menu').animate({
					opacity:'1'
				},600,motion,function(){

				setTimeout(function(){
					$('.main_mes').animate({//to reduce in the name size
						width:'270px'
						
					},1000,motion,function(){
						//to show the top picture
						$('.top-box').animate({
							opacity:'1'
						},1000,motion)
						$('#top').animate({
							opacity:'1'
						},1000,motion,function(){
							//<<<<<<<<<<<<change color of .main_mes if i need by animate()
							
							boxMove();
							
						})
					});
						},400);
		});
	}
	
	// to show my short profile
	function showProfile(){
		$('.main_mes').animate({
			marginTop:'280px'
		},600,motion,function(){
			
			$('.short_prof').animate({
				opacity:'1'
				
			},700,motion,function(){
			})
			
			
		})
	}
	
	//to show my short profile move 
	/*
	function showProfile1(){
		var num = 0;
		
		while(num < 1 ){	
			$('.main_mes').click(function(){
				num = 1;
			});
			if(num < 1){
				boxMove();
				setTimeout(function(){
					
				},5000)
			}			
		}
		showProfile2();
	}
	
		while(judge <= 2){	//roop
			setTimeout(function(){

			},1000)
			//break
				
			check ++;
			if(check > 1000){
				break;
			}
			
			if( judge == 1){
				boxMove();
				$('.main_mes').on('click',function(){
					showProfile();
				})

			}
		}*/
	
	//box
	function boxMove(){
		$('.main_mes').on('click',function(){
				$('.main_mes').stop();
				$(this).animate({
					marginLeft:'0px'
				},700,motion,function(){
					showProfile();
				})
				
				judge == 3;

							})
		$('.main_mes').animate({ //1 function
			marginLeft:'50px'
		},1000,motion,function(){
			$(this).animate({
				marginLeft:'0px'
			},700,motion,function(){ //2 function
				$(this).animate({
					marginLeft:'25px'
				},500,'linear',function(){
					$(this).animate({
						marginLeft:'0px'
					},400,motion,function(){ //3 function
						$(this).animate({
							marginLeft:'15px'
						},400,motion,function(){
							$(this).animate({
								marginLeft:'0px'
							},400,motion,function(){ //4 function 
								$(this).animate({
									marginLeft:'5px'
								},300,motion,function(){
									$(this).animate({
										marginLeft:'0px'
									},300,motion,function(){
										if(judge >= 3){
											boxMove().off();
										}else{
											boxMove();
											
										}
									})		
								})
							})
						})
					})
				})
			})
		})
	}
	
	
	// run list
	move(); // time ~ 900
	hideW(); // time 900 ~
	openW(); // time  1700 + 400~
	showW();
	extendW();
	showPW();
});


//skill box

//scroll action
$(function(){
	var skill = $('#content'),
			count = 0,
			skillTop =skill.offset().top;
	
	$(window).scroll(function(){
		if($(window).scrollTop() >= skillTop){
			if(count ===0){
				per1(),
				per2(),
				per3(),
				per4(),
				per5();
				count = 2;
			}
			
		}
	});
});


function per1(){
	//skill bar for 80 
	var count = $('.per1'),//80
			countSpeed = 45;
	
    count.each(function(){
        var self = $(this),
						countMax = 80, //80
						thisCount = 0,
						countTimer;

					$('.skill_bar1').animate({
						width: countMax +'%'
					},4000)

					$('.skill_bar_num1').animate({
						marginLeft:countMax +'%'
					},4000)
			
        function timer(){
            countTimer = setInterval(function(){
							//set per num
								var countNexts = thisCount;
                var countNext = thisCount++ +'%';
                self.text(countNext);
                if(countNexts == countMax){
                    clearInterval(countTimer);
                }
            },countSpeed);
        }
        timer();
    });
}

function per2(){
	//skill bar for 70 
	var count = $('.per2'),//70
			countSpeed = 50;
	
    count.each(function(){
        var self = $(this),
						countMax = 70, //70
						thisCount = 0,
						countTimer;

					$('.skill_bar2').animate({
						width: countMax +'%'
					},4000)

					$('.skill_bar_num2').animate({
						marginLeft:countMax +'%'
					},4000)
			
        function timer(){
            countTimer = setInterval(function(){
							//set per num
								var countNexts = thisCount;
                var countNext = thisCount++ +'%';
                self.text(countNext);
                if(countNexts == countMax){
                    clearInterval(countTimer);
                }
            },countSpeed);
        }
        timer();
    });
}

function per3(){
	//skill bar for 50 
	var count = $('.per3'),//50
			countSpeed = 70;
	
    count.each(function(){
        var self = $(this),
						countMax = '50', //50
						thisCount = 0,
						countTimer;

					$('.skill_bar3').animate({
						width: countMax +'%'
					},4000)

					$('.skill_bar_num3').animate({
						marginLeft:countMax +'%'
					},4000)
			
        function timer(){
            countTimer = setInterval(function(){
							//set per num
								var countNexts = thisCount;
                var countNext = thisCount++ +'%';
                self.text(countNext);
                if(countNexts == countMax){
                    clearInterval(countTimer);
                }
            },countSpeed);
        }
        timer();
    });
}

function per4(){
	//skill bar for 30 
	var count = $('.per4'),//30
			countSpeed = 90;
	
    count.each(function(){
        var self = $(this),
						countMax = '30', //30
						thisCount = 0,
						countTimer;

					$('.skill_bar4').animate({
						width: countMax +'%'
					},3000)

					$('.skill_bar_num4').animate({
						marginLeft:countMax +'%'
					},3000)
			
        function timer(){
            countTimer = setInterval(function(){
							//set per num
								var countNexts = thisCount;
                var countNext = thisCount++ +'%';
                self.text(countNext);
							
							//need to fix
							/*
							if(thisCount <= 10){
								$('.skill_bar4').css('background-color','green');
							}else if(thisCount <= 30){
								$('.skill_bar4').css('background-color','yellowgreen');
							}else if(thisCount <= 50){
								$('.skill_bar4').css('background-color','lightgreen');
							}else if(thisCount <= 70){
								$('.skill_bar4').css('background-color','white');
							}else if (thisCount <= 80){
								$('.skill_bar4').css('background-color','yellowgreen');
							}
                */
							if(countNexts == countMax){
                    clearInterval(countTimer);
                }
            },countSpeed);
        }
        timer();
			});
    }
	
	function per5(){
	//skill bar for 20
	var count = $('.per5'),
			countSpeed = 120;
	
    count.each(function(){
        var self = $(this),
						countMax = '20', 
						thisCount = 0,
						countTimer;

					$('.skill_bar5').animate({
						width: countMax +'%'
					},4000)

					$('.skill_bar_num5').animate({
						marginLeft:countMax +'%'
					},4000)
			
        function timer(){
            countTimer = setInterval(function(){
							//set per num
								var countNexts = thisCount;
                var countNext = thisCount++ +'%';
                self.text(countNext);
                if(countNexts == countMax){
                    clearInterval(countTimer);
                }
            },countSpeed);
        }
        timer();
    });
}









