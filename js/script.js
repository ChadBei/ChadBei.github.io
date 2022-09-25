// JavaScript Document

//Get original navbar Position
var navbarTop = $("#navbar").offset().top

// When the user scrolls the page, execute myFunction
$(window).scroll(function(){

// Add the sticky class to the navbar when navbar is at top of window.
//Remove "sticky" when you leave the scroll position.
  if (window.pageYOffset >= navbarTop) {
    $("#navbar").addClass("sticky")
  } else {
    console.log("removed");
    $("#navbar").removeClass("sticky");
  }

});

// Cache selectors
var lastId,
 topMenu = $("#navbar"),
 topMenuHeight = topMenu.outerHeight()-1,
 // All list items
 menuItems = topMenu.find("a"),
 // Anchors corresponding to menu items
i = 0,
 scrollItems = menuItems.map(function(){
   i = i + 1;
   if (i < 5) {
     var item = $($(this).attr("href"));
      if (item.length) {
        return item;
       }
   }
 });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight-24;
  $('html, body').stop().animate({
      scrollTop: offsetTop
  }, 850);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight+25;

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";

   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=\"#"+id+"\"]").parent().addClass("active");
   }
});

// Floating action button setup
$(document).ready(function(){
                var links = [
                    {
                        "bgcolor":"#403d58",
                        "icon":"<img src='img/homepage/person.svg' style='box-shadow:none; margin-top:2px; fill:#f2efea'></img>"
                    },
                    {
                        "url":"mailto: cbeibide@bellsouth.net",
                        "bgcolor":"#fc7753",
                        "color":"fffff",
                        "icon":"<img src='img/homepage/email.svg' style='box-shadow:none; margin-top:2px'></img>",

                    },
                    {
                        "url":"Resume.pdf",
                        "bgcolor":"#fc7753",
                        "color":"fffff",
                        "icon":"<img src='img/homepage/file.svg' style='box-shadow:none; margin-top:2px'></img>",

                    }
                ];
                var options = {
                    rotate: false
                };
                $('#fab').jqueryFab(links, options);
            })
