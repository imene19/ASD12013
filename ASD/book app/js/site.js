$(function(){
	
	//$('#id').on('click', function(){
	
	
	$.ajax({
		url: 'xhr/list.json',
		type: 'GET',
		dataType: 'json',
		success: function(response){
			console.log("JSON DATA PULLED");
			for(var i=0, j=response.book1.length; i<j; i++){
				var book = response.book1[i];
				$(''+
				'<div data-role="content">'+
					'<p>'+ book.lists +'</p>'+
					'<p>'+ book.dateRead +'</p>'+
					'<h1>'+ book.author +'</h1>'+
					'<h2>'+ book.title +'</h2>'+
					'<p>'+ book.publicationDate +'</p>'+
					'<p>'+ book.bookSeries +'</p>'+
					'<p>'+ book.genre +'</p>'+
					'<p>'+ book.age +'</p>'+
					'<p>'+ book.subject +'</p>'+
					'<p>'+ book.descriptionOfBook +'</p>'+
					'<p>'+ book.rate +'</p>'+
					'<p>'+ book.comments +'</p>'+
					
				'</div>'
			).appendTo('#json');
			
			};
				
		}
	});
	
	//});
});

//XML
$.ajax({
		url: 'xhr/list2.xml',
		type: 'GET',
		dataType: 'XML',
		success: function(xml){
			$(xml).find('book').each(function(){
				var lists 				= $(this)
				var dateRead			= $(this)
				var author				= $(this)
				var title				= $(this)
				var publicationDate		= $(this)
				var bookSeries			= $(this)
				var genre				= $(this)
				var age					= $(this)
				var subject				= $(this)
				var descriptionOfBook	= $(this)
				var rate				= $(this)
				var comments			= $(this)
				'<div data-role="content">'+
					'<p>'+ book.lists +'</p>'+
					'<p>'+ book.dateRead +'</p>'+
					'<h1>'+ book.author +'</h1>'+
					'<h2>'+ book.title +'</h2>'+
					'<p>'+ book.publicationDate +'</p>'+
					'<p>'+ book.bookSeries +'</p>'+
					'<p>'+ book.genre +'</p>'+
					'<p>'+ book.age +'</p>'+
					'<p>'+ book.subject +'</p>'+
					'<p>'+ book.descriptionOfBook +'</p>'+
					'<p>'+ book.rate +'</p>'+
					'<p>'+ book.comments +'</p>'+
				'</div>'
			).appendTo('#XML');
		});
		}
	});
 });