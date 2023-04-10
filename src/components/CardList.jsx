import Card from './Card'
import SkeletonCard from './SkeletonCard'
import { useGetPokemon } from '../hooks/useGetPokemon'

const CardList = () => {
  const { query } = useGetPokemon()

  return (
    <div className=' w-4/5 grid grid-cols-1 items-center justify-center mx-auto gap-2 text-start '>
      {query.isLoading
        ? <><SkeletonCard /><SkeletonCard /><SkeletonCard /><SkeletonCard /></>

        : query.data?.map(pokemon => (
          <Card pokemon={pokemon.data} key={pokemon.data.id} />
        ))}
    </div>

  )
}
export default CardList
