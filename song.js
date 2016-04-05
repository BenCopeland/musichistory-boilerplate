var songs = [];

// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// add songs to beginning and end of string
// songs.unshift("Untouchable - by PushaT on the album Darkest Before Dawn");
// songs.push("Paradise - by Big Sean on the album Dark Sky Paradise");

// remove and replace unwanted characters
// for (var i = 0; i < songs.length; i++) {
// 	songs[i] = songs[i].replace(/>/g, "-")
// 					   .replace(/\*/g, "")
// 					   .replace(/!/g, "")
// 					   .replace(/\(/g, "")
// 					   .replace(/@/g, "")
// };

function executeThisCodeAfterFileIsLoaded () {
	var songData = "";
	var currentSong;
	var songText = document.getElementById("theMeat");

	var data = JSON.parse(this.responseText);
	// console.log("songs", data.song[0].artist);
	for (var i = 0; i < data.song.length; i++) {
	currentSong = data.song[i];
	songData += `<div class="songBlock">`;
	songData += `<h4>${currentSong.title}</h4>`;
	songData += `<p>${currentSong.artist}</p><p>|</p><p>${currentSong.album}</p><p>|</p><p>${currentSong.genre}</p>`;
	songData += `</div>`
	};
	songText.innerHTML = songData;
};

var songRequest = new XMLHttpRequest();
songRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
songRequest.open("GET", "songs.json");
songRequest.send();




//iterating through songs array, inserting content to DOM
var songText = document.getElementById("theMeat");
// var populate = function(){
// 	for (var i = 0; i < songs.length; i++) {
// 	songText.innerHTML += "<p>" + songs[i] + "</p>";
// 	}
// };
// populate();

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

//new song added to dom and then the global array of songs
var addSong = function(newSong){
	songText.innerHTML += "<p>" + newSong + "</p>";
	var songsEdit = songs.concat(newSong);
	songs = songsEdit;
	//toggles list view to display upon adding content to DOM and original array
	if (listView == "hidden"){
		listView.remove("hidden"),
		addView.add("hidden");
	};
};

//targeting add button
var addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function() {
	var usrSong = [];
	var song = document.getElementById("songName").value;
	var artist = document.getElementById("artistName").value;
	var album = document.getElementById("albumName").value;
	//determines whether all input fields have a value before adding new content to DOM/array
	if (song.length > 0 && artist.length > 0 && album.length > 0) {
		usrSong.push(song + " - by " + artist + " on the album " + album);
		addSong(usrSong);
	} else {
		alert("Fill the whole thing out ya dingus!");
	};
})


































