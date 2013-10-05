$(document).ready(function() {

  
  // FAQ open/close behavior
  //------------------------------------------------------------------------------------------------//
  
  var $questions = $('.faq-questions li.question');
  
  $questions.on('click', 'h3', function(){
    $questions.removeClass('open');
    $(this).parents('.question').addClass('open');
  });


  // Curriculum overview open/close behavior
  //------------------------------------------------------------------------------------------------//

  var $courses = $('.curriculum-overview .columns>ul li');

  $courses.on('click', function() {
    $courses.removeClass('open');
    $(this).toggleClass('open');
  });


  // Flowtype.js
  // http://simplefocus.com/flowtype
  //------------------------------------------------------------------------------------------------//

  $('.fed-2 h2').fitText(1.15, {maxFontSize: '35px'});

});