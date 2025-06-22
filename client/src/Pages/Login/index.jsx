import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { MyContext } from '../../App';
import axios from 'axios'; // 1. Impor axios


const loginHandler = async (e) => {
    e.preventDefault();
    
    console.log("Menjalankan simulasi login untuk:", formFields.email);
    context.openAlertBox("info", "Mencoba login...");

    // Simulasi jeda waktu seperti panggilan API
    await new Promise(resolve => setTimeout(resolve, 1000)); 

    // Simulasi data pengguna yang berhasil login
    const fakeUserData = {
        _id: 'user12345',
        name: 'Akbar Syakir (Logged In)',
        email: formFields.email,
        isAdmin: true, // Anggap saja login sebagai admin untuk development
        token: 'ini-adalah-token-jwt-palsu-untuk-keperluan-development'
    };

    // Panggil semua fungsi sukses seperti sebelumnya
    context.openAlertBox("success", `Selamat Datang, ${fakeUserData.name}!`);
    localStorage.setItem("userInfo", JSON.stringify(fakeUserData));
    context.setIsLogin(true);
    navigate('/'); // Arahkan ke halaman utama
};

const Login = () => {
    const [isPasswordShow, setIsPasswordShow] = useState(false);
    // State untuk menampung nilai input email dan password
    const [formFields, setFormsFields] = useState({
        email: '',
        password: ''
    });

    const context = useContext(MyContext);
    const navigate = useNavigate();

    // 2. Fungsi untuk menangani perubahan pada input form
    const onChangeHandler = (e) => {
        setFormsFields({
            ...formFields,
            [e.target.name]: e.target.value
        });
    };

    // 3. Fungsi untuk menangani submit form login
    const loginHandler = async (e) => {
        e.preventDefault();
        try {
            // Kirim data form ke API backend
            const response = await axios.post('/api/users/login', formFields);
            
            // Tampilkan data & token di console untuk debugging
            console.log('Login berhasil, respons dari server:', response.data);

            // Tampilkan notifikasi sukses
            context.openAlertBox("success", "Login Berhasil!");

            // Simpan informasi user (termasuk token) ke localStorage browser
            // Ini yang membuat pengguna tetap login bahkan setelah refresh
            localStorage.setItem("userInfo", JSON.stringify(response.data));

            // Update context state
            context.setIsLogin(true);

            // Arahkan ke halaman utama
            navigate('/');

        } catch (error) {
            console.error("Error saat login:", error);
            // Tampilkan notifikasi error dari backend jika ada, atau pesan default
            context.openAlertBox("error", error.response?.data?.message || "Email atau password salah");
        }
    };

    // Fungsi forgotPassword tetap sama
    const forgotPassword = () => {
        navigate('/verify');
        context.openAlertBox("success", "OTP Send")
    };

    return (
        <section className='section py-10'>
            <div className='container'>
                <div className='card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10'>
                    <h3 className='text-center text-[18px] text-black'>Login to your account</h3>

                    {/* 4. Tambahkan onSubmit ke form */}
                    <form className='w-full mt-5' onSubmit={loginHandler}>
                        <div className='form-group w-full mb-5'>
                            <TextField
                                type='email'
                                id="email"
                                label="Email Id *"
                                variant="outlined"
                                className='w-full'
                                name='email' // Tambahkan name
                                value={formFields.email} // Tambahkan value
                                onChange={onChangeHandler} // Tambahkan onChange
                            />
                        </div>

                        <div className='form-group w-full mb-5 relative'>
                            <TextField
                                type={isPasswordShow === false ? 'password' : 'text'}
                                id="password"
                                label="Password *"
                                variant="outlined"
                                className='w-full'
                                name='password' // Tambahkan name
                                value={formFields.password} // Tambahkan value
                                onChange={onChangeHandler} // Tambahkan onChange
                            />
                            <Button className='!absolute top-[10px] right-[10px] ...' onClick={() => setIsPasswordShow(!isPasswordShow)}>
                                {isPasswordShow === false ? <IoMdEye /> : <IoMdEyeOff />}
                            </Button>
                        </div>
                        
                        <a className='link ...' onClick={forgotPassword}>Forgot Password?</a>
                        
                        <div className='flex items-center w-full mt-3 mb-3'>
                            {/* 5. Tambahkan type="submit" agar form bisa di-submit */}
                            <Button type="submit" className='w-full btn-org btn-lg ...'>
                                Login
                            </Button>
                        </div>
                        
                        <p className='text-center'>Not Registered? <Link to='/register'>Sign Up</Link></p>
                        <p className='text-center font-[500]'>Or Continue with Google Account</p>
                        
                        <Button className='flex gap-3 w-full ...'>
                            <FcGoogle /> Continue with Google
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;