var playlist = new Playlist();

var bestOfYou = new Song("Best of you", "foo fighters", "4:17", "best_of_you.mp3");
var hookedOnaFeeling = new Song("Hooked on a feeling", "blue swede", "4:53", "hooked on a feeling.mp3");
var iWantYouBack = new Song("I want you back", "Jackson 5", "3:45", "i want you back.mp3");
var bohemianRhapsody = new Song("Bohemian Rhapsody", "Queen", "4:11", "bohemian rhapsody.mp3");
var seekAndDestroy = new Song("Seek and Destroy", "Metallica", "3:54", "seek and destroy.mp3");

playlist.add(bestOfYou);
playlist.add(hookedOnaFeeling);
playlist.add(iWantYouBack);
playlist.add(bohemianRhapsody);
playlist.add(seekAndDestroy);

var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

var playButton = document.getElementById("play");
playButton.onclick = function() {
  playlist.play();
  playlist.renderInElement(playlistElement);
}

var nextButton = document.getElementById("next");
nextButton.onclick = function() {
  playlist.next();
  playlist.renderInElement(playlistElement);
}

var stopButton = document.getElementById("stop");
stopButton.onclick = function() {
  playlist.stop();
  playlist.renderInElement(playlistElement);
}

var preButton = document.getElementById("previous");
preButton.onclick = function() {
  playlist.pre();
  playlist.renderInElement(playlistElement);
}










