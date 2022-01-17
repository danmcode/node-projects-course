//Se crea la "Clase"
function MediaPlayer(config){
    this.media = config.el;

    // Añadir plugins a traves de su objeto de
    // Configuracion

    //Dar un valor vacio por si no hay plugins
    this.plugins = config.plugins || [];

    this._initPlugins();
  }

  MediaPlayer.prototype._initPlugins = function(){
    this.plugins.forEach(plugin => {
        plugin.run(this);
    });
  };  
  //Se crea los metodos de la clase
  MediaPlayer.prototype.play = function(){
    this.media.play();
  }
  
  MediaPlayer.prototype.pause = function(){
    this.media.pause();
  }

  MediaPlayer.prototype.mute = function(){
    this.media.muted = true;
  }

  MediaPlayer.prototype.unMute = function(){
    this.media.muted = false;
  }

export default MediaPlayer;