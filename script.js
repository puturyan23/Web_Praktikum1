$(document).ready(function(){
    //efek fadeOut
    $('#fadeOut').click(function(){
        $('.galeri-1').fadeOut();
        $('.galeri-2').fadeOut(1000);
        $('.galeri-3').fadeOut(2000);
        $('.galeri-4').fadeOut(3000);
        $('.galeri-5').fadeOut(4000);
        $('.galeri-6').fadeOut(5000);
    })
    //efek fadeIn
    $('#fadeIn').click(function(){
        $('.galeri-1').fadeIn();
        $('.galeri-2').fadeIn(1000);
        $('.galeri-3').fadeIn(2000);
        $('.galeri-4').fadeIn(3000);
        $('.galeri-5').fadeIn(4000);
        $('.galeri-6').fadeIn(5000);
    })
})