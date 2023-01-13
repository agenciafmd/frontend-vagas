import { useController } from 'react-hook-form'
import { InputContainer } from './style'

export function Input({ control, name, placeholder, pattern = '', className }) {
  const {
    field: { value, onChange }
  } = useController({
    control,
    name,
    rules: {
      required: { value: true, message: `O campo ${name} é obrigatório.` },
      pattern: { value: pattern, message: `Digite um ${name} válido.` }
    }
  })

  const handleChange = e => {
    onChange(e.target.value)
  }

  return (
    <InputContainer
      type="text"
      className={className}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  )
}
