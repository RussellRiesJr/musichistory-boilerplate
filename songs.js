var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

var musicInfo = document.getElementById("info");


// Each student must add one song to the beginning and the end of the array.
songs.unshift("I Believe I Can Fly - by R. Kelly on the album Space Jam");
songs.push("Roundabout - by Yes on the album Fragile");


// Loop over the array and remove any words or characters that obviously don't belong.
// Students must find and replace the > character in each item with a - character.
for (var i = 0; i < songs.length; i++) {
  songs[i] = songs[i].replace(/>/g, "-");
  songs[i] = songs[i].replace("*", "");
  songs[i] = songs[i].replace("@", "");
  songs[i] = songs[i].replace("(", "");
  songs[i] = songs[i].replace("!", "");
  var currentSong = songs[i];
  musicInfo.innerHTML += "<p>" + currentSong + "</p>";
}
  console.log(songs);
// Must add each string to the DOM in index.html in the main content area



// {Song name} by {Artist} on the album {Album}