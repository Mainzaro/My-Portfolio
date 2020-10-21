$(document).ready(function() {
  $(".title-r").addClass("animation-R");
});
$(document).ready(function() {
  $(".title-l").addClass("animation-L");
});

$(".featuresRow").hover(
  function(){
  $(this).addClass("hover");
},function(){
  $(this).removeClass("hover");
}
);
