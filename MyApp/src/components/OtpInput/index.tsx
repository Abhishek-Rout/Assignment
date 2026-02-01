import React, { useEffect, useRef, useState } from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import { OTP_LENGTH } from '../../constants';

interface Props {
  otp: string;
  onSubmit: (value: string) => void;
  onChange: (value: string) => void;
}

const OTPInput = ({otp, onChange,onSubmit}: Props) => {
  const [inputs, setInputs] = useState<string[]>(Array(OTP_LENGTH).fill(''));
  const inputRefs = useRef<TextInput[]>([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  useEffect(()=>{
    if(otp.length === OTP_LENGTH) {
      setInputs(otp.split(''));

    }
  }, [otp])

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
    onChange(newInputs.join(''));
    if (value && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !inputs[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleOtpSubmit = () => {
    if (inputs.join('').length === OTP_LENGTH) {
      setMessage(`OTP ${inputs.join('')}`);
      onSubmit(inputs.join(''));
    } else {
      setMessage('Type complete otp');
    }
  };

  return (
    <View style={styles.inputWrapper}>
      {inputs.map((input, index) => (
        <TextInput
          key={index}
          ref={inputRef => {
            if (inputRef) inputRefs.current[index] = inputRef;
          }}
          style={styles.input}
          keyboardType="numeric"
          maxLength={1}
          value={input}
          onChangeText={val => handleChange(val, index)}
          onKeyPress={e => handleKeyPress(e, index)}
          textAlign="center"
          onSubmitEditing={handleOtpSubmit}
          textContentType="oneTimeCode"
          autoComplete="sms-otp"
        />
      ))}
      <Text>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    width: 47,
    height: 46,
    margin: 8,
    textAlign: 'center',
    fontSize: 20,
    borderRadius: 5,
    borderStyle: 'solid',
    padding: 5,
  },
});

export default OTPInput;
