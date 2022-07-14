import './filter.sass'

const Filter = (props) => {
  const buttonsData = [
    {name: 'Columbia', label: 'Columbia'},
    {name: 'Kenya', label: 'Kenya'},
    {name: 'Brasil', label: 'Brasil'},
    // {name: 'all', label: 'All'},
  ]

  const buttons = buttonsData.map(({name, label}) => {
    // const active = props.filter === name;
    return (
      <button 
      className='filter__button'
      type='button'
      key={name}
      onClick={() => props.onUpdateFilter(name)}>
        {label}
      </button>
    )
  })


  return (
    <div className="filter">
      <span className="filter__text">Or filter</span>
      {buttons}
    </div>
  );
}

export default Filter;