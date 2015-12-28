$(document).ready(function(){

/******************************
JOB TEXT ROTATION
********************************/

	$(".rotate").textrotator({
		animation:"flipUp",
		separator: ",",
		speed:1850
	});

/******************************
ANIMATIONS
********************************/
var codeCircle = function(){

	$('#code-circle').on({
		mouseenter: function(){
			$(this).css({
				borderRadius:'5px',
				backgroundImage:'none',
				backgroundColor:'#84BD49',
				height:'150px',
				width:'200px',
				fontSize:'1.5em',
				fontWeight:'700',
				color:'white',
				paddingTop:'60px',
				cursor:'pointer'
			});
			$(this).text('Click for Code');

			$('.coding-background h3').css({
				opacity:'0'
			});
		}, mouseleave: function(){
			$(this).css({
				borderRadius:'50%',
				backgroundImage:'url(images/code.png)',
				height:'200px',
				width:'200px',
				backgroundColor:'#E5E5D9'
			});
			$(this).text('');
			$('.coding-background h3').css({
				opacity:'1'
			});
		}
	});
};

var codeCircleSmall = function(){

	$('#code-circle').on({
		mouseenter: function(){
			$(this).css({
				borderRadius:'5px',
				backgroundImage:'none',
				backgroundColor:'#84BD49',
				height:'100px',
				width:'100px',
				fontSize:'1em',
				fontWeight:'400',
				color:'white',
				paddingTop:'30px',
				cursor:'pointer'
			});
			$(this).text('Click for Code');

			$('.coding-background h3').css({
				opacity:'0'
			});
		}, mouseleave: function(){
			$(this).css({
				borderRadius:'50%',
				backgroundImage:'url(images/code.png)',
				height:'100px',
				width:'100px',
				backgroundColor:'#E5E5D9'
			});
			$(this).text('');
			$('.coding-background h3').css({
				opacity:'1'
			});
		}
	});
};

var teachCircle = function(){

	$('#teach-circle').on({
		mouseenter: function(){
			$(this).css({
				borderRadius:'5px',
				backgroundImage:'none',
				backgroundColor:'#e7c222',
				height:'150px',
				width:'200px',
				fontSize:'1.5em',
				fontWeight:'700',
				color:'white',
				paddingTop:'50px',
				cursor:'pointer'
			});
			$(this).text('Click to See More');

			$('.education-background h3').css({
				opacity:'0'
			});
		}, mouseleave: function(){
			$(this).css({
				borderRadius:'50%',
				backgroundImage:'url(images/teach.png)',
				height:'200px',
				width:'200px',
				backgroundColor:'#E5E5D9'
			});
			$(this).text('');
			$('.education-background h3').css({
				opacity:'1'
			});
		}
	});
};

var teachCircleSmall = function(){

	$('#teach-circle').on({
		mouseenter: function(){
			$(this).css({
				borderRadius:'5px',
				backgroundImage:'none',
				backgroundColor:'#e7c222',
				height:'100px',
				width:'100px',
				fontSize:'1em',
				fontWeight:'400',
				color:'white',
				paddingTop:'30px',
				cursor:'pointer'
			});
			$(this).text('Click to See More');

			$('.education-background h3').css({
				opacity:'0'
			});
		}, mouseleave: function(){
			$(this).css({
				borderRadius:'50%',
				backgroundImage:'url(images/teach.png)',
				height:'100px',
				width:'100px',
				backgroundColor:'#E5E5D9'
			});
			$(this).text('');
			$('.education-background h3').css({
				opacity:'1'
			});
		}
	});
};


/******************************
REFRESH ANIMATION WHEN CLICK ON LINK
********************************/

var homeAnimation = function(){
	$('.home-text').animate({
		top:'-40px',
	},2000);

	$('.education-background, .coding-background').animate({
		left:['0', "easeOutCubic"]
	},2500 );

	$('#teach-circle, #code-circle').animate({
		left:['0', 'easeInOutExpo']
	},1500);

	$('.coding-background h3, .education-background h3').animate({
		left:['0', 'easeInOutExpo']
	},2000);
};

var skillAnimation = function(){
	$('.education-background, .coding-background').animate({
		left:['0', "easeOutCubic"]
	},2500 );
};

if( $(window).width() > 700){
	teachCircle();
	codeCircle();
} else{
	teachCircleSmall();
	codeCircleSmall();
};

homeAnimation();

$('input#st-control-1').on('click', function(){
	$('.home-text').css({
		top:'40px'
	});

	$('.education-background').css({
		left:'2000px'
	} );

	$('.coding-background').css({
		left:'-2000px'
	} );

	$('#teach-circle, #code-circle').css({
		left:'2000px'
	});
	$('#code-circle').css({
		left:'-2000px'
	});

	$('.coding-background h3').css({
		left:'-2000px'
	});

	$('.education-background h3').css({
		left:'2000px'
	});	

	homeAnimation();
});

/******************************
SLIDER INITIALIZE
********************************/

$('.code-slider').flexslider({
	animation:'fade',
	controlsConrainer: '.code-slider'
});

/******************************
SKILLS METER
********************************/

$('input#st-control-2').on('click', function(){

	$('.education-background').css({
		left:'2000px'
	} );

	$('.coding-background').css({
		left:'-2000px'
	} );

	$('.coding-background h3').css({
		left:'-2000px'
	});

	$('.education-background h3').css({
		left:'2000px'
	});	

	skillAnimation();

	$('.meter > span').each(function(){
		var relativePercentage = ($(this).width() / $(this).parent('div').width()) *100;
		$(this).data('origWidth', $(this).width())
		.width(0)
		.animate({
			width: relativePercentage + '%'
		}, 3600)
	});
});


}); //end of $(document).ready()













