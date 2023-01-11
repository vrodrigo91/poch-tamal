var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").classList.remove("hidey");
  } else {
    document.getElementById("nav").classList.add("hidey");
  }
  prevScrollpos = currentScrollPos;
}