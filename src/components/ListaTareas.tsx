import type { FC } from 'react'
import type { Tarea } from '../interface/Tareainterface'
import { TareaItem } from './Tareaitem'

interface Props {
  tareas: Tarea[]
  onToggle: (id: number) => void
  onEliminar: (id: number) => void
}

export const ListaTareas: FC<Props> = ({ tareas, onToggle, onEliminar }) =>
  tareas.length === 0 ? (
    <p className="vacio">No hay tareas aquí. Agrega una arriba.</p>
  ) : (
    <ul className="lista">
      {tareas.map((t) => (
        <TareaItem key={t.id} tarea={t} onToggle={onToggle} onEliminar={onEliminar} />
      ))}
    </ul>
  )