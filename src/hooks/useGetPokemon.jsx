import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { pokemonApi } from '../api/pokemonApi'

const getPokemonFromApi = async (offset) => {
  const { data } = await pokemonApi.get('/pokemon')
  const pokemon = data.results.map(pokemon => pokemon.url)
  const allPokemon = await axios.all(pokemon.map(endpoint => axios.get(endpoint)))
  return allPokemon
}

export const useGetPokemon = () => {
  const query = useQuery(
    ['pokemon'],
    () => getPokemonFromApi(),
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60
    }
  )

  return { query }
}
