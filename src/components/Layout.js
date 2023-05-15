import Navigation from '@/components/Navigation';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};