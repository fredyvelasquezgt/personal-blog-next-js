import { useState, useEffect } from 'react';
import classes from './experience-carousel.module.css';

function ExperienceCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Experience',
      icon: '⚡',
      content: ['6+ Years', 'Full-Stack Developer', 'Computer Science Engineer'],
      color: 'primary'
    },
    {
      title: 'Languages',
      icon: '💻',
      content: ['Javascript', 'Typescript', 'Python', 'Java', 'C#'],
      color: 'blue'
    },
    {
      title: 'Frontend & UI',
      icon: '🎨',
      content: ['React', 'Next.js', 'React Native', 'Expo', 'Redux', 'TanStack Query', 'Material UI', 'ShadCN', 'Storybook'],
      color: 'sky'
    },
    {
      title: 'Backend',
      icon: '🚀',
      content: ['Node.js', 'Express.js', 'Django', 'REST APIs', 'JWT Auth', 'Axios'],
      color: 'green'
    },
    {
      title: 'Databases',
      icon: '💾',
      content: ['PostgreSQL', 'MongoDB', 'Firebase', 'MySQL', 'DynamoDB', 'Aurora', 'DocumentDB'],
      color: 'orange'
    },
    {
      title: 'Testing',
      icon: '✅',
      content: ['Jest', 'Testing Library', 'Vitest', 'Cypress', 'Selenium', 'MSW'],
      color: 'green-light'
    },
    {
      title: 'Cloud & DevOps',
      icon: '☁️',
      content: ['AWS', 'Azure', 'GCP', 'Docker', 'GitHub', 'Bitbucket', 'GitHub Actions'],
      color: 'purple'
    },
    {
      title: 'Development Tools',
      icon: '🛠️',
      content: ['VSCode', 'Cursor', 'Github Copilot', 'Claude Code', 'Postman', 'React DevTools'],
      color: 'indigo'
    },
    {
      title: 'Design & Other',
      icon: '🎯',
      content: ['Design Systems', 'Figma', 'Unity', 'Scrum', 'Kanban', 'Expo'],
      color: 'pink'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className={classes.carousel}>
      <div className={classes.container}>
        <div className={classes.carouselWrapper}>
          <div className={classes.slidesContainer}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`${classes.slide} ${
                  index === currentSlide ? classes.active : ''
                } ${classes[`color-${slide.color}`]}`}
              >
                <div className={classes.icon}>{slide.icon}</div>
                <h3 className={classes.title}>{slide.title}</h3>
                <ul className={classes.content}>
                  {slide.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <button className={classes.prevBtn} onClick={handlePrev} aria-label="Previous slide">
            ◀
          </button>
          <button className={classes.nextBtn} onClick={handleNext} aria-label="Next slide">
            ▶
          </button>
        </div>

        <div className={classes.indicators}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${classes.indicator} ${
                index === currentSlide ? classes.active : ''
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceCarousel;
