$(function(){
  
    $("#processStep1").click(function(){
        $("#processDetailStep1").slideToggle("slow");
    });
    $("#processStep2").click(function(){
        $("#processDetailStep2").slideToggle("slow");
    });
    $("#processStep3").click(function(){
        $("#processDetailStep3").slideToggle("slow");
    });
    $("#processStep4").click(function(){
        $("#processDetailStep4").slideToggle("slow");
    });
    

    $('#work').click(function() {
        $('html,body').animate({ scrollTop: $("#mianWork").offset().top}, 200);
    });
    $('#tech').click(function() {
        $('html,body').animate({ scrollTop: $("#mainTech").offset().top}, 200);
    });
    $('#process').click(function() {
        $('html,body').animate({ scrollTop: $("#mianProcess").offset().top}, 200);
    });
    $('#about').click(function() {
        $('html,body').animate({ scrollTop: $("#mianAbout").offset().top}, 200);
    });

    // $(".sendUs").attr("onclick","location.href='https://docs.google.com/forms/d/e/1FAIpQLSfYHhEJ0MRJm9Hoe0mB7fyB60lR0VPbO9H-OR6cddSWIcliKg/viewform?usp=sf_link';");

});