
function colapse() {

    var menuArea = document.querySelector('#nav');

    if ( menuArea.style.width == "200px") {

        document.querySelector('#nav').style.width = "0px";
        document.querySelector('#icon').classList = "fas fa-bars";
      

    } else {
        document.querySelector('#nav').style.width = "200px"
        document.querySelector('#icon').classList = "fas fa-times"; 
    }
}

    

