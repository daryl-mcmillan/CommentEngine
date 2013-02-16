(function(){

	var template = "<div class='comment'><div class='badge'>{{author}}</div><div class='body'>{{message}}</div></div>";

	var injectComments = function( container, data ) {
		
		var html = "<div>";
		var comments = data.comments;
		for( var i=0; i<comments.length; i++ ) {
			var comment = comments[i];
			var replacer = function( matched, name ) {
				console.log( matched, name );
				return comment[name];
			};
			
			var formatted = template.replace( /{{([a-z]+)}}/g, replacer );
			html += formatted;
		}
		html += "</div>";
		container.innerHTML = html;
	};

	var loadComments = function( container ) {
		var documentId = window.location.href.split( /#/ )[0];
		if( container.id && container.id.length > 0 ) {
			documentId = documentId + "#" + container.id;
		}
		console.log( { documentId: documentId } );
		var data = {
			comments: [
				{ author: "John", date: new Date().getTime(), message: "My name is john.  I really like commenting on things.  This seems like a good-enough thing for me to comment on." },
				{ author: "Bill", date: new Date().getTime(), message: "My name is bill.  I also like commenting on things.  Your comment seems worth responding to.  I sometimes write a lot just to see how line wrapping and page formatting are affected.  It can be interesting to see how different sites handle that kind of thing." },
				{ author: "Carl", date: new Date().getTime(), message: "I don't have much to say." }
			]
		};
		injectComments( container, data );
	};

	var areas = document.getElementsByClassName( "comments" );
	for( var i=0; i<areas.length; i++ ) {
		var area = areas[i];
		if( area.nodeName !== "DIV" && area.nodeName !== "div" ) {
			continue;
		}
		loadComments( area );
	}
})();