import { Link } from 'react-router-dom'

const Card = ({ pokemon }) => {
  const typeColor = pokemon.types[0].type.name
  return (
    <Link to={`/${pokemon.id}`} relative='route'>
      <article className=' relative my-4 p-10 m-3 shadow-lg rounded-lg border border-gray-300 transition hover:scale-105'>
        <img className='mx-auto object-contain mt-3 w-full' src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
        <div className=' absolute top-0 left-0 flex items-center justify-around w-full py-3 '>
          <h3 className='text-2xl font-bold text-white capitalize'>{pokemon.name}</h3>
          <p className='text-gray-200 font-medium'>#{pokemon.id}</p>
        </div>
        <div className='text-center mt-4'>
          <div className='flex justify-center items-center mt-2'>
            {pokemon.types?.map(type => (
              <span
                key={type.type.name}
                className={`px-4 py-1 text-sm font-medium text-white rounded-full mr-2 capitalize ${type.type.name}`}
              >
                {type.type.name}
              </span>
            ))}
          </div>
        </div>
        <div className={` w-full card-${typeColor} absolute top-0 left-0 h-[60%] -z-10 path rounded-lg`} />
        <p className=' absolute -bottom-3 translate-x-2/4 right-[50%] bg-yellow-300 rounded-full py-1 px-2 text-xs font-medium shadow-md'>Go to details</p>
      </article>
    </Link>

  )
}
export default Card
