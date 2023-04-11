import { useEffect, useState } from 'react'
import { useGetAllLegendaries } from '../hooks/useGetAllLegendaries'
import SelectedPokemon from '../components/SelectedPokemon'

const Legendaries = () => {
  const { allPokemonQuery } = useGetAllLegendaries()
  const pokemon = allPokemonQuery.data
  const [selectedPokemon, setSelectedPokemon] = useState()
  const [pokemonData, setPokemonData] = useState([])

  useEffect(() => {
    if (allPokemonQuery.data) {
      setPokemonData(allPokemonQuery.data)
      setSelectedPokemon(pokemon[0].data)
    }
  }, [allPokemonQuery.data])

  const handleClick = (id) => {
    setSelectedPokemon(pokemon[id].data)
  }

  return (
    <section className='w-full'>
      <h1 className=' text-5xl font-semibold max-w-[620px] mx-auto'>Legendaries Pokemon</h1>
      <p className=' my-4 text-[16px] max-w-[620px] mx-auto font-medium leading-6 '>Legendary Pokémon are a group of incredibly rare and often very powerful Pokémon, generally featured prominently in the legends and myths of the Pokémon world.
      </p>
      {
        pokemonData.length > 0 ? <SelectedPokemon selectedPokemon={selectedPokemon} /> : null
      }
      <div className=' flex gap-4 snap-mandatory scroll-p-3 overflow-x-auto scroll-smooth justify-start items-center'>
        {
        allPokemonQuery.data?.map((pokemon, id) => {
          return (
            <div key={id} className=' snap-center shrink-0 overflow-hidden rounded-lg ' onClick={() => handleClick(id)}>
              <div className='legendaries text-center'>
                <img className=' w-40' src={pokemon.data?.sprites.other['official-artwork'].front_default} alt='' />
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
