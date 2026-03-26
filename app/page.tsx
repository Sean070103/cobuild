import Header from '@/components/header';
import Hero from '@/components/hero';
import Services from '@/components/services';
import Team from '@/components/team';
import WhyChooseUs from '@/components/why-choose-us';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import { ThreeDBackground } from '@/components/3d-background';

export default function Home() {
  return (
    <div className="dark min-h-screen bg-background text-foreground overflow-hidden">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-background focus:text-foreground focus:px-4 focus:py-2 rounded-md border border-border"
      >
        Skip to content
      </a>
      <ThreeDBackground />
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Team />
        <WhyChooseUs />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
