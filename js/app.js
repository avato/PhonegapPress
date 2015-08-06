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
			      $('.main_list').append('<ons-list-item modifier="chevron" class="list-item-container"><ons-row><ons-col><div class="name">'+value.title+'</div><div class="desc">'+value.excerpt+'</div></ons-col><ons-col width="40px"></ons-col></ons-row></ons-list-item>');
			    });
			},
			error: function(error){
				console.log(error);
			}

		});

	}

}
