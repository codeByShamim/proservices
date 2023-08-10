// dropdowns
function dropdowns_open_close(){
  let dropdowns = document.getElementById("dropdowns");
  if(dropdowns.style.display === "block"){
    dropdowns.style.display = "none";
  }else{
    dropdowns.style.display = "block";
  }
}
// menu btn
function menu_open(){
  var menu_bar_icon = document.getElementById("menu-bar");
  var menu_bar_x_icon = document.getElementById("menu-x");
  var responsive_menu = document.getElementById("nav-link");
  if(responsive_menu.style.display === "block"){
    responsive_menu.style.display = "none";
  }else{
    responsive_menu.style.display = "block";
    menu_bar_icon.style.display = "none";
    menu_bar_x_icon.style.display = "block";
  }
}
function menu_close(){
 document.getElementById("menu-bar").style.display = "block";
 document.getElementById("menu-x").style.display = "none";
 document.getElementById("nav-link").style.display = "none";
}

// responsive menu onclick event display hide
function menu_link_hide(s) {
  if (s.matches) { // If media query matches
      document.getElementById("nav-link").style.display = "none";
      document.getElementById("menu-bar").style.display = "block";
      document.getElementById("menu-x").style.display = "none";
    } else {
  }
} 
var s = window.matchMedia("(max-width: 992px)")

//  poppup notifications
function poppup_open(){
  document.getElementById("poppup").style.display = "block";
}
function poppup_close(){
  document.getElementById("poppup").style.display = "none";
}
// poppup automatically open
window.addEventListener("load", function(){
  this.setTimeout(
    function open(event){
      document.getElementById("poppup").style.display = "block";
    },
    15000
  )
});

//  graphic design explain btn work
function show_graphic(){
  document.getElementById("graphic-design-explain").style.display = "block";
  document.getElementById("web-design-explain").style.display = "none";
}
//  web design explain btn work
function show_web(){
  document.getElementById("web-design-explain").style.display = "block";
  document.getElementById("graphic-design-explain").style.display = "none";
}

// pricing div hide show
//  graphic design pricing
function show_graphic_pricing(){
  document.getElementById("graphic-design-pricing").style.display = "block";
  document.getElementById("web-design-pricing").style.display = "none";
}
//  web design pricing
function show_web_pricing(){
  document.getElementById("web-design-pricing").style.display = "block";
  document.getElementById("graphic-design-pricing").style.display = "none";
}

form.addEventListener('submit',()=>{
  e.preventDefault();
     successMessage.classList.add('show');
     setTimeout(() => form.submit(), 2000);
 }
 )



// snackbar show
function validateForm() {
  let name = document.forms["google-sheet"]["Name"].value;
  let email = document.forms["google-sheet"]["Email"].value;
  let snackbar = document.getElementById("snackbar");
  if (name == "" && email == ""){
  }else{
    snackbar.style.display = "block";
  }
}   

// from snackbar close
function snackbar_close(){
  document.getElementById("snackbar").style.visibility = "hidden";
};


// pricing div mobile screen link insert
function myhref(web){
  window.location.href = web;}

// preloader
//  var preloader = document.getElementById("loading");
//  function preloaderFunction(){
//   preloader.style.display = 'none';
//  };

// review form
function review_open(){
  document.getElementById("review-form").style.display = "block";
  document.getElementById("fbody").style.opacity = "0.1";
  
}
function review_close(){
  document.getElementById("review-form").style.display = "none";
  document.getElementById("fbody").style.opacity = "1";
}

