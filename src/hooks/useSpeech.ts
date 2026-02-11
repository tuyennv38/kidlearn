import { useCallback, useRef } from 'react';

export function useSpeech() {
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const speak = useCallback((text: string, onEnd?: () => void) => {
    if (!('speechSynthesis' in window)) {
      // Fallback: nếu browser không hỗ trợ, gọi onEnd luôn
      onEnd?.();
      return;
    }

    // Cancel bất kỳ speech nào đang chạy
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.85; // Chậm hơn cho bé dễ nghe
    utterance.pitch = 1.1; // Giọng cao hơn một chút, thân thiện
    utterance.volume = 1;

    if (onEnd) {
      utterance.onend = () => onEnd();
    }

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, []);

  const stop = useCallback(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }, []);

  return { speak, stop };
}
