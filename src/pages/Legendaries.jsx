import { useEffect, useState, useRef } from 'react'
import { useGetAllLegendaries } from '../hooks/useGetAllLegendaries'
import SelectedPokemon from '../components/SelectedPokemon'

const Legendaries = () => {
  const { allPokemonQuery } = useGetAllLegendaries()
  const pokemon = allPokemonQuery.data
  const [selectedPokemon, setSelectedPokemon] = useState()
  const [pokemonData, setPokemonData] = useState([])
  const sliderRef = useRef()

  useEffect(() => {
    if (allPokemonQuery.data) {
      setPokemonData(allPokemonQuery.data)
      setSelectedPokemon(pokemon[0].data)
    }
  }, [allPokemonQuery.data])

  const handleClick = (id) => {
    setSelectedPokemon(pokemon[id].data)
  }

  const handleBefore = () => {
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft - 240
  }

  const handleNext = () => {
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft + 240
  }

  return (
    <section className='w-full'>
      <h1 className=' text-5xl font-semibold max-w-[620px] mx-auto'>Legendaries Pokemon</h1>
      <p className=' my-4 text-[16px] max-w-[620px] mx-auto font-medium leading-6 '>Legendary Pokémon are a group of incredibly rare and often very powerful Pokémon, generally featured prominently in the legends and myths of the Pokémon world.
      </p>
      {
        pokemonData.length > 0 ? <SelectedPokemon selectedPokemon={selectedPokemon} /> : null
      }
      <div className=' flex justify-between items-center mx-5 my-1'>
        <button onClick={handleBefore} className='  bg-yellow-400 rounded-full p-1 '><svg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 24 24' height='24px' width='24px' xmlns='http://www.w3.org/2000/svg'><path fill='none' d='M0 0h24v24H0z' /><path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z' /></svg>  </button>
        <button onClick={handleNext} className='   bg-yellow-400 rounded-full p-1'><svg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 24 24' height='24px' width='24px' xmlns='http://www.w3.org/2000/svg'><path fill='none' d='M0 0h24v24H0V0z' /><path d='M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z' /></svg></button>
      </div>
      <div ref={sliderRef} className=' flex gap-4 relative snap-mandatory scroll-p-3 overflow-x-auto scroll-smooth justify-start items-center mx-5 md:overflow-x-hidden'>
        {
        allPokemonQuery.data?.map((pokemon, id) => {
          return (
            <div key={id} className=' snap-center shrink-0 overflow-hidden rounded-lg cursor-pointer' onClick={() => handleClick(id)}>
              <div className='legendaries text-center hover:scale-105'>
                <img className=' w-40 ' src={pokemon.data?.sprites.other['official-artwork'].front_default} alt='' />
                <h3 className=' capitalize font-semibold'>{pokemon.data?.name}</h3>
              </div>
            </div>
          )
        })
      }

      </div>

    </section>
  )
}

export default Legendaries
