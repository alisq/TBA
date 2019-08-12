$(document).ready(function(){




          url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR_ndDOt_GpWtoIL3r5EZBOvrIMLi7MQMcPJ8S8wtbFUIe-6hHvpOxvhaAEerWHMw/pub?gid=744057368&single=true&output=csv"
          url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR_ndDOt_GpWtoIL3r5EZBOvrIMLi7MQMcPJ8S8wtbFUIe-6hHvpOxvhaAEerWHMw/pub?gid=744057368&single=true&output=csv"


Papa.parse(url, {
  download: true,
  header: true,
        complete: function(results) {
            for (i=0; i<results.data.length;i++) {
              
              console.log(results.data[i])

              var img= $("<img class='thumbnail'>")
                  .attr("src",results.data[i].Thumbnail.replace("open?","uc?"))

              var contents = $("<div class='contents'></div>")

              contents
                  .append("<div class='workTitle'>"+results.data[i].WorkTitle+'</div>')
                  .append("<div class='medium'>"+results.data[i].Medium+'</div>')
                  .append("<div class='location'>"+results.data[i].Location+'</div>')
                  .append(img)

                  .append("<div class='thumbnailCaption'>"+results.data[i].ThumbnailCaption+'</div>')

                  .append("<div class='projectDescription'>"+results.data[i].ProjectDescription+'</div>')
                  .append("<div class='toolTitle'>"+results.data[i].ToolTitle+'</div>')
                  .append("<div class='toolText'>"+results.data[i].ToolText+'</div>')
                  .append("<div class='qsAndStarters'>"+results.data[i]["Questions and Conversation Starters"]+'</div>')

                  .append("<div class='curricularConnections'>"+results.data[i].CurricularConnections+'</div>')



              $("<li></li>")
                .attr("id","artist-"+i)
                .append("<div class='title'>"+results.data[i].ArtistName+"<div class='open-close'></div></div>")
                .append(contents)
                .append("<button class='makeBook'>print booklet</button>")
                .appendTo("#menu")
            }
        

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
    $("#web").css("display","none");
    
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



        }
})





})


