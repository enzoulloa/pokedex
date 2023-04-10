const SkeletonCard = () => {
  return (
    <div className='relative border border-gray-300 shadow-lg rounded-lg w-[90%] mx-auto h-[300px] my-4 p-10 m-3'>
      <div className='animate-pulse flex flex-col justify-center items-center'>
        <div className=' flex justify-between w-full items-center'>
          <div className='h-8 bg-white rounded-full w-20 ' />
          <div className=' h-5 bg-white rounded-full w-8' />
        </div>
        <div className=' h-6 bg-slate-700 rounded-full block w-20 mt-52' />
        <div className=' w-full bg-slate-700 absolute top-0 left-0 right-0 h-[60%] path rounded-lg -z-10' />
      </div>
    </div>
  )
}

export default SkeletonCard
