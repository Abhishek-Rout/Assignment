import { useEffect, useState } from 'react';
import { RESEND_TIMER } from '../constants';

export const useOtpTimer = () => {
  const [timeLeft, setTimeLeft] = useState(RESEND_TIMER);

  useEffect(() => {
    if (timeLeft === 0) return;

    const interval = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const resetTimer = () => setTimeLeft(RESEND_TIMER);

  return {
    timeLeft,
    canResend: timeLeft === 0,
    resetTimer,
  };
};
