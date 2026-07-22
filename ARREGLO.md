# Tu templo YA es una app — solo tenía un bug que lo impedía

Revisé tu repo y tu templo ya tiene TODO lo de PWA hecho: manifiesto,
service worker (`sw.js`), botón "Instalar App del Templo" (`js/pwa.js`),
y las meta etiquetas. Por eso sentías que "casi". Solo había **un
renglón con un error** que hacía que nada se activara.

## 1) EL ARREGLO IMPORTANTE  (esto es lo que lo destraba)

En `js/pwa.js`, línea 13, dice:

    navigator.serviceWorker.register('/sw.js')

La barra inicial `/` apunta a la RAÍZ del dominio
(`bruxatarot.github.io/sw.js`), pero tu `sw.js` vive en
`bruxatarot.github.io/templo/sw.js`. Así que el registro fallaba en
silencio y el service worker nunca se activaba → sin él, Android no
ofrece "Instalar" y no funciona sin conexión.

Cámbialo por la ruta relativa (sin la barra):

    navigator.serviceWorker.register('sw.js')

Ese es EL cambio clave. Con eso, tu app se instala.

## 2) Íconos nítidos  (para que el ícono no salga estirado)

Tu `manifest.json` decía que `bruxa-tarot.png` era 512x512, pero en
realidad es 843x1264 (vertical). Chrome espera íconos CUADRADOS, así que
el ícono salía recortado/deformado.

Te dejé íconos cuadrados hechos con tu propio logo, en la carpeta
`images/` de este paquete:
- `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`,
  `apple-touch-icon-180.png`

Súbelos a tu carpeta `images/` del repo (son archivos nuevos, no pisan
nada tuyo), y reemplaza tu `manifest.json` por el de este paquete (ya
apunta a los íconos correctos).

En `index.html`, cambia también esta línea:

    <link rel="apple-touch-icon" href="images/bruxa-tarot.png">

por:

    <link rel="apple-touch-icon" href="images/apple-touch-icon-180.png">

## 3) Probar

1. Sube los cambios (pwa.js, manifest.json, los íconos nuevos, index.html).
2. Abre `bruxatarot.github.io/templo/` en el teléfono.
   - **iPhone (Safari):** Compartir → "Añadir a pantalla de inicio".
   - **Android (Chrome):** aparecerá el botón dorado "Instalar App del
     Templo" (o menú ⋮ → "Instalar app").
3. Se abre a pantalla completa, con tu ícono, y funciona sin conexión.

## Nota
Tu `js/pwa.js` solo se carga en `index.html`. Si quieres que las demás
páginas (historias, muro, recetas...) también funcionen sin conexión al
abrirlas directo, agrega `<script src="js/pwa.js"></script>` al final de
cada una. No es obligatorio: con instalar desde el index basta para que
el service worker cuide todo el /templo/.
