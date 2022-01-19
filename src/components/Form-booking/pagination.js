const Pagination = ({ step }) => {
  let page = []

  for (let i = 0; i < 4; i++) {
    page.push(i)
  }

  return (
    <div className='step__wrapper'>
      {page.map(i => {
        return (
          <div key={i} className={i < step ? 'step active' : 'step '}></div>
        )
      })}
    </div>
  )

}

export default Pagination;