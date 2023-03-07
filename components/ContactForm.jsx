import styles from '../styles/ContactForm.module.scss';

function ContactForm({ grid, contact }) {
  return (
    <>
      <div className={`${styles.container} ${grid}`}>
        <div className={styles.main_wrapper}>
          <div className={styles.form_wrapper}>
            <form
              action='https://mailthis.to/nbs'
              method='POST'
              encType='multipart/form-data'
            >
              <div className={styles.input_group}>
                <label htmlFor='name' className={styles.form_label}>
                  Namn
                </label>
                <input
                  className={styles.form_input}
                  type='text'
                  name='name'
                  placeholder='Namn'
                />
                <div className={styles.input_group}>
                  <label htmlFor='email' className={styles.form_label}>
                    Email
                  </label>
                  <input
                    className={styles.form_input}
                    type='email'
                    name='_replyto'
                    placeholder='Epostadress'
                  />
                </div>
                <div className={styles.input_group}>
                  <label htmlFor='number' className={styles.form_label}>
                    Telefonnummer
                  </label>
                  <input
                    className={styles.form_input}
                    type='text'
                    name='number'
                    placeholder='Telefonnummer'
                  />
                </div>
                <div>
                  <label htmlFor='message' className={styles.form_label}>
                    Beskriv båten
                  </label>
                  <textarea
                    rows='6'
                    name='message'
                    id='message'
                    className={styles.form_input}
                    placeholder='(Modell, storlek, motor etc.) eller utveckla ditt ärende här.'
                  ></textarea>
                </div>

                <div className={styles.input_radio_wrapper}>
                  <label className={styles.form_label}>
                    Vad för typ av säkerhetslösning är du intresserad av?
                  </label>

                  <div className={styles.radio_flex}>
                    <div className={styles.radio_group}>
                      <label
                        className={styles.radio_label}
                        htmlFor='inbrottslarm'
                      >
                        <input
                          className={styles.input_radio}
                          type='radio'
                          name='inbrottslarm'
                          id='inbrottslarm'
                        />
                        Inbrottslarm
                        <span className={styles.radio_checkmark}></span>
                      </label>
                    </div>
                  </div>

                  <div className={styles.radio_flex}>
                    <div className={styles.radio_group}>
                      <label className={styles.radio_label} htmlFor='video'>
                        <input
                          className={styles.input_radio}
                          type='radio'
                          name='video'
                          id='video'
                        />
                        Videoövervakning, backkamera etc.
                        <span className={styles.radio_checkmark}></span>
                      </label>
                    </div>
                  </div>

                  <div className={styles.radio_flex}>
                    <div className={styles.radio_group}>
                      <label className={styles.radio_label} htmlFor='system'>
                        <input
                          className={styles.input_radio}
                          type='radio'
                          name='system'
                          id='system'
                        />
                        Systemövervakning (högvattensensorer, temperatur etc.)
                        <span className={styles.radio_checkmark}></span>
                      </label>
                    </div>
                  </div>

                  <div className={styles.radio_flex}>
                    <div className={styles.radio_group}>
                      <label className={styles.radio_label} htmlFor='tracker'>
                        <input
                          className={styles.input_radio}
                          type='radio'
                          name='tracker'
                          id='tracker'
                        />
                        Spårsändare
                        <span className={styles.radio_checkmark}></span>
                      </label>
                    </div>
                  </div>

                  <div className={styles.radio_flex}>
                    <div className={styles.radio_group}>
                      <label className={styles.radio_label} htmlFor='connected'>
                        <input
                          className={styles.input_radio}
                          type='radio'
                          name='connected'
                          id='connected'
                        />
                        Uppkoppling till larmcentral med väktarutryckning
                        <span className={styles.radio_checkmark}></span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className={styles.input_radio_wrapper}>
                  <label className={styles.form_label}>
                    Övriga ärenden eller frågor.
                  </label>

                  <div className={styles.radio_flex}>
                    <div className={styles.radio_group}>
                      <label className={styles.radio_label} htmlFor='service'>
                        <input
                          className={styles.input_radio}
                          type='radio'
                          name='service'
                          id='service'
                        />
                        Service
                        <span className={styles.radio_checkmark}></span>
                      </label>
                    </div>
                  </div>

                  <div className={styles.radio_flex}>
                    <div className={styles.radio_group}>
                      <label className={styles.radio_label} htmlFor='transfer'>
                        <input
                          className={styles.input_radio}
                          type='radio'
                          name='transfer'
                          id='transfer'
                        />
                        Överlåtelse eller avslutande av Uppkoppling till
                        larmcentral
                        <span className={styles.radio_checkmark}></span>
                      </label>
                    </div>
                  </div>

                  <div className={styles.radio_flex}>
                    <div className={styles.radio_group}>
                      <label
                        className={styles.radio_label}
                        htmlFor='reklamation'
                      >
                        <input
                          className={styles.input_radio}
                          type='radio'
                          name='reklamation'
                          id='reklamation'
                        />
                        Reklamation
                        <span className={styles.radio_checkmark}></span>
                      </label>
                    </div>
                  </div>

                  <div className={styles.radio_flex}>
                    <div className={styles.radio_group}>
                      <label className={styles.radio_label} htmlFor='other'>
                        <input
                          className={styles.input_radio}
                          type='radio'
                          name='other'
                          id='other'
                        />
                        Övriga frågor
                        <span className={styles.radio_checkmark}></span>
                      </label>
                    </div>
                  </div>
                </div>

                <input
                  type='hidden'
                  name='_subject'
                  value='Contact form submitted'
                />
                <input
                  type='hidden'
                  name='_after'
                  value='https://nordicboatsecurity.se/'
                />
                <input type='hidden' name='_honeypot' value='' />
                <input type='hidden' name='_confirmation' value='' />
                <input className={styles.btn} type='submit' value='Skicka' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
