import React, { useEffect, useState } from 'react';
import OtpInput from '../../components/OtpInput/OtpInput';
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import Button from '@mui/material/Button';

const Verify = () => {
  const [timer, setTimer] = useState(30);
  const [resendEnabled, setResendEnabled] = useState(false);
  const [otp, setOtp] = useState('');

  const verifyOtp=(e)=>{
    e.preventDefault();
    alert(otp)
  }

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    } else {
      setResendEnabled(true);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleOtpComplete = (otp) => {
    console.log('OTP is:', otp);
    setOtp(otp);
    // Lakukan verifikasi OTP ke backend
  };

  const handleResend = () => {
    setTimer(30);
    setResendEnabled(false);
    // Kirim ulang kode ke email/no.hp pengguna di sini
    alert('Kode OTP telah dikirim ulang!');
  };

  return (
    <section className='section py-10'>
      <div className='container'>
        <div className='card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10'>
          <div className='text-center flex items-center justify-center text-[100px] text-blue-500'>
            <IoShieldCheckmarkSharp />
          </div>
          <h3 className='text-center text-[18px] text-black mt-4 mb-1'>Verifikasi OTP</h3>

          <p className='text-center mt-0 mb-4'>OTP send to <span className='text-primary font-bold'>syakirakbar321@gmail.com</span></p>


          <form onSubmit={verifyOtp}>
            <OtpInput length={6} onComplete={handleOtpComplete} />

            <div className='flex items-center justify-center mt-5 px-3'>
              <Button type='submit' className="w-full btn-org btn-lg">Verify OTP</Button>
            </div>
          </form>

          <div className='text-center mt-5'>
            {resendEnabled ? (
              <button
                onClick={handleResend}
                className='text-blue-600 font-medium hover:underline'
              >
                Kirim Ulang Kode
              </button>
            ) : (
              <p className='text-gray-500 text-sm'>
                Kirim ulang dalam {timer} detik
              </p>
            )}
          </div>


        </div>
      </div>
    </section>
  );
};

export default Verify;
