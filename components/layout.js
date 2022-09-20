import Consent from './Concent';

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <Consent />
    </>
  );
}
