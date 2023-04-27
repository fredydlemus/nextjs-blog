---
title: "Protege tus rutas en Angular con los Guards: ¡controla el acceso y la salida de rutas de manera eficiente!"
<<<<<<< HEAD
date: "2023-04-13"
---
=======
date: "2023-04-20"
description: "Si buscas una forma de aumentar la seguridad de tu aplicación Angular, los Guards son una herramienta clave para controlar el acceso a tus rutas. En este blog, te explicamos cómo funcionan los Guards y cómo puedes utilizarlos para verificar quién tiene acceso a qué rutas. Además, te mostraremos cómo redirigir a usuarios no autorizados a otras partes de tu aplicación. ¡Aprende todo lo que necesitas saber sobre los Guards en Angular aquí!"
image: "/images/posts/angular-wallpaper-3.svg"
shareImage: "/images/posts/code-wallpaper.jpg"
tag: "Angular"
---

Estás buscando una forma de controlar el acceso a tus rutas en Angular? Los Guards son la herramienta perfecta para ello. En este blog, te explicaré cómo funcionan los Guards y cómo puedes utilizarlos para aumentar la seguridad de tu aplicación. ¡Con los Guards, podrás verificar quién tiene acceso a qué rutas y redirigir a usuarios no autorizados a otras partes de tu aplicación!

Para crear un Guard en Angular, lo primero que debes hacer es crear un nuevo servicio que albergará el código de tu Guard, en mi caso el nombre del servicio sera AuthGuard.

Es importante tener en cuenta que, para poder utilizar los Guards en tu aplicación, debes importar la clase CanActivate desde el módulo @angular/router y aplicarla como interfaz al servicio que has creado.

```javascript {monokai}
import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable({ provideIn: "root" })
export class AuthGuard implements CanActive {
  canActivate(): boolean {}
}
```

Cuando creas el servicio del Guard en Angular, debes implementar en el un método llamado canActivate() que será el encargado de determinar si un usuario tiene acceso a una ruta o no. Este método debe retornar un valor booleano: true si el usuario tiene acceso a la ruta y false si no es así.

Por lo tanto, dentro del método canActivate(), deberás escribir el código necesario para verificar si el usuario cumple con los requisitos de acceso a la ruta en cuestión. Por ejemplo, puedes verificar si el usuario ha iniciado sesión, si tiene ciertos permisos o roles, etc.

Si el usuario cumple con los requisitos de acceso, el método canActivate() debe retornar true. En caso contrario, debes redirigir al usuario a otra ruta y retornar false.

```javascript {monokai}
canActivate(route: ActivatedRouteSnapshot, state:
RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
    return this.authService.isAuthenticated()
        .then(
            (authenticated: boolean) =>{
                if (authenticated){
                    return true;
                }else{
                    this.router.navigate(['/']);
                    return false;
                }
            }
        )
}
```

Por ultimo para utilizar un Guard en una ruta determinada en Angular, debes añadir la propiedad canActivate a la configuración de la ruta en cuestión. Esta propiedad es un arreglo que debe contener el servicio que has creado para implementar el Guard.

```javascript {monokai}
const appRoutes: Routes = [
  {
    path: "servers",
    canActivate: [AuthGuard],
    component: ServersComponent,
  },
];
```

Con todo esto ya lograremos tener una ruta protegida, que ejecute un guard para confirmar si la misma es accesible o no, pero tambien en muchas ocasiones queremos proteger las salidas de nuestras rutas.

Los Guards de Angular también te permiten controlar si un usuario puede abandonar una ruta o no. Esto es útil, por ejemplo, para evitar que un usuario cierre una página en medio de un proceso importante sin guardar los cambios.

Para controlar la salida de una ruta en Angular, debes crear un Guard en un nuevo servicio que implemente la interfaz CanDeactivate. Esta interfaz es similar a CanActivate, pero se ejecuta cuando un usuario intenta abandonar una ruta en lugar de acceder a ella.

```javascript {monokai}
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({ provideIn: "root" })
export class CanDeactivateGuard
  implements CanDeactivate<CanComponentDeactivate>
{
  canDeactivate(component: CanComponentDeactivate) boolean{
    return component.canDeactivate();
  }
}
```

Como puedes observar el metodo CanDeactivate recibe como parámetro el componente que se está renderizando en la ruta y dentro de este componente, añade un método llamado canDeactivate() que contenga el código necesario para verificar si el usuario puede abandonar la ruta o no. Este método debe retornar un valor booleano: true si el usuario puede abandonar la ruta y false si no es así.

Importante!: Cuando utilizas un Guard que implementa la interfaz CanDeactivate para controlar la salida de una ruta en Angular, tienes la opción de ejecutar el código de verificación de acceso tanto en el servicio que implementa el Guard como en el componente que se está renderizando en la ruta.

La ventaja de ejecutar el código de verificación de acceso en el componente es que, puedes utilizar los atributos del componente para definir tu lógica de verificación. Esto te permite tener un mayor control sobre el proceso de verificación y hacerlo más específico para cada componente.

Por otro lado, si ejecutas el código de verificación de acceso en el servicio que implementa el Guard, puedes reutilizar el mismo código para varios componentes diferentes. Esto puede ser más eficiente y mantenible, especialmente si tienes varios componentes que comparten los mismos requisitos de verificación de acceso.

En resumen, la elección de dónde ejecutar el código de verificación de acceso depende de tus necesidades y preferencias. Puedes hacerlo en el componente para tener un mayor control sobre el proceso o en el servicio para reutilizar el código en varios componentes.

```javascript {monokai}
canDeactivate(): boolean | Observable<boolean> | Promise<boolean>{
    if(!this.allowEdit){
        return true;
    }
    if((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved){
        return confirm('Do you want to discard the changes?')
    }else{
        return true;
    }
}
```

Aqui puedes ver el metodo canDeactivate aplicado en el componente que se renderiza segun la ruta, el cual en mi ejemplo retorna true en caso de que el usuario haya guardado cambios o en el otro caso retorna un confirm con el cual se le pregunta al usuario si desea abandonar la ruta sin que sus cambios se hayan guardado.

Por ultimo en la configuración de la ruta, añade la propiedad canDeactivate y pasa como argumento el servicio que has creado para implementar el Guard.

```javascript {monokai}
const appRoutes: Routes = [
  {
    path: "servers/edit",
    canDeactivate: [CanDeactivateGuard],
    component: EditServerComponent,
  },
];
```

En este post hemos aprendido cómo asegurar nuestras rutas en Angular utilizando Guards. Hemos visto cómo utilizar los Guards CanActivate y CanDeactivate para controlar el acceso y la salida de las rutas, respectivamente. Además, hemos visto cómo implementar estos Guards y cómo aplicarlos en la configuración de las rutas.

Con esto, ya sabes cómo proteger tus rutas en Angular y puedes aplicar esta técnica para asegurar que solo se accede o se abandona una ruta bajo ciertas condiciones específicas. Esto te permitirá tener mayor control sobre el flujo de tu aplicación y asegurar que solo se accede a ciertas áreas o se realizan ciertas acciones si se cumplen ciertos requisitos previamente definidos. ¡Espero que hayas disfrutado aprendiendo sobre este tema!
>>>>>>> 3775fad7ab57d712a75452d639846a83e87b698c
