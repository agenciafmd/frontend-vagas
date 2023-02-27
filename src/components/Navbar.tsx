import { MapPin, House, SquaresFour, X, Coffee, Phone } from 'phosphor-react'
import logoCoffeeDelivery from '../assets/logo-coffee-delivery.svg'

import { clsx } from 'clsx'
import { useCallback, useEffect, useState } from 'react'

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
    <nav className="w-full">
      <div
        className={clsx(
          'flex items-center justify-between py-4 px-4 bg-white',
          'md:py-8 md:px-12'
        )}
      >
        <a
          href="#"
          className={clsx(
            'relative flex-1',
            'text-zinc-900 dark:text-zinc-50',
            'lg:text-xl',
            'after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-indigo-600 after:rounded after:transition-all after:duration-300 hover:after:w-full md:hover:after:w-[140px] lg:hover:after:w-[156px] '
          )}
        >
          <img
            src={logoCoffeeDelivery}
            alt="Logo do coffee delivery, um copo de café ao lado está escrito coffee delivery"
          />
        </a>

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
                ' text-xl transition-colors duration-300 hover:text-indigo-400',
                'text-zinc-900 dark:text-zinc-50'
              )}
            />
          </button>

          <ul
            className={clsx(
              'flex flex-wrap justify-between pt-4',
              'md:flex md:justify-end md:gap-2 md:text-sm md:pt-0',
              'lg:text-lg'
            )}
          >
            <li className="">
              <House
                className={clsx(
                  'w-full',
                  activeLink === '#' ? 'text-purple' : '',
                  'md:hidden'
                )}
                size={22}
              />
              <a
                href="#"
                className={clsx(
                  'text-base font-roboto text-base-title',
                  activeLink === '#' ? 'md:text-purple' : '',
                  'md:text-xl md:transition-colors duration-300 hover:md:text-purple'
                )}
                onClick={() => setActiveLink('#')}
              >
                Página inicial
              </a>
            </li>
            <li className="">
              <Coffee
                className={clsx(
                  'w-full',
                  activeLink === '#coffee' ? 'text-purple' : '',
                  'md:hidden'
                )}
                size={22}
              />
              <a
                href="#"
                className={clsx(
                  'text-base font-roboto text-base-title',
                  activeLink === '#coffee' ? 'md:text-purple' : '',
                  'md:text-xl md:transition-colors duration-300 hover:md:text-purple'
                )}
                onClick={() => setActiveLink('#coffee')}
              >
                Nossos cafés
              </a>
            </li>
            <li className="">
              <Phone
                className={clsx(
                  'w-full',
                  activeLink === '#contact' ? 'text-purple' : '',
                  'md:hidden'
                )}
                size={22}
              />
              <a
                href="#"
                className={clsx(
                  'text-base font-roboto text-base-title',
                  activeLink === '#contact' ? 'md:text-purple' : '',
                  'md:text-xl md:transition-colors duration-300 hover:md:text-purple'
                )}
                onClick={() => setActiveLink('#contact')}
              >
                Contato
              </a>
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
