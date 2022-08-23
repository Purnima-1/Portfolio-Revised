import React from 'react'
import work1 from './assets/work1.jpg'
import work2 from './assets/work2.jpg'

const Works = () => {
  return (
    <div className='works'>
<div className="work_section">
    <div className="cards">
        <img src={work1} alt="" />
        <button>See Work</button>
    </div>
    <div className="cards">
        <img src={work2} alt="" />
        <button>See Work</button>
    </div>
</div>

    </div>
  )
}

export default Works