import React from 'react'

function Home() {
  function cli(e){
e.preventDefault();
alert(JSON.parse(localStorage.getItem("user")).type)
  }
  return (
    <>
      <button onClick={cli}>click</button>
    </>
  )
}

export default Home