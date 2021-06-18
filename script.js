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


let mountOneDates=["25 Nov 2016","25 Nov 2016","18 Dec 2016","7 Jan 2017"]
let mountOnePlaces=["Vestibulum viverra","Vestibulum viverra","Vestibulum viverra","Vestibulum viverra"];

let mountTwoDates=["17 Nov 2016","13 Dec 2016","28 Dec 2016","9 Feb 2017"];
let mountTwoPlaces=["Vestibulum viverra","Vestibulum viverra","Vestibulum viverra","Vestibulum viverra"];

let team= document.getElementsByClassName("Team");
let dates = document.getElementsByClassName("date");
let places = document.getElementsByClassName("place");

let mountOne= document.getElementById("mountainOne")
let mountTwo= document.getElementById("mountainTwo")

let schedule = document.getElementById("schedule")
let scheduleWord = document.getElementById("scheduleWord")
let scheduleItem = document.getElementsByClassName("scheduleItem")
let scheduleItems = document.getElementById("scheduleItems")


mountOne.onclick= function(){
    if(team[0].clientWidth <= 800){
    team[0].style.height="65.238095vh";
    schedule.style.height="230px";
    scheduleWord.style.height="30px";
    scheduleItem[0].style.height="";
    scheduleItems.style.height="";
}
    
    team[0].style.backgroundImage="url('Backgrounds/mist.png')";
    mountOne.style.color = "#414f6b";
    mountOne.style.textDecoration = "underline";
    mountOne.style.backgroundColor= "#b0b4be";

    mountTwo.style.color = "#b0b4be";
    mountTwo.style.textDecoration = "none";
    mountTwo.style.backgroundColor= "#414f6b";

    for(let i=0; i < dates.length; i++){
        dates[i].innerHTML = mountOneDates[i];
        places[i].innerHTML = mountOnePlaces[i];
    }

}

mountTwo.onclick= function(){
    team[0].style.backgroundImage="url('Backgrounds/cloud.png')";
    mountTwo.style.color = "#414f6b";
    mountTwo.style.textDecoration = "underline";
    mountTwo.style.backgroundColor= "#b0b4be";

    mountOne.style.color = "#b0b4be";
    mountOne.style.textDecoration = "none";
    mountOne.style.backgroundColor= "#414f6b";

    for(let j=0; j < dates.length; j++){
        dates[j].innerHTML = mountTwoDates[j];
        places[j].innerHTML = mountTwoPlaces[j];
    }
}