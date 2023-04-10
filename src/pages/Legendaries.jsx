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
    <section className='w-full mt-24'>
      <h1 className=''>Legendaries Pokemon</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, sit placeat. Nihil minima similique veniam architecto dolore deleniti doloremque a necessitatibus, voluptatibus ipsa nisi alias, ratione culpa optio, magni quo.</p>
      {
        pokemonData.length > 0 ? <SelectedPokemon selectedPokemon={selectedPokemon} /> : null
      }
      {/* <SelectedPokemon selectedPokemon={allPokemonQuery.data ? selectedPokemon : null} /> */}
      <div className=' flex gap-4 snap-mandatory scroll-p-3 overflow-x-auto scroll-smooth justify-start items-center'>
        {
        allPokemonQuery.data?.map((pokemon, id) => {
          return (
            <div key={id} className=' snap-center shrink-0 overflow-hidden' onClick={() => handleClick(id)}>
              <div className='legendaries'>
                <img src={pokemon.data?.sprites.other['official-artwork'].front_default} alt='' />
                <h3>{pokemon.data?.name}</h3>
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
