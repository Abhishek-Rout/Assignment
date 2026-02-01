export const mockVerifyOtp = async (otp: string) => {
  console.log('Verifying OTP:', otp);

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, 1500);
  });
};
