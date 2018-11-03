// document.getElementById("container").onmousemove = function(e) {
//   obj = document.getElementById("darkness");
//   obj.style.top = e.pageY - ($(obj).height() / 2) + "px";
//   obj.style.left = e.pageX - ($(obj).width() / 4) - ($(body).width() / 2) + "px";
// };
document.getElementById("container").touchstart = function(e) {
  obj = document.getElementById("darkness");
  obj.style.top = e.pageY - ($(obj).height() / 2) + "px";
  obj.style.left = e.pageX - ($(obj).width() / 4) - ($(body).width() / 2) + "px";
};

showCount();
getLocation();

setInterval(function() {
  showCount(),
      getLocation()

}, 5000);

function randomInt(min, max) {
  return Math.random() * (max - min) + min;
}

function getLocation() {
  $('#secret').css('margin', randomInt(0, 400) + 'px ' + randomInt(0, 400) + 'px')
}

function showCount() {
  let i = 5;
  setInterval(function() {
      $('#count').text(i--);
      if (i <= 0) i = 5;
  }, 1000);
}