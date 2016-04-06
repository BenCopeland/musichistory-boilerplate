//delete button function
function deleteSong(event) {	
	// Handle the click event on any DOM element with a certain class
	if (event.target.className === "deleteButton") {
	event.target.parentNode.remove();
  }
}
//event listener for delete song button
document.querySelector("div").addEventListener("click", deleteSong);

//function that parses 1st json file and populates DOM with 1st json file upon loading the page
function executeThisCodeAfterFileIsLoaded () {
	var songData = "";
	var currentSong;
	var songText = document.getElementById("theMeat");
	var data = JSON.parse(this.responseText);
	//iterates through data and builds individual song blocks
	for (var i = 0; i < data.song.length; i++) {
		currentSong = data.song[i];
		songData += `<div class="songBlock">`;
		songData += `<h4>${currentSong.title}</h4>`;
		songData += `<p>${currentSong.artist}</p><p>|</p><p>${currentSong.album}</p><p>|</p><p>${currentSong.genre}</p>`;
		songData += `<button class="deleteButton">Delete</button>`;
		songData += `</div>`
	};
	//area created as added song's output location
	songData += `<div id="addMeat"></div>`
	//area created as 2nd json file's output location
	songData += `<div id="moreMeat"></div>`
	//more button
	songData += `<button class="moreButton">More ></button>`
	//populates DOM
	songText.innerHTML = songData;
};
console.log(globalData);
//XHR request for 1st json file to be appended to DOM upon load
var songRequest = new XMLHttpRequest();
songRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
songRequest.open("GET", "songs.json");
songRequest.send();


//event listener for more button
document.querySelector("div").addEventListener("click", executeThisCodeWhenMoreIsClicked);
//function that parses 2nd json file and appends it to DOM upon clicking more button
var moreData = "";
function executeThisCodeWhenMoreIsClicked (event) {
	if (event.target.className === "moreButton") {
		// var moreData = "";
		var currentSong;
		var moreText = document.getElementById("moreMeat");
		var data = JSON.parse(moreSongsRequest.responseText);
		//checks if more songs have already been added to avoid endless more of the same stuff
		if (moreText.innerHTML.length == 0){
			//iterates through data and builds individual song blocks
			for (var i = 0; i < data.song.length; i++) {
			currentSong = data.song[i];
			moreData += `<div class="songBlock">`;
			moreData += `<h4>${currentSong.title}</h4>`;
			moreData += `<p>${currentSong.artist}</p><p>|</p><p>${currentSong.album}</p><p>|</p><p>${currentSong.genre}</p>`;
			moreData += `<button class="deleteButton">Delete</button>`;
			moreData += `</div>`
		};
		//appends new data to DOM
		moreText.innerHTML = moreData;
		} else {
			//alert fires if the 
			alert("You've already got it all ya dingus. Add some songs if you still want more.");
		};
	};
};
//XHR request for 2nt json file
var moreSongsRequest = new XMLHttpRequest();
moreSongsRequest.open("GET", "moreSongs.json");
moreSongsRequest.send();

//targeting add button
var addBtn = document.getElementById("addBtn");
//add button event listener
addBtn.addEventListener("click", function() {
	//targeting values of add inputs
	var song = document.getElementById("songName").value;
	var artist = document.getElementById("artistName").value;
	var album = document.getElementById("albumName").value;
	var genre = document.getElementById("genreName").value;
	var usrSongObj = {
			"title": song,
			"artist": artist,
			"album": album,
			"genre": genre
	};
	console.log(usrSongObj);
	//determines whether all input fields have a value before adding new content to DOM/array
	if (song.length > 0 && artist.length > 0 && album.length > 0 && genre.length > 0) {
		var songText = document.getElementById("theMeat");
		var moreText = document.getElementById("moreMeat");
		var addText = document.getElementById("addMeat");
		if (moreText.innerHTML.length == 0){
			console.log("more meat DOES NOT exist");
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
			console.log("more meat DOES exist");
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



































