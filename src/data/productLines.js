import productBadges from '../assets/productos/gafete.webp'
import productKeychains from '../assets/productos/llaveros.webp'
import productPins from '../assets/productos/pines.webp'
import hogarCathouse1 from '../assets/productos/hogar/cathouse/1.webp'
import hogarCathouse2 from '../assets/productos/hogar/cathouse/2.webp'
import hogarOrganizador1 from '../assets/productos/hogar/organizador/1.webp'
import hogarOrganizador2 from '../assets/productos/hogar/organizador/2.webp'
import hogarPortavasos1 from '../assets/productos/hogar/portavasos/1.webp'
import hogarPortavasos2 from '../assets/productos/hogar/portavasos/2.webp'
import hogarPortavasos3 from '../assets/productos/hogar/portavasos/3.webp'
import juguetesSkeleton from '../assets/productos/juguetes/skeleton.webp'
import juguetesEevee from '../assets/productos/juguetes/eevee.webp'
import juguetesRooster from '../assets/productos/juguetes/rooster.webp'
import juguetesR5 from '../assets/productos/juguetes/r5-turbo.webp'
import juguetesKonbini from '../assets/productos/juguetes/konbini.webp'
import juguetesHungary from '../assets/productos/juguetes/hungarian-gp.webp'
import keychainByd from '../assets/productos/marketing/keychain-byd.webp'
import keychainBlack from '../assets/descripcion/black_kaychain.png'
import keychainWhite from '../assets/descripcion/white_keychain_key.png'
import precioLlaverosSimple from '../assets/precios/llaveros-simple.webp'
import precioLlaverosNfc from '../assets/precios/llaveros-nfc.webp'
import precioPinesSimple from '../assets/precios/pines-simple.webp'
import precioPinesNfc from '../assets/precios/pines-nfc.webp'
import precioTarjetaSimple from '../assets/precios/tarjeta-simple.webp'
import precioTarjetaSimpleNfc from '../assets/precios/tarjeta-simple-nfc.webp'
import precioTarjetaLanyard from '../assets/precios/tarjeta-lanyard.webp'
import precioTarjetaLanyardNfc from '../assets/precios/tarjeta-lanyard-nfc.webp'
import precioPortaCelularNfc from '../assets/precios/porta-celular-nfc.webp'
import { buildWhatsappLink } from './contact'

const llaverosPricing = [
  {
    title: 'llaveros personalizados',
    variants: [
      {
        label: 'llavero simple',
        image: precioLlaverosSimple,
        alt: 'Llavero simple personalizado impreso en 3D, precio desde $7.00',
        tiers: [
          { name: 'primero', price: '$7.00' },
          { name: 'segundo en adelante', price: '$1.50 c/u' },
        ],
      },
      {
        label: 'llavero + tecnología nfc',
        image: precioLlaverosNfc,
        alt: 'Llavero personalizado con tecnología NFC y código QR, precio desde $10.00',
        tiers: [
          { name: 'primero', price: '$10.00' },
          { name: 'segundo en adelante', price: '$2.50 c/u' },
        ],
      },
    ],
  },
]

const marketingPricing = [
  {
    title: 'pines personalizados',
    variants: [
      {
        label: 'pin simple',
        image: precioPinesSimple,
        alt: 'Pin personalizado simple impreso en 3D, precio desde $7.00',
        tiers: [
          { name: 'primero', price: '$7.00' },
          { name: 'segundo en adelante', price: '$1.50 c/u' },
        ],
      },
      {
        label: 'pin + tecnología nfc',
        image: precioPinesNfc,
        alt: 'Pin personalizado con tecnología NFC, precio desde $10.00',
        tiers: [
          { name: 'primero', price: '$10.00' },
          { name: 'segundo en adelante', price: '$2.50 c/u' },
        ],
      },
    ],
  },
  {
    title: 'tarjetas de presentación',
    variants: [
      {
        label: 'simple',
        image: precioTarjetaSimple,
        alt: 'Tarjeta de presentación simple impresa en 3D, precio desde $10.00',
        tiers: [
          { name: 'primera', price: '$10.00' },
          { name: 'segunda en adelante', price: '$4.00 c/u' },
        ],
      },
      {
        label: 'simple + nfc',
        image: precioTarjetaSimpleNfc,
        alt: 'Tarjeta de presentación con tecnología NFC, precio desde $12.00',
        tiers: [
          { name: 'primera', price: '$12.00' },
          { name: 'segunda en adelante', price: '$5.00 c/u' },
        ],
      },
      {
        label: '+ lanyard',
        image: precioTarjetaLanyard,
        alt: 'Tarjeta de presentación con lanyard corporativo, precio desde $12.00',
        tiers: [
          { name: 'primera', price: '$12.00' },
          { name: 'segunda en adelante', price: '$5.00 c/u' },
        ],
      },
      {
        label: '+ lanyard + nfc',
        image: precioTarjetaLanyardNfc,
        alt: 'Tarjeta de presentación con lanyard y tecnología NFC, precio desde $13.75',
        tiers: [
          { name: 'primera', price: '$13.75' },
          { name: 'segunda en adelante', price: '$6.75 c/u' },
        ],
      },
    ],
  },
  {
    title: 'porta celulares de escritorio + nfc',
    variants: [
      {
        label: 'porta celular + nfc',
        image: precioPortaCelularNfc,
        alt: 'Porta celular de escritorio personalizado con tecnología NFC, precio desde $15.00',
        tiers: [
          { name: 'primero', price: '$15.00' },
          { name: 'segundo en adelante', price: '$7.00 c/u' },
        ],
      },
    ],
  },
]

