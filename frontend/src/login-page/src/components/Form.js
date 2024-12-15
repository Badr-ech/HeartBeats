import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Add Axios for HTTP requests
import logo from './logo.png'

export default function Form({ onLogin }) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState(null);
    const navigate = useNavigate();

    const handleSignIn = async () => {
        try {
            const response = await axios.post('http://localhost:8000/login', {
                username,
                password,
            });

            if (response.data.success) {
                onLogin();
                navigate('/admin');
            } else {
                setError('Invalid username or password');
            }
        } catch (err) {
            setError('Invalid username or password');
        }
    };

    return (
        <div className='bg-white px-10 py-20 rounded-3xl border-2'>
            <div className='flex justify-center mb-8'>
                <img src={logo} alt="Logo" className="w-23 h-24" />
            </div>
            <div className='mt-8'>
                <div>
                    <label className='text-lg font-medium'>Username</label>
                    <input
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Enter your username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label className='text-lg font-medium'>Password</label>
                    <input
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Enter your password'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button
                        onClick={handleSignIn}
                        className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-blue-500 text-white text-lg font-bold'>
                        Sign in
                    </button>
                </div>
            </div>
        </div>
    );
}

