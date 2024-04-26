import React from 'react'
import Image from 'next/image'
function Header() {
  return (
    <header className="bg-white dark:bg-primary">
  <div className="mx-auto max-w-screen-xl px-1 sm:px-6 lg:px-8">
    <div className="flex h-35 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
<Image src='/logo1.png' alt='logo' width={70} height={70}/>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a
                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Home
              </a>
            </li>

            <li>
              <a
                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Workout
              </a>
            </li>

            <li>
              <a
                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Routine
              </a>
            </li>

            <li>
              <a
                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Tools
              </a>
            </li>

            <li>
              <a
                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <a
            className="rounded-md bg-gradient-to-r from-red-900 via-red-700 to-orange-700 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-teal-500"
            href="/login"
          >
            Login
          </a>

          <div className="hidden sm:flex">
            <a
              className="rounded-md bg-gradient-to-r px-5 py-2.5 text-sm font-medium from-orange-700 via-red-700 to-red-900 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
              href="#"
            >
              Register
            </a>
          </div>
        </div>

        <div className="block md:hidden">
        <button
  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-primary dark:text-white dark:hover:text-white/75 
             md:bg-transparent md:p-0 md:text-gray-600 md:hover:text-gray-600/75 md:dark:bg-transparent md:dark:text-white md:dark:hover:text-white/75"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 md:h-6 md:w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
</button>

        </div>
      </div>
    </div>
  </div>
</header>
  )
}

export default Header