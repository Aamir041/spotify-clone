import { Icon } from '@iconify/react';
import TextInput from '../components/Shared/TextInput';
import PasswordInput from '../components/Shared/PasswordInput';
import { Link } from 'react-router-dom';
const SignupComponent = () => {
    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="logo p-5 border-b-2 border-solid border-gray-300 w-full flex justify-center">
                <Icon icon="logos:spotify" width={150} />
            </div>

            <div className="inputForm w-1/3 py-10 flex flex-col items-center justify-center">
                <div className='font-bold mb-7 text-2xl'>Sign up for free to start listening.</div>

                <TextInput
                    label={"Email Address"}
                    placeholder={"Enter you email address"}
                    styleInput={"mb-7"}
                />

                <TextInput
                    label={"Confirm Email Address"}
                    placeholder={"Confirm your email address"}
                    styleInput={"mb-7"}
                />

                <PasswordInput
                    label={"Create Password"}
                    placeholder={"Enter your Password"}
                    styleInput={"mb-7"}
                />

                <TextInput
                    label={"What should we call you?"}
                    placeholder={"Enter a profile name"}
                />

                <div className='w-full flex justify-center my-8'>


                    <button className='bg-green-400 font-bold py-2 px-5 rounded-full'>
                        Sign Up
                    </button>

                </div>

                <div className='w-full border border-solid border-gray-300'></div>

                <div className='my-5 font-semibold text-lg'>
                    Already have an account?
                </div>

                <div className='w-full border border-gray-400 text-gray-600 flex items-center justify-center py-4 rounded-full font-bold'>
                    <Link to="/login">
                        LOG IN INSTEAD
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default SignupComponent;