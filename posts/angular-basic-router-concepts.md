---
title: "Conceptos básicos de enrutamiento y navegación en aplicaciones web con Angular"
date: "2023-04-19"
description: "Desarrollar una aplicación con Angular implica crear una SPA (Single Page Application), donde el servidor envía un archivo HTML vacío y el contenido se renderiza mediante JavaScript. Para agregar diferentes páginas, necesitas el router de Angular, el cual te permite controlar qué componentes se muestran según la ruta en el navegador. En este post, te explicamos todo lo que necesitas saber al respecto. ¡Sigue leyendo!"
image: "/images/posts/angular-wallpaper-2.svg"
shareImage: "/images/posts/code-wallpaper.jpg"
tag: "Angular"
---

Cuando desarrollas una aplicación con Angular, estás creando una SPA (Single Page Application). Esto significa que el servidor nos envía un archivo HTML vacío y luego mediante JavaScript se renderiza el contenido de la aplicación. Si quieres añadir diferentes páginas, debes utilizar el router de Angular para controlar qué componentes se muestran según la ruta en el navegador.

Para especificar las rutas y los componentes que se deben renderizar en tu aplicación, el primer paso es crear una constante en el archivo app.module.ts donde se especifique un arreglo de tipo Routes. Cada elemento del arreglo representa una ruta y el componente correspondiente que se debe renderizar cuando esa ruta esté en el navegador. Esto te permite definir de manera explícita cómo se navega por tu aplicación y qué se muestra a los usuarios en cada momento.

```javascript {monokai}
import { Routes } from "@angular/router";

const appRoutes: Routes = [
  { path: "", component: AppComponent },
  { path: "users", component: UsersComponent },
];
```

Una vez que hayas definido tu arreglo de rutas, debes importarlo en el archivo app.module.ts y utilizar el módulo RouterModule y su método forRoot para proporcionar tu arreglo de rutas como parámetro. Esto te permitirá navegar a través de tu aplicación y mostrar los componentes correspondientes a los usuarios según la ruta que estén visitando.

```javascript
import {
    Routes,
    RouterModule }
from "@angular/router";

const appRoutes: Routes = [
  { path: "", component: AppComponent },
  { path: "users", component: UsersComponent },
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
});
export class AppModule {}

```

Para que tu enrutador funcione, debes colocar la directiva router-outlet de Angular en la vista donde quieres que se muestren los componentes correspondientes a cada ruta. Esta directiva chequeará la ruta del navegador y, dependiendo de la ruta, cambiará el componente que se muestra en la vista según el arreglo de rutas que hayas definido previamente. En mi ejemplo usare la directiva en la vista de mi componente principal: app.component.html

```javascript
<router-outlet></router-outlet>
```

Si tu ruta es la raíz de tu aplicación web (es decir, si el usuario accede a tu sitio sin especificar una ruta específica, como «midominio.com»), se mostrará el componente HomeComponent. Si, por otro lado, el usuario accede a la ruta «/users» (es decir, «midominio.com/users»), se mostrará el componente UsersComponent. Cuando el enrutador detecta una ruta específica en la dirección del navegador, busca en el arreglo de rutas y encuentra el componente correspondiente para mostrarlo en la vista.

Cuando quieres navegar de una ruta a otra utilizando un enlace (una etiqueta <a> de HTML), debes utilizar la directiva routerLink de Angular. Esta directiva te ayudará a navegar entre rutas al pulsar el enlace, pero sin recargar la página (no como un atributo href). De esta manera, puedes mantener la fluidez de tu aplicación mientras el usuario navega a través de ella.

```javascript
<a routerLink="/users">Go to Users</a>
```

¿Sabías que el carácter «/» al inicio de una ruta en una aplicación web indica que la ruta es absoluta? Esto es importante porque determina cómo se interpreta y procesa la ruta. En un próximo post, profundizaremos en qué significa tener una ruta absoluta y cómo puede afectar la navegación y el funcionamiento de tu aplicación. ¡Mantente atento!

para concluir con este post veremos cómo navegar mediante un evento, como por ejemplo un clic en una etiqueta button. Para lograrlo, debes crear un event binding en la etiqueta que ejecute una función declarada en el archivo de lógica del componente correspondiente (por ejemplo, si tu button está en la vista home.component.html, tu función debe estar en home.component.ts).

```javascript
<button (click)="onNavigate()">
    Go to other page
</button>
```

En este archivo también debes inyectar el módulo Router en el constructor del componente para poder utilizarlo en el componente.

Luego Una vez injectado el modulo Router, en la función que se ejecuta al suceder el evento (en este caso un clic) llamas al método navigate del módulo Router y le proporcionas como parámetro la ruta a la que deseas navegar, en forma de arreglo. De esta manera, puedes controlar la navegación en tu aplicación web y mostrar diferentes componentes a los usuarios según la ruta que estén visitando.

```javascript
import { Routes } from "@angular/router";

...

export class AppComponent {
    constructor(private router: Router){}

    onNavigate(){
        this.router.navigate(['/servers']);
    }
}
```

¡Llegamos al final pero esta es solo la punta del iceberg cuando se trata de la navegación con el enrutador de Angular! Hay mucho más por descubrir y aprender sobre cómo controlar la navegación en tu aplicación web y cómo mostrar diferentes componentes a los usuarios según la ruta que estén visitando. ¡Mantente atento para futuros posts donde profundizaremos en todo lo que el enrutador de Angular tiene para ofrecer!

Muchas gracias por leer!
