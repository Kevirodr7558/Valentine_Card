import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Are you positive???",
  "Pookie please",
  "Just think about it",
  "If you say no, I'll be very sad",
  "I'll be very very sad",
  "I'll be very very very sad",
  "I'll be very very very very sad",
  "Ok fine, I'll stop asking...",
  "Just kidding, PLEASE SAY YES",
  "I'll be very very very very very sad",
  "Don't do this to me",
  "I'm gonna cry...",
  "You're breaking my heart ;(",
];
function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonScale = 1 + noCount * 0.3; // Adjust the scaling factor as needed

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[noCount % phrases.length];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
          />
          <div
            className="text"
            style={{
              fontSize: "30px",
              color: "black",
              fontWeight: "bold",
            }}
          >
            Ok Yay!!!!
          </div>
        </>
      ) : (
        <>
          <img
            alt="bear with hearts"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />

          <div
            style={{
              fontSize: "40px",
              transition: "transform 0.1s ease-in-out",
              marginBottom: "10px",
            }}
          >
            Will you be my Valentine?
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button
              className="yesButton"
              style={{
                transform: `scale(${yesButtonScale})`,
                backgroundColor: "green",
                color: "white",
                borderRadius: "20px",
                marginRight: "30px",
                transition: "transform 0.01s ease-in-out", // Add transition
              }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>

            <button
              className="noButton"
              style={{
                backgroundColor: "red",
                color: "white",
                borderRadius: "20px",
                marginLeft: "30px",
              }}
              onClick={handleNoClick}
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
