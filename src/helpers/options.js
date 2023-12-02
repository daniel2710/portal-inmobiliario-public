
export const optionsRooms = [
  { name: "rooms", value: "1", label: "1" },
  { name: "rooms", value: "2", label: "2" },
  { name: "rooms", value: "3", label: "3" },
  { name: "rooms", value: "4", label: "4 o más" },
];
export const optionsBaths = [
  { name: "baths", value: "1", label: "1" },
  { name: "baths", value: "2", label: "2" },
  { name: "baths", value: "3", label: "3" },
  { name: "baths", value: "4", label: "4 o más" },
];
export const optionsEstado = [
  { name: "state", value: "Nuevo", label: "Nuevo" },
  { name: "state", value: "Usado", label: "Usado" },
];
export const optionsTipo = [
  { name: "typeProperty", value: "Apartamento", label: "Apartamentos" },
  { name: "typeProperty", value: "Casa", label: "Casas" },
  { name: "typeProperty", value: "Otros", label: "Otros" },
]
// Footer section data
export const infoContact = [
  {
    id: 1,
    office: 'Colraices - Oficina principal Ibagué, Colombia',
    address: 'Calle 47 # 4-61 ',
    phoneNumber: '(57) 601 328 8939',
    whatsapp: '15136479405',
    email: 'info@colraices.co',
    map: 'https://maps.app.goo.gl/yJqorhEuqYRg6SR79'
  },
  {
    id: 2,
    office: 'Oficina Madrid, España',
    address: 'Av Mediterráneo 5, 1G, Madrid, Spain 28007',
    map: ''
  },
  {
    id: 3,
    office: 'Oficina Mühldorf, Alemania',
    address: 'Katharinenplatz 57, Muhldorf Alemania.',
    map: 'https://maps.app.goo.gl/419cNsRz3jsedZsN7'
  }
]
export const socialNetworks = [
  { id: 1, name: 'facebook', url: 'https://www.facebook.com/colraices', src: '/img/colraicesInmobiliario/icons/facebook.svg' },
  { id: 2, name: 'instagram', url: 'https://www.instagram.com/colraices', src: '/img/colraicesInmobiliario/icons/instagram.svg' },
  { id: 3, name: 'linkedin', url: 'https://www.linkedin.com/company/colraices/mycompany', src: '/img/colraicesInmobiliario/icons/linkedin.svg' },
  { id: 4, name: 'whatsapp', url: 'https://api.whatsapp.com/send/?phone=15136479405', src: '/img/colraicesInmobiliario/icons/whatsapp.svg' },
  { id: 5, name: 'youtube', url: 'https://www.youtube.com/c/Colraicesserviciosinmobiliariosfinancieros', src: '/img/colraicesInmobiliario/icons/youtube.svg' },

]

export const linksFooter = [
  { id: 1, name: 'Inmuebles', url: '' },
  { id: 2, name: 'Favoritos', url: '/favoritos' },
  { id: 3, name: 'Contacto', url: '' }
]
export const links = [
  { id: 1, label: "Menú", url: "" },
  { id: 2, label: "Home", url: "/" },
  { id: 3, label: "Mis favoritos", url: "/favoritos" },
  // { id: 4, label: "Contactos", url: "#contact" }
]
export const itemsEligenos = [
  {
    id: 1,
    src: '/img/colraicesInmobiliario/icons/money.svg',
    text: 'Condiciones de lanzamiento y los mejores planes de financiamiento.'
  },
  {
    id: 2,
    src: '/img/colraicesInmobiliario/icons/figure_model.svg',
    text: 'Inmuebles con visita en tiempo real para que escojas tu casa/apartamento como si estuvieras en Colombia'

  },
  {
    id: 3,
    src: '/img/colraicesInmobiliario/icons/medal_star.svg',
    text: 'Inmuebles destacados con beneficios para que compres ahora.'
  },
  {
    id: 4,
    src: '/img/colraicesInmobiliario/icons/swing_figure.svg',
    text: 'Conoce las zonas comunes y alrededores del apartamento que vas a comprar.'
  }
]

// Opciones formulario Vista Resultados de busqueda
export const optionsProperty = [
  'Casa ', 'Apartamento ', 'Lote ', 'Oficina '
]
export const optionsState = [
  'Nuevo ', 'Usado ', 'Me es Indiferente '
]
export const optionsTime = [
  { id: 1, label: '1 a 6 meses', value: ' 1 - 6 ' },
  { id: 2, label: '6 a 12 meses', value: ' 6 - 12 ' },
  { id: 3, label: '12 a 18 meses', value: ' superior a 1 año ' },
  { id: 4, label: 'Solo estoy buscando información', value: ' Solo estoy buscando información ' },
]

export const testimonios = [
  {
    id: "1",
    imagen: "./img/history/bibiananaranjo.webp",
    atributo: "Acompañamiento",
    testimonio: "El valor de una empresa como Colraices es el acompañamiento, la eficiencia y la tranquilidad que transmiten para ayudarte a conseguir lo que deseas, con una gran calidad humana",
    nombre: "Bibiana Naranjo",
    ocupacion: "",
  },
  {
    id: "2",
    imagen: "./img/history/anacristina.webp",
    atributo: "Mejor servicio",
    testimonio: "Me pareció muy bueno el servicio, fue rápido, fue muy buena experiencia. Colraices una solución para todos nosotros porque nos facilitan la forma para comprar la casa",
    nombre: "Ana Cristina",
    ocupacion: "",
  }
];


export const styles = [
  { elementType: "geometry", stylers: [{ color: "#e9e9e9" }] },
  { elementType: "labels.icon", stylers: [{ visibility: "on" }] },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#f5f5f5" }, { weight: 1.5 }],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#9e9e9e" }, { weight: 1.5 }],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [{ color: "#bdbdbd" }],
  },
  {
    featureType: "administrative.neighborhood",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#328829" }],
  },
  {
    featureType: "poi.sports_complex",
    elementType: "geometry",
    stylers: [{ color: "#2ca37b" }],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [{ color: "#ffffff" }],
  },
  {
    featureType: "road",
    elementType: "labels",
    stylers: [{ visibility: "on" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#354676" }],
  },
  {
    featureType: "water",
    elementType: "labels.text",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#CAA55E" }],
  },
];
