const video = document.querySelector('video');
const button = document.querySelector('button');

//Se crea la "Clase"
function MediaPlayer(config){
  this.media = config.el;
}

//Se crea los metodos de la clase
MediaPlayer.prototype.play = function(){
  this.media.play();
}

MediaPlayer.prototype.pause = function(){
  this.media.pause();
}

//Instancia de la nueva clase
const player = new MediaPlayer({el : video});
button.onclick = () => {
  (player.media.paused)
      ? player.play()
      : player.pause();
};