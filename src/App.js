import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className="app_videos">
        <Video 
          likes={344}
          messages={499}
          shares={279}
          name={"Jamal190"}
          description={"Gnar goleiro"}
          music={"DVRST - Close Eyes / PHONK"}
          url="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/brecker2.mp4?alt=media&token=b5399418-9276-4e53-a706-1e00290c2c74"
        />

        <Video 
          likes={944}
          messages={879}
          shares={368}
          name={"Jamal190"}
          description={"Rengar cançado"}
          music={"g3ox_em - GigaChad Theme (Phonk House Version)"}
          url="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/bird.mp4?alt=media&token=52abbeec-ff95-4acb-808e-5a4b4977dlda"
        />

      </div>
    </div>
  );
}

export default App;
