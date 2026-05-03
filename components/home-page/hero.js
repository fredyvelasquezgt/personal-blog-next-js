import Image from 'next/image';
import Link from 'next/link';
import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.text}>
        <p className={classes.greeting}>Hi, I am</p>
        <h1 className={classes.name}>Fredy Velasquez</h1>
        <p className={classes.role}>Computer Science Engineer and Full-Stack Developer</p>
        <p className={classes.bio}>
        I build digital products and have a strong interest in technology, software development, and engineering. I’m also passionate about open source, writing, traveling, and sports.
</p>        
<div className={classes.ctas}>
          <Link href="/projects" className={classes.ctaPrimary}>
            Explore projects
          </Link>
          <Link href="/posts" className={classes.ctaSecondary}>
            Read blog
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
