import { CustomHeader } from './components/customHeader'
import { FormularioTarea } from './components/formularioTarea'
import { Filtros } from './components/Filtros'
import { ListaTareas } from './components/ListaTareas'
import { useTareas } from './hooks/UseTareas'

export const TodoApp = () => {
  const { visibles, pendientes, filtro, setFiltro, agregar, toggle, eliminar } =
    useTareas()

  return (
    <main className="app">
      <CustomHeader titulo="Mi Lista de Tareas" pendientes={pendientes} />
      <FormularioTarea onAgregar={agregar} />
      <Filtros filtroActual={filtro} onCambiarFiltro={setFiltro} />
      <ListaTareas tareas={visibles} onToggle={toggle} onEliminar={eliminar} />
    </main>
  )
}