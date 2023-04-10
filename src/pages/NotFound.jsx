import cuatro from '../assets/svg/404.svg'
import teamRocket from '../assets/images/teamRocket.png'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }
  return (
    <section className=' relative h-[90vh] flex flex-col items-center justify-center'>
      <img src={cuatro} alt='' className='absolute -z-10 opacity-80' />
      <img src={teamRocket} alt='' className='' />
      <p className=' text-2xl my-3 text-center font-medium'>The rocket team <br /> has won this time </p>
      <button onClick={handleClick} className=' bg-yellow-300 rounded-full py-1 px-4 text-lg font-semibold transition hover:scale-110'>Return</button>
    </section>
  )
}
export default NotFound
