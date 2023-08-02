const year = document.getElementById("year");
const date = new Date();
year.textContent = date.getFullYear();

let greeting = document.getElementById("greeting");


//Changes the welcome greeting to a different languages
function changeWelcome(){
    setInterval(greetingLanguage, 2000);
}
let randomNumber = 1;
function greetingLanguage(){
    
   
    if(randomNumber == 1){
        greeting.textContent = "Welcome to"
        randomNumber ++;
    }
    else if(randomNumber == 2){
        greeting.textContent = "Bienvenida a"
        randomNumber ++;
    }
    else if(randomNumber == 3){
        greeting.textContent = "Bienvenue à"
        randomNumber ++;
    }
    else if(randomNumber == 4){
        greeting.textContent = "へようこそ"
        randomNumber ++;
    }
    else if(randomNumber == 5){
        greeting.textContent = "Ласкаво просимо до"
        randomNumber ++;
    }
    else if(randomNumber == 6){
        greeting.textContent = "Willkommen zu"
        randomNumber ++;
    }
    else{
        greeting.textContent = "Tervetuloa"
        randomNumber =1;
        console.log(randomNumber);
    }
}

//Individual language functions
let page = document.getElementById("main-page")
counter = 0;
function spanish(){
    if (counter == 0){
        page.innerHTML="<div class='phrase'><h2>Hello</h2><audio controls class='audio-style'><source src='./audio/spanish-hello.mp3' type='audio/mpeg'>Your browser does not support the audio tag.</audio><h2>Hola</h2></div>";
        counter++;  
        setTimeout(spanish, 6000);
    }
    else if(counter == 1){
        page.innerHTML="<div class='phrase'><h2>My name is...</h2><audio controls class='audio-style'><source src='./audio/spanish-mynameis.mp3' type='audio/mpeg'>Your browser does not support the audio tag.</audio><h2>Me llamo...</h2></div>";
        counter++;  
        setTimeout(spanish, 10000);      
    }
    else if(counter == 2){
        page.innerHTML="<div class='phrase'><h2>Do you speak English?</h2><audio controls class='audio-style'><source src='./audio/spanish-speakenglish.mp3' type='audio/mpeg'>Your browser does not support the audio tag.</audio><h2>Tú sabe hablas inglés?</h2></div>";
        counter++;  
        setTimeout(spanish, 12000); 
    }
    else{
        page.innerHTML="<div class='phrase'><h2>Hola, mi llamo...,tú sabe hablas inglés</h2><audio controls class='audio-style'><source src='./audio/spanish-full.mp3' type='audio/mpeg'>Your browser does not support the audio tag.</audio><h2>Hello, my name is..., do you speak English?</h2></div>";
        counter = 0;  
        setTimeout(spanish, 25000);
    }       
    }

function french(){
    if (counter == 0){
        page.innerHTML="<div class='phrase'><h2>Hello</h2><audio controls class='audio-style'><source src='./audio/french-hello.mp3' type='audio/mpeg'>Your browser does not support the audio tag.</audio><h2>Bonjour</h2></div>";
        counter++;  
        setTimeout(french, 6000);
    }
    else if(counter == 1){
        page.innerHTML="<div class='phrase'><h2>My name is...</h2><audio controls class='audio-style'><source src='./audio/french-nameis.mp3' type='audio/mpeg'>Your browser does not support the audio tag.</audio><h2>Je m'appelle...</h2></div>";
        counter++;  
        setTimeout(french, 10000);      
    }
    else if(counter == 2){
        page.innerHTML="<div class='phrase'><h2>Do you speak English?</h2><audio controls class='audio-style'><source src='./audio/french-speakenglish.mp3' type='audio/mpeg'>Your browser does not support the audio tag.</audio><h2>Parles-tu anglais?</h2></div>";
        counter++;  
        setTimeout(french, 12000); 
    }
    else{
        page.innerHTML="<div class='phrase'><h2>Bonjour, je m'appelle...,parles-tu anglais?</h2><audio controls class='audio-style'><source src='./audio/french-full.mp3' type='audio/mpeg'>Your browser does not support the audio tag.</audio><h2>Hello, my name is..., do you speak English?</h2></div>";
        counter = 0;  
        setTimeout(french, 25000);
    }       
}

function japanese(){
    if (counter == 0){
        page.innerHTML="<div class='phrase'><h2>Hello</h2><audio controls class='audio-style'><source src='./audio/japanese-hello.mp3' type='audio/mpeg'>Your browser does not support the audio tag.</audio><h2>Kon'nichiwa</h2></div>";
        counter++;  
        setTimeout(japanese, 6000);
    }
    else if(counter == 1){
        page.innerHTML="<div class='phrase'><h2>My name is...</h2><audio controls class='audio-style'><source src='./audio/japanese-nameis.mp3' type='audio/mpeg'>Your browser does not support the audio tag.</audio><h2>Watashinonamaeha...</h2></div>";
        counter++;  
        setTimeout(japanese, 10000);      
    }
    else if(counter == 2){
        page.innerHTML="<div class='phrase'><h2>Do you speak English?</h2><audio controls class='audio-style'><source src='./audio/japanese-speakenglish.mp3' type='audio/mpeg'>Your browser does not support the audio tag.</audio><h2>Eigo o hanasemasu ka?</h2></div>";
        counter++;  
        setTimeout(japanese, 12000); 
    }
    else{
        page.innerHTML="<div class='phrase'><h2>Kon'nichiwa, watashinonamaeha...,eigo o hanasemasu ka?</h2><audio controls class='audio-style'><source src='./audio/japanese-full.mp3' type='audio/mpeg'>Your browser does not support the audio tag.</audio><h2>Hello, my name is..., do you speak English?</h2></div>";
        counter = 0;  
        setTimeout(japanese, 25000);
    }       
}

function ukranian(){
    if (counter == 0){
        page.innerHTML="<div class='phrase'><h2>Hello</h2><audio controls class='audio-style'><source src='./audio/ukranian-hello.mp3' type='audio/mpeg'>Your browser does not support the audio tag.</audio><h2>Pryvit</h2></div>";
        counter++;  
        setTimeout(ukranian, 6000);
    }
    else if(counter == 1){
        page.innerHTML="<div class='phrase'><h2>My name is...</h2><audio controls class='audio-style'><source src='./audio/ukranian-nameis.mp3' type='audio/mpeg'>Your browser does not support the audio tag.</audio><h2>Mene zvaty</h2></div>";
        counter++;  
        setTimeout(ukranian, 10000);      
    }
    else if(counter == 2){
        page.innerHTML="<div class='phrase'><h2>Do you speak English?</h2><audio controls class='audio-style'><source src='./audio/ukranian-speakenglish.mp3' type='audio/mpeg'>Your browser does not support the audio tag.</audio><h2>Ty rozmovlyayesh anhliysʹkoyu?</h2></div>";
        counter++;  
        setTimeout(ukranian, 12000); 
    }
    else{
        page.innerHTML="<div class='phrase'><h2>Pryvit, mene zvaty...,ty rozmovlyayesh anhliysʹkoyu?</h2><audio controls class='audio-style'><source src='./audio/ukranian-full.mp3' type='audio/mpeg'>Your browser does not support the audio tag.</audio><h2>Hello, my name is..., do you speak English?</h2></div>";
        counter = 0;  
        setTimeout(ukranian, 25000);
    }       
}

function german(){
    if (counter == 0){
        page.innerHTML="<div class='phrase'><h2>Hello</h2><audio controls class='audio-style'><source src='./audio/german-hello.mp3' type='audio/mpeg'>Your browser does not support the audio tag.</audio><h2>Hallo</h2></div>";
        counter++;  
        setTimeout(german, 6000);
    }
    else if(counter == 1){
        page.innerHTML="<div class='phrase'><h2>My name is...</h2><audio controls class='audio-style'><source src='./audio/german-nameis.mp3' type='audio/mpeg'>Your browser does not support the audio tag.</audio><h2>Ich heiße...</h2></div>";
        counter++;  
        setTimeout(german, 10000);      
    }
    else if(counter == 2){
        page.innerHTML="<div class='phrase'><h2>Do you speak English?</h2><audio controls class='audio-style'><source src='./audio/german-speakenglish.mp3' type='audio/mpeg'>Your browser does not support the audio tag.</audio><h2>Sprechen Sie Englisch?</h2></div>";
        counter++;  
        setTimeout(german, 12000); 
    }
    else{
        page.innerHTML="<div class='phrase'><h2>Hallo, ich heiße...,sprechen Sie Englisch?</h2><audio controls class='audio-style'><source src='./audio/german-full.mp3' type='audio/mpeg'>Your browser does not support the audio tag.</audio><h2>Hello, my name is..., do you speak English?</h2></div>";
        counter = 0;  
        setTimeout(german, 25000);
    }       
}

function finnish(){
    if (counter == 0){
        page.innerHTML="<div class='phrase'><h2>Hello</h2><audio controls class='audio-style'><source src='./audio/finnish-hello.mp3' type='audio/mpeg'>Your browser does not support the audio tag.</audio><h2>Hei</h2></div>";
        counter++;  
        setTimeout(finnish, 6000);
    }
    else if(counter == 1){
        page.innerHTML="<div class='phrase'><h2>My name is...</h2><audio controls class='audio-style'><source src='./audio/finnish-nameis.mp3' type='audio/mpeg'>Your browser does not support the audio tag.</audio><h2>Minun nimeni on...</h2></div>";
        counter++;  
        setTimeout(finnish, 10000);      
    }
    else if(counter == 2){
        page.innerHTML="<div class='phrase'><h2>Do you speak English?</h2><audio controls class='audio-style'><source src='./audio/finnish-speakenglish.mp3' type='audio/mpeg'>Your browser does not support the audio tag.</audio><h2>Puhutko englantia?</h2></div>";
        counter++;  
        setTimeout(finnish, 12000); 
    }
    else{
        page.innerHTML="<div class='phrase'><h2>Hei, minun nimeni on...,puhutko englantia?</h2><audio controls class='audio-style'><source src='./audio/finnish-full.mp3' type='audio/mpeg'>Your browser does not support the audio tag.</audio><h2>Hello, my name is..., do you speak English?</h2></div>";
        counter = 0;  
        setTimeout(finnish, 25000);
    }       
}

//functions that start on page load

changeWelcome()



  