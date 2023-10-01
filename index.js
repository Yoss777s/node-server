// Definir la clase Tarea
class Tarea {
    constructor(indicador, descripcion) {
      this.indicador = indicador;
      this.descripcion = descripcion;
      this.completada = false;
    }
  }
  
  // Definir la clase ListaTareas
  class ListaTareas {
    constructor() {
      this.tareas = [];
    }
  
    // Función para añadir una tarea a la lista
    añadirTarea(indicador, descripcion) {
      const tarea = new Tarea(indicador, descripcion);
      this.tareas.push(tarea);
    }
  
    // Función para eliminar una tarea de la lista
    eliminarTarea(indicador) {
      this.tareas = this.tareas.filter(tarea => tarea.indicador !== indicador);
    }
  
    // Función para marcar una tarea como completada
    completarTarea(indicador) {
      this.tareas.forEach(tarea => {
        if (tarea.indicador === indicador) {
          tarea.completada = true;
        }
      });
    }
  }
  
  // Crear una instancia de la lista de tareas
  const lista = new ListaTareas();
  
  // Añadir tareas a la lista
  lista.añadirTarea("1", "Hacer la compra");
  lista.añadirTarea("2", "Limpiar la casa");
  
  // Completar una tarea
  lista.completarTarea("1");
  
  // Eliminar una tarea
  lista.eliminarTarea("2");
  
  // Mostrar las tareas en la consola
  console.log(lista.tareas);
  
