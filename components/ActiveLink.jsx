import { useRouter } from 'next/router';

const ActiveLink = ({ children, href }) => {
  const router = useRouter();

  const isCurrentPath = router.pathname === href || router.asPath === href;

  const handleClick = (e) => {
    e.preventDefault();

    router.push(href);
  };

  //   const style = {
  //     color: isCurrentPath ? '#fff' : 'rgba(1, 27, 87, 0.75)',
  //     backgroundColor: isCurrentPath ? 'rgba(56, 108, 226)' : 'transparent',
  //   };

  const bg1 = 'bg-custom-blue';
  const bg2 = 'bg-transparent';

  const text1 = 'text-white';
  const text2 = 'text-dark-blue';

  return (
    <a
      href={href}
      className={isCurrentPath ? `${bg1} ${text1}` : `${bg2} ${text2}`}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default ActiveLink;
