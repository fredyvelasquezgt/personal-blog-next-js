import { contactData } from '../../lib/contact-data';
import classes from './contact-icons.module.css';

function ContactIcons() {
  return (
    <div className={classes.contactIcons}>
      <a
        href={contactData.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.iconLink}
        title="LinkedIn"
        aria-label="LinkedIn"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.045-8.733 0-9.633h3.554v1.364c.425-.654 1.185-1.586 2.882-1.586 2.105 0 3.684 1.375 3.684 4.331l.001 5.524zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.705 0-.955.768-1.703 1.906-1.703.915 0 1.914.748 1.914 1.703 0 .947-.999 1.705-1.905 1.705zm1.691 11.597H3.635V9.019h3.393v11.433zM22.224 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.224 0z" />
        </svg>
      </a>
      <a
        href={`mailto:${contactData.email}`}
        className={classes.iconLink}
        title="Email"
        aria-label="Email"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      </a>
    </div>
  );
}

export default ContactIcons;
