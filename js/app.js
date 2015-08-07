var app = {

	init: function() {
		app.getPosts();
	},

	getPosts: function() {

		var rootURL = 'http://church.ava.to';

		$.ajax({
			type: 'GET',
			url: rootURL + '/mobiledata/5',
			dataType: 'json',
			success: function(data){

				console.log(data);

			   $('.main_list').append(data.data);

			},
			error: function(error){
				console.log(error);
			}

		});

	}

}
