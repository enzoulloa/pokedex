
export const BaseStats = ({ pokemon, backgroundSelected }) => {
  const maxStat = 255
  return (
    <div className='w-full flex flex-col my-1 '>
      {/* @ts-ignore */}
      {pokemon.data?.stats?.map((stat) => {
        const widthStat = (stat.base_stat / maxStat * 100)
        return (
          <div key={stat.stat.name} className=' w-full flex flex-col items-center justify-center'>
            <div className=' flex flex-row w-[70%] justify-between items-center'>
              <span className='font-bold text-sm uppercase text-left my-1 pr-1 text-black'>
                {stat.stat.name}
              </span>
              <p className=''>0{stat.base_stat}</p>
            </div>
            <div className=' w-[70%] flex items-center justify-center'>
              <div className=' w-full relative'>
                <div
                  className={` w-full h-[10px] opacity-50 rounded-full ${backgroundSelected}`}
                />
                <div
                  className={`absolute left-0 h-[10px] top-0 rounded-full ${backgroundSelected}`}
                  style={{
                    width: `${widthStat}%`
                  }}
                />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
