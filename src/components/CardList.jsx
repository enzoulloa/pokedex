import Card from './Card'
import SkeletonCard from './SkeletonCard'
import Paginated from './Paginated'
import { useGetPokemon } from '../hooks/useGetPokemon'

const CardList = () => {
  const { query, page, nextPage, prevPage } = useGetPokemon()

  return (
    <>
      <div className=' w-4/5 grid grid-cols-1 items-center justify-center mx-auto gap-2 text-start md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4'>

        {query.isLoading
          ? <><SkeletonCard /><SkeletonCard /><SkeletonCard /><SkeletonCard /></>

          : query.data?.map(pokemon => (
            <Card pokemon={pokemon.data} key={pokemon.data.id} />
          ))}
      </div>
      <Paginated page={page} prevPage={prevPage} nextPage={nextPage} />
    </>
  )
}
export default CardList
