var loader = document.getElementById('loader');

window.addEventListener('load', loaded);
function loaded() {
  loader.style.display = "none";
}

// theme
var theme = document.getElementById('theme');
var themeicon = document.getElementById('themeicon');
var iconvisible = 0;
function showthemebar() {
  if (iconvisible == 0) {
    theme.style.display = "block";
    iconvisible = 1;
  }
  else if(iconvisible==1){
    theme.style.display = "none";
    iconvisible = 0;
  }
}
function changetoyouth() {
  document.documentElement.style.setProperty('--youth', '#9a9ad6');
  document.documentElement.style.setProperty('--loyality', '#1de1ff');
}
function changetoloyality() {
  document.documentElement.style.setProperty('--youth', '#1de1ff');
}

// show manu bar
var manubar = document.getElementById('manubar');
var closemanu = document.getElementById("closemanu");
function showmanubar() {
  manubar.style.display = "block";
}
function closemanubar(){
  manubar.style.display="none";
}
//colse manu bar
// When the user clicks on <span> (x), close the modal
closemanu.onclick = function () {
  manubar.style.display = "none";
}
document.onclick = function (event) {
  if (event.target == manubar) {
    manubar.style.display = "none";
  }
}

// servicess
// Get the modal
var modal = document.getElementById("myModal");
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn1 = document.getElementById("Ui/Ux");
var btn2 = document.getElementById("digitalM");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];
var span2 = document.getElementsByClassName("close")[2];

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}
btn1.onclick = function () {
  modal1.style.display = "block";
}
btn2.onclick = function () {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}
span1.onclick = function () {
  modal1.style.display = "none";
}
span2.onclick = function () {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  else if (event.target == modal1) {
    modal1.style.display = "none";
  }
  else if (event.target == modal2) {
    modal2.style.display = "none";
  }

}