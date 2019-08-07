$(document).ready(function(){


  $(".title").not(".no-click").click(function(){

    if ( !$(this).parent("li").hasClass("active") ) {
          $("li.active").removeClass("active");

          $(this).parent("li").addClass("active");
    }
    
  })

  $(".active .open-close").click(function(){
    setTimeout(function(){
    $(".active").removeClass("active");
  },25)
  })

let runningHeaders = Bindery.RunningHeader({
  render: (page) => page.isLeft
    ? `${page.number} · TOOLS FOR LEARNING`
    : `Hera Büyüktaşcıyan · ${page.number}`
});

$('.makeBook').click(function(){
    //$("#web #content").css("display","block")
    
    id = $(this).parent("li").attr("id");

	  $(this).remove()

	Bindery.makeBook({
  content: "#"+id+' .contents',
  view: Bindery.View.PREVIEW,

  pageSetup: {	
    size: { width: '5.5in', height: '8.5in' },
    margin: { top: '0.625in', inner: '0.625in', outer: '0.375in', bottom: '0.375in' },
  },
  printSetup: {
  	layout: Bindery.Layout.BOOKLET,
  	paper: Bindery.Paper.LETTER_LANDSCAPE,
  },
  rules: [
    Bindery.PageBreak({ selector: 'h4', position: 'before' }),
    runningHeaders,
  ],
});



Bindery.RunningHeader({
  render: (page) => page.isLeft
    ? `${page.number} · ${page.heading.h1}`
    : `${page.heading.h2} · ${page.number}`
})
})

})


