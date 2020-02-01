    //   var element= document.createElement('div');
    //     element.className = 'block';
    //      document.getElementsByClassName("block")[0].appendChild(element);
    //      document.getElementsByClassName('block')[1].appendChild(element);
    //      document.getElementsByClassName('block')[2].appendChild(element);
    //      document.getElementsByClassName('block')[3].appendChild(element);

         var elements = document.getElementsByClassName("block");

        function myMove() {
       
            var pos = 0;
            var id = setInterval(frame, 25);
            function frame() {

                if (pos == 100) {
                     clearInterval(id);
                } else {

                    pos=pos+1;
                    elements[0].style.top = pos+"%" ;
                    elements[1].style.top = pos+"%" ;
                    elements[2].style.top = pos+"%" ;
                    elements[3].style.top = pos+"%" ;
                    
                }
            }
        }

        
         myMove();
       
    