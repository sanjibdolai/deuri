
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { signIn } from '@/lib/auth';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '@/store/redux/slices/authSlice';
import logo from '@/assets/images/logo.jpg'; // Adjust the path as necessary

function AdminLoginPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            console.log('Attempting admin login...');
            const user = await signIn(email, password);

            // Dispatch login action to update auth state
            dispatch(loginSuccess(user));

            console.log('Admin login successful:', user);
            navigate('/admin');
        } catch (error) {
            console.error('Login error:', error);
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('An unexpected error occurred');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img
                    className="mx-auto h-32 w-auto rounded-full border-2 border-amber-400 p-1"
                    src={logo}
                    alt="Restaurant Logo"
                />
                <h2 className="mt-6 text-center text-4xl font-extrabold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Admin Portal
                </h2>
                <p className="mt-2 text-center text-sm text-slate-400">
                    Enter your credentials to access the admin dashboard
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-slate-800 py-8 px-4 shadow-xl rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {error && (
                            <div className="bg-red-900/50 border border-red-500 text-red-200 px-4 py-3 rounded">
                                {error}
                            </div>
                        )}

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-white">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 bg-slate-700 border-2 border-slate-600 rounded-md 
                                             shadow-sm placeholder-slate-400 text-white focus:outline-none focus:border-amber-400 
                                             focus:ring-amber-400 sm:text-sm transition-colors"
                                    placeholder="admin@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-white">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 bg-slate-700 border-2 border-slate-600 rounded-md 
                                             shadow-sm placeholder-slate-400 text-white focus:outline-none focus:border-amber-400 
                                             focus:ring-amber-400 sm:text-sm transition-colors"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full 
                                         shadow-lg text-sm font-bold text-slate-900 bg-amber-500 hover:bg-amber-400 
                                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400
                                         disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
                            >
                                {loading ? 'Signing in...' : 'Sign in'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            </div>
            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Roboto:wght@300;400;500&display=swap');
                `}
            </style>
        </div>
    );
}

export default AdminLoginPage;