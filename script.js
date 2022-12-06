document.readyState(function (){
    //add smooth scrolling to all links
    $("a").on('click',function(event){
        //Make sure this.hash has a value before overriding default behaviour
        if(this.hash!==""){
            //Prevent default actor click behavior 
            event.preventDefault();
            //store hash
            var hash =this.hash;

            //use jQuery's animate method to add smooth page scroll
            //the optional number (800) specified the number od millisecond it takes to scroll to the specified area
            $('html','body').animate(
                {
                    scrollTop:$(hash).offset().top,
                },
                800,
                function(){
                    //add hash (#) to Url when done scrolling default behavior
                    window.location.hash=hash;
                }
                );
        }//End if
    });
});