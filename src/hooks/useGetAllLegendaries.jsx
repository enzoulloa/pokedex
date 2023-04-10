import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { pokemonApi } from '../api/pokemonApi'

const getAllLegendaries = async () => {
  const { data } = await pokemonApi.get('/pokemon?limit=1010')
  const legendaries = data.results.filter((result) => {
    return result.name === 'articuno' || result.name === 'zapdos' || result.name === 'moltres' || result.name === 'mewtwo' || result.name === 'mew' || result.name === 'raikou' || result.name === 'entei' || result.name === 'suicune' || result.name === 'lugia' || result.name === 'ho-oh' || result.name === 'celebi' || result.name === 'regirock' || result.name === 'regice' || result.name === 'registeel' || result.name === 'latias' || result.name === 'latios' || result.name === 'kyogre' || result.name === 'groudon' || result.name === 'rayquaza' || result.name === 'jirachi' || result.name === 'deoxys' || result.name === 'uxie' || result.name === 'mesprit' || result.name === 'azelf' || result.name === 'dialga' || result.name === 'palkia' || result.name === 'heatran' || result.name === 'regigigas' || result.name === 'giratina' || result.name === 'cresselia' || result.name === 'phione' || result.name === 'manaphy' || result.name === 'darkrai' || result.name === 'shaymin' || result.name === 'arceus' || result.name === 'victini' || result.name === 'cobalion' || result.name === 'terrakion' || result.name === 'virizion' || result.name === 'tornadus' || result.name === 'thundurus' || result.name === 'reshiram' || result.name === 'zekrom' || result.name === 'landorus' || result.name === 'kyurem' || result.name === 'keldeo' || result.name === 'meloetta' || result.name === 'genesect' || result.name === 'xerneas' || result.name === 'yveltal' || result.name === 'zygarde' || result.name === 'diancie' || result.name === 'hoopa' || result.name === 'volcanion' || result.name === 'type-null' || result.name === 'silvally' || result.name === 'tapu-koko' || result.name === 'tapu-lele' || result.name === 'tapu-bulu' || result.name === 'tapu-fini' || result.name === 'cosmog' || result.name === 'cosmoem' || result.name === 'solgaleo' || result.name === 'lunala' || result.name === 'necrozma' || result.name === 'magearna'
  })
  const pokemon = legendaries.map(pokemon => pokemon.url)
  const allPokemon = await axios.all(pokemon.map(endpoint => axios.get(endpoint)))
  return allPokemon
}

export const useGetAllLegendaries = () => {
  const allPokemonQuery = useQuery(
    ['Legendaries'],
    () => getAllLegendaries(),
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60
    }
  )

  return { allPokemonQuery }
}
