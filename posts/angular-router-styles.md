---
title: "Eleva tu maestría de Angular con el Router: cambia estilos según la ruta"
date: "2023-04-20"
description: "Aprende a personalizar los estilos de tus componentes en función de la ruta en la que te encuentres con la directiva routerLinkActive del Router de Angular. En este post, te explicamos cómo utilizarla para hacer que cada ruta tenga su propio estilo y mejorar así tus aplicaciones de Angular. ¡Empecemos!"
image: "/images/posts/angular-wallpaper-1.svg"
shareImage: "/images/posts/angular-wallpaper-1.png"
tag: "Angular"
---

Si estás trabajando con el Router de Angular, es posible que hayas notado que a veces deseas personalizar los estilos de tus componentes dependiendo de la ruta en la que te encuentres. Afortunadamente, el Router de Angular nos brinda una herramienta para lograrlo: la directiva routerLinkActive. En este post, te mostraré cómo utilizar routerLinkActive para darle vida a tus aplicaciones de Angular y hacer que cada ruta tenga su propio estilo. ¡Empecemos!

Imagina que tenemos un menú con botones que nos llevan a diferentes rutas y muestran componentes distintos debajo del menú al hacer clic en ellos.

![angular-menu](/images/posts/angular-router-styles/angular-menu-1.png)

```html {monokai}
<div class="container">
  <div class="row">
    <div class="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
      <ul class="nav nav-tabs">
        <li role="presentation">
          <a routerLink="/">Home</a>
        </li>
        <li role="presentation">
          <a routerLink="products">Products</a>
        </li>
        <li role="presentation">
          <a routerLink="users">Users</a>
        </li>
      </ul>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
        <router-outlet></router-outlet>
      </div>
    </div>
  </div>
</div>
```

Nuestro objetivo es que, al hacer clic en un botón del menú, además de redirigir a la ruta correspondiente, también cambie de estilo para mostrar al usuario que se encuentra activo. Podemos agregar o quitar clases para lograrlo y es aquí donde entra en juego la directiva routerLinkActive.

La directiva routerLinkActive nos permite detectar si la ruta vinculada en el elemento se encuentra activa y, en consecuencia, especificar una o más clases de CSS. De esta manera, podemos personalizar el estilo de nuestros elementos en función de la ruta en la que nos encontramos. Esta directiva es muy útil para dar feedback visual al usuario sobre la ubicación actual en la aplicación y para hacer que la navegación sea más intuitiva.

Para utilizar la directiva routerLinkActive, debes agregarla a la etiqueta vinculada a la ruta que quieres detectar. Cuando la ruta vinculada esté activa, se agregará la clase «active» a la etiqueta. Si el usuario navega a cualquier otra ruta, se eliminará la clase «active».

```html {monokai}
...

<ul class="nav nav-tabs">
  <li role="presentation" routerLinkActive="active">
    <a routerLink="/">Home</a>
  </li>
  <li role="presentation" routerLinkActive="active">
    <a routerLink="products">Products</a>
  </li>
  <li role="presentation" routerLinkActive="active">
    <a routerLink="users">Users</a>
  </li>
</ul>
```

Aqui se encuentra en «/»

![angular-menu](/images/posts/angular-router-styles/angular-menu-2.png)

Aqui se encuentra en «/products»

![angular-menu](/images/posts/angular-router-styles/angular-menu-3.png)

y Aqui en «/users»

![angular-menu](/images/posts/angular-router-styles/angular-menu-4.png)

Sin embargo tenemos un problema el cual es muy comun, y es que el botón Home siempre se muestra activo, incluso cuando estamos en otras rutas. Esto sucede porque el botón de Home está vinculado a la ruta «/» y, como nuestras otras rutas también contienen «/», el Router de Angular las toma como activas y activa el botón de Home.

Para solucionar este problema, podemos utilizar la opción routerLinkActiveOptions de la directiva routerLinkActive. Esta opción nos permite especificar que Angular tome en cuenta la ruta exacta al determinar cuándo se deben agregar o eliminar las clases. De esta manera, podemos asegurarnos de que el botón de Home se activará solo cuando estemos en la ruta raíz, y no cuando estemos en otras rutas que contengan «/».

```html {monokai}
...

<ul class="nav nav-tabs">
  <li
    role="presentation"
    routerLinkActive="active"
    [routerLinkActiveOptions]="{exact: true}"
  >
    <a routerLink="/">Home</a>
  </li>
  <li role="presentation" routerLinkActive="active">
    <a routerLink="products">Products</a>
  </li>
  <li role="presentation" routerLinkActive="active">
    <a routerLink="users">Users</a>
  </li>
</ul>
```

![angular-menu](/images/posts/angular-router-styles/angular-menu-5.png)

Espero que este post te haya sido útil y hayas aprendido algo sobre cómo utilizar la directiva routerLinkActive en Angular. Si tienes alguna pregunta adicional o necesitas más ayuda, no dudes en hacerme saber. ¡Hasta la próxima!
