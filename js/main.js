/* Start Jquery */
$(document).ready(function() {

    /* Navbar Hover */
    var Items = $('.navbar ul li'); //all li
    var DropDowmItem = $('.navbar ul li.dropdown'); //dropdwon 
    var ChildLink = $('.navbar ul li.dropdown .dropdown-menu a');
    //all li but not dropdown li
    $(Items).click(function() {
        $(this).not(DropDowmItem).addClass('active').siblings().removeClass('active');
    });
    //dropdown li when click ,remove all active class
    $(DropDowmItem).click(function() {
        $(Items).siblings().removeClass('active');
    });
    //a inside dropdown when click,add active class
    $(ChildLink).click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    });
    //reomve hover from dropdwon children
    $(Items).hover(function() {
        $(Items).click(function() {
            $(this).unbind("mouseenter mouseleave");
        });
    });
    /* End Navbar Hover */
    /* Start About animation */
    var sectionAbout= $('.about .about-content');
    $(window).scroll(function(){
      var windowScroll= $(this).scrollTop();
      if(windowScroll > 90){
        sectionAbout.addClass('animate__animated animate__fadeInUp');
        sectionAbout.css('opacity','1');
      }
       /* if i want to make animation every time
      else{
        sectionAbout.removeClass('animate__animated animate__fadeInUp');
        sectionAbout.css('opacity','0');
      }
      */
    });

    /* End About animation */
    /* Start services animation */
    var sectionServicesCard= $('.services .card');
    var sectionServicesTopNews= $('.services .top-news');
    $(window).scroll(function(){
      var windowScroll= $(this).scrollTop();
      if(windowScroll > 550){
        sectionServicesCard.addClass('animate__animated animate__fadeInUp');
        sectionServicesCard.css('opacity','1');
        sectionServicesTopNews.addClass('animate__animated animate__fadeInUp');
        sectionServicesTopNews.css('opacity','1');
      }
      /* if i want to make animation every time
      else{
        sectionServicesCard.removeClass('animate__animated animate__fadeInUp');
        sectionServicesCard.css('opacity','0');
        sectionServicesTopNews.removeClass('animate__animated animate__fadeInUp');
        sectionServicesTopNews.css('opacity','0');
      }
      */
    });
    /* End services animation */
    /* Start news animation */
    var sectionNews =$('.news').offset().top - 500;
    var sectionNewsCard= $('.news .card');
    $(window).scroll(function(){
      var windowScroll= $(this).scrollTop();
      if(windowScroll > sectionNews){
        sectionNewsCard.addClass('animate__animated animate__fadeInUp');
        sectionNewsCard.css('opacity','1');
      }
      
    });
    /* End news animation */
    /* Start testmonials animation */
    var sectionTestmonials =$('.testmonials').offset().top - 400;
    var sectionTestmonialsContent= $('.testmonials .test-content');
    console.log(sectionNews);
    $(window).scroll(function(){
      var windowScroll= $(this).scrollTop();
      console.log(windowScroll);
      if(windowScroll > sectionTestmonials){
        sectionTestmonialsContent.addClass('animate__animated animate__fadeInUp');
        sectionTestmonialsContent.css('opacity','1');
      }
      
    });
    /* End testmonials animation */


}); //End Jquery