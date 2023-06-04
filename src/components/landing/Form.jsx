import { Lato, Montserrat } from 'next/font/google'

const lato = Lato({ subsets: ['latin'], weight: ["100", "300", "400", "700", "900"] })
const montserrat = Montserrat({ subsets: ['latin'], weight: ["100", "300", "400", "700", "900"] })

const Form = () => {
    return (
        <form className={`bg-white  w-full px-[1.875rem] py-[1.875rem] flex flex-col gap-5 ${lato.className}`}>

            <div>
                <label className='block mb-2.5' htmlFor="email">Email address</label>
                <input className='bg-whitesmoke focus:bg-[#EAEAEA] w-full text-xl rounded-[0.625rem] px-2' id="email" type="email" />
            </div>

            <div>
                <label className='block mb-2.5' htmlFor="password">Password</label>
                <input className='bg-whitesmoke focus:bg-[#EAEAEA] w-full text-xl rounded-[0.625rem] px-2' id="password" type="password" />
            </div>

            <div>
                <a href="#" className='text-[#346BD4]'>Forgot password?</a>
            </div>

            <div>
                <button className={`w-full bg-black text-white text-base h-10 rounded-[0.625rem] ${montserrat.className}`}>Sign in</button>
            </div>

        </form>
    )
}

export default Form;