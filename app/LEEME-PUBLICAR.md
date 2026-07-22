# Bruxa Tarot — publicar e instalar en el teléfono

Esta carpeta ya es una **app web instalable (PWA)** completa y autónoma:
funciona sin conexión, se abre a pantalla completa y pone su propio ícono
en la pantalla de inicio. No necesita Mac, ni App Store, ni pagar nada.

## 1. Subir a GitHub Pages

1. Crea un repositorio (o usa una carpeta dentro del que ya tienes).
2. Sube **todo el contenido de esta carpeta** a la raíz del repo:
   `index.html`, `support.js`, `ios-frame.jsx`, `manifest.webmanifest`,
   `sw.js`, y las carpetas `vendor/`, `js/`, `images/`, `icons/`.
3. En el repo: **Settings → Pages → Build and deployment →
   Deploy from a branch → Branch: main / (root) → Save**.
4. Espera 1–2 minutos. GitHub te dará una dirección tipo:
   `https://bruxatarot.github.io/<nombre-del-repo>/`

> Tiene que ser **https** (GitHub Pages ya lo es). Abrir el `index.html`
> con doble clic desde el disco **no** funciona: el navegador bloquea el
> modo sin conexión y algunas cargas.

## 2. Instalarla en el teléfono

- **iPhone (Safari):** abre la dirección → botón **Compartir** →
  **"Añadir a pantalla de inicio"**.
- **Android (Chrome):** abre la dirección → menú **⋮** →
  **"Instalar app"** o **"Añadir a pantalla de inicio"**.

Aparece el ícono dorado ✦ y se abre como app, sin barra del navegador.
Después de la primera vez, funciona aunque no haya internet.

## 3. Probarla en la compu antes de subir (opcional)

Dentro de esta carpeta, en la terminal:

    python3 -m http.server 8080

Luego abre `http://localhost:8080` en el navegador.

## 4. Actualizarla más adelante

Edita los archivos y vuelve a subirlos. **Importante:** cada vez que
cambies algo, abre `sw.js` y sube el número de versión
(`bruxa-tarot-v1` → `bruxa-tarot-v2`, etc.). Así los teléfonos que ya
tienen la app descargan la versión nueva en lugar de la guardada.

## Notas

- El contenido está en **español**. El selector de idiomas es visual.
- **"Continuar como invitada"** entra sin cuenta.
- Modo Guardiana: iniciar con el correo `bruxa@bruxatarot.com`
  (o un correo que empiece con `admin`).
- El botón de donación (Ko-fi) y "Frecuencias Sagradas" (YouTube) abren
  en el navegador, fuera de la app.
- React, ReactDOM y Babel viven en `vendor/` (por eso funciona sin
  internet); no hace falta tocarlos.

## Si algún día la quieres en la Play Store

Desde esta misma PWA se puede generar el paquete de Google Play con
**PWABuilder** (pwabuilder.com) — cuenta de desarrollador de Google: $25
una sola vez. Avísame y te guío.
