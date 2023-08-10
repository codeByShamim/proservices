
    // blog hide show
    function blog_1(){
      document.getElementById("blog-1").style.display = "block";
      document.getElementById("blog-2").style.display = "none";
      document.getElementById("blog-3").style.display = "none";
      document.getElementById("blog-4").style.display = "none";
    }
    function blog_2(){
      document.getElementById("blog-1").style.display = "none";
      document.getElementById("blog-2").style.display = "block";
      document.getElementById("blog-3").style.display = "none";
      document.getElementById("blog-4").style.display = "none";
    }
    function blog_3(){
      document.getElementById("blog-1").style.display = "none";
      document.getElementById("blog-2").style.display = "none";
      document.getElementById("blog-3").style.display = "block";
      document.getElementById("blog-4").style.display = "none";
    }
    function blog_4(){
      document.getElementById("blog-1").style.display = "none";
      document.getElementById("blog-2").style.display = "none";
      document.getElementById("blog-3").style.display = "none";
      document.getElementById("blog-4").style.display = "block";
    }
  
    // blog interections
    function liked(){
      document.getElementById("solid-thumbs").style.display = "block";
      document.getElementById("regular-thumbs").style.display = "none";
      document.getElementById("solid-thumbs-down").style.display = "none";
      document.getElementById("regular-thumbs-down").style.display = "block";
    }
    function unlike(){
      document.getElementById("solid-thumbs-down").style.display = "block";
      document.getElementById("regular-thumbs-down").style.display = "none";
      document.getElementById("solid-thumbs").style.display = "none";
      document.getElementById("regular-thumbs").style.display = "block";

    }
    function noliked(){
      document.getElementById("solid-thumbs").style.display = "none";
      document.getElementById("regular-thumbs").style.display = "block";
    }
    function nounlike(){
      document.getElementById("solid-thumbs-down").style.display = "none";
      document.getElementById("regular-thumbs-down").style.display = "block";
    }
    // onclick scroll
    function topFunction() {
      if(scroll_top.matches){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 300;
      }
    }
    var scroll_top = window.matchMedia("(max-width: 1400px)")
