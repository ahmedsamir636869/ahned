import React from 'react'

function Hero() {
  return (
    <section className="bg-black">
    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-3xl font-extrabold sm:text-5xl">
          Muscle Generator.
          <strong className="bg-gradient-to-r from-white via-red-700 to-red-900 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"> Make It Pump. </strong>
        </h1>
  
        <p className="mt-4 sm:text-xl/relaxed">
        We deliver our service in the easiest way for you to get in form.

        </p>
  
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="block w-full rounded bg-gradient-to-r from-red-900 via-red-700 to-orange-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
            href="#"
          >
            Get Started
          </a>
  
          <a
            className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
            href="#"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero