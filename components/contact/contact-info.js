import Image from 'next/image';
import { contactData } from '../../lib/contact-data';
import classes from './contact-info.module.css';

function ContactInfo() {
  return (
    <section className={classes.contactInfo}>
      <div className={classes.profileSection}>
        <div className={classes.photoWrapper}>
          <Image
            src="/images/site/fredy.jpeg"
            alt="Fredy Velasquez"
            width={200}
            height={200}
            className={classes.photo}
          />
        </div>
        <div className={classes.profileText}>
          <h1>Fredy Velasquez</h1>
          <p className={classes.subtitle}>Full Stack Developer</p>
        </div>
      </div>

      <h2>Get in Touch</h2>
      <p>Feel free to reach out to me through any of the following channels:</p>

      <div className={classes.infoBlock}>
        <div className={classes.method}>
          <h3>Email</h3>
          <a href={`mailto:${contactData.email}`} className={classes.link}>
            {contactData.email}
          </a>
          <p className={classes.description}>Send me an email directly</p>
        </div>

        <div className={classes.method}>
          <h3>LinkedIn</h3>
          <a
            href={contactData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
          >
            {contactData.linkedin}
          </a>
          <p className={classes.description}>Connect with me on LinkedIn</p>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
