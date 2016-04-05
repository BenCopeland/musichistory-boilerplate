function deleteSong(event) {
		
	// Handle the click event on any DOM element with a certain class
	if (event.target.className === "deleteButton") {
	event.target.parentNode.remove();
  }
}
document.querySelector("div").addEventListener("click", deleteSong);

var songText = document.getElementById("theMeat");

function executeThisCodeAfterFileIsLoaded () {
	var songData = "";
	var currentSong;
	var songText = document.getElementById("theMeat");
	var data = JSON.parse(this.responseText);

	for (var i = 0; i < data.song.length; i++) {
		currentSong = data.song[i];
		songData += `<div class="songBlock">`;
		songData += `<h4>${currentSong.title}</h4>`;
		songData += `<p>${currentSong.artist}</p><p>|</p><p>${currentSong.album}</p><p>|</p><p>${currentSong.genre}</p>`;
		songData += `<button class="deleteButton">Delete</button>`;
		songData += `</div>`
	};
	songText.innerHTML = songData;
};

var songRequest = new XMLHttpRequest();
songRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
songRequest.open("GET", "songs.json");
songRequest.send();




//iterating through songs array, inserting content to DOM
// var songText = document.getElementById("theMeat");
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
// var addSong = function(newSong){
// 	songText.innerHTML += "<p>" + newSong + "</p>";
// 	var songsEdit = songs.concat(newSong);
// 	songs = songsEdit;
// 	//toggles list view to display upon adding content to DOM and original array
// 	if (listView == "hidden"){
// 		listView.remove("hidden"),
// 		addView.add("hidden");
// 	};
// };

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


































