"use client";

import { useRef, useState } from "react";

const START_TIME = 126;

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const isSeekDone = useRef(false); // pastikan seek hanya sekali

  const seekToStart = () => {
    if (audioRef.current && !isSeekDone.current) {
      audioRef.current.currentTime = START_TIME;
      isSeekDone.current = true;
    }
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      // Seek dulu sebelum play jika belum pernah
      if (!isSeekDone.current) {
        audioRef.current.currentTime = START_TIME;
        isSeekDone.current = true;
      }
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        src="/music/music.mp3"
        onLoadedMetadata={seekToStart}
        onCanPlay={seekToStart} // fallback 1
        onCanPlayThrough={seekToStart} // fallback 2
      />
      <button
        onClick={toggleMusic}
        className="fixed bottom-24 right-5 z-50 bg-black text-white rounded-full p-4"
      >
        {playing ? "❚❚" : "♪"}
      </button>
    </>
  );
}
