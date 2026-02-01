import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface Props {
  timeLeft: number;
}

const Timer = ({ timeLeft }: Props) => {
  if (timeLeft === 0) return null;

  return <Text style={styles.text}>Resend OTP in {timeLeft}s</Text>;
};

const styles = StyleSheet.create({
  text: {
    marginTop: 12,
    color: '#666',
  },
});

export default Timer;
