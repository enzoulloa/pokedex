import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { pokemonApi } from '../api/pokemonApi'
import { useState } from 'react'

const getPokemonFromApi = async (offset) => {
  const params = new URLSearchParams()
  if (offset) params.append('offset', offset)
  const { data } = await pokemonApi.get('/pokemon', { params })
  const pokemon = data.results.map(pokemon => pokemon.url)
  const allPokemon = await axios.all(pokemon.map(endpoint => axios.get(endpoint)))
  return allPokemon
}

export const useGetPokemon = () => {
  const [offset, setOffset] = useState(0)
  const [page, setPage] = useState(1)

  const query = useQuery(
    ['pokemon', { page }],
    () => getPokemonFromApi(offset),
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60
    }
  )

  const nextPage = () => {
    if (query.data?.length === 0) return
    setPage(page + 1)
    setOffset(offset + 20)
    window.scrollTo(0, 0)
  }

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1)
      window.scrollTo(0, 0)
    }
  }
  return { query, nextPage, prevPage, page }
}
