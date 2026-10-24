(function(){
var d=document.documentElement;d.classList.add("js");
requestAnimationFrame(function(){d.classList.add("ready")});
var b=document.querySelector(".menu"),n=document.getElementById("nav");
if(b){b.addEventListener("click",function(){var o=n.classList.toggle("open");b.setAttribute("aria-expanded",o)});
n.addEventListener("click",function(e){if(e.target.tagName==="A"){n.classList.remove("open");b.setAttribute("aria-expanded","false")}})}
var f=document.querySelector(".flow");
if(f){if("IntersectionObserver" in window){new IntersectionObserver(function(es,o){es.forEach(function(e){if(e.isIntersecting){f.classList.add("in");o.disconnect()}})},{threshold:.4}).observe(f)}else{f.classList.add("in")}}
})();
