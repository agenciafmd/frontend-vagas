import { useController } from 'react-hook-form'
import { InputContainer } from './style'

export function Input({ control, name, placeholder, className }) {
  const {
    field: { value, onChange }
  } = useController({
    control,
    name,
    rules: { required: true }
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
