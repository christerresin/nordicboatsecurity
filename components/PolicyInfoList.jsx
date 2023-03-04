import styles from '../styles/PolicyInfoList.module.scss';

const cookieListItems = [
  {
    header: 'För att kunna hantera beställning och köp',
    content:
      'För att Vi skall kunna fullgöra Vårt antagande enligt köpeavtalet, om uppgifterna inte lämnas kan Våra åtaganden inte fullgöras och Vi kan tvingas neka Dig köpet.',
  },
  {
    header:
      'För att kunna fullgöra och tillgodose NBS’s rättsliga förpliktelser',
    content:
      'För att enligt lagkrav kunna uppfylla de rättsliga förpliktelser NBS har gentemot lagen.',
  },
  {
    header: 'För att kunna hantera kundserviceärenden',
    content:
      'Kommunikation och utredning av eventuella frågor till kundservice Via telefon, e-post eller övriga Digitala kanaler såsom sociala medier.',
  },
  {
    header: 'För att kunna utvärdera, utveckla och förbättra Våra tjänster',
    content:
      'Uppgifterna behandlas på grundval av Vårt berättigade intresse att utveckla verksamheten och därtill hörande tjänster, produktutbud samt kommunikativa och användarvänliga system.',
  },
  {
    header:
      'För att kunna förhindra missbruk av en tjänst eller för att förhindra, förebygga och utreda brott mot företaget Nordic Boat Security AB – ',
    content:
      'Förhindrandet och utredning av eventuella bedrägerier eller andra lagöverträdelser. Skydd och förbättring av Vår IT-miljö mot angrepp och intrång.',
  },
  {
    header: 'För att kunna administrera Din abonnerade tjänst',
    content:
      'Säkerställande av identitet. Skapande av eventuell inloggningsfunktion eller tjänst. Upprätthållandet av korrekta och uppdaterade uppgifter.',
  },
];

function PolicyInfoList({ grid }) {
  return (
    <section className={`${styles.container} ${grid}`}>
      <div className={styles.usp}>
        <h3>Ändamål med registrering och behandling av personuppgifter</h3>
        <div className={`${styles.divider} ${styles.red}`}></div>
        <p>
          Du skall känna Dig trygg när Du lämnar personuppgifter till Nordic
          Boat Security. All behandling av personuppgifter sker enligt gällande
          lagstiftning och Vi vidtar löpande åtgärder för att skydda Dina
          personuppgifter. NBS huvudsakliga ändamål för registrering och
          behandling av personuppgifter är som följande, utan särskild ordning:
        </p>
        <ul>
          {cookieListItems.map((item) => (
            <li key={item.header}>
              <span className={styles.bold}>{item.header}</span>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default PolicyInfoList;
