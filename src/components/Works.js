import React from 'react'
import work1 from './assets/work1.jpg'
import work2 from './assets/work2.jpg'
import work3 from './assets/work3.jpg'
import work4 from './assets/work4.jpg'
import work5 from './assets/work5.jpg'
import work6 from './assets/work6.jpg'
import './style/works.css'

const Works = () => {
  return (
    <div className='works'>
<div className="work_section">
    <div className="cards">
        <img src={work1} alt="" />
        <button> <a href ="https://github.com/purnima-1" target= "_blank" rel="noreferrer">See Work</a></button>
    </div>
    <div className="cards">
        <img src={work2} alt="" />
        <button><a href ="https://know-me.netlify.app/" target= "_blank" rel="noreferrer">See Work</a></button>
    </div>
    <div className="cards">
        <img src={work3} alt="" />
        <button>See Work</button>
    </div>
    <div className="cards">
        <img src={work4} alt="" />
        <button>See Work</button>
    </div>
    <div className="cards">
        <img src={work5} alt="" />
        <button>See Work</button>
    </div>
    <div className="cards">
        <img src={work6} alt="" />
        <button>See Work</button>
    </div>
</div>

    </div>
  )
}

export default Works