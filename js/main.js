$(document).ready(function(){




          url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR_ndDOt_GpWtoIL3r5EZBOvrIMLi7MQMcPJ8S8wtbFUIe-6hHvpOxvhaAEerWHMw/pub?gid=744057368&single=true&output=csv"
          url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR_ndDOt_GpWtoIL3r5EZBOvrIMLi7MQMcPJ8S8wtbFUIe-6hHvpOxvhaAEerWHMw/pub?gid=744057368&single=true&output=csv"


Papa.parse(url, {
  download: true,
  header: true,
        complete: function(results) {
            for (i=0; i<results.data.length;i++) {
              
              console.log(results.data[i])

              

              var artist = results.data[i].ArtistName,
              bio = results.data[i].ShortBio,
              work = results.data[i].WorkTitle.replace(/(?:\r\n|\r|\n)/g, '<br>'),
              medium = results.data[i].Medium.replace(/(?:\r\n|\r|\n)/g, '<br>'),
              location = results.data[i].Location.replace(/(?:\r\n|\r|\n)/g, '<br>'),
              img= $("<img class='thumbnail'>")
                  .attr("src",results.data[i].Thumbnail.replace("open?","uc?")),
              caption = results.data[i].ThumbnailCaption.replace(/(?:\r\n|\r|\n)/g, '<br>'),
              desc = results.data[i].ProjectDescription.replace(/(?:\r\n|\r|\n)/g, '<br>'),
              toolTitle = results.data[i].ToolTitle.replace(/(?:\r\n|\r|\n)/g, '<br>'),
              toolText =  results.data[i].ToolText.replace(/(?:\r\n|\r|\n)/g, '<br>'),
              questions = results.data[i]["Questions and Conversation Starters"].replace(/(?:\r\n|\r|\n)/g, '<br>'),
              connections = results.data[i].CurricularConnections.replace(/(?:\r\n|\r|\n)/g, '<br>');



              var contents = $("<div class='contents'></div>")

              contents
                  .append("<p class='bio'>"+bio+'</p>')
                  .append("<h4 class='workTitle'>"+work+'</h4>')
                  .append("<div class='medium'>"+medium+'</div>')
                  .append("<div class='location'>"+location+'</div>')
                  .append(img)
                  .append("<p class='caption'>"+caption+'</div>')

                  .append("<div class='projectDescription'>"+desc+'</div>')
                  .append("<div class='toolTitle'>"+toolTitle+'</div>')
                  .append("<div class='toolText'>"+toolText+'</div>')
                  .append("<div class='qsAndStarters'>"+questions+'</div>')

                  .append("<div class='curricularConnections'>"+connections+'</div>')



              $("<li></li>")
                .attr("id","artist-"+i)
                .append("<div class='title'>"+artist+"<div class='open-close'></div></div>")
                .append(contents)
                .append("<button class='makeBook'>print booklet</button>")
                .appendTo("#menu")
            }
        

  $(".title").not(".no-click").click(function(){

    if ( !$(this).parent("li").hasClass("active") ) {
          $("li.active").removeClass("active");

          $(this).parent("li").addClass("active");
    } else {
      $("li.active").removeClass("active");
    }
    
  })

  // $(".active .open-close").click(function(){
  //   setTimeout(function(){
  //   $(".active").removeClass("active");
  // },25)
  // })




let runningHeaders = Bindery.RunningHeader({
  render: (page) => page.isLeft
    ? `${page.number} · TOOLS FOR LEARNING`
    : `${$( "#"+id+' .title').text()} · ${page.number}`
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


