# Prueba Ioet

### Autor: Marcelo Gallegos

### Explicación del proyecto

Este proyecto busca resolver el reto de programación propuesto por Ioet, el cual consiste en escribir un algoritmo que permita calcular el salario a pagar para cada trabajador, dependiendo de número de horas trabajadas y dia de la semana en el que trabajó.

La lógica del algortimo propuesto consiste en leer un archivo .txt que contiene los INPUT del problema y a continuación procesar el contenido del mismo, de manera que se puedan obtener los datos necesarios para calcular el valor final a pagar

El proyecto implementa tres helpers principales que se encargarán de realizar tres tareas fundamentales

* **FILE READER HELPER:** Se encarga de resolver el path del archivo txt y leer el contenido del mismo.
* **INPUT PROCESSOR HELPER:** Se encarga de procesar el contenido del archivo txt de manera que provea los datos necesarios para que el último helper calcule el valor deseado. Estos datos se estructuran en un modelo (clase) llamado EMPLOYEE que cuenta con dos atributos: name y daysWorked
* **SALARY HELPER:** Su input es un arreglo de Employees con los datos necesarios para calcular el salario total a pagar para cada uno.

### Instalación y ejecución del proyecto

* Clonar el repositorio o descargarlo como .ZIP
* Abrir la ruta del proyecto en cualquier IDE de desarrollo
* Abrir una terminal en la ruta del proyecto y ejecutar lo siguiente

```sh
$ npm install
```

* Una vez instaladas, en la misma ruta del proyecto, ejecutar el siguiene comando

```sh
$ npm start
```

* Para testing, ejecutar lo siguiente:
```sh
$ npm jest
```
### Tecnologías utilizadas
| Tecnología | Versión |
| ------ | ------ |
| Node | 12.13.1 |
| Jest | 26.4.2 |
