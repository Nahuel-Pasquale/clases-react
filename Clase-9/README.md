## Clase 9

En este repositorio se encuentra el proyecto de Pixhelados para la clase 9 del programa de Front End Avanzado de Nucba.

## Pixhelados 馃崹
Se trata de una simple aplicaci贸n web que contiene las t铆picas rutas de productos, productos anidados, contacto y login. Esta 煤ltima con su funcionalidad de ruta privada.
La UI est谩 desarrollada con la libreria: https://storybook.react95.io/?path=/story/anchor--default

![App Screenshot](https://res.cloudinary.com/dcatzxqqf/image/upload/v1657584185/coding/Readmes/Reaact/Clase-8/Clase-8-Main_or9msk.png)

## Temario de la clase

- Introducci贸n a React Router
- React router v6: Instalaci贸n
- Componentes BrowserRouter, Routes y Route
- Declaraci贸n de rutas, 404, Navigate
- Link y NavLink
- Rutas anidadas y din谩micas.
- useParams
- Funcionalidades de React Router:  useLocation, useNavigate, useMatch.
- Protecci贸n de rutas: usuario logueado o usuario no logueado. Pixel Helados


## Utilizaci贸n

Debe clonar este proyecto e iniciarlo en la rama por default Starter.

```bash
  git clone git@github.com:Nucba-React/Clase-9.git
```

En segundo lugar, se mueven a la rama Pixhelados

```bash
  git checkout Pixhelados
```

Luego, instalan todas las dependencias necesarias para que funcione.

```bash
  npm install
```

Por 煤ltimo, inician el proyecto final con el siguiente comando:

```bash
  npm run start
```

## Estructura del proyecto terminado

El proyecto est谩 ideado para copiar y pegar los componentes con sus estilos. Mientras en clase se realiza toda la l贸gica vinculada a React Router.
En la carpeta components vamos a encontrar algunos archivos con l贸gica, y otros tantos de UI directa de la libreria.

Archivos con l贸gica

| Archivo    | Descripci贸n                |
| :--------|:------------------------- |
| `Button.js` | Boton para reutilizar |
| `FieldSet.js` | Componente para contacto y login |
| `/input` | Componentes que forman al FieldSet |
| `LinkItem.js` | Rutas para el navbar con la l贸gica para determinar su estado active |
| `Navbar.js` | Componente Navbar de la aplicaci贸n |
| `ProductCard.js` | Estilos del card para la ruta /products con el contenido din谩mico |
| `ProgressBar.js` | Componente que consume el hook de la libreria react95 y se usa en la 404 |
| `ProtectedRoute.js` | Componente encargado del manejo de las rutas protegidas |


Carpeta context
| Archivo    | Descripci贸n                |
| :--------|:------------------------- |
| ` AuthContext.js` | Archivo que maneja la l贸gica para utilizar en las rutas privadas |

Carpeta data
| Archivo    | Descripci贸n                |
| :--------|:------------------------- |
| `productsData.js` | Productos hardcodeados de /products |

Carpeta hooks
| Archivo    | Descripci贸n                |
| :--------|:------------------------- |
| `useProgress.js` | Logica para el componente ProgressBar de react95 (Se debe mostrar la l贸gica pero no desarrollarla)  |

Carpeta pages
| Archivo    | Descripci贸n                |
| :--------|:------------------------- |
| `Contacto.js` | P谩gina para complementar el header. Sin funci贸n alguna m谩s que mostrar la navegaci贸n |
| `Error404.js` | P谩gina destinada al error 404. Aqu铆 es donde se utiliza el componente Progressbar. |
| `Home.js` | Home de la aplicaci贸n |
| `Login.js` | P谩gina para iniciar sesi贸n.  |
| `Product.js` | P谩gina con el map de la data de los productos. |
| `Section.js ` | P谩gina con una vista d铆namica al ingresar a cada producto |
| `User.js` | P谩gina para los usuarios que se registren correctamente |

Carpeta routes
| Archivo    | Descripci贸n                |
| :--------|:------------------------- |
| `Routes.js` | Archivo que contiene todas las rutas de la app. Las protegidas, d铆namicas, anidadas y 404. Se importa "Routes as ReactDomRoutes" para no tener conflictos con el nombre propio del archivo routes.js |

Carpeta styles
| Archivo    | Descripci贸n                |
| :--------|:------------------------- |
| `GlobalStyles.js` | Estilos globales de la aplicaci贸n  |

Carpeta /
| Archivo    | Descripci贸n                |
| :--------|:------------------------- |
| `index.js` | Theme inicial de la aplicaci贸n proveniente de react95. Se ordenan los providers y el BrowserRouter para que tenga acceso a toda la aplicaci贸n. |


## Estructura de la rama starter

En esta rama se encuentra la versi贸n minificada del proyecto terminado. Es el template inicial para comenzar la clase, y luego de la explicaci贸n, ir modificando los archivos necesarios para llegar a la versi贸n final del proyecto.

Archivos hardcodeados
| Archivo    | Descripci贸n                |
| :--------|:------------------------- |
| `index.js` | ----------------------- |
| `LinkItem.js` | ----------------------- |
| `Navbar.js` | ----------------------- |
| `NavBarStyles.js` | ----------------------- |
| `ProductCard.js` | ----------------------- |
| `ProtectedRoute.js` | Eliminado |
| `AuthContext` | Eliminado |
| `Error404.js` | ----------------------- |
| `Login.js` | ----------------------- |
| `Product.js` | ----------------------- |
| `Section.js` | ----------------------- |
| `User.js` | ----------------------- |
| `Routes.js` | ----------------------- |
