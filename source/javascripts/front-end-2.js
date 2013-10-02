$(document).ready(function() {

  
  // FAQ open/close behavior
  //------------------------------------------------------------------------------------------------//
  
  $('li.question.open').removeClass('open');

  var $questions = $('.faq-questions li.question');
  
  $questions.on('click', 'h3', function(){
    $questions.each(function() {
      $(this).removeClass('open');
    });

    $(this).parents('.question').addClass('open');
  });


  // Curriculum overview open/close behavior
  //------------------------------------------------------------------------------------------------//

  var $courses = $('.curriculum-overview .columns>ul li');

  $courses.on('click', function() {

    var $this = $(this);
    
    $courses.each(function() {
      $(this).removeClass('open');
    });

    if ($this.hasClass('open')) {
      $this.removeClass('open');
    } else {
      $this.addClass('open');
    }
  });


  // Flowtype.js
  // http://simplefocus.com/flowtype
  //------------------------------------------------------------------------------------------------//

  $('.fed-2 h2').fitText(1.15, {maxFontSize: '35px'});

});