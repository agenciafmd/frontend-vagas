import clsx from 'clsx'
import { PaperPlaneTilt, WarningCircle } from 'phosphor-react'
import newsletterLogo from '../assets/undraw_conversation.svg'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useCallback } from 'react'

const schema = z.object({
  email: z
    .string()
    .email('Informe um e-mail válido')
    .min(1, { message: 'Campo obrigatório' }),
})

type FormInputs = z.infer<typeof schema>

export function Newsletter() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(schema),
  })

  const onSubmitNewsletter = useCallback((data: FormInputs) => {
    alert(JSON.stringify(data))
  }, [])

  return (
    <section
      id="contact"
      className={clsx('mx-4 mt-16')}
      data-aos="fade-up"
      data-aos-duration={1500}
      data-aos-easing="linear"
    >
      <h2
        className={clsx(
          'font-baloo font-extrabold text-3xl text-base-subtitle mb-8',
          'sm:text-3xl'
        )}
      >
        Fique por dentro de nossas novidades!
      </h2>

      <div className={clsx('md:grid md:grid-cols-2 md:items-center')}>
        <img
          src={newsletterLogo}
          alt=""
          className={clsx('w-56 mx-auto mb-8', 'sm:w-80')}
        />

        <div>
          <p
            className={clsx(
              'font-roboto text-2xl text-base-label',
              'sm:text-3xl'
            )}
          >
            Se você é um amante de café, não pode deixar de assinar a nossa
            newsletter! Todos os meses, selecionamos os melhores cafés do mundo
            e enviamos diretamente para o seu e-mail.
          </p>

          <form
            onSubmit={handleSubmit(onSubmitNewsletter)}
            className={clsx('mt-4')}
          >
            <div
              className={clsx(
                'relative flex items-center px-4 py-2 border border-base-hover rounded-lg',
                'focus-within:ring-1 focus-within:ring-purple',
                errors.email ? 'ring-1 ring-danger' : ''
              )}
            >
              <input
                {...register('email')}
                type="text"
                name="email"
                id="email"
                placeholder="seumelhoremail@mail.com"
                className="outline-none w-full text-base-text placeholder:text-base-label"
              />

              {errors.email ? (
                <WarningCircle
                  size={22}
                  weight="fill"
                  className="text-danger"
                />
              ) : (
                <button
                  type="submit"
                  title="Enviar"
                  className="flex items-center"
                >
                  <PaperPlaneTilt
                    weight="fill"
                    size={22}
                    className="text-purple"
                  />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
