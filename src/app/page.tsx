import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import Product from '@/components/product/product';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Product />
      </main>
      <Footer />
    </div>
  );
}
