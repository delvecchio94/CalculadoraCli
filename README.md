# CalculadoraCli

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Amerika Servicios

## Generar despliegue

#### Requerimientos:
	 - JDK 1.8.065
	 - Apache Maven

#### 	Paso a paso:
* **Abrir una consola de comandos**
* **Ubicarse en la ruta del proyecto**
* **Ejecutar el siguiente comando:** \
**```mvn clean install -Denv = ambiente  -Dserver = servidor_aplicaciones  -DcodCliente = codigo_cliente```**


	Reemplazar los parametros con los siguientes permitidos 

	| Parametro | Valores (Permitidos) |
	| --- | --- |
	| `ambiente` | **local - desa - test - prod** |
	| `servidor_aplicaciones` | **weblogic - jboss** |
	| `codigo_cliente` | **AAA - ASAA - AMAGUA - MZL** |
