import type { Tarea } from '../interface/Tareainterface'
import { tareasIniciales } from './data'

const CLAVE = 'k-todo'

export const guardarTareas = (tareas: Tarea[]) =>
  localStorage.setItem(CLAVE, JSON.stringify(tareas))

export const leerTareas = (): Tarea[] => {
  const guardado = localStorage.getItem(CLAVE)
  return guardado ? JSON.parse(guardado) : tareasIniciales
}