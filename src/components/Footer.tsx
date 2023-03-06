import clsx from 'clsx'
import { Link } from 'react-scroll'

export function Footer() {
  return (
    <footer className={clsx('bg-purple')}>
      <div className={clsx('mx-4 mt-16 py-8', 'lg:px-40')}>
        <div>
          <h2
            className={clsx(
              'font-baloo font-extrabold text-3xl text-base-card mb-4',
              'sm:text-3xl'
            )}
          >
            Coffee Delivery
          </h2>
          <ul>
            <li>
              <Link
                to="home"
                smooth={true}
                className={clsx(
                  'text-base-card font-roboto ',
                  'transition-color duration-300',
                  'hover:text-base-hover'
                )}
              >
                Página inicial
              </Link>
            </li>
            <li>
              <Link
                to="coffee-list"
                smooth={true}
                className={clsx(
                  'text-base-card font-roboto ',
                  'transition-color duration-300',
                  'hover:text-base-hover'
                )}
              >
                Nossos cafés
              </Link>
            </li>
            <li>
              <a
                href="#"
                className={clsx(
                  'text-base-card font-roboto ',
                  'transition-color duration-300',
                  'hover:text-base-hover'
                )}
              ></a>
            </li>
          </ul>
        </div>

        <p className="text-base-card font-roboto text-md text-center mt-8">
          Feito com ☕{' '}
          <a
            href="https://github.com/geovaneborba"
            rel="noopener"
            target="_blank"
            className={clsx(
              'transition-color duration-300',
              'hover:text-base-hover'
            )}
          >
            Geovane Borba
          </a>
        </p>
      </div>
    </footer>
  )
}
