import { useState, useRef, useCallback } from "react";
import "./SpeechBubble.css";

function SpeechBubble({ text, onAudioStart, onAudioEnd }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const utteranceRef = useRef(null);
  const speechSupported = typeof window !== "undefined" && "speechSynthesis" in window;

  const handleAudio = useCallback(() => {
    if (!speechSupported) return;
    const synth = window.speechSynthesis;

    if (isPlaying) {
      synth.cancel();
      setIsPlaying(false);
      onAudioEnd?.();
      return;
    }

    synth.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1.1;
    utterance.lang = "en-US";

    utterance.onstart = () => {
      setIsPlaying(true);
      onAudioStart?.();
    };

    utterance.onend = () => {
      setIsPlaying(false);
      onAudioEnd?.();
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      onAudioEnd?.();
    };

    utteranceRef.current = utterance;
    synth.speak(utterance);
  }, [text, isPlaying, speechSupported, onAudioStart, onAudioEnd]);

  return (
    <div className="speech-bubble">
      <div className="speech-bubble-content">
        <p className="speech-bubble-text">{text}</p>
        {speechSupported && (
          <button
            className={`speech-audio-btn ${isPlaying ? "playing" : ""}`}
            onClick={handleAudio}
            aria-label={isPlaying ? "Stop audio" : "Play audio"}
          >
            {isPlaying ? (
              <span className="audio-icon">&#9632;</span>
            ) : (
              <span className="audio-icon">&#9654;</span>
            )}
            {isPlaying ? "Stop" : "Listen"}
          </button>
        )}
      </div>
      <div className="speech-bubble-tail" />
    </div>
  );
}

export default SpeechBubble;
