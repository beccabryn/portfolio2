$(document).ready(function(e){
  $win = $(window);
  $navbar = $('#header');
  $toggle = $('.toggle-button');
  var width = $navbar.width();
  toggle_onClick($win, $navbar, width);

  //resize event
  $win.resize(function(){
    toggle_onClick($win, $navbar, width)
  })

  $toggle.click(function(e){
    $navbar.toggleClass("toggle-left")
  })
});

function toggle_onClick($win, $navbar, width){
  if($win.width() <= 768){
    $navbar.css({left:`-${width}px`})
  } else {
    $navbar.css({left:'0px'})
  }

}

var typed = new Typed('#typed', {
  strings: [
    'UI Designer',
    'Full Stack Developer'
  ],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
})
var typed_2 = new Typed('#typed_2', {
  strings: [
    'UI Designer',
    'Full Stack Developer'
  ],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
})



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior:'smooth'
    })
  })
})


