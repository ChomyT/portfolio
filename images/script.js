/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
/*function myFunction() {
  var x = document.getElementsByClass("nav-menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
*/
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "nav-menu") {
    x.className += " responsive";
  } else {
    x.className = "nav-menu";
  }
}