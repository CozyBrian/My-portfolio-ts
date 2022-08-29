import React from 'react'
import WindowNav from './window-nav';

const CodeWindow = () => {
  const profile =
    "https://firebasestorage.googleapis.com/v0/b/my-portfolio-35b84.appspot.com/o/profilepic.jpg?alt=media&token=bf734f1e-96de-4610-ab49-7d64a15ed653";


  return (
    <section className="bg-black rounded-xl dark:bg-gray-800 dark:text-gray-100 p-3">
      <WindowNav />
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 xl:py-32 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-4xl lg:text-left">
          <h1 className='text-7xl text-white pb-1'>Hello, I'm Brian Newton</h1>
          <p className="text-white">
              I’m a Full-stack software developer based in Ghana. I love to build
              mobile and web applications that improve the lives of people all
              around the world and I’m very passionate about connecting the dots
              between ideas and reality with code.
          </p>
        </div>
        <div className="flex items-center justify-center h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img src={profile} alt="" className="object-cover h-72 sm:h-80 lg:h-96 lg:w-96 xl:h-112 2xl:h-128 rounded-full p-5" />
        </div>
      </div>
  </section>
  )
}

export default CodeWindow;