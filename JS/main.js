$(function(){
  $('.menu-toggle').click(function(){
        $('.menu-toggle').toggleClass('active')
        $('nav').toggleClass('active')
      });
});

var header = document.getElementsByClassName("journey-travelers-guild");
var btns = document.getElementsByClassName("btn");
$(function(){
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
});