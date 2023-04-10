import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { pokemonApi } from '../api/pokemonApi'

const getPokemonDetail = async (id) => {
  const { data } = await pokemonApi.get(`/pokemon/${id}`)
  return data
}

const getPokemonSpecies = async (id) => {
  const { data } = await pokemonApi.get(`/pokemon-species/${id}`)
  return data
}

const getPokemonEvolution = async (url) => {
  const { data } = await axios.get(url)
  return data
}

export const useGetPokemonDetail = (id) => {
  const pokemonIdQuery = useQuery(
    ['pokemon', id, 'detail'],
    () => getPokemonDetail(id),
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60
    }
  )

  const pokemonSpeciesQuery = useQuery(
    ['pokemon', id, 'species'],
    () => getPokemonSpecies(id),
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60
    }
  )

  const pokemonEvolutionQuery = useQuery(
    ['pokemon', id, 'evolution'],
    () => getPokemonEvolution(pokemonSpeciesQuery.data?.evolution_chain.url),
    {
      enabled: !!pokemonSpeciesQuery.data,
      refetchOnMount: true,
      refetchOnWindowFocus: false
    }
  )
  return { pokemonIdQuery, pokemonEvolutionQuery, pokemonSpeciesQuery }
}
