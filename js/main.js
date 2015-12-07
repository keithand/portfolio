$(document).ready(function(){

/******************************
JOB TEXT ROTATION
********************************/

	$(".intro-text .rotate").textrotator({
		animation:"flipCube",
		separator: ",",
		speed:1850
	})

/******************************
OVERLAY
********************************/

$('.close').on('click', function(){
	$('.overlay').css('display', 'none;');
});


/******************************
SLIDER
********************************/

$('#checkbox').change(function(){
	setInterval(function(){
		moveRight();
	}, 3000);
});

var slideCount = $('#slider ul li').length;
var slideWidth = $('#slider ul li').width();
var slideHeight = $('#slider ul li').height();
var sliderUlWidth = slideCount * slideWidth;

$('#slider ul').css({
	width: sliderUlWidth,
	height: slideHeight
});

$('#slider ul li:last-child').prependTo('#slider ul');

function moveLeft(){
	$('#slider ul').animate({
		left: +slideWidth
	}, 200, function(){
		$('#slider ul li:last-child').prependTo('#slider ul');
		$('#slider ul').css('left', '');
	});
};

function moveRight(){
	$('#slider ul').animate({
		left: -slideWidth
	}, 200, function(){
		$('#slider ul li:first-child').appendTo('#slider ul');
		$('#slider ul').css('left', '');
	});
}

$('.control_prev').click(function(event){
	event.preventDefault()
	moveLeft();
});

$('.control_next').click(function(event){
	event.preventDefault()
	moveRight();
});




});




















