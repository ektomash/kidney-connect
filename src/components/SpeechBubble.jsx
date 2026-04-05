import { useState, useRef, useCallback } from "react";
import "./SpeechBubble.css";

const NATURAL_VOICE_HINTS = [
  "online (natural)",
  "neural",
  "aria online",
  "jenny online",
  "google us english",
  "google uk english female",
  "samantha",
  "ava",
  "victoria",
  "allison",
  "karen",
  "moira",
  "fiona",
  "zira",
];

const AVOID_VOICE_HINTS = ["zarvox", "bad news", "good news", "whisper"];

function scoreVoice(voice, targetLang) {
  const name = voice.name.toLowerCase();
  const lang = voice.lang.toLowerCase();
  const baseLang = (targetLang || "en-US").toLowerCase().split("-")[0];

  let score = 0;

  if (lang.startsWith(baseLang)) score += 40;
  if (lang === (targetLang || "en-US").toLowerCase()) score += 20;

  if (name.includes("online (natural)")) score += 120;
  if (name.includes("neural")) score += 90;
  if (NATURAL_VOICE_HINTS.some((hint) => name.includes(hint))) score += 60;
  if (voice.localService === false) score += 10;
  if (AVOID_VOICE_HINTS.some((hint) => name.includes(hint))) score -= 200;

  return score;
}

function pickNaturalVoice(synth, lang) {
  const voices = synth.getVoices();
  if (!voices.length) return null;

  const normalizedLang = (lang || "en-US").toLowerCase();
  const langVoices = voices.filter((voice) =>
    voice.lang.toLowerCase().startsWith(normalizedLang.split("-")[0]),
  );

  const voicePool = langVoices.length ? langVoices : voices;

  return voicePool.reduce((best, current) =>
    scoreVoice(current, lang) > scoreVoice(best, lang) ? current : best,
  );
}

function splitForProsody(text) {
  return (text.match(/[^.!?]+[.!?]?/g) || [])
    .map((segment) => segment.trim())
    .filter(Boolean);
}

function getProsodyByPunctuation(segment) {
  const ending = segment.trim().slice(-1);

  if (ending === "?") {
    return { pitch: 1.07, rate: 0.98 };
  }

  if (ending === "!") {
    return { pitch: 1.05, rate: 1 };
  }

  return { pitch: 1.01, rate: 0.95 };
}

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
    const segments = splitForProsody(text);
    if (!segments.length) return;

    const baseLang = "en-US";
    const selectedVoice = pickNaturalVoice(synth, baseLang);

    let finishedCount = 0;
    let started = false;

    const handleEnd = () => {
      finishedCount += 1;
      if (finishedCount >= segments.length) {
        setIsPlaying(false);
        onAudioEnd?.();
      }
    };

    utteranceRef.current = segments.map((segment) => {
      const utterance = new SpeechSynthesisUtterance(segment);
      const prosody = getProsodyByPunctuation(segment);

      utterance.lang = selectedVoice?.lang || baseLang;
      utterance.rate = prosody.rate;
      utterance.pitch = prosody.pitch;
      utterance.volume = 1;

      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      utterance.onstart = () => {
        if (!started) {
          started = true;
          setIsPlaying(true);
          onAudioStart?.();
        }
      };

      utterance.onend = handleEnd;
      utterance.onerror = handleEnd;

      return utterance;
    });

    utteranceRef.current.forEach((utterance) => synth.speak(utterance));
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
