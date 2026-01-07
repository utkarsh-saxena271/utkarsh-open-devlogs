import { Montserrat } from "next/font/google"
import Link from "next/link"
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs"


const montserrat = Montserrat({ subsets: ["latin"] })

const Footer = () => {
  return (
    <div className={`${montserrat.className} w-screen p-4 bg-slate-900 flex flex-col items-center justify-between gap-3`}>
        <div>
            Made with &hearts; by Utkarsh
        </div>
        <div className="flex flex-row items-center gap-7">
            <Link href="">
              <BsTwitterX size={25}/>
            </Link>
            <Link href="">
              <BsLinkedin size={25}/>
            </Link>
            <Link href="">
              <BsGithub size={25}/>
            </Link>
        </div>
    </div>
  )
}

export default Footer