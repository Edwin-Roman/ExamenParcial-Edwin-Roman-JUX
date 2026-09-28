import { useState, type FC } from 'react'

interface Props {
  onAgregar: (texto: string) => void
}

export const FormularioTarea: FC<Props> = ({ onAgregar }) => {
  const [texto, setTexto] = useState('')

  const enviar = () => {
    if (!texto.trim()) return
    onAgregar(texto.trim())
    setTexto('')
  }

  return (
    <div className="formulario">
      <input
        placeholder="¿Qué tienes que hacer?"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && enviar()}
      />
      <button onClick={enviar}>Agregar</button>
    </div>
  )
}