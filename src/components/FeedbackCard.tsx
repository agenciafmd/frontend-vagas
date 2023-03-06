import clsx from 'clsx'
import { Star } from 'phosphor-react'

import femaleAvatar from '../assets/undraw_female_avatar.svg'
import maleAvatar from '../assets/undraw_male_avatar.svg'

export function Feedback() {
  return (
    <div
      className={clsx(
        'flex flex-col border border-base-hover rounded-lg p-5',
        'sm:h-full sm:w-full'
      )}
    >
      <i className="fa-solid fa-quote-left text-3xl text-base-hover mb-4"></i>
      <p className="font-roboto text-base text-base-label">
        Fiquei impressionado com a qualidade dos grãos e a torra precisa, que
        resultaram em uma bebida deliciosa e com um final limpo e agradável. Com
        certeza, recomendaria esse café a outras pessoas que procuram uma bebida
        de qualidade.
      </p>

      <div className="flex gap-x-2 items-center mt-4">
        <img src={femaleAvatar} alt="" className="w-16" />

        <div className="flex flex-col gap-x-2">
          <h3 className="text-base-subtitle font-roboto font-bold text-base">
            Jane Doe
          </h3>
          <span className="flex items-center gap-1 text-base-subtitle">
            4,0
            <Star weight="fill" className="text-yellow" />
            <Star weight="fill" className="text-yellow" />
            <Star weight="fill" className="text-yellow" />
            <Star weight="fill" className="text-yellow" />
            <Star />
          </span>
        </div>
      </div>
    </div>
  )
}
