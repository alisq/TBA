$(document).ready(function(){

let runningHeaders = Bindery.RunningHeader({
  render: (page) => page.isLeft
    ? `${page.number} · TOOLS FOR LEARNING`
    : `Hera Büyüktaşcıyan · ${page.number}`
});

$('#makeBook').click(function(){
	$(this).remove()

	Bindery.makeBook({
  content: '#content',
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


