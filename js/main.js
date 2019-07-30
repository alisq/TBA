$(document).ready(function(){



$('#makeBook').click(function(){
	$(this).remove()

	Bindery.makeBook({
  content: '#content',
  view: Bindery.View.PREVIEW,
  pageSetup: {	
    size: { width: '5.5in', height: '8.5in' },
    margin: { top: '12pt', inner: '12pt', outer: '16pt', bottom: '20pt' },
  },
  printSetup: {
  	layout: Bindery.Layout.BOOKLET,
  	paper: Bindery.Paper.LETTER_LANDSCAPE,
  }
});


Bindery.RunningHeader({
  render: (page) => page.isLeft
    ? `${page.number} · ${page.heading.h1}`
    : `${page.heading.h2} · ${page.number}`
})
})

})


