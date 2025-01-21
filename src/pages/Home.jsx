import React from 'react'
import Sidebar from '../Component/Sidebar'
import Chat from '../Component/Chat'

const Home = () => {
  return (
    <div className='home'>
      <div className='container'>
      <Sidebar className='sidebar' id="activeindex"/>
      <Chat className="rightchatbox" id="activeindex"/>
      </div>
      {location.pathname === '/' && (
        <div className='botpress-container  botpress-show'>
        </div>
      )}
    </div>
  )
}

export default Home
