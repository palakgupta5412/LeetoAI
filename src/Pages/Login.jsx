import React, { useState , useEffect} from 'react';
import NeuralParticles from '../Components/NeuralParticles';
import { TbMail, TbLock, TbRobot, TbArrowRight } from "react-icons/tb";
import { FaGoogle } from "react-icons/fa";
import { useFirebase } from '../Context/Firebase.jsx'; 


const Login = () => {
  const firebase = useFirebase(); // Getting our context functions
  
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAuth = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setIsLoading(true);

    try {
        if (isLogin) {
            // Calling the function from our Context
            await firebase.loginEmail(email, password);
            alert("Oracle Access Granted. Welcome back to the Forge!");
        } else {
            // Calling the function from our Context
            await firebase.signupEmail(email, password);
            alert("Profile Initialized! Welcome to LeetoAI.");
        }
    } catch (error) {
        // Now the error handling works because setErrorMsg is in scope!
        if (error.code === 'auth/email-already-in-use') {
          setErrorMsg('Identity already forged. Please switch to login.');
        } else if (error.code === 'auth/invalid-credential' || error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
          setErrorMsg('Invalid credentials. The Oracle denies access.');
        } else if (error.code === 'auth/weak-password') {
          setErrorMsg('Security risk: Password must be at least 6 characters.');
        } else {
          console.log(error);
          
        }
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className='w-full min-h-screen bg-[#ee8c31] bg-opacity-80 px-6 py-6 md:px-24 md:py-12 flex justify-center items-center font-montserrat'>
        
        <div className='h-full min-h-[600px] w-full max-w-6xl bg-gradient-to-br from-black via-zinc-900 to-zinc-800 rounded-[40px] shadow-2xl overflow-hidden flex border border-white/20 relative'>
            
            <div className='w-full lg:w-1/2 p-10 md:p-16 flex flex-col justify-center relative z-10'>
                
                <div className='mb-10'>
                    <h2 className='text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 uppercase tracking-tighter'>
                        {isLogin ? 'Enter The Forge' : 'Initialize Profile'}
                    </h2>
                    <p className='text-gray-400 font-mono text-xs md:text-sm tracking-widest mt-2'>
                        {isLogin ? 'Connect to your Agentic Workspace.' : 'Begin your pattern mastery journey.'}
                    </p>
                </div>

                <form onSubmit={handleAuth} className='flex flex-col gap-6 w-full max-w-sm'>
                    
                    <div className='relative'>
                        <TbMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                        <input 
                            type="email" 
                            required
                            placeholder="Developer Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#ee8c31] transition-colors font-mono text-sm"
                        />
                    </div>

                    <div className='relative'>
                        <TbLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                        <input 
                            type="password" 
                            required
                            placeholder="Security Key"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#ee8c31] transition-colors font-mono text-sm"
                        />
                    </div>

                    {errorMsg && (
                        <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg text-xs font-mono tracking-wide animate-pulse">
                            ⚠️ {errorMsg}
                        </div>
                    )}

                    <button 
                        type="submit" 
                        disabled={isLoading}
                        className="mt-4 w-full bg-[#ee8c31] hover:bg-[#ffb74d] text-black font-bold uppercase tracking-widest py-4 rounded-xl flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
                    >
                        {isLoading ? 'Processing...' : (isLogin ? 'Authenticate' : 'Forge Identity')}
                        {!isLoading && <TbArrowRight className="text-lg" />}
                    </button>
                </form>

                <div className='mt-8 text-center max-w-sm'>
                    <p className='text-gray-500 text-xs font-mono tracking-widest'>
                        {isLogin ? "Don't have a blueprint?" : "Already forged an identity?"} 
                        <button 
                            type="button"
                            onClick={() => {
                                setIsLogin(!isLogin);
                                setErrorMsg('');
                            }}
                            className='ml-2 text-[#ee8c31] hover:text-white transition-colors underline decoration-[#ee8c31]/50 underline-offset-4'
                        >
                            {isLogin ? 'Initialize Here' : 'Login Here'}
                        </button>
                    </p>
                </div>
            </div>

            <div className='hidden lg:flex w-1/2 bg-[#050505] relative overflow-hidden border-l border-white/5 items-center justify-center'>
                
                <div className="absolute z-10 flex flex-col items-center justify-center text-center pointer-events-none p-12">
                    <div className="w-16 h-16 bg-black/50 backdrop-blur-md border border-[#ee8c31]/30 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(238,140,49,0.2)]">
                        <TbRobot className="text-4xl text-[#ee8c31]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-widest uppercase mb-2">The Oracle Awaits</h3>
                    <p className="text-gray-500 font-mono text-xs tracking-widest leading-relaxed">
                        Establishing secure connection to the knowledge base. Neural pathways stabilizing.
                    </p>

                    <button 
                        onClick={firebase.signupWithGoogle}
                        className="w-2/3 pointer-events-auto cursor-pointer bg-white hover:bg-[#ffb74d] text-black font-semibold uppercase text-xs tracking-widest py-4 px-6 rounded-xl flex items-center justify-center gap-6 mt-8 transition-colors disabled:opacity-50"
                    >   
                        <FaGoogle size={20}/>
                        Continue With Google 
                    </button>
                </div>

                <div className="absolute inset-0 opacity-60">
                    <NeuralParticles color="#ee8c31" particleCount={50} />
                </div>
                
                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,1)] pointer-events-none"></div>
            </div>

        </div>
    </div>
  )
}

export default Login;