import Navbar from '../components/Navbar'
import Pokedex from '../assets/images/RotomDex.webp'

const Header = () => {
  return (
    <header className='fixed top-0 left-0 right-0 py-3 px-3 bg-yellow-300 text-[#111] z-20 shadow-lg mx-auto'>
      <div className='flex items-center justify-between max-w-[800px] mx-auto'>
        <img className=' w-14 ' src={Pokedex} alt='' />
        <Navbar />
      </div>
    </header>
  )
}
export default Header
