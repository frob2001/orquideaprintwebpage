import productBadges from '../assets/productos/gafete.png'
import productKeychains from '../assets/productos/llaveros.png'
import productPins from '../assets/productos/pines.png'
import hogarCathouse1 from '../assets/productos/hogar/cathouse/1.webp'
import hogarCathouse2 from '../assets/productos/hogar/cathouse/2.webp'
import hogarOrganizador1 from '../assets/productos/hogar/organizador/1.webp'
import hogarOrganizador2 from '../assets/productos/hogar/organizador/2.webp'
import hogarPortavasos1 from '../assets/productos/hogar/portavasos/1.webp'
import hogarPortavasos2 from '../assets/productos/hogar/portavasos/2.webp'
import hogarPortavasos3 from '../assets/productos/hogar/portavasos/3.webp'
import { buildWhatsappLink } from './contact'

export const stats = [
  { value: 'desde $2.50 / hora', label: '+ $0.30 por gramo, según el modelo' },
  { value: 'envíos a todo Ecuador', label: 'no importa si vives en quito, guayaquil, cuenca o cualquier ciudad del Ecuador, llegamos a ti.' },
  { value: 'impresión bajo demanda', label: 'imprimimos solo lo que pides, sin desperdicio' },
  { value: 'transferencia, débito o crédito', label: 'aceptamos pagos por transferencia bancaria o con tarjeta, como prefieras.' },
]

export const lines = [
  {
    id: 'hogar',
    path: '/hogar',
    theme: 'light',
    accent: '#a02168',
    title: 'hogar',
    tagline: 'organizadores, adornos y placas para mascotas',
    description: 'organizadores, adornos y placas de identificación para mascotas — piezas que le dan orden y personalidad a tu casa.',
    images: [
      { srcs: [hogarCathouse1, hogarCathouse2], alt: 'Casa para gato impresa en 3D' },
      { srcs: [hogarOrganizador1, hogarOrganizador2], alt: 'Organizador de baño impreso en 3D' },
      { srcs: [hogarPortavasos1, hogarPortavasos2, hogarPortavasos3], alt: 'Portavasos con forma de hoja impresos en 3D' },
    ],
    items: [
      'placas de identificación para mascotas.',
      'adornos y decoración para el hogar.',
      'portallaves de pared.',
      'saleros, pimenteros y servilleteros.',
      'organizadores de cubiertos y hueveras.',
      'soportes para manteles y posavasos.',
      'macetas y regaderas modernas.',
    ],
    helper: '¿buscas algo más para tu casa? creamos el diseño que nos pidas.',
    metaTitle: 'línea hogar | organizadores, adornos y placas para mascotas — orquídea print',
    metaDescription: 'organizadores, adornos y placas de identificación para mascotas impresos en 3d en quito, guayaquil y cuenca. desde $2.50 la hora + $0.30 por gramo.',
  },
  {
    id: 'negocios',
    path: '/marketing',
    theme: 'light',
    accent: '#93215d',
    title: 'marketing',
    tagline: 'regalos corporativos y artículos con qr y nfc',
    description: 'regalos corporativos y artículos de marketing con tecnología qr y nfc — perfectos para llevar tu marca a otro nivel, con precios especiales al por mayor.',
    cover: { srcs: [productKeychains, productBadges], alt: 'Llaveros y gafetes personalizados con QR y NFC' },
    images: [
      { src: productBadges, alt: 'Gafetes interactivos con QR y NFC' },
      { src: productKeychains, alt: 'Llaveros con QR y NFC' },
      { src: productPins, alt: 'Pines con logotipo' },
    ],
    items: [
      'llaveros personalizados con tu logotipo.',
      'regalos corporativos y artículos promocionales.',
      'porta celulares de escritorio con qr/nfc.',
      'gafetes interactivos para eventos.',
      'precio al por mayor para pedidos de empresas.',
    ],
    helper: '¿tu negocio necesita otra idea? cuéntanosla y la fabricamos.',
    cta: {
      title: '¿sabías que tus llaveros pueden llevar tecnología nfc?',
      text: 'acerca el celular y comparte tu contacto, tus redes o tu catálogo al instante — ideal para networking, ferias y regalos corporativos.',
      buttonLabel: 'cotizar llavero nfc →',
      href: buildWhatsappLink('Hola! Quiero cotizar llaveros personalizados con NFC para mi negocio.'),
    },
    metaTitle: 'línea marketing | regalos corporativos con qr y nfc — orquídea print',
    metaDescription: 'llaveros personalizados, regalos corporativos y artículos de marketing con qr y nfc. precio al por mayor para empresas en quito, guayaquil y cuenca.',
  },
  {
    id: 'personalizados',
    path: '/juguetes',
    theme: 'light',
    accent: '#d52574',
    title: 'juguetes',
    tagline: 'figuras, coleccionables y prototipos únicos',
    description: 'juguetes, figuras y proyectos que cobran vida — desde coleccionables hasta prototipos únicos, impresos bajo demanda para ti.',
    images: [
      { placeholder: 'figuras coleccionables' },
      { placeholder: 'litofanías' },
      { placeholder: 'prototipos y piezas' },
    ],
    items: [
      'juguetes y figuras personalizadas.',
      'figuras coleccionables (cine, series, anime, videojuegos).',
      'litofanías (fotos impresas en 3d que revelan luz).',
      'prototipos y piezas mecánicas.',
    ],
    helper: 'si tienes un diseño propio o una sugerencia diferente, también lo hacemos.',
    metaTitle: 'línea juguetes | figuras y coleccionables personalizados — orquídea print',
    metaDescription: 'juguetes, figuras coleccionables, litofanías y prototipos impresos en 3d bajo demanda en quito, guayaquil y cuenca.',
  },
]
