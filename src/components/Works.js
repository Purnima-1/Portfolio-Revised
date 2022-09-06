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
        <h1 className='projects'>My Projects</h1>
<div className="work_section">
    <div className="cards">
        <img src={work1} alt="" />
        <button> <a href ="https://pacific-island-51855.herokuapp.com/" target= "_blank" rel="noreferrer">See Work</a></button>
    </div>
    <div className="cards">
        <img src={work2} alt="" />
        <button><a href ="https://track-your-expenses-app.netlify.app/" target= "_blank" rel="noreferrer">See Work</a></button>
    </div>
    <div className="cards">
        <img src={work3} alt="" />
        <button><a href='https://github.com/Purnima-1/showsApp' target= "_blank" rel="noreferrer">See Work</a></button>
    </div>
    <div className="cards">
        <img src={work4} alt="" />
        <button><a href='https://volley-scoreboard.netlify.app/' target= "_blank" rel="noreferrer" >See Work</a></button>
    </div>
    <div className="cards">
        <img src={work5} alt="" />
        <button><a href='https://young-thicket-13354.herokuapp.com/' target= "_blank" rel="noreferrer" >See Work</a></button>
    </div>
    
    <div className="cards">
        <img src={work6} alt="" />
        <button><a href='https://github.com/Purnima-1/newsapp' target="_blank" rel="noreferrer" >See Work</a></button>
    </div>
</div>

    </div>
  )
}

export default Works