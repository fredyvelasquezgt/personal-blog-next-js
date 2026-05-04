import { useRouter } from 'next/router';
import Link from 'next/link';
import classes from './main-navigation.module.css';
import Logo from './logo';

function MainNavigation() {
  const router = useRouter();

  function isActive(path) {
    return router.pathname === path || router.pathname.startsWith(path + '/')
      ? classes.active
      : '';
  }

  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/projects" className={isActive('/projects')}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/posts" className={isActive('/posts')}>
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className={isActive('/contact')}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
