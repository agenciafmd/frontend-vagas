import clsx from 'clsx'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useCallback, useState } from 'react'

interface Product {
  id: string
  name: string
  description: string
  price: number
  imgUrl: string
  type: string[]
}

interface CoffeeCardProps {
  product: Product
}

export function CoffeeCard({ product }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(0)

  const increaseQuantity = useCallback(() => {
    setQuantity((state) => state + 1)
  }, [])

  const decreaseQuantity = useCallback(() => {
    setQuantity((state) => (state > 0 ? state - 1 : state))
  }, [])

  return (
    <div
      className={clsx(
        'flex flex-col items-center bg-base-card p-5 pb-8 rounded-md',
        'sm:w-[16rem]'
      )}
    >
      <img src={product.imgUrl} alt="" className="mb-3" />
      <div className="mb-4 flex gap-2">
        {product.type.map((coffeeType, index) => (
          <span
            key={index}
            className="uppercase bg-yellow-light text-yellow-dark rounded-full p-1 px-2 font-bold text-sm "
          >
            {coffeeType}
          </span>
        ))}
      </div>
      <h3 className="font-baloo font-bold text-base-subtitle text-2xl mb-2">
        {product.name}
      </h3>
      <p className="font-roboto text-base-label text-md mt-2 mb-8 text-center">
        {product.description}
      </p>

      <div className="flex items-center w-full justify-between">
        <span className="font-roboto text-md flex items-center gap-2">
          R$
          <strong className="font-baloo font-extrabold text-3xl">
            {new Intl.NumberFormat('pt-br', {
              minimumFractionDigits: 2,
            }).format(product.price)}
          </strong>
        </span>

        <div className="flex gap-2">
          <div className="p-2 bg-base-button gap-1 flex items-center justify-between w-[4.5rem]">
            <button
              title="Diminuir"
              type="button"
              className="text-purple-dark flex items-center"
              onClick={() => decreaseQuantity()}
            >
              <Minus size={14} />
            </button>
            <span className="text-base font-roboto">{quantity}</span>
            <button
              title="Acrescentar"
              type="button"
              className="text-purple-dark flex items-center"
              onClick={() => increaseQuantity()}
            >
              <Plus size={14} />
            </button>
          </div>

          <button
            title="Carrinho de compras"
            type="button"
            className="p-2 bg-purple-dark rounded-md flex items-center gap-2"
          >
            <ShoppingCart weight="fill" className="text-white" size={22} />
          </button>
        </div>
      </div>
    </div>
  )
}
