import React from 'react'

const Navber = () => {
  const style = {
    color: 'white',
    backgroundColor: '#3535f1',
    borderRadius: '8px',
  };
  return (
    <nav className="navbar">
      <h1>The Fundamental Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create" style={style}>New Blog</a>
      </div>
    </nav>
  )
}

export default Navber