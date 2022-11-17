## Clase 8

En este repositorio se encuentra el proyecto de Pokecards que consume la api https://pokeapi.co/ para la clase 8 del programa de Front End Avanzado de Nucba.

Valores Iniciales
![App Screenshot](https://res.cloudinary.com/dcatzxqqf/image/upload/v1657580611/coding/Readmes/Reaact/Clase-7/Clase-7-Axios_fwbj2j.png)

Busqueda de Pokemon
![App Screenshot](https://res.cloudinary.com/dcatzxqqf/image/upload/v1657580611/coding/Readmes/Reaact/Clase-7/Clase-7-Axios2_tw6pb7.png)

## Temario de la clase

- Fetching: como obtener información de una API Externa (Fetch / Axios)
- Custom Hooks: como crear un hook personalizado y como utilizarlo (useAxios / useFetch)
- Redux Thunk 
- Crear una aplicación con un llamado asincrónico uniendo Axios, Redux, useAxios.



## Utilización

Debe clonar este proyecto e iniciarlo en la branch por defecto starter. Allí se encuentra la aplicación base funcionando, sin la lógica de la petición a la API.

```bash
  git clone git@github.com:Nucba-React/Clase-8.git
```

Empezaremos con el código de la rama Axios, donde estará la misma aplicación pero con la lógica del fetch a la API usando Axios. 

```bash
  git checkout Axios
```

Luego, en la rama CustomHook se encuentra la lógica del fetch a la API abstraída. 

```bash
  git checkout CustomHook
```

Por último, tenemos la misma aplicación migrada a Redux, utilizando ReduxThunk para manejar las peticiones asíncroncas en la siguiente rama.

```bash
  git checkout ReduxThunk
```


#### Carpetas nuevas en la rama ReduxThunk

| Carpeta    | Descripción                |
| :--------|:------------------------- |
| `actions` | ------------------------ |
| `reducers` | ------------------------ |
| `store` | ------------------------ |
| `types` | ------------------------ |





