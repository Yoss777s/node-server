//Lista de tareas en node 

//Definir lista de tareas y las funciones

let tareas = [];

function agregarTarea(id, descripcion) {
  return new Promise((resolve, reject) => {
    const tarea = { id, descripcion, estado: false };
    tareas.push(tarea);
    resolve('Tarea añadida con éxito');
  });
}

function eliminarTarea(id) {
  return new Promise((resolve, reject) => {
    const tareaIndex = tareas.findIndex(tarea => tarea.id === id);
    if (tareaIndex !== -1) {
      tareas.splice(tareaIndex, 1);
      resolve('Tarea eliminada con éxito');
    } else {
      reject('Tarea no encontrada');
    }
  });
}

function tareaCompleta(id) {
  return new Promise((resolve, reject) => {
    const tarea = tareas.find(tarea => tarea.id === id);
    if (tarea) {
      tarea.completa = true;
      resolve('Tarea completada');
    } else {
      reject('Tarea no encontrada');
    }
  });
}

//Aqui se ustiliza async/await para manejar las promesas 
async function main() {
  try {
    await agregarTarea(1, 'Hacer la compra');
    await agregarTarea(2, 'Hacer ejercicio');
    await agregarTarea(3, 'Estudiar para el examen');
    console.log(tareas);

    await tareaCompleta(1);
    console.log(tareas);

    await eliminarTarea(2);
    console.log(tareas);
  } catch (error) {
    console.error(error);
  }
}

main();


//servidor web 
const http = require('http');

const host = 'localhost';
const port = 8080;


const edificio = function(request, response) {

    const url = new URL(request.url, 'http://localhost:8080/');

    //Procedimiento
    response.writeHead(200, {'content-type': 'application/json'});
    response.write('Lista de tareas');
    response.end();
}

const server = http.createServer(edificio);
server.listen(port, host, () => {
    console.log('El servidor esta corriendo en: http://localhost:/8080/');
})

