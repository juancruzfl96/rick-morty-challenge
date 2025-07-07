# Rick & Morty Challenge

Este proyecto es un desafío técnico que consume la API pública de [Rick and Morty](https://rickandmortyapi.com/) para mostrar personajes y episodios de la serie. El objetivo es practicar buenas prácticas de desarrollo, código limpio, UI/UX cuidada y testeo.

## 🚀 Tecnologías utilizadas

- **Next.js** (v15)
- **React** (v19)
- **TypeScript**
- **Tailwind CSS** (v4) para los estilos
- **Jest + React Testing Library** para tests unitarios
- **API pública de Rick and Morty**
- **Vercel** (para deploy, opcional)

---

## 📌 Funcionalidades principales

✅ Listado paginado de personajes en dos columnas:
- **Character #1**
- **Character #2**

✅ Cada personaje se muestra en una card con:
- Imagen
- Nombre
- Status
- Especie

✅ Búsqueda por nombre de personaje.

✅ Modal con detalle del personaje (origen, género, ubicación, cantidad de episodios).

✅ Al seleccionar un personaje en ambas columnas se habilita:
- Listado de episodios de **Character #1**
- Listado de episodios de **Character #2**
- Listado de episodios compartidos

✅ Diseño responsive (funciona en desktop y mobile).

✅ Test unitarios de los principales componentes.

---

## 🧪 Tests

Se realizaron tests unitarios sobre:
- `CharacterCard` → Verifica render y click en la card.
- `Pagination` → Verifica navegación entre páginas.
- `EpisodesSection` → Verifica render de episodios.
- `SearchWithTitle` → Verifica render y cambios en el input.

Para correr los tests:

```bash
npm run test
