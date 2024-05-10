import React from 'react'

// Simulamos una función de solicitud del lado del servidor para obtener la URL del video
async function getVideoSrc() {
  // URL del video desde tu fuente de datos, puede ser una base de datos, una API externa, etc.
  return 'https://my.spline.design/distortedspiralcopy-d85ad473f4a28e665eaab8ae4f04118b/';
}

export default async function ServerIframe() {
  const src = await getVideoSrc()

  return <iframe className="absolute w-full h-[1440px]" src={src} frameborder="0" allowfullscreen />
}