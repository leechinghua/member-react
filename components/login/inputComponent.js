import { useState } from 'react'

export default function InputComponent({
  type = 'text',
  defaultValue = '',
  name = '',
  id = '',
}) {
  const [inputValue, setInputValue] = useState(defaultValue)

  const clearInput = (e) => {
    if (e.target.value === defaultValue) {
      setInputValue('')
    }
  }
  const restoreInput = (e) => {
    if (e.target.value === '') {
      setInputValue(defaultValue)
    }
  }
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  return (
    <>
      <input
        type={type}
        value={inputValue}
        name={name}
        id={id}
        onFocus={clearInput}
        onBlur={restoreInput}
        onChange={handleChange}
      />
    </>
  )
}
