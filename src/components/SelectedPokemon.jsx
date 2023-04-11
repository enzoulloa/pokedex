import { BaseStats } from './BaseStats'

const SelectedPokemon = ({ selectedPokemon }) => {
  const typeColor = selectedPokemon.types[0].type.name
  console.log(selectedPokemon.types[0].slot)
  return (
    <article className='w-full flex flex-col items-center justify-evenly p-5 md:flex-row md:justify-between'>
      <img className='md:w-[33%]' src={selectedPokemon?.sprites.other['official-artwork'].front_default} alt='' />
      <div className='md:w-[33%]'>
        <h2 className=' capitalize text-2xl font-semibold my-2'>{selectedPokemon?.name}</h2>
        <h3 className=' my-1'><span className='font-semibold '>Height:</span> {selectedPokemon?.height}"</h3>
        <h3 className=' my-1'><span className='font-semibold '>Weight:</span> {selectedPokemon?.weight}kg</h3>
        <div className=' my-4 text-center'>
          {selectedPokemon?.types?.map((type, id) => (
            <span
              key={id + 'type'}
              className={`px-3 py-1 text-sm font-medium text-white rounded-full mx-2 ${type.type.name}`}
              style={{ textTransform: 'capitalize' }}
            >
              {type.type.name}
            </span>
          ))}
        </div>
        <h3 className=' font-bold text-lg text-center mt-7'>Base Stats</h3>
      </div>
      <div className='w-full flex flex-col mt-1 mb-4 md:w-33%'>
        <BaseStats pokemon={selectedPokemon} backgroundSelected={typeColor} />
      </div>
    </article>
  )
}

export default SelectedPokemon
