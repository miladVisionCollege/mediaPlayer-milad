function Song(title, artist, duration, path) {
  this.title = title;
  this.artist = artist;
  this.duration = duration;
  this.isPlaying = false;
  this.mp3 = new Audio(path);
}

Song.prototype.play = function() {
  this.mp3.play();
  this.isPlaying = true;
};

Song.prototype.stop = function() {
  this.mp3.pause();
  this.mp3.currentTime = 0;
  this.isPlaying = false;
};

Song.prototype.toHTML = function() {
  var htmlString = '<li';
  if(this.isPlaying) {
    htmlString += ' class="current"';
  }
  htmlString += '>';
  htmlString += this.title;
  htmlString += ' - '
  htmlString += this.artist;
  htmlString += '<span class="duration">'
  htmlString += this.duration;
  htmlString += '</span></li>';
  return htmlString;
};
















