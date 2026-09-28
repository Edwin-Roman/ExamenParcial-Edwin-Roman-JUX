export interface Tarea {
  id: number
  texto: string
  completada: boolean
}

export type Filtro = 'todas' | 'pendientes' | 'completadas'