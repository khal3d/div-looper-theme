jQuery(document).ready(function(){
    // Random animited.css
    var classes = [
        'bounceInRight', 'flip', 'rotateInDownLeft', 'rollIn', 'zoomIn',
        'wobble', 'tada', 'swing', 'shake', 'rubberBand', 'bounce'
    ]; //add as many classes as u want
    var animatedClass = classes[Math.floor(Math.random() * classes.length)];
    jQuery('.navbar-brand').addClass(animatedClass);

    navbarElement = document.querySelector('nav');
    Headroom = new Headroom(navbarElement);
    Headroom.init();
});

