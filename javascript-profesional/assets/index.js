import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');
const button = document.querySelector('button');

//Instancia de la nueva clase
const player = new MediaPlayer({el : video, plugins: [
    //new AutoPlay(), // Se instancia una nueva clase de autoPlay
  ]} // Se envian los nuevos plugins al obj de configuracion
);

//Pausar despausar video
button.onclick = () => {
  (player.media.paused)
      ? player.play()
      : player.pause();
};

//Obtener el boton de mute/unmute
let buttonMuteUnmuted = document.getElementById('muteButton');

buttonMuteUnmuted.onclick = () => {
  (player.media.muted)
  ? player.unMute()
  : player.mute();
};