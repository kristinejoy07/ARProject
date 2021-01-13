/*function myIXTCProg(){
    var modal = document.getElementById("ixtcDesc");
    var btn = document.getElementById("btnIXTC");
    var span = document.getElementsByClassName("close1")[0]; 

    btn.onclick = function(){
        modal.style.display = "block"; 
    }

    span.onclick = function(){
        modal.style.display = "none"; 
    }

    window.onclick = function(event){
        if(event.target == modal){
            modal.style.display = "none"; 
        }
    }
}

function myFIRCProg(){
    var modal2 = document.getElementById("fircDesc"); 
    var btn2 = document.getElementById("btnFIRC"); 
    var span2 = document.getElementsByClassName("close2")[0]; 

    btn2.onclick = function(){
        modal2.style.display = "block"; 
    }

    span2.onclick = function(){
        modal2.style.display = "none"; 
    }

    window.onclick = function(event){
        if(event.target == modal2){
            modal2.style.display = "none"; 
        }
    }
}
*/

function openIXTCModal(){
    document.getElementById("ixtcDesc").style.display = "block";
}

function closeIXTCModal(){
    document.getElementById("ixtcDesc").style.display = "none"; 
}


var slideIXTCIndex = 1;
showIXTCSlides(slideIXTCIndex);

function plusIXTCSlides(n) {
  showIXTCSlides(slideIXTCIndex += n);
}

function currentIXTCSlide(n) {
    showIXTCSlides(slideIXTCIndex = n);
  }

function showIXTCSlides(n) {
    var i;
    var slidesIXTC = document.getElementsByClassName("myIXTCSlides");
    if (n > slidesIXTC.length) {
        slideIXTCIndex = 1
    }

    if (n < 1) {
        slideIXTCIndex = slidesIXTC.length
    }

    for (i = 0; i < slidesIXTC.length; i++) {
        slidesIXTC[i].style.display = "none";
    }

    slidesIXTC[slideIXTCIndex-1].style.display = "block";
  }

function openFIRCModal(){
    document.getElementById("fircDesc").style.display = "block";
}

function closeFIRCModal(){
    document.getElementById("fircDesc").style.display = "none"; 
}

var slideFIRCIndex = 1;
showFIRCSlides(slideFIRCIndex);

function plusFIRCSlides(n) {
  showFIRCSlides(slideFIRCIndex += n);
}

function currentFIRCSlide(n) {
    showFIRCSlides(slideFIRCIndex = n);
}

function showFIRCSlides(n) {
    var i;
    var slidesFIRC = document.getElementsByClassName("myFIRCSlides");
    if (n > slidesFIRC.length) {
        slideFIRCIndex = 1
    }

    if (n < 1) {
        slideFIRCIndex = slidesFIRC.length
    }

    for (i = 0; i < slidesFIRC.length; i++) {
        slidesFIRC[i].style.display = "none";
    }

    slidesFIRC[slideFIRCIndex-1].style.display = "block";
  }