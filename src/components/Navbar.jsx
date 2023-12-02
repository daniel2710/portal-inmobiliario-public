'use client'
import { useState } from "react"
import Image from "next/image"
import menu from "../../public/img/colraicesInmobiliario/icons/btn-menu.svg"
import logo from "../../public/img/logo-vitrina.svg"
import logoDesktop from "../../public/img/logo-vitrina-desktop.svg"
import Link from "next/link"
import RightBar from "./RightBar"

const Navbar = () => {
  const [ showRightBar, setShowRightBar ] = useState(false)

  return (
    <div className="navbar">
      <Link href={'/'}>
        <Image className="logo" src={logo} alt="logo" width={300} height={300} />
        <Image className="logoDesktop" src={logoDesktop} alt="logo" width={300} height={300} />
      </Link>
      
      <Image onClick={()=>setShowRightBar(true)} className="menu-btn" src={menu} alt="menu btn" width={300} height={300} />

      {showRightBar && <div className="container-rightBar-component">
        <RightBar closeRightBar={()=>setShowRightBar(false)} />
      </div>}
    </div>
  )
}

export default Navbar