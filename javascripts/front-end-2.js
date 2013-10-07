$(document).ready(function() {

  
  // FAQ open/close behavior
  //------------------------------------------------------------------------------------------------//
  
  var $questions = $('.faq-questions li.question');
  
  $questions.on('click', 'h3', function(){
    $(this).parents('.question').toggleClass('open');
    $questions.not($(this).parents('.question')).removeClass('open');
  });


  // Curriculum overview open/close behavior
  //------------------------------------------------------------------------------------------------//

  var $courses = $('.curriculum-overview .columns>ul li');

  $courses.on('click', function() {
    $(this).toggleClass('open');
    $courses.not($(this)).removeClass('open');
  });


  // Flowtype.js
  // http://simplefocus.com/flowtype
  //------------------------------------------------------------------------------------------------//

  $('.fed-2 h2').fitText(1.15, {maxFontSize: '35px'});

});