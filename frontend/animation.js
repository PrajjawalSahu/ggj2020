
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

setTimeout(myMove, 10);



function myMove1() {
    let element = document.createElement('div');
    element.id = 'block1';
    document.getElementsByTagName("body")[0].appendChild(element);
    let div = document.getElementById('block1');
    div.innerHTML += 'A';
    let pos = 0;
    let id = setInterval(function(){
        frame(element)
    }, 25);
    document.addEventListener("keypress", function (event) {
        if (event.keyCode == 65 ||event.keyCode == 97 ) {
            console.log("lol")
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

setTimeout(myMove1, 560);







function myMove2() {
    let element = document.createElement('div');
    element.id = 'block2';
    document.getElementsByTagName("body")[0].appendChild(element);
    let div = document.getElementById('block2');
    div.innerHTML += 'S';
    let pos = 0;
    let id = setInterval(function(){
        frame(element)
    }, 25);
    document.addEventListener("keypress", function (event) {
        if (event.keyCode == 83 ||event.keyCode == 115 ) {
            console.log("lol")
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

setTimeout(myMove2, 300);








function myMove3() {
    let element = document.createElement('div');
    element.id = 'block3';
    document.getElementsByTagName("body")[0].appendChild(element);
    let div = document.getElementById('block3');
    div.innerHTML += 'D';
    let pos = 0;
    let id = setInterval(function(){
        frame(element)
    }, 25);
    document.addEventListener("keypress", function (event) {
        if (event.keyCode == 68||event.keyCode == 100 ) {
            console.log("lol")
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

setTimeout(myMove3, 500);

