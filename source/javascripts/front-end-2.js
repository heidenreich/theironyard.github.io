$(document).ready(function() {

  $('li.question.open').removeClass('open');

  var $questions = $('.faq-questions li.question');
  
  $questions.on('click', 'h3', function(){
    $questions.each(function() {
      $(this).removeClass('open');
    });

    $(this).parents('.question').addClass('open');
  });
});