var app = {

	init: function() {
		app.getPosts();
	},

	getPosts: function() {

		var rootURL = 'http://church.ava.to/wp-json';

		$.ajax({
			type: 'GET',
			url: rootURL + '/posts?type[]=post',
			dataType: 'json',
			success: function(data){

				console.log(data);
				
				$.each(data, function(index, value) {
					console.log(value.featured_image);
			      $('ul.topcoat-list').append('<li class="topcoat-list__item">' +
			      	'<h3>'+value.title+'</h3>' +
			      	'<p>'+value.excerpt+'</p></li>');
			    });
			},
			error: function(error){
				console.log(error);
			}

		});

	}

}
