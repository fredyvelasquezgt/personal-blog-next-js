import Image from 'next/image';
import Link from 'next/link';
import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.text}>
        <p className={classes.greeting}>Hola, soy</p>
        <h1 className={classes.name}>Fredy Velasquez</h1>
        <p className={classes.role}>Full Stack Developer</p>
        <p className={classes.bio}>
          Construyo aplicaciones web con React y Node.js. Me interesa el software
          bien diseñado, el open source y escribir sobre tecnología.
        </p>
        <div className={classes.ctas}>
          <Link href="/projects" className={classes.ctaPrimary}>
            Ver proyectos
          </Link>
          <Link href="/posts" className={classes.ctaSecondary}>
            Leer blog
          </Link>
        </div>
      </div>
      <div className={classes.imageWrapper}>
        <Image
          src="/images/site/fredy.jpeg"
          alt="Foto de Fredy Velasquez"
          width={320}
          height={320}
          priority
        />
      </div>
    </section>
  );
}

export default Hero;
