var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// add songs to beginning and end of string
songs.unshift("Untouchable - by PushaT on the album Darkest Before Dawn");
songs.push("Paradise - by Big Sean on the album Dark Sky Paradise");

// remove and replace unwanted characters
for (var i = 0; i < songs.length; i++) {
	songs[i] = songs[i].replace(/>/g, "-")
					   .replace(/\*/g, "")
					   .replace(/!/g, "")
					   .replace(/\(/g, "")
					   .replace(/@/g, "")
};

//iterating through songs array, inserting content to DOM
var songText = document.getElementById("theMeat");
for (var i = 0; i < songs.length; i++) {
	songText.innerHTML += "<p>" + songs[i] + "</p>";
}

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
listLink.addEventListener("click", function() {
	if (listView == "hidden"){
		listView.remove("hidden"),
		addView.add("hidden");
	};
});







