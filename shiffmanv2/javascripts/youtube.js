var apiKey 				= "AIzaSyADOKEHZag2UMG52bd7ApxDOssdzVo0j8I";
var shiffmanChannelId 	= "UCvjgXvBlbQiydffZU7m1_aw";

$(document).ready(function(){

	getPlaylists();

});

function getPlaylists() {

	$.get('https://www.googleapis.com/youtube/v3/playlists?key=AIzaSyADOKEHZag2UMG52bd7ApxDOssdzVo0j8I', { part: 'snippet' , channelId: shiffmanChannelId })
	.done(function(data){

		console.log(data);
		populateData(data);

	}, 'JSON')
	.error(function(){

		alert('Ahh sorry we couldn\' theres a problem');

	});

}

function populateData(data){

	var playlists = data.items;

	$.each(playlists, function(index, playlist){

		snippet = playlist.snippet;

		var block = $(
		'<div class="video-playlist">'+
            '<span class="line-charm"></span>'+
            '<div class="playlist-header">'+
                '<h3>'+snippet.title+'</h3>'+
            '</div>'+
            '<p>'+snippet.description+'</p>'+
            '<div class="video-list">'+
                '<div class="video">'+
                    '<img class="thumbnail" src=""/>'+
                    '<span class="label"></span>'+
                '</div>'+
            '</div>'+
            '<a href="http://youtube.com/playlist?list='+playlist.id+'" target="_blank" class="body-link primary">GO TO PLAYLIST</a>'+
        '</div>'
		);
		
		$('#video-list').append(block);
	
	});

}