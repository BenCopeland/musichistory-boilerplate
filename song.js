"use strict";

$(document).ready(function(){

	//delete button function fire on click, fuck yes jquery
	$("div").click(function deleteSong(event) {	
		if (event.target.className === "deleteButton") {
		event.target.parentNode.remove();
	  }
	});





	//ajax xhr executed upon successful parse of 1st json file's
	$.ajax({
		url: "songs.json",
		success: executeThisCodeAfterFileIsLoaded
	});
	//function that parses 1st json file and populates DOM with 1st json file upon loading the page
	function executeThisCodeAfterFileIsLoaded (data) {
		var currentSong;
		var songText = $("#theMeat");
		//iterates through data and builds individual song blocks
		for (var i = 0; i < data.song.length; i++) {
			currentSong = data.song[i];
			songText.append(`<div class="songBlock">
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
		songText.append(`<div id="addMeat"></div>
						<div id="moreMeat"></div>
						<button class="moreButton">More ></button>`);
	};

	//ajax xhr for 2nd json file exucuted upon clicking an element in body with a classname of moreButton
	$("body").click(function () {	
		if (event.target.className == "moreButton") {
			$.ajax({
			url: "moreSongs.json",
			success: executeThisCodeWhenMoreIsClicked
		});
	  }
	});
	//function fired upon click
	function executeThisCodeWhenMoreIsClicked (data) {
		var currentSong;
		var moreText = $("#moreMeat");
		// checks if more songs have already been added to avoid endless more of the same stuff
		if (moreText[0].innerHTML.length == 0){
			//iterates through data and builds individual song blocks
			for (var i = 0; i < data.song.length; i++) {
			var currentSong = data.song[i];
			moreText.append(`<div class="songBlock">
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


	//targeting add button
	var addBtn = document.getElementById("addBtn");
	//add button event listener
	addBtn.addEventListener("click", function() {
		//targeting values of add inputs
		var song = document.getElementById("songName").value;
		var artist = document.getElementById("artistName").value;
		var album = document.getElementById("albumName").value;
		var genre = document.getElementById("genreName").value;
		//object for user input
		var usrSongObj = {
				"title": song,
				"artist": artist,
				"album": album,
				"genre": genre
		};
		//determines whether all input fields have a value before adding new content to DOM/array
		if (song.length > 0 && artist.length > 0 && album.length > 0 && genre.length > 0) {
			var songText = document.getElementById("theMeat");
			var moreText = document.getElementById("moreMeat");
			var addText = document.getElementById("addMeat");
			//determines where to insert the new songs
			//if only the 1st json file has been loaded it appends to the end of that cluster
			if (moreText.innerHTML.length == 0){
				var songData = "";
				songData += `<div class="songBlock">`;
				songData += `<h4>${usrSongObj.title}</h4>`;
				songData += `<p>${usrSongObj.artist}</p><p>|</p><p>${usrSongObj.album}</p><p>|</p><p>${usrSongObj.genre}</p>`;
				songData += `<button class="deleteButton">Delete</button>`;
				songData += `</div>`;
				addText.innerHTML += songData;
				listView.remove("hidden"),
				addView.add("hidden");
			} else {
				//if both have been loaded it appends new song to the end of the more songs
				var songData = "";
				songData += `<div class="songBlock">`;
				songData += `<h4>${usrSongObj.title}</h4>`;
				songData += `<p>${usrSongObj.artist}</p><p>|</p><p>${usrSongObj.album}</p><p>|</p><p>${usrSongObj.genre}</p>`;
				songData += `<button class="deleteButton">Delete</button>`;
				songData += `</div>`;
				moreText.innerHTML += songData;
				listView.remove("hidden"),
				addView.add("hidden");
			}
		} else {
			//alert fires if input fields have not all been filled out
			alert("Fill the whole thing out ya dingus!");
		};
	})

	//targeting add and list link anchor elements in DOM
	var addLink = document.getElementById("add-music");
	var listLink = document.getElementById("list-music");

	//targeting add and list content section elements in DOM
	var addView = document.getElementById("add-view").classList;
	var listView = document.getElementById("list-view").classList;

	//toggle classes hidden/visible for add and list links
	//list section is loaded as visible, add section as hidden
	addLink.addEventListener("click", function() {
		if (addView == "hidden"){
			addView.remove("hidden"),
			listView.add("hidden");
		};
	});
	listLink.addEventListener("click", function(){
		if (listView == "hidden"){
			listView.remove("hidden"),
			addView.add("hidden");
		};
	});

});


































