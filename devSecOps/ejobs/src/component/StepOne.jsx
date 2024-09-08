// -------------Remade/Redone-------------
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Background from '../assets/Images/board.jpg';

function StepOne(props) {
    const [isMatch, setIsMatch] = useState(false);
    const { next, formData, setFormData } = props;
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [retypingPassword, setRetypingPassword] = useState(false);
    const baseURL = `${process.env.REACT_APP_API_URL}auth/signin`;

    const verifyEmail = () => {
        setError(false);
        if (!formData.email) {
            setErrorMessage("Kindly fill all fields");
            setError(true);
            return false;
        }
        return true;
    };

    const verifyPassword = () => {
        setError(false);
        if (!formData.password) {
            setErrorMessage("Kindly fill all fields");
            setError(true);
            return false;
        }
        return true;
    };

    const isPasswordMatch = (e) => {
        setIsMatch(false);
        setRetypingPassword(true);
        const currentPassword = formData.password;
        const typedPassword = e.target.value;
        if (currentPassword === undefined) {
            setIsMatch(false);
            return false;
        }
        const matchPassword = currentPassword === typedPassword;
        if (matchPassword) {
            setIsMatch(true);
            return;
        }
        return;
    };

    const handleNext = async (e) => {
        e.preventDefault();
        setRetypingPassword(false);
        setError(false);
        setErrorMessage("");
        if (!verifyEmail() || !verifyPassword()) {
            setErrorMessage("All fields are required");
            return;
        }
        if (!isMatch) {
            setErrorMessage('Password must match');
            return;
        }
        // ---------access remote server---------
        const nextPage = 'stepTwo';
        next(nextPage);
    };

    const handleChange = (e) => {
        setErrorMessage("");
        setError(false);
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="w-screen h-screen flex items-center justify-center p-2 sm:p-10">
            <div 
                style={{ backgroundImage: `url(${Background})` }} 
                className="relative w-screen sm:w-2/3 sm:h-full h-screen bg-cover bg-center flex items-center justify-center after:absolute after:bg-black after:z-10 after:top-0 after:left-0 after:w-full after:h-full after:opacity-60"
            >
                <form className='relative z-20 max-w-md bg-white p-8 rounded-lg shadow-md w-3/4 text-gray-800'>
                    <div className="mb-4">
                        <label className='block mb-2 font-medium' htmlFor="email">Email</label>
                        <input 
                            id="email" 
                            className='w-full px-4 py-2 outline-none rounded-md border' 
                            required 
                            onChange={handleChange} 
                            name="email" 
                            type="email" 
                            placeholder="example@gmail.com" 
                        />
                    </div>
                    <div className="mb-4">
                        <label className='block mb-2 font-medium' htmlFor="password">Password</label>
                        <input 
                            id='password' 
                            className='text-gray-700 w-full px-4 py-2 outline-none rounded-md border' 
                            required 
                            onChange={handleChange} 
                            name="password" 
                            type="password" 
                            placeholder="********" 
                        />
                    </div>
                    <div className="mb-4">
                        <label className='block mb-2 font-medium' htmlFor="retype-password">Retype Password</label>
                        <input 
                            id='retype-password' 
                            className='text-gray-700 w-full px-4 py-2 border outline-none rounded-md' 
                            required 
                            onChange={isPasswordMatch} 
                            type="password" 
                            placeholder="********" 
                        />
                        <span className={`${retypingPassword ? "block" : "hidden"} ${isMatch ? "text-green-600" : "text-red-600"} mt-2`}>
                            {isMatch ? "Password Match" : "Password Mismatch"}
                        </span>
                    </div>
                    <span className={`${errorMessage ? "block" : "hidden"} p-2 bg-red-300 text-red-600 mb-4`}>
                        {errorMessage}
                    </span>
                    <button 
                        className={`w-full py-2 my-2 bg-orange-500 text-slate-50 text-lg rounded-md`} 
                        onClick={handleNext}
                    >
                        Sign up
                    </button>
                    <div className="mt-4 text-center">
                        <h3>Already have an account? <Link className="text-blue-600" to='/signin'>Sign in</Link></h3>
                    </div>
                    <button className='w-full py-2 my-2 bg-orange-500 text-slate-50 text-lg rounded-md'>
                        Connect using e-verify
                    </button>
                </form>
            </div>
        </div>
    );
}

export default StepOne;
