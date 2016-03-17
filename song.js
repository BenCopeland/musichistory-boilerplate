var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// add songs to beginning/ end of string
songs.unshift("Untouchable - by PushaT on the album Darkest Before Dawn");
songs.push("Paradise - by Big Sean on the album Dark Sky Paradise");

// remove/replace unwanted characters
for (var i = 0; i < songs.length; i++) {
	songs[i] = songs[i].replace(/>/g, "-")
					   .replace(/\*/g, "")
					   .replace(/!/g, "")
					   .replace(/\(/g, "")
					   .replace(/@/g, "")
};
console.log("songs", songs);

var songText = document.getElementById("theMeat");
for (var i = 0; i < songs.length; i++) {
	songText.innerHTML += "<p>" + songs[i] + "</p>";
}



// var addView = document.getElementById("add-music");
// var listView = document.getElementById("list-music");

// listView.addEventListener("click", function() {
//   listView.classList.add("hidden");
//   addView.classList.add("hidden");

//   listView.classList.add("visible");
//   addView.classList.remove("hidden");

// });






