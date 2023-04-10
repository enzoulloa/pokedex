import Navbar from '../components/Navbar'
import Pokedex from '../assets/images/RotomDex.webp'

const Header = () => {
  return (
    <header className='fixed top-0 left-0 right-0 flex items-center justify-between py-3 px-3 bg-yellow-300 text-[#111] z-20 shadow-sm'>
      <img className=' w-20 ' src={Pokedex} alt='' />
      <Navbar />
    </header>
  )
}
export default Header
