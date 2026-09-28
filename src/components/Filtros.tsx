import type { FC } from 'react'
import type { Filtro } from '../interface/Tareainterface'

interface Props {
  filtroActual: Filtro
  onCambiarFiltro: (filtro: Filtro) => void
}

const opciones: Filtro[] = ['todas', 'pendientes', 'completadas']

export const Filtros: FC<Props> = ({ filtroActual, onCambiarFiltro }) => (
  <nav className="filtros">
    {opciones.map((op) => (
      <button
        key={op}
        className={filtroActual === op ? 'filtro activo' : 'filtro'}
        onClick={() => onCambiarFiltro(op)}
      >
        {op[0].toUpperCase() + op.slice(1)}
      </button>
    ))}
  </nav>
)