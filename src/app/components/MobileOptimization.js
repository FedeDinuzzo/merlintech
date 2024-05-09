"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image';

const MobileOptimization = ({ img, design, nombre, h, w }) => {
  const [esMovil, setEsMovil] = useState(false);

  // Función para detectar si es un dispositivo móvil
  const detectarDispositivoMovil = () => {
    setEsMovil(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
  };

  useEffect(() => {
    detectarDispositivoMovil();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {esMovil ? (
        // Cargar la imagen de manera diferida (lazy loading) en dispositivos móviles
        <Image src={img} alt={nombre} className={design} height={h} width={w} />
      ) : (
        // Cargar la imagen normal en dispositivos de escritorio
        <Image src={img} alt={nombre} className={design} height={h} width={w} priority />
      )}
    </>
  );
};

export default MobileOptimization;