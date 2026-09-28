import type { FC } from 'react'
import type { Tarea } from '../interface/Tareainterface'

interface Props {
  tarea: Tarea
  onToggle: (id: number) => void
  onEliminar: (id: number) => void
}

export const TareaItem: FC<Props> = ({ tarea, onToggle, onEliminar }) => {
  const { id, texto, completada } = tarea

  return (
    <li className={completada ? 'tarea hecha' : 'tarea'}>
      <input type="checkbox" checked={completada} onChange={() => onToggle(id)} />
      <span className="texto">{texto}</span>
      <span className="estado">{completada ? 'Completada' : 'Pendiente'}</span>
      <button className="eliminar" title="Eliminar" onClick={() => onEliminar(id)}>
        ✕
      </button>
    </li>
  )
}