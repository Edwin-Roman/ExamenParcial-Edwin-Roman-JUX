import { useState, type FC, type KeyboardEvent } from 'react'

interface Props {
  onAgregar: (texto: string) => void
}

export const FormularioTarea: FC<Props> = ({ onAgregar }) => {
  const [texto, setTexto] = useState('')

  const handleAgregar = () => {
    if (texto.trim().length === 0) return
    onAgregar(texto.trim())
    setTexto('')
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleAgregar()
  }

  return (
    <div className="formulario">
      <input
        type="text"
        placeholder="Nueva tarea..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="btn-agregar" onClick={handleAgregar}>
        Agregar
      </button>
    </div>
  )
}