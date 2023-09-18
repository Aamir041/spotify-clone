import { Icon } from '@iconify/react';
import TextInput from '../components/Shared/TextInput';
import PasswordInput from '../components/Shared/PasswordInput';

const LoginComponent = () => {
    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="logo p-5 border-b-2 border-solid border-gray-300 w-full flex justify-center">
                <Icon icon="logos:spotify" width={150} />
            </div>

            <div className="inputForm w-1/3 py-10 flex flex-col items-center justify-center">
                <div className='font-bold mb-7'>To continue, log in to Spotify.</div>
                
                <TextInput
                    label={"Username"} 
                    placeholder={"Enter your username"}
                    styleInput={"mb-7"}
                />

                <PasswordInput
                    label={"Password"}
                    placeholder={"Enter your Password"}
                />

                <div className='w-full flex justify-end my-8'>


                    <button className='bg-green-400 font-bold py-2 px-5 rounded-full'>
                        LOG IN
                    </button>

                </div>

                <div className='w-full border border-solid border-gray-300'></div>

                <div className='my-5 font-semibold text-lg'>
                    Don't have an account?
                </div>

                <div className='w-full border border-gray-400 text-gray-600 flex items-center justify-center py-4 rounded-full font-bold'>
                    SIGN UP FOR SPOTIFY
                </div>

            </div>

        </div>
    )
}

export default LoginComponent;