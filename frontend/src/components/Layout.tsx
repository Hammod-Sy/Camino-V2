import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col" style={{ overflow: 'visible' }}>
      <Header />
      <main className="flex-grow w-full" style={{ overflow: 'visible' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

