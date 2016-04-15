"use strict";

$(document).ready(function(){


	//delete button function fire on click, fuck yes jquery
	$(document).click(function deleteSong() {	
		if (event.target.className === "deleteButton") {
		event.target.parentNode.remove();
	  }
	});


	//ajax xhr executed on load
	$.ajax({
		url: "songs.json",
		success: executeThisCodeAfterFileIsLoaded
	});
	//function that parses 1st json file and populates DOM upon loading the page
	function executeThisCodeAfterFileIsLoaded (data) {
		//iterates through data and builds individual song blocks
		for (var i = 0; i < data.song.length; i++) {
			var currentSong = data.song[i];
			$("#theMeat").append(`<div class="songBlock">
								<h4>${currentSong.title}</h4>
								<p>${currentSong.artist}</p>
								<p>|</p>
								<p>${currentSong.album}</p>
								<p>|</p>
								<p>${currentSong.genre}</p>
								<button class="deleteButton">Delete</button>
							</div>`);
		};
		//areas created as added song and more song output location, more button created
		$("#theMeat").append(`<div id="addMeat"></div>
						<div id="moreMeat"></div>
						<button class="moreButton">More ></button>`);
	};


	//ajax xhr for 2nd json file exucuted upon clicking an element in body with a classname of moreButton
	$(document).click(function () {	
		if (event.target.className == "moreButton") {
			$.ajax({
			url: "moreSongs.json",
			success: executeThisCodeWhenMoreIsClicked
		});
	  }
	});
	//function fired upon click
	function executeThisCodeWhenMoreIsClicked (data) {
		// checks if more songs have already been added to avoid endless more of the same stuff
		if ($("#moreMeat")[0].innerHTML.length == 0){
			//iterates through data and builds individual song blocks
			for (var i = 0; i < data.song.length; i++) {
			var currentSong = data.song[i];
			$("#moreMeat").append(`<div class="songBlock">
								<h4>${currentSong.title}</h4>
								<p>${currentSong.artist}</p>
								<p>|</p>
								<p>${currentSong.album}</p>
								<p>|</p>
								<p>${currentSong.genre}</p>
								<button class="deleteButton">Delete</button>
							</div>`)};
		} else {
			//alert fires if user hits the more button more than once
			alert("You've already got it all ya dingus. Add some songs if you still want more.");
		};
	};


	//add button click event
	$("#addBtn").click(function() {
		//object for user input
		var usrSongObj = {
				"title": $("#songName")[0].value,
				"artist": $("#artistName")[0].value,
				"album": $("#albumName")[0].value,
				"genre": $("#genreName")[0].value
		};
		//determines whether all input fields have a value before adding new content to DOM/array
		if (usrSongObj.title.length > 0 && 
			usrSongObj.artist.length > 0 && 
			usrSongObj.album.length > 0 && 
			usrSongObj.genre.length > 0) {
			//determines where to insert the new songs
			//if only the 1st json file has been loaded it appends to the end of that cluster
			if ($("#moreMeat")[0].innerHTML.length == 0){
				$("#addMeat").append(`<div class="songBlock">
									<h4>${usrSongObj.title}</h4>
									<p>${usrSongObj.artist}</p>
									<p>|</p>
									<p>${usrSongObj.album}</p>
									<p>|</p>
									<p>${usrSongObj.genre}</p>
									<button class="deleteButton">Delete</button>
								</div>`);
				$("#list-view").removeClass("hidden"),
				$("#add-view").addClass("hidden");
			} else {
				//if both have been loaded it appends new song to the end of the more songs
				$("#moreMeat").append(`<div class="songBlock">
									<h4>${usrSongObj.title}</h4>
									<p>${usrSongObj.artist}</p>
									<p>|</p>
									<p>${usrSongObj.album}</p>
									<p>|</p>
									<p>${usrSongObj.genre}</p>
									<button class="deleteButton">Delete</button>
								</div>`);
				$("#list-view").removeClass("hidden"),
				$("#add-view").addClass("hidden");
			}
		} else {
			//alert fires if input fields have not all been filled out
			alert("Fill the whole thing out ya dingus!");
		};
	})


	// toggle classes hidden/visible for add and list links
	// list section is loaded as visible, add section as hidden
	$("#add-music").click(function() {
		if ($("#add-view")[0].className == "hidden"){
			$("#add-view").removeClass("hidden"),
			$("#list-view").addClass("hidden");
		};
	});
	$("#list-music").click(function(){
		if ($("#list-view")[0].className == "hidden"){
			$("#list-view").removeClass("hidden"),
			$("#add-view").addClass("hidden");
		};
	});
});


































