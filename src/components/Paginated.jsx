
const Paginated = ({ page, prevPage, nextPage }) => {
  return (
    <div className=' flex justify-around items-center'>
      <button onClick={prevPage} className='border border-white bg-yellow-300 rounded-lg px-2 py-1 font-semibold cursor-pointer transition hover:scale-110'>Prev</button>
      <span>{page}</span>
      <button onClick={nextPage} className='bg-yellow-300 rounded-lg px-2 py-1 font-semibold cursor-pointer transition hover:scale-110'>Next</button>
    </div>
  )
}
export default Paginated
