import { useParams, useNavigate } from 'react-router-dom'

import { useGetPokemonDetail } from '../hooks/useGetPokemonDetail'
import { BaseStats } from '../components/BaseStats'
import pokeball from '../assets/svg/pokeball.svg'

const Details = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { pokemonIdQuery, pokemonSpeciesQuery, pokemonEvolutionQuery } = useGetPokemonDetail(id)
  const typeColor = pokemonIdQuery.data?.types[0].type.name

  if (pokemonIdQuery.isError) {
    navigate('/notFound')
  }

  return (
    <div className='mt-24 flex flex-col items-center justify-center mx-1 p-1 lg:flex-row lg:p-10'>
      <div className=' m-1 rounded-lg relative overflow-hidden lg:w-[50%] shadow-lg drop-shadow-xl shadow-gray-300 ml-8'>
        <img className=' p-4 z-10 mx-auto' src={pokemonIdQuery.data?.sprites.other['official-artwork'].front_default} alt='' />

        <div className=' bg-white rounded-b-lg p-2 s'>
          <h1 className=' text-2xl capitalize font-semibold'><span className=' text-2xl font-semibold text-opacity-60 text-black mr-3'>#{pokemonIdQuery.data?.id} </span>{pokemonIdQuery.data?.name}</h1>
          <h2 className=' mt-1'><span className='font-semibold'>Specie:</span> {pokemonSpeciesQuery.data?.genera[7].genus}</h2>
          <h3 className=' mt-1'><span className='font-semibold '>Height:</span> {pokemonIdQuery.data?.height}"</h3>
          <h3 className=' mt-1'><span className='font-semibold '>Weight:</span> {pokemonIdQuery.data?.weight}kg</h3>
          <h2 className=' mt-1'><span className='font-semibold '>Type:</span>
            {pokemonIdQuery.data?.types?.map((type, id) => (
              <span
                key={id}
                className={`px-3 py-1 text-sm font-medium text-white rounded-full mx-2 capitalize ${type.type.name}`}
              >
                {type.type.name}
              </span>
            ))}
          </h2>
          <h5 className=' mt-1'><p><span className='font-semibold '>Evolve:</span>{pokemonEvolutionQuery.data?.chain.evolves_to[0].evolution_details[0].min_level ? (' Level ' + pokemonEvolutionQuery.data?.chain.evolves_to[0].evolution_details[0].min_level) : (' Happy ' + pokemonEvolutionQuery.data?.chain.evolves_to[0].evolution_details[0].min_happiness)}</p>
          </h5>
          <p className='mt-1'><span className=' font-semibold'>Summary:</span> {pokemonSpeciesQuery.data?.flavor_text_entries[16]?.flavor_text}</p>
        </div>
        <div className={` w-full card-${typeColor} absolute top-0 left-0 h-[50%] -z-20 `} />
        <img className='absolute left-0 top-0 -z-10 opacity-30 w-32 h-32 p-3' src={pokeball} alt='' />
      </div>
      <div className=' bg-white p-2 rounded-lg w-[90%]'>
        <div className='w-full m-1 p-2 lg:flex flex-col mx-auto justify-center items-center lg:p-10'>
          <h3 className=' font-bold text-lg  '>Base Stats</h3>
          <BaseStats pokemon={pokemonIdQuery.data} backgroundSelected={typeColor} />
        </div>
      </div>
    </div>
  )
}

export default Details
