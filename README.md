# Frontend exercise - Angular
## Alexis Caballero


## Características

La aplicación trabaja con un procesador de imagen llamado imgix el cual es un procesador de imágenes online. Se ha utilizado Angular 12 y Bootstrap v4. Como el principal problema a corregir era la incomodidad al tener muchas propiedades, se ha colocado la lista de propiedades a la izquierda de modo que la imagen siempre esté visible para el usuario y pueda ver los cambios en tiempo real el cual es el principal atractivo de Imgix.
Además de ello, cuenta con las siguientes características.
- Se puede descargar la imagen y ver el link generado.
- El listado de propiedades es dinámico y cuenta con las opciones "Deshacer" y "Rehacer".
- Diseño responsivo.
- Cuenta con las propiedades de rotación, ajuste y tamaño.
- Valores dinámicos: Cuando hay una cantidad limitada de valores permitidos(como Invert o Flip Axis) el input pasará a ser un select con las variables disponibles.

## Instalación

Se requiere tener instalado Angular para que la aplicación funcione en local.


```sh
npm install -g @angular/cli
```

Una vez instalado Angular, para correr la aplicación se ejecutarán los siguientes comandos:

```sh
npm install
ng serve -o
```
Ésto correrá la aplicación en el navegador por defecto en el puerto 4200 (http://localhost:4200/)
