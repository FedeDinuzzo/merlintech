// "use client"
// import { useEffect, useState } from 'react';

// // Simulamos una función de solicitud del lado del servidor para obtener la URL del video
// async function getVideoSrc() {
//   // Aquí deberías tener la lógica real para obtener la URL del video desde tu fuente de datos, como una base de datos o una API externa.
//   return 'https://my.spline.design/distortedspiralcopy-d85ad473f4a28e665eaab8ae4f04118b/';
// }

// export default function ServerIframe() {
//   const [src, setSrc] = useState(null);

//   useEffect(() => {
//     const fetchVideoSrc = async () => {
//       try {
//         const videoSrc = await getVideoSrc();
//         setSrc(videoSrc);
//       } catch (error) {
//         console.error('Error al obtener la URL del video:', error);
//       }
//     };

//     fetchVideoSrc();
//   }, []);

//   return src ? (
//     <iframe
//       className="w-full"
//       src={src}
//       title="Video"
//       allowFullScreen
//       style={{ border: 'none' }} // Aplica estilos inline para eliminar el borde del iframe
//     />
//   ) : (
//     <p>Cargando video...</p>
//   );
// }