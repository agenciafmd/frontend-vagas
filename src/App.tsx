import clsx from 'clsx'
import { CoffeeList } from './components/CoffeeList'
import { FeedbackList } from './components/FeedbackList'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { Newsletter } from './components/Newsletter'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import { Loading } from './components/Loading'
AOS.init()

export function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="wrapper">
          <Navbar />
          <main
            className={clsx('max-w-[1440px] mx-auto', 'sm:px-8', 'xl:px-40')}
          >
            <Header />
            <CoffeeList />
            <FeedbackList />
            <Newsletter />
          </main>
          <Footer />
        </div>
      )}
    </>
  )
}
