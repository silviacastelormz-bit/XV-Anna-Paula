ANNA PAULA · INVITACIÓN DIGITAL XV AÑOS

Invitación móvil rosa y oro, con textura de papel, flores acuareladas y fotografías integradas entre sus secciones.
Abrir index.html en un navegador para probar la invitación.
Para publicar, subir la carpeta completa conservando index.html, styles.css, script.js y assets/.

HERO Y FOTOGRAFÍAS
- El hero usa assets/polie-hero-mobile.jpeg en todas las pantallas para conservar el formato móvil.
- El calendario es una ilustración estática en assets/calendario-diciembre-2026.png, con el 11 de diciembre de 2026 marcado con un corazón.
- Las cinco fotografías familiares ocupan todo el ancho del diseño móvil, sin marcos ni pies de foto. El cierre lleva una foto de sesión dentro del espejo dorado.
- Las decoraciones de la lámina familiar están recortadas sobre transparencia en assets/cutouts/ y aparecen a lo largo de la invitación.
- Las transiciones usan las tres tiras rasgadas extraídas del ZIP familiar, en assets/papel-rasgado-1.png a assets/papel-rasgado-3.png. El adorno floral se superpone entre ambas secciones desde assets/flores-separador.png.
- Flores, tiras de papel y recortes se insertan directamente como etiquetas img en index.html. Para cambiarlos, edita su atributo src; para moverlos o cambiar tamaño/rotación/opacidad, ajusta las reglas comentadas en styles.css. script.js ya no crea esos adornos.
- No se repiten adornos de corona en la interfaz; las coronas que forman parte de las fotografías permanecen.

PERSONALIZACIÓN
Editar script.js:
- date: fecha/hora local del evento en formato ISO.

En index.html actualizar cuando se confirme nueva información:
- Direcciones, horarios o enlaces de mapas.
- Para personalizar cada copia, cambia el texto “1 pase” en el párrafo con clase assigned-passes de index.html por la cantidad de pases de esa invitación. El botón abre el Google Form configurado en index.html.
- Fotos y enlace de Google Drive, si se desea reemplazarlos o añadir más.

El número de pases se edita directamente en el HTML de cada copia; no se modifica desde JavaScript.
La cuenta regresiva aparece inmediatamente después de la lista de padrinos.
Las secciones conservan el estilo rosa empolvado y oro, títulos caligráficos, el marco móvil de 430 px y los bordes de papel recortado.

MÚSICA Y UBICACIONES
- Se eliminó la sección “Nuestra canción”. El botón flotante reproduce o pausa el archivo local assets/please.mp3; no muestra un video y comienza solo cuando el invitado toca reproducir.
- Por las restricciones de reproducción automática de los navegadores, el audio comienza cuando la persona toca reproducir; la página no fuerza sonido al abrirse.
- Las tarjetas de ceremonia y recepción muestran las fotos proporcionadas y usan botones “Cómo llegar” con enlaces directos de Google Maps.
