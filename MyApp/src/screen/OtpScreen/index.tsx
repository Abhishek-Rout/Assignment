import React, {  useState } from 'react';
import { View, Button, StyleSheet, Alert, Text } from 'react-native';
import OTPInput from '../../components/OtpInput';
import Timer from '../../components/Timer';
import { useOtpTimer } from '../../hooks/useOtpTimer';
import { mockVerifyOtp } from '../../utils';
import { OTP_LENGTH } from '../../constants';
// import { startOtp, getAppHash } from "../../native/otpRetriver";

const OtpScreen = () => {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);

  const { timeLeft, canResend, resetTimer } = useOtpTimer();

  const handleVerify = async () => {
    if (otp.length !== OTP_LENGTH) return;

    setLoading(true);
    await mockVerifyOtp(otp);
    setLoading(false);

    Alert.alert('OTP Verified', otp);
  };

  const handleResend = () => {
    console.log('Resending OTP...');
    resetTimer();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.subtext}>
        Enter the verification code we just sent you
      </Text>

      <OTPInput otp={otp} onChange={setOtp} onSubmit={handleVerify} />

      <Button
        title={loading ? 'Verifying...' : 'Verify'}
        disabled={otp.length !== OTP_LENGTH || loading}
        onPress={handleVerify}
      />

      <Timer timeLeft={timeLeft} />

      {canResend && <Button title="Resend OTP" onPress={handleResend} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtext: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    opacity: 0.7,
  },
});

export default OtpScreen;
