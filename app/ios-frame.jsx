// Bruxa Tarot — full-screen passthrough shell.
// Reemplaza el marco de iPhone del prototipo: en un teléfono real la app
// llena toda la pantalla y el propio sistema pone la barra de estado/notch.
var React = window.React;

function IOSDevice(props) {
  return React.createElement(
    'div',
    {
      style: {
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        minHeight: '100vh',
        height: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        background: '#04060f',
        WebkitTapHighlightColor: 'transparent',
      },
    },
    props.children
  );
}

// Stubs inofensivos por si el prototipo referencia algún otro componente del marco.
function IOSStatusBar() { return null; }
function IOSNavBar(props) { return props && props.children ? props.children : null; }
function IOSGlassPill(props) { return props && props.children ? props.children : null; }
function IOSList(props) { return props && props.children ? props.children : null; }
function IOSListRow(props) { return props && props.children ? props.children : null; }
function IOSKeyboard() { return null; }

Object.assign(window, {
  IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard,
});
