import type { FC } from 'react'

interface Props {
  titulo: string
  pendientes: number
}

export const CustomHeader: FC<Props> = ({ titulo, pendientes }) => (
  <header className="header">
    <h1>{titulo}</h1>
    <span className="contador">
      {pendientes === 1 ? '1 pendiente' : `${pendientes} pendientes`}
    </span>
  </header>
)