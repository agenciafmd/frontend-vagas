import { useCallback, useEffect, useState } from 'react'
import { clsx } from 'clsx'
import { Link } from 'react-scroll'

import { MapPin, House, SquaresFour, X, Coffee, Phone } from 'phosphor-react'

import logoCoffeeDelivery from '../assets/logo-coffee-delivery.svg'

interface Location {
  city: string
  region: string
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#')
  const [location, setLocation] = useState<Location>({} as Location)

  const handleOpenMenuMobile = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const handleCloseMenuMobile = useCallback(() => {
    setIsOpen((prev) => false)
  }, [])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://ip-api.com/json/', {
        method: 'GET',
      }).then((response) => response.json())

      setLocation(response)
    }
    fetchData()
  }, [])

  return (
    <nav className="w-full" id="home">
      <div
        className={clsx(
          'flex items-center justify-between max-w-[90rem] mx-auto py-4 px-4 bg-white',
          'sm:py-8 sm:px-8',
          'xl:px-40'
        )}
      >
        <div className="flex-1">
          <a href="#" className="lg:w-fit lg:flex">
            <img
              src={logoCoffeeDelivery}
              alt="Logo do coffee delivery, um copo de café ao lado está escrito coffee delivery"
            />
          </a>
        </div>

        <div
          className={clsx(
            'fixed w-full left-0 z-10 flex flex-col shadow-xl rounded-b-3xl p-4 bg-white',
            'bg-zinc-50 ',
            'transition-all duration-300',
            isOpen ? 'top-0' : 'top-[-100%]',
            'md:top-0 md:static md:shadow-none md:p-0 md:rounded-b-none md:w-fit md:transition-none',
            'lg:transition-none'
          )}
        >
          <button
            title="Fechar menu"
            type="button"
            className="self-end p-2 md:hidden"
            onClick={() => handleOpenMenuMobile()}
          >
            <X
              className={clsx(
                'text-xl transition-colors duration-300 hover:text-indigo-400',
                'text-zinc-900'
              )}
            />
          </button>

          <ul
            className={clsx(
              'grid grid-cols-3 gap-4 text-center',
              'max-[320px]:grid-cols-2',
              'sm:grid-cols-4',
              'md:flex md:justify-end md:gap-2 md:text-sm md:pt-0',
              'lg:text-lg'
            )}
          >
            <li>
              <Link
                to="home"
                className={clsx(
                  'text-base font-roboto text-base-title',
                  activeLink === '#' ? 'md:text-purple' : '',
                  'md:text-xl md:transition-colors duration-300 hover:md:text-purple'
                )}
                onClick={() => {
                  setActiveLink('#')
                  handleCloseMenuMobile()
                }}
              >
                <House
                  className={clsx(
                    'w-full',
                    activeLink === '#' ? 'text-purple' : '',
                    'md:hidden'
                  )}
                  size={22}
                />
                Página inicial
              </Link>
            </li>

            <li>
              <Link
                to="coffee-list"
                spy={true}
                smooth={true}
                offset={-50}
                className={clsx(
                  'text-base font-roboto text-base-title',
                  activeLink === '#coffee' ? 'md:text-purple' : '',
                  'md:text-xl md:transition-colors duration-300 hover:md:text-purple'
                )}
                onClick={() => {
                  setActiveLink('#coffee')
                  handleCloseMenuMobile()
                }}
              >
                <Coffee
                  className={clsx(
                    'w-full',
                    activeLink === '#coffee' ? 'text-purple' : '',
                    'md:hidden'
                  )}
                  size={22}
                />
                Nossos cafés
              </Link>
            </li>

            <li>
              <Link
                to="feedback-list"
                spy={true}
                smooth={true}
                offset={-100}
                className={clsx(
                  'text-base font-roboto text-base-title',
                  activeLink === '#feedback' ? 'md:text-purple' : '',
                  'md:text-xl md:transition-colors duration-300 hover:md:text-purple'
                )}
                onClick={() => {
                  setActiveLink('#feedback')
                  handleCloseMenuMobile()
                }}
              >
                <Coffee
                  className={clsx(
                    'w-full',
                    activeLink === '#feedback' ? 'text-purple' : '',
                    'md:hidden'
                  )}
                  size={22}
                />
                Clientes
              </Link>
            </li>

            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                className={clsx(
                  'text-base font-roboto text-base-title',
                  activeLink === '#contact' ? 'md:text-purple' : '',
                  'md:text-xl md:transition-colors duration-300 hover:md:text-purple'
                )}
                onClick={() => {
                  setActiveLink('#contact')
                  handleCloseMenuMobile()
                }}
              >
                <Phone
                  className={clsx(
                    'w-full',
                    activeLink === '#contact' ? 'text-purple' : '',
                    'md:hidden'
                  )}
                  size={22}
                />
                Contato
              </Link>
            </li>
          </ul>
        </div>

        <span
          title={location.city}
          className={clsx(
            'flex items-center gap-1 mr-4 bg-purple-light p-2 rounded-md text-purple',
            'md:ml-8'
          )}
        >
          <MapPin className="text-purple" weight="fill" />
          {location.city} - {location.region}
        </span>

        <button
          type="button"
          className="md:hidden"
          onClick={() => handleOpenMenuMobile()}
          title="Menu"
        >
          <SquaresFour
            className={clsx('text-base-title')}
            weight="fill"
            size={22}
          />
        </button>
      </div>
    </nav>
  )
}
