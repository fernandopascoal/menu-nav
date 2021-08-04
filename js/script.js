
function colapse() {

    var width = document.querySelector('#nav').style.width;

    if (width = "0px") {

        document.querySelector('#nav').style.width = "200px";
        document.querySelector('#icon').classList = "fas fa-times"; 

    } else if (width = "200px") {
        document.querySelector('#nav').style.width = "0px"
    }
}

    

