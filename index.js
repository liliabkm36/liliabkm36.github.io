
// const slide=document.getElementsByClassName("slide");
 img= [];
var i=0;
 img[0]='img1.jpg';
 img[1]='img2.jpg';
 img[2]='img3.jpg';
 function changeImg(){
    document.slide.src=img[i];

    if (i<img.length -1) {
        i++
        
    }
    else{
        i=0;
    }
    setTimeout("changeImg()", 2000);

}
window.onload=changeImg;
var image_info= document.getElementById("image_info");
const slid_show_container=document.getElementById("slid_show_container");
slid_show_container.addEventListener("mouseover",function () {
    image_info.classList.add("image_info1");

    
})
slid_show_container.addEventListener("mouseout",function () {
    image_info.classList.remove("image_info1");
    
})
var why = document.getElementById("why");
var content = document.getElementById("content");

why.addEventListener("click",function(){


if (content.style.display==="block") {
  
    content.style.display="none"
}
    else{
        content.style.display="block"
    }
})
counter = document.getElementsByClassName("counter");
number =document.getElementsByClassName("number");
number[0].addEventListener("click",function(){
    
    setInterval(counting,3000);
   
})
function counting() {
    for (let index = 1; index < 300; index++) {
        DelayNode=3000;

        document.querySelector(".number").innerHTML=index;
        
     }
    
}


    


    















