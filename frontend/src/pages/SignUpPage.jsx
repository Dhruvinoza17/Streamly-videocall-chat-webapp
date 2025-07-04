import React, { useState } from 'react';
import { MessageSquareQuote } from 'lucide-react';
import { Link } from 'react-router';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signup } from '../lib/api.js';

const SignUpPage = () => {

  const [signupData, setSignupData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const queryClient = useQueryClient();

  const { mutate:signupMutation, isPending, error} = useMutation({
    mutationFn: signup,
    onSuccess: () => queryClient.invalidateQueries({queryKey: ['authUser']}),
  }); 

  const handleSignup = (e) => {
    e.preventDefault();
    signupMutation(signupData);
  }

  return (
    <div className='h-screen flex items-center justify-center p-4 sm:p-6 md:p-8' data-theme="forest">
      <div className="border border-primary/25 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-100 rounded-xl shadow-lg overflow-hidden">
        {/* Left Side */}
        <div className='w-full lg:w-1/2 p-4 sm:p-8 flex flex-col'>
          {/* LOGO */}
          <div className='mb-4 flex items-center justify-start gap-2'>
            <MessageSquareQuote className="size-9 text-primary" />
            <span className='text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider'>
              Streamly
            </span>
          </div>

          {/* Error Message */}
          {error && (
          <div className='alert alert-error mb-4'>
            <span className='text-white'>{error.response.data.message}</span>
          </div>)}

          {/* Form */}
          <div className='w-full '>
            <form onSubmit={handleSignup}>
              <div className='space-y-4'>
                <div>
                  <h2 className='text-xl font-semibold'>Create an account</h2>
                  <p className='text-sm opacity-70'>
                    Join Streamly to start your streaming journey
                  </p>
                </div>
                <div className='space-y-3'>
                  {/* Full Name */}
                  <div className='form-control w-full'>
                    <label className='label'>
                      <span className='label-text'>Full Name</span>
                    </label>
                    <input type="text" placeholder='John Doe' className='input input-bordered w-full' 
                      value={signupData.fullName}
                      onChange={(e) => setSignupData({ ...signupData, fullName: e.target.value })}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className='form-control w-full'>
                    <label className='label'>
                      <span className='label-text'>Email</span>
                    </label>
                    <input type="email" placeholder='john@example.com' className='input input-bordered w-full' 
                      value={signupData.email}
                      onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                      required
                    />
                  </div>

                  {/* Password */}
                  <div className='form-control w-full'>
                    <label className='label'>
                      <span className='label-text'>Password</span>
                    </label>
                    <input type="password" placeholder='********' className='input input-bordered w-full' 
                      value={signupData.password}
                      onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                      required
                    />
                    <p className='text-sm opacity-70 mt-3'>
                      Password must be at least 8 characters long
                    </p>
                  </div>

                  {/* Terms of Service and Privacy Policy */}
                  <div className="form-control">
                    <label className="label cursor-pointer justify-start gap-2">
                      <input type="checkbox" className="checkbox checkbox-sm" required />
                      <span className="text-xs leading-tight">
                        I agree to the
                        <Link to="/termsofservicepage" className="text-primary hover:underline"> terms of service</Link> and
                        <Link to="/privacypolicypage" className="text-primary hover:underline"> privacy policy</Link>
                      </span>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className='form-control w-full'>
                  <button type='submit' className='btn btn-primary w-full'>
                    {isPending ? (
                    <>
                      <span className='loading loading-spinner loading-xs'></span>
                      Signing up...
                    </>
                    ) : (
                      'Create an Account'
                    )}
                  </button>
                </div>

                  <div className='flex items-center justify-center'>
                    <p className='text-sm'>
                      Already have an account?{" "}
                      <Link to="/login" className="text-primary hover:underline">
                        Sign in
                      </Link>
                    </p>
                  </div>

              </div>
            </form>
          </div>

        </div>

        {/* Right Side */}
        <div className="hidden lg:flex w-full lg:w-1/2 bg-primary/10 items-center justify-center">
          <div className="max-w-md p-8">
            {/* Illustration */}
            <div className="relative aspect-square max-w-sm mx-auto">
              <img src="/i.png" alt="Language connection illustration" className="w-full h-full" />
            </div>

            <div className="text-center space-y-3 mt-6">
              <h2 className="text-xl font-semibold">Connect with people worldwide</h2>
              <p className="opacity-70">
                Meet new friends, chat in real time, and boost your language confidence
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );

};

export default SignUpPage;