import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@Jamal190</h3>
        <p>Descrição do Video</p>

        <div className="videoFooter_music">
          <MusicNoteIcon className="videoFooter_icon" />

          <div className="videoFooterMusic_text">
            <p>Titulo da musica</p>
          </div>
        </div>

      </div>
      <img 
        className="videoFooter_record"
        alt="Imgaem de um vinil girando"
        src="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/vinil.png?alt=media&token=d174bbec-b930-41e4-ab50-af1ea81bb7da"
      />
    </div>
  );
}

export default VideoFooter;
