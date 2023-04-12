export const listOfProducts = [
  {
    category: 'centralenhet',
    header: 'Centralenhet',
    categoryDescription: {
      contentSections: [
        'Oavsett om du vill att ditt båtlarm skall fungera som ett inbrottslarm eller systemövervakning så måste du börja med en centralenhet, själva hjärnan för kommunikation mellan båtlarmet och dig.',
        'Önskar du köpa ditt larm utan andra tjänster från oss, och du vill att ditt system ska kommunicera via mobilnätet rekommenderar vi Telenors IoT-abonnemang. Du beställer det direkt via Telenor. Observerar att detta IoT-abonnemang endast fungerar inom Sverige.',
      ],
    },
    products: [
      {
        header: 'AJAX HUB 2 Plus',
        description: [
          'Ajax Hub 2 Plus har totalt fyra olika kommunikationsvägar, två SIM-kortsplatser med kommunikation över 2G och 4G, Wi-Fi samt trådbundet via nätverkskabel om båten redan har internet ombord. Hub 2 Plus kan hantera upp till 200 sensorer och möjliggör även anslutning till rörelsedetektorer med inbyggd kamera för bildverifiering.',
          'Larmsystemet kommer du åt via Ajax egna mobilapp - “Ajax”. I Ajax app kan vi integrera vissa övervakningskameror.',
        ],
        specifications: [
          {
            title: 'Spänning',
            content: '12V DC eller 230V AC',
          },
          {
            title: 'Mått',
            content: '163 x 163 x 36mm',
          },
          {
            title: 'Vikt',
            content: '351g',
          },
          {
            title: 'Maximal strömförbrukning',
            content: '285 mA',
          },
          {
            title: 'Batteribackup',
            content: 'Upp till 15 timmar',
          },
        ],
        images: ['/ajax_hub2.webp'],
      },
      {
        header: 'GOST Universal Control Unit',
        description: [
          'GOST Universal Control Unit (UCU) har plats för två SIM-kort med kommunikation via 4G/LTE samt kommunikation via nätverkskabel anslutet till båtens egna router om sådan är installerad. GOST UCU kan hantera 32 trådlösa sensorer men går att uppgradera till att hantera 196 trådlösa sensorer. GOST UCU är förberedd med kontakt för att koppla in en IDP Nav-Tracker antennkabel, nätverkskabel, siren och extern manöverpanel.',
          'Detta avancerade båtlarm kan kommunicera via Inmarsat-satelliter om GOST IDP Nav-Tracker är installerad. Det möjliggör att du kan spåra din båt världen över samt kommunicera med larmsystemet, även när båten är utanför mobilt täckningsområde. Trafikavgift för satellitkommunikation tillkommer',
          'Larmsystemet kommer du åt via appen “BlueEye” från Paradox och med GOST IDP-antenn får du även larmnotifieringar via appen GOST Specter.',
        ],
        specifications: [
          {
            title: 'Spänning',
            content: '9-32V DC',
          },
          {
            title: 'Mått',
            content: '302 x 231 x 110mm',
          },
          {
            title: 'Vikt',
            content: '3,4kg',
          },
          {
            title: 'Batteribackup',
            content: 'Drifttid upp till 5 timmar',
          },
        ],
        images: ['/UCU1_trans.webp'],
      },
    ],
  },
];
