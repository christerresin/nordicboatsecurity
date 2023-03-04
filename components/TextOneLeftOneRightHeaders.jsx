import styles from '../styles/TextOneLeftOneRightHeaders.module.scss';

function TextOneLeftOneRightHeaders({ grid }) {
  return (
    <section className={`${styles.container} ${grid}`}>
      <div className={styles.usp}>
        <div className={styles.text}>
          <h3>Satellitspårning</h3>
          <p>
            Ska du ut på ett långt äventyr och korsa ett eller flera hav? Då
            kanske satellitspårning är något du behöver? GOST Nav-Tracker är
            precis rätt för uppgiften! Med hjälp av 14 geostationära satelliter
            från Inmarsat får du en täckning av nästan hela jorden yta, förutom
            de mest extrema polerna, och en uppkopplingssäkerhet om 99,99%.
          </p>
        </div>
        <div className={styles.text}>
          <h3>Övervakning med larmcentral</h3>
          <p>
            Vi erbjuder dig möjligheten att koppla upp ditt system mot
            larmcentral med väktarutryckning genom vår samarbetspartner Westra
            Security, mänsklig övervakning av båten dygnet runt, året om!
            Tillsammans går vi igenom hur du vill att Westras larmcentral skall
            agera vid händelse av larm i båten med stöd av en aktionsplan som är
            anpassat just efter dina önskemål och i samråd med dig som båtägare.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TextOneLeftOneRightHeaders;
