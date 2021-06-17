console.clear()


let thumbnails = document.getElementsByClassName("carouselImg");

let lightbox = document.getElementById("lightbox");

lightbox.onclick= function(e){
    lightbox.style.display="none"
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.lastChild);
      }
}

for(let i = 0; i < thumbnails.length; i++){
    thumbnails[i].onclick= function(e){
        lightbox.style.display= "flex"
        let bigPic = document.createElement("img");
        bigPic.src = thumbnails[i].src;
        lightbox.appendChild(bigPic);
    }
}

console.log(thumbnails);