import { BaseStats } from './BaseStats'

const SelectedPokemon = ({ selectedPokemon }) => {
  const typeColor = selectedPokemon.types[0].type.name
  return (
    <article className='w-full items-center justify-evenly '>
      <img src={selectedPokemon?.sprites.other['official-artwork'].front_default} alt='' />
      <div>
        <h2>{selectedPokemon?.name}</h2>
        <h3 className=' mt-1'><span className='font-semibold '>Height:</span> {selectedPokemon?.height}"</h3>
        <h3 className=' mt-1'><span className='font-semibold '>Weight:</span> {selectedPokemon?.weight}kg</h3>
        {selectedPokemon?.types?.map((type, id) => (
          <span
            key={id}
            className={`px-3 py-1 text-sm font-medium text-white rounded-full mx-2 capitalize ${type.type.name}`}
          >
            {type.type.name}
          </span>
        ))}
        <h3 className=' font-bold text-lg'>Base Stats</h3>
      </div>
      <div className='w-full flex flex-col my-1 '>
        <BaseStats pokemon={selectedPokemon} backgroundSelected={typeColor} />
      </div>
    </article>
  )
}

export default SelectedPokemon
