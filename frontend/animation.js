
function removeElement(element) {
    element.parentNode.removeChild(element);
}

function myMove( char) {
    let element = document.createElement('div');
    element.id = 'block';
    document.getElementsByTagName("body")[0].appendChild(element);
    let div = document.getElementById('block');
    div.innerHTML += char;
    let pos = 0;
    let id = setInterval(function(){
        frame(element)
    }, 25);
    document.addEventListener("keypress", function (event) {
        if (event.keyCode== char.charCodeAt(0)) {
           
            let element = document.getElementById("block");
            element.parentNode.removeChild(element);
            clearInterval(id);
        }
    });


    function frame(element) {
        if (pos == 100) {
            removeElement(element);
            clearInterval(id);
        } else {
            pos = pos + 1;
            element.style.top = pos + "%";
        }
    }
}

setTimeout(myMove, 2000);



function myMove1(char) {
    let element = document.createElement('div');
    element.id = 'block1';
    document.getElementsByTagName("body")[0].appendChild(element);
    let div = document.getElementById('block1');
    div.innerHTML += char;
    let pos = 0;
    let id = setInterval(function(){
        frame(element)
    }, 25);
    document.addEventListener("keypress", function (event) {
        if (event.keyCode == char.charCodeAt(0) ) {
            
            let element = document.getElementById("block1");
            element.parentNode.removeChild(element);
            clearInterval(id);

        }
    });

    
    function frame(element) {
        if (pos == 100) {
            removeElement(element);
            clearInterval(id);
        } else {
            pos = pos + 1;
            element.style.top = pos + "%";
        }
    }
}

setTimeout(myMove1, 5000);







function myMove2(char) {
    let element = document.createElement('div');
    element.id = 'block2';
    document.getElementsByTagName("body")[0].appendChild(element);
    let div = document.getElementById('block2');
    div.innerHTML += char;
    let pos = 0;
    let id = setInterval(function(){
        frame(element)
    }, 25);
    document.addEventListener("keypress", function (event) {
        if (event.keyCode== char.charCodeAt(0)) {
      
            let element = document.getElementById("block2");
            element.parentNode.removeChild(element);
            clearInterval(id);

        }
    });

    
    function frame(element) {
        if (pos == 100) {
            removeElement(element);
            clearInterval(id);
        } else {
            pos = pos + 1;
            element.style.top = pos + "%";
        }
    }
}

setTimeout(myMove2, 3500);








function myMove3(char) {
    let element = document.createElement('div');
    element.id = 'block3';
    document.getElementsByTagName("body")[0].appendChild(element);
    let div = document.getElementById('block3');
    div.innerHTML += char;
    let pos = 0;
    let id = setInterval(function(){
        frame(element)
    }, 25);
    document.addEventListener("keypress", function (event) {
        if (event.keyCode== char.charCodeAt(0)) {
            
            let element = document.getElementById("block3");
            element.parentNode.removeChild(element);
            clearInterval(id);

        }
    });

    
    function frame(element) {
        if (pos == 100) {
            removeElement(element);
            clearInterval(id);
        } else {
            pos = pos + 1;
            element.style.top = pos + "%";
        }
    }
}

setTimeout(myMove3, 6500);














function myMove4() {
    let element = document.createElement('div');
    element.id = 'block4';
    document.getElementsByTagName("body")[0].appendChild(element);
    let div = document.getElementById('block4');
    div.innerHTML += "YOU REPAIR";
    let pos = 0;
    let id = setInterval(function(){
        frame(element)
    }, 25);
    // document.addEventListener("keypress", function (event) {
    //     if (event.keyCode== char.charCodeAt(0)) {
           
    //         let element = document.getElementById("block4");
    //         element.parentNode.removeChild(element);
    //         clearInterval(id);
    //     }
    // });


    function frame(element) {
        if (pos == 100) {
            removeElement(element);
            clearInterval(id);
        } else {
            pos = pos + 1;
            element.style.top = pos + "%";
        }
    }
}

setTimeout(myMove4, 10000);









function myMove5(char) {
    let element = document.createElement('div');
    element.id = 'block5';
    document.getElementsByTagName("body")[0].appendChild(element);
    let div = document.getElementById('block5');
    div.innerHTML += char;
    let pos = 0;
    let id = setInterval(function(){
        frame(element)
    }, 25);
    document.addEventListener("keypress", function (event) {
        if (event.keyCode== char.charCodeAt(0)) {
            
            let element = document.getElementById("block5");
            element.parentNode.removeChild(element);
            clearInterval(id);

        }
    });

    
    function frame(element) {
        if (pos == 100) {
            removeElement(element);
            clearInterval(id);
        } else {
            pos = pos + 1;
            element.style.top = pos + "%";
        }
    }
}

setTimeout(myMove5, 7000);