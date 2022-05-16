const Inputs = ({handleCreates}) => {
  return (
    <>
      <h1 className='todo__title'>Your task</h1>
      <input
        className='todo__input'
        onKeyUp={handleCreates}
        type='text'
        placeholder='Entry your task...'
        aria-label='Entry your task'
      />
    </>
  );
};

export default Inputs;