import { Roboto, Montserrat } from 'next/font/google'
import { BsGithub } from 'react-icons/bs'

const roboto = Roboto({
  subsets:['latin']
})
const montserrat = Montserrat({
  subsets:['latin']
})

const Navbar = () => {
  return (
    <div className={`${roboto.className} flex flex-row justify-between items-center bg-green-900 p-3 h-20`}>
        <div className={`${montserrat.className} font-semibold text-3xl`}>
            <h1>Utkarsh-ODL</h1>
        </div>
        <div className='flex flex-row justify-between items-center'>
            <a href="">Twitter</a>
            <a href="">Linkedin</a>
            <a href="">Github-Repo</a>
            <BsGithub/>
        </div>
    </div>
  )
}

export default Navbar