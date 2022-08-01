import Navbar from '@/components/Navbar';
// import Breadcrumbs from 'nextjs-breadcrumbs';
import layout from '@/styles/Layout.module.css';
import Footer from '../Footer';

export default function Layout({ children }) {
  return (
    <div className={layout.container}>
      <div>
        <Navbar />
        <div className={layout.breadcrumbs}>
          {/* <Breadcrumbs useDefaultStyle rootLabel='Home' omitIndexList={[1]} /> */}
        </div>
        <div className={layout.children}>{children}</div>
      </div>
      <div className={layout.footer}>
        <Footer />
      </div>
    </div>
  );
}