export const stats = [
  { value: 'pregunta por nuestras tarifas', label: 'para pedidos masivos o impresión 3D bajo demanda — con descuentos según el producto.' },
  { value: 'impresión 3D para proyectos universitarios', label: 'prototipos, maquetas, piezas y modelos para tus proyectos y tesis.' },
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
    metaDescription: 'organizadores, adornos y placas de identificación para mascotas impresos en 3d en quito, guayaquil y cuenca. tarifas para pedidos masivos e impresión bajo demanda, con descuentos según el producto.',
  },
  {
    id: 'negocios',
    path: '/marketing',
    theme: 'light',
    accent: '#93215d',
    title: 'marketing',
    tagline: 'regalos corporativos y artículos con qr y nfc',
    description: 'regalos corporativos y artículos de marketing con tecnología qr y nfc — perfectos para llevar tu marca a otro nivel, con precios especiales al por mayor.',
    cover: { src: productBadges, alt: 'Gafetes con lanyard personalizados con QR y NFC' },
    images: [
      { src: productBadges, alt: 'Gafetes interactivos con QR y NFC' },
      { src: keychainByd, alt: 'Llavero BYD con patrón panal impreso en 3D' },
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
    pricing: marketingPricing,
    metaTitle: 'línea marketing | regalos corporativos con qr y nfc — orquídea print',
    metaDescription: 'pines, tarjetas de presentación y porta celulares con tecnología qr y nfc desde $7.00. regalos corporativos con precio al por mayor para empresas en quito, guayaquil y cuenca.',
  },
  {
    id: 'llaveros',
    path: '/llaveros',
    theme: 'light',
    accent: '#b81d6f',
    title: 'llaveros',
    heading: 'llaveros personalizados en Quito y Ecuador',
    tagline: 'llaveros personalizados con qr y nfc en quito',
    description: 'llaveros personalizados impresos en 3d en quito, con envíos a todo ecuador — con tu nombre, tu logo, tu marca favorita o tecnología qr y nfc. ideales para regalos, autos, empresas y colecciones, con precios especiales al por mayor.',
    cover: { srcs: [productKeychains, keychainByd, keychainBlack], alt: 'Llaveros personalizados impresos en 3D en Quito' },
    images: [
      { src: productKeychains, alt: 'Llaveros personalizados con QR y NFC en Quito' },
      { src: keychainByd, alt: 'Llavero BYD con patrón panal impreso en 3D' },
      { src: keychainBlack, alt: 'Llavero negro personalizado impreso en 3D' },
      { src: keychainWhite, alt: 'Llavero blanco con forma de llave impreso en 3D' },
      { src: productPins, alt: 'Pines y llaveros con logotipo' },
    ],
    items: [
      'llaveros personalizados con tu nombre, logo o diseño.',
      'llaveros con código qr y chip nfc: comparte tu contacto o redes con un toque.',
      'llaveros de autos, marcas y colecciones.',
      'llaveros corporativos y promocionales al por mayor.',
      'entregas en quito y envíos a todo ecuador.',
    ],
    helper: '¿tienes una idea de llavero en mente? cuéntanosla y la fabricamos.',
    cta: {
      title: '¿sabías que tus llaveros pueden llevar tecnología nfc?',
      text: 'acerca el celular y comparte tu contacto, tus redes o tu catálogo al instante — ideal para networking, ferias y regalos corporativos.',
      buttonLabel: 'cotizar llavero nfc →',
      href: buildWhatsappLink('Hola! Quiero cotizar llaveros personalizados en Quito.'),
    },
    pricing: llaverosPricing,
    metaTitle: 'llaveros personalizados en quito y ecuador | qr y nfc — orquídea print',
    metaDescription: 'llaveros personalizados desde $7.00, con qr y nfc desde $10.00. impresos en 3d en quito, con envíos a todo ecuador. para autos, marcas, empresas y regalos. cotiza gratis por whatsapp.',
  },
  {
    id: 'personalizados',
    path: '/juguetes',
    theme: 'light',
    accent: '#d52574',
    title: 'juguetes',
    tagline: 'figuras, coleccionables y prototipos únicos',
    description: 'juguetes, figuras y proyectos que cobran vida — desde coleccionables hasta prototipos únicos, impresos bajo demanda para ti.',
    cover: { srcs: [juguetesSkeleton, juguetesR5, juguetesKonbini, juguetesEevee, juguetesHungary], alt: 'Figuras y coleccionables impresos en 3D' },
    images: [
      { src: juguetesSkeleton, alt: 'Figura articulada de esqueleto tipo LEGO impresa en 3D' },
      { src: juguetesEevee, alt: 'Figura coleccionable de Eevee impresa en 3D' },
      { src: juguetesRooster, alt: 'Figura de gallo Heihei impresa en 3D' },
      { src: juguetesR5, alt: 'Maqueta del Renault 5 Turbo 2 impresa en 3D' },
      { src: juguetesKonbini, alt: 'Diorama de tienda japonesa konbini impreso en 3D' },
      { src: juguetesHungary, alt: 'Cuadro del circuito del Gran Premio de Hungría impreso en 3D' },
    ],
    items: [
      'juguetes y figuras personalizadas.',
      'figuras coleccionables (cine, series, anime, videojuegos).',
      'litofanías (fotos impresas en 3d que revelan luz).',
      'prototipos y piezas mecánicas.',
    ],
    helper: 'si tienes un diseño propio o una sugerencia diferente, también lo hacemos.',
    pricingNote: 'el precio de tus juguetes y figuras personalizadas varía según el tamaño, el tiempo de impresión y la cantidad de colores — cotiza tu diseño sin costo por whatsapp.',
    metaTitle: 'línea juguetes | figuras y coleccionables personalizados — orquídea print',
    metaDescription: 'juguetes, figuras coleccionables, litofanías y prototipos impresos en 3d bajo demanda en quito, guayaquil y cuenca. precio según tamaño, tiempo de impresión y colores — cotiza gratis.',
  },
]
