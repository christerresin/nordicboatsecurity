import { withRouter } from 'next/router';

function ActiveLink({ router, href, children }) {
  (function prefetchPages() {
    if (typeof window !== 'undefined') {
      router.prefetch(router.pathname);
    }
  })();

  const handleClick = (event) => {
    event.preventDefault();
    router.push(href);
  };

  const isCurrentPath = router.pathname === href || router.asPath === href;
  return (
    <div>
      <a
        href={href}
        onClick={handleClick}
        style={{
          textDecoration: 'none',
          color: isCurrentPath ? '#bd0000' : '',
        }}
      >
        {children}
      </a>
    </div>
  );
}

export default withRouter(ActiveLink);
