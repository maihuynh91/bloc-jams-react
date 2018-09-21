import React, {Component} from "react";
import "./PlayerBar.css"
class PlayerBar extends Component{
    render(){
        return(
          <section className="player-bar">

            <section id="volume-control">
              <div>
              <input type="range" 
                     className="seek-bar" 
                     value={this.props.currentVolume}
                     max="1"
                     min="0"
                     step ="0.01"
                     onChange = {this.props.handleVolumeChange} />
              <div className="icon ion-volume-high"></div>
              </div>
            </section>   
              
            <div className="player">

              <div className="head">
                <div className="back"></div>
                <div className="front">
                  <div className="avatar"><img src={this.props.album.albumCover} alt={this.props.album.title}/></div>
                  <div className="infos">
                    <div className="titulo_song">{this.props.album.title}</div>
                    <div className="duracao_song"><i className="fa fa-clock-o">
                          {this.props.timeFormat(this.props.currentTime)}</i></div>
                  <div className="tags"><span>{this.props.timeFormat(this.props.duration)}</span><span>{this.props.currentSong.title}</span><span>{this.props.album.artist}</span></div>
                 </div>
               </div>
              </div>

            <div className="timeline">
              <input 
                type="range" 
                className="seek-bar" 
                value={(this.props.currentTime / this.props.duration) || 0}
                max = "1"
                min = "0"
                step = "0.01"
                onChange = {this.props.handleTimeChange}
                    />

              <section type="button" className="btn-floating btn-sm btn-fb">
                <button id="previous" onClick={this.props.handlePrevClick}>
                  <span className="ion-skip-backward"></span>
                </button>
                <button id="play-pause" onClick={this.props.handleSongClick}>
                    <span className={this.props.isPlaying ? "ion-pause" : "ion-play"}></span>
                </button>
                <button id="next" onClick={this.props.handleNextClick}>
                    <span className="ion-skip-forward"></span>
                </button>
              </section>
            </div>

           </div>

          <div className="rotation"></div>      

        </section>
        )
    }
}

export default PlayerBar;