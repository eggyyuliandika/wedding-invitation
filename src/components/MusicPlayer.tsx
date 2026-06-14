"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Auto play saat web dibuka
    audio
      .play()
      .then(() => {
        setPlaying(true);
      })
      .catch(() => {
        // Browser blokir autoplay sebelum user interaksi — tidak apa-apa
        setPlaying(false);
      });
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} loop src="/music/music.mp3" />
      <button
        onClick={toggleMusic}
        className="fixed bottom-24 right-5 z-50 bg-black text-white rounded-full p-4"
      >
        {playing ? "❚❚" : "♪"}
      </button>
    </>
  );
}
