import { useState } from "react"
import { navLinks } from "../constants"
const NavItems = () =>{
  return(
    <ul className="nav-ul hidden">
      {navLinks.map((item) => (<li className="nav-li" key = {item.id}><a className="nav-li_a" href={item.href}>{item.name}</a></li>)
      )}
    </ul>
  )
}
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () =>{
    setIsOpen((val)=>!val)
  }
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 text-white">
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center py-5 mx-auto c-space">
                <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">Aiman</a>
                <button className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" aria-label="Toggle Menu" onClick={toggleMenu}>
                    <img src={isOpen?"assets/close.svg":"assets/menu.svg"} alt="menu" className="w-6 h-6"></img>
                </button>
                <nav className="sm:flex hidden">
                  <NavItems/>
                </nav>
            </div>
        </div>
        <div className={`nav-sidebar ${isOpen?'max-h-screen':'max-h-0'}`}>
          <nav className="p-5">
            <NavItems/>
          </nav>
        </div>
    </header>
  )
}

export default Navbar