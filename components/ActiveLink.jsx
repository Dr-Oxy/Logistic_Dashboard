import { useRouter } from 'next/router';

const ActiveLink = ({ children, href }) => {
  const router = useRouter();

  const isCurrentPath = router.pathname === href || router.asPath === href;

  const handleClick = (e) => {
    e.preventDefault();

    router.push(href);
  };

  return (
    <a
      href={href}
      className={isCurrentPath ? 'active' : ''}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default ActiveLink;
