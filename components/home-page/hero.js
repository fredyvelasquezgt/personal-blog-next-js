import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/fredy.jpeg"
          alt="An image showing Fredy"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Fredy</h1>
      <p>I blog about life</p>
    </section>
  );
}

export default Hero;
