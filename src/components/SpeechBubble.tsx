import { useState, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const NATURAL_VOICE_HINTS = [
  "online (natural)", "neural", "aria online", "jenny online",
  "google us english", "google uk english female", "samantha",
  "ava", "victoria", "allison", "karen", "moira", "fiona", "zira",
];

const AVOID_VOICE_HINTS = ["zarvox", "bad news", "good news", "whisper"];

function scoreVoice(voice: SpeechSynthesisVoice, targetLang: string) {
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

function pickNaturalVoice(synth: SpeechSynthesis, lang: string) {
  const voices = synth.getVoices();
  if (!voices.length) return null;

  const normalizedLang = (lang || "en-US").toLowerCase();
  const langVoices = voices.filter((voice) =>
    voice.lang.toLowerCase().startsWith(normalizedLang.split("-")[0])
  );
  const voicePool = langVoices.length ? langVoices : voices;
  return voicePool.reduce((best, current) =>
    scoreVoice(current, lang) > scoreVoice(best, lang) ? current : best
  );
}

function splitForProsody(text: string) {
  return (text.match(/[^.!?]+[.!?]?/g) || [])
    .map((segment) => segment.trim())
    .filter(Boolean);
}

function getProsodyByPunctuation(segment: string) {
  const ending = segment.trim().slice(-1);
  if (ending === "?") return { pitch: 1.07, rate: 0.98 };
  if (ending === "!") return { pitch: 1.05, rate: 1 };
  return { pitch: 1.01, rate: 0.95 };
}

interface SpeechBubbleProps {
  text: string;
  onAudioStart?: () => void;
  onAudioEnd?: () => void;
}

function SpeechBubble({ text, onAudioStart, onAudioEnd }: SpeechBubbleProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance[] | null>(null);
  const speechSupported =
    typeof window !== "undefined" && "speechSynthesis" in window;

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
      if (selectedVoice) utterance.voice = selectedVoice;

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

    utteranceRef.current.forEach((u) => synth.speak(u));
  }, [text, isPlaying, speechSupported, onAudioStart, onAudioEnd]);

  return (
    <div className="relative max-w-[480px] flex-1">
      <div className="bg-white border-2 border-kidney-100 rounded-2xl p-5 shadow-sm min-h-[180px] flex flex-col justify-between items-start">
        <p className="text-foreground text-base leading-relaxed mb-3">{text}</p>
        {speechSupported && (
          <Button
            variant="outline"
            size="sm"
            className={cn(
              "border-2 border-kidney-100 bg-kidney-50 text-primary text-sm font-semibold",
              isPlaying && "bg-primary text-white border-primary animate-[audioPulse_1.2s_ease-in-out_infinite]"
            )}
            onClick={handleAudio}
            aria-label={isPlaying ? "Stop audio" : "Play audio"}
          >
            <span className="text-xs">
              {isPlaying ? "\u25A0" : "\u25B6"}
            </span>
            {isPlaying ? "Stop" : "Listen"}
          </Button>
        )}
      </div>
      <div className="absolute -left-3 top-6 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[14px] border-r-kidney-100 after:content-[''] after:absolute after:left-[3px] after:-top-2 after:w-0 after:h-0 after:border-t-[8px] after:border-t-transparent after:border-b-[8px] after:border-b-transparent after:border-r-[12px] after:border-r-white" />
    </div>
  );
}

export default SpeechBubble;
