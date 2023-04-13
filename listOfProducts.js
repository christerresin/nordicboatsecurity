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
  {
    category: 'magnetkontakt',
    header: 'Magnetkontakt',
    categoryDescription: {
      contentSections: [
        'Trådlösa magnetkontakter som enkelt kan monteras vid båtens ingångar, dörrar, förpiks- och takluckor. Kontakterna programmeras att antingen genast aktivera en larmsiren (om sådan installerats) eller fördröja aktiveringen och istället initiera en nedräkning så du hinner avaktivera larmet om du helt enkelt glömt att göra det.',
      ],
    },
    products: [
      {
        header: 'AJAX Door Protect',
        description: [
          'Ajax magnetkontakt drivs med ett CR123A-batteri med en livslängd på upp till sju år.',
          'Ajax magnetkontakt har även en inbyggd termometer.',
        ],
        specifications: [
          {
            title: 'Färger',
            content: 'Svart & vit',
          },
        ],
        images: ['/doorprotect.webp'],
      },
      {
        header: 'GOST Door Sensor',
        description: ['Magnetkontakt från GOST drivs av AAA-batteri'],
        specifications: [
          {
            title: 'Färg',
            content: 'Vit',
          },
        ],
        images: ['/door.webp'],
      },
    ],
  },
  {
    category: 'hogvattensensor',
    header: 'Högvatten',
    categoryDescription: {
      contentSections: ['Tillgänglig för system från AJAX och GOST'],
    },
    products: [
      {
        header: 'RULE flottör',
        description: [
          'Flottör från RULE som aktiveras om vattennivån stiger i båten genom att flottören lyfts upp av vattnet.',
          'Högvattensensorn levereras färdigmonterad med sändarenheten monterad i en IP67-kapsling och flotören inkopplad.',
        ],
        specifications: [],
        images: ['/hws2.webp'],
      },
    ],
  },
  {
    category: 'akustiksensor',
    header: 'Akustik',
    categoryDescription: {
      contentSections: [],
    },
    products: [
      {
        header: 'AJAX Glass Protect',
        description: [
          'Trådlös akustiksensor från Ajax som detekterar glaskross men ignorerar hundskall och åska. Sensorn har måtten 90 x 20mm och en detektionsradie på 180-grader samt nio meters avstånd.  Känsligheten går att ställa in på tre olika nivåer och sensorn har en inbyggd termometer.',
          'Drivs på CR123A-batteri med livslängd på upp till sju år.',
        ],
        specifications: [
          {
            title: 'Färger',
            content: 'Svart & vit',
          },
        ],
        images: ['/agp1.webp'],
      },
    ],
  },
  {
    category: 'stromsensor',
    header: 'Ström',
    categoryDescription: {
      contentSections: ['Tillgängligt för system från AJAX och GOST'],
    },
    products: [
      {
        header: 'Low Voltage Sensor',
        description: [
          'Vi erbjuder strömsensorer i två olika utföranden, den ena mäter batteriets spänningsnivå (volt) genom att kopplas till minus och därigenom mäta spänningen över systemet. Vid förinställd nivå larmas du om spänningen sjunker till denna. ',
          'Den andra sensorn kan mäta om landströmmen kopplats ifrån, exempelvis om  båtgrannen har råkat dra ur din landströmskabel istället för sin egna. För att undvika oavsiktliga larm är en fördröjningstimer inprogrammerad. Monteringen sker enkelt genom inkoppling i något av båtens eluttag på insidan.',
        ],
        specifications: [],
        images: [],
      },
    ],
  },
  {
    category: 'rorelsesensor',
    header: 'Rörelse',
    categoryDescription: {
      contentSections: [
        'Samtliga rörelsesensorer har djurimmunitet och reagerar inte på djur som väger under 20kg eller har en totalhöjd under 50cm.',
      ],
    },
    products: [
      {
        header: 'AJAX MotionProtect',
        description: [
          'MotionProtect använder både PIR-sensor och mikrovågssensor och har ett detektionsavstånd på upp till 12 meter, detektionsvinklarna är 88,5°-horisontellt och 80°-vertikalt. ',
          'MotionProtect är designad för att minimera falsklarm genom att ignorera rörelser i gardiner, ljusflimmer och reflektioner. ',
          'Enheten har en inbyggd termometer. Drivs med ett CR123A-batteri med en livslängd på upp till fem år.',
        ],
        specifications: [
          {
            title: 'Mått',
            content: '110 x 65 x 50mm',
          },
        ],
        images: ['/mpp1.webp'],
      },
      {
        header: 'AJAX CombiProtect',
        description: [
          'CombiProtect kombinerar PIR-sensor och glaskrossdetektor i ett. CombiProtect har samma rörelsedetektionsområde som MotionProtect och reagerar på glaskross inom nio meter.',
          'Enheten har en inbyggd termometer. Drivs med ett CR123A-batteri med en livslängd på upp till fem år.',
        ],
        specifications: [
          {
            title: 'Mått',
            content: '110x 65 x 50mm',
          },
        ],
        images: ['/combiprotect1.webp'],
      },
      {
        header: 'AJAX MotionCam',
        description: [
          'MotionCam kombinerar en temperaturanpassande PIR-sensor med stillbildskamera, du får bilderna skickade till appen så att du enkelt kan verifiera personen ombord. Inbyggd IR-ljuskälla möjliggör bildtagning nattetid eller övriga tillfällen med nedsatt ljusstyrka.',
          'Enheten har en inbyggd termometer. Drivs med två stycken CR123A-batterier med en livslängd på upp till fyra år.',
        ],
        specifications: [
          {
            title: 'Mått',
            content: '135 x 70 x 60mm',
          },
        ],
        images: ['/ajax_motioncam1.webp'],
      },
      {
        header: 'GOST PIR-sensor',
        description: [
          'Kompakt PIR-sensor för montering inuti båten för bevakning av båtens ingångar. Sensorn kan programmeras att automatiskt aktivera larmsirener vid detektion.',
        ],
        specifications: [
          {
            title: 'Mått',
            content: '123 x 42 x 63mm',
          },
        ],
        images: ['/gost_rip_sensor.webp'],
      },
      {
        header: 'GOST Fotoelektrisk sensor',
        description: [
          'Denna fotoelektriska sensor består av en sändare och en mottagare monterade för en genomstrålande, ej reflekterande, konfiguration. Vid brytande av strålen aktiveras larmet och du notifieras.',
        ],
        specifications: [
          {
            title: 'Diametermått',
            content: '15mm',
          },
        ],
        images: ['/gost_beamsensor.png'],
      },
      {
        header: 'GOST Däcksensor',
        description: [
          'Detta är en rörelsesensor som monteras under däck och som känner av rörelse samt tryck som genereras vid rörelse inom sensorns radie.',
        ],
        specifications: [],
        images: ['/gost_decksensor.png'],
      },
    ],
  },
  {
    category: 'brandvarnare',
    header: 'Brand',
    categoryDescription: {
      contentSections: ['Tillgängliga för system från AJAX och GOST'],
    },
    products: [
      {
        header: 'AJAX Fire Protect',
        description: [
          'Denna brandvarnare reagerar på rökutveckling, kolmonoxidnivå samt plötslig temperaturökning samtidigt som den via sina sensorer ignorerar vattenånga. Brandvarnaren aktiverar även övriga brandvarnare om fler än en är installerade i båten, via appen ser du vilken brandvarnare som gett utslag för brand, rök eller för hög kolmonoxidnivå.',
          'Enheten har en inbyggd termometer.',
        ],
        specifications: [
          {
            title: 'Mått',
            content: '124 x 124 x 45mm',
          },
          {
            title: 'Färger',
            content: 'Svart & vit',
          },
        ],
        images: ['/ajax_fireprotect2_1.webp'],
      },
      {
        header: 'GOST Brandvarnare',
        description: [
          'Brandvarnare som reagerar på rökutveckling genom att mäta partikelmängden i luften, vid aktivering larmas du genom notifikationer.',
        ],
        specifications: [
          {
            title: 'Diameter',
            content: '120mm',
          },
          {
            title: 'Höjd',
            content: '45mm',
          },
          {
            title: 'Färg',
            content: 'Vit',
          },
        ],
        images: [],
      },
    ],
  },
  {
    category: 'dragsensor',
    header: 'Dragsensor',
    categoryDescription: {
      contentSections: ['Tillgängliga för system från AJAX och GOST'],
    },
    products: [
      {
        header: 'Pullsensor',
        description: [
          'Cylinderformad magnetkontakt där infästningen monteras vid bryggan, släpbåt/jolle eller vattenskoter på badbryggan. Om magnetkontakten dras ur sitt fäste eller klipps av aktiveras larmet.',
        ],
        specifications: [],
        images: ['/gost_pullsensor.webp'],
      },
    ],
  },
  {
    category: 'alarm',
    header: 'Sirener, Blixtljus och Ljudbarriärer',
    categoryDescription: {
      contentSections: ['Tillgängliga för system från AJAX och GOST'],
    },
    products: [
      {
        header: 'Sirener, Blixtljus och Ljudbarriärer',
        description: [
          'Både Ajax och GOST har egna sirener till sina respektive system. Till det erbjuder vi en mängd olika tredjeparts sirener, blixtljus och ljudbarriärer för montering på insidan likväl som utsidan av båten. ',
          'Du väljer själv vilken mängd av obehag du vill att inbrottstjuven skall utsättas för, samt vilken mängd ljud och ljus som skall användas för att påkalla uppmärksamheten till din båt. ',
          'Det värsta vi kan koppla in är den svenska ljudbarriären Inferno. Inkräktaren möts då av ett 125dB högt ljud som hoppar i frekvens. Ljudet kan liknas vid en syrsas ljud.',
        ],
        specifications: [],
        images: ['/ajax_homesiren1.webp'],
      },
    ],
  },
];
