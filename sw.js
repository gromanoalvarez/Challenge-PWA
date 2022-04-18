// Cambia esto a tu nombre de repositorio 
var GHPATH =  '/Challenge-PWA' ; 
 
// Elija un nombre de prefijo de aplicación diferente 
var APP_PREFIX =  'gppwa_' ; 
 
// La versión del caché. Cada vez que cambie cualquiera de los archivos 
// necesita cambiar esta versión (version_01, version_02…). 
// ¡Si no cambia la versión, el trabajador del servicio le dará a sus 
// usuarios los archivos antiguos! 
var VERSION =  'version_00' ; 
 
// Los archivos para que estén disponibles para su uso sin conexión. asegúrese de agregar 
// otros a esta lista 
var URLS =  [     
  `${ GHPATH }/` , 
  `${ GHPATH }/índice.html` , 
  `${ GHPATH }/css/estilos.css` , 
  `${ GHPATH }/js/app.js` ] ;
