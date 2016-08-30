$(document).ready(function() {
  // Bootstrap Material Design
  $.material.init();

  // Owl initialize
  $("#owl-advisor").owlCarousel({
    autoPlay: false,
    stopOnHover: true,
    navigation: true,
    paginationSpeed: 1000,
    goToFirstSpeed: 2000,
    singleItem: true,
    autoHeight: true,
    transitionStyle:"fade"
  });
});

var scrollOffset = 60;
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

$('a[href=#]').click(function() {
  $('html, body').animate({ scrollTop: - scrollOffset }, 'show');
});

$('a[href=#advisor]').click(function() {
  $('html, body').animate({ scrollTop: $('#advisor').offset().top - scrollOffset }, 'show');
});

$('a[href=#recently]').click(function() {
  $('html, body').animate({ scrollTop: $('#recently').offset().top - scrollOffset }, 'show');
});

$('a[href=#research_contribution]').click(function() {
  $('html, body').animate({ scrollTop: $('#research_contribution').offset().top - scrollOffset }, 'show');
});

$('a[href=#members]').click(function() {
  $('html, body').animate({ scrollTop: $('#members').offset().top - scrollOffset }, 'show');
});

$('a[href=#paper]').click(function() {
  $('#paper').removeClass('hidden');
  $('#paper').addClass('animated fadeIn').one(animationEnd, function() {
      $('#paper').removeClass('animated fadeIn');
  });
  $('html, body').animate({ scrollTop: $('#research_contribution').offset().top - scrollOffset }, 'show');
  $('#paper').siblings().addClass('hidden');

  $('.nav-pills>li.active').removeClass('active');
  $(this).parent().addClass('active');
});

$('a[href=#project]').click(function() {
  $('#project').removeClass('hidden');
  $('#project').addClass('animated fadeIn').one(animationEnd, function() {
      $('#project').removeClass('animated fadeIn');
  });
  $('html, body').animate({ scrollTop: $('#research_contribution').offset().top - scrollOffset }, 'show');
  $('#project').siblings().addClass('hidden');

  $('.nav-pills>li.active').removeClass('active');
  $(this).parent().addClass('active');
});

$('a[href=#undergraduate_project]').click(function() {
  $('#undergraduate_project').removeClass('hidden');
  $('#undergraduate_project').addClass('animated fadeIn').one(animationEnd, function() {
      $('#undergraduate_project').removeClass('animated fadeIn');
  });
  $('html, body').animate({ scrollTop: $('#research_contribution').offset().top - scrollOffset }, 'show');
  $('#undergraduate_project').siblings().addClass('hidden');

  $('.nav-pills>li.active').removeClass('active');
  $(this).parent().addClass('active');
});

$('.recently').click(function () {
  var target = $(this).data('target');
});