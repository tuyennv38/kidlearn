import confetti from 'canvas-confetti';

export function fireConfetti() {
  // Bắn confetti từ cả 2 bên
  const defaults = {
    spread: 60,
    ticks: 100,
    gravity: 0.8,
    decay: 0.94,
    startVelocity: 30,
    colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8'],
  };

  confetti({
    ...defaults,
    particleCount: 40,
    origin: { x: 0.2, y: 0.6 },
    angle: 60,
  });

  confetti({
    ...defaults,
    particleCount: 40,
    origin: { x: 0.8, y: 0.6 },
    angle: 120,
  });

  // Lần 2 sau 150ms cho đẹp hơn
  setTimeout(() => {
    confetti({
      ...defaults,
      particleCount: 30,
      origin: { x: 0.5, y: 0.5 },
      spread: 100,
    });
  }, 150);
}
