$(document).ready(function(e) {
  $.fn.scrollView = function () {
    return this.each(function () {
        $('html, body').animate({
            scrollTop: $(this).offset().top - 100
        }, 1000);
    });
  }

  $('#home').click(function(e) {
    $('#home-loc').scrollView();
    $('.nav-item').removeClass('active');
    $(this).parent().addClass('active');
  });
  $('#experience').click(function(e) {
    $('#experience-loc').scrollView()
    $('.nav-item').removeClass('active');
    $(this).parent().addClass('active');
  });
  $('#education').click(function(e) {
    $('#education-loc').scrollView()
    $('.nav-item').removeClass('active');
    $(this).parent().addClass('active');
  });
});
