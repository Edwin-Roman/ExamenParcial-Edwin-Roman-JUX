import { useState } from 'react'
import { tareasIniciales } from '../data/data'
import type { Filtro, Tarea } from '../interface/Tareainterface'

export const useTareas = () => {
  const [tareas, setTareas] = useState<Tarea[]>(tareasIniciales)
  const [filtro, setFiltro] = useState<Filtro>('todas')

  const agregar = (texto: string) =>
    setTareas([...tareas, { id: Date.now(), texto, completada: false }])

  const toggle = (id: number) =>
    setTareas(tareas.map((t) => (t.id === id ? { ...t, completada: !t.completada } : t)))

  const eliminar = (id: number) => setTareas(tareas.filter((t) => t.id !== id))

  const visibles = tareas.filter((t) =>
    filtro === 'todas' ? true : filtro === 'completadas' ? t.completada : !t.completada
  )
  const pendientes = tareas.filter((t) => !t.completada).length

  return { visibles, pendientes, filtro, setFiltro, agregar, toggle, eliminar }
}