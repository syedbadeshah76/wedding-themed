import { Facebook, Twitter, Instagram, Heart, ShoppingCart, Search } from "lucide-react";
import TeardropImage from "@/components/hero/TeardropImage";
import OvalImage from "@/components/hero/OvalImage";
import groomImg from "@/assets/groom-portrait.jpg";
import coupleImg from "@/assets/couple-embrace.jpg";
import brideImg from "@/assets/bride-portrait.jpg";
import CountdownBanner from "@/components/sections/CountdownBanner";
import StoryTimeline from "@/components/sections/StoryTimeline";
import WhenWhere from "@/components/sections/WhenWhere";
import LatestNews from "@/components/sections/LatestNews";
const Nav = () => (
  <header className="w-full border-b border-border">
    <div className="container flex items-center justify-between py-6">
      <a href="/" className="flex items-center gap-2">
        <Heart size={18} className="text-accent" aria-hidden />
        <span className="font-display text-xl tracking-wide">iloveu</span>
      </a>

      <nav aria-label="Main navigation" className="hidden md:block">
        <ul className="flex items-center gap-8 font-display uppercase text-sm tracking-[0.2em]">
          {[
            "Home",
            "Pages",
            "Portfolio",
            "Blog",
            "Shop",
            "Contact",
          ].map((item) => (
            <li key={item}>
              <a href="#" className="hover:text-primary transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-5">
        <div className="relative">
          <ShoppingCart aria-label="Cart" size={20} />
          <span className="absolute -top-2 -right-2 grid h-4 w-4 place-items-center rounded-full bg-accent text-[10px] text-accent-foreground">
            2
          </span>
        </div>
        <button aria-label="Search">
          <Search size={20} />
        </button>
      </div>
    </div>
  </header>
);

const Socials = () => (
  <div className="mt-3 flex items-center justify-center gap-3 text-muted-foreground">
    <a aria-label="Facebook" href="#"><Facebook size={14} /></a>
    <a aria-label="Twitter" href="#"><Twitter size={14} /></a>
    <a aria-label="Instagram" href="#"><Instagram size={14} /></a>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        {/* SEO: Single H1 kept for semantics */}
        <h1 className="sr-only">Elegant Wedding Portfolio Hero</h1>

        <section className="container py-12 md:py-20">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-3 md:gap-12">
            {/* Left: Groom */}
            <article className="flex flex-col items-center text-center">
              <h2 className="mb-3 font-script text-[26px] leading-none text-primary">Albert Flores</h2>
              <Socials />
              <div className="mt-4 w-56 md:w-64">
                <TeardropImage src={groomImg} alt="Groom portrait" className="w-full h-auto" />
              </div>
            </article>

            {/* Center: Couple with oval and double outline */}
            <article className="flex flex-col items-center">
              <div className="w-[24rem] md:w-[32rem]">
                <OvalImage src={coupleImg} alt="Bride and groom embracing" className="w-full h-auto" />
              </div>
            </article>

            {/* Right: Bride */}
            <article className="flex flex-col items-center text-center">
              <div className="w-56 md:w-64">
                <TeardropImage src={brideImg} alt="Bride portrait" className="w-full h-auto" />
              </div>
              <h2 className="mt-6 font-script text-[26px] leading-none text-primary">Jenny Wilson</h2>
              <Socials />
            </article>
          </div>

          {/* Decorative divider with wedding-style swirl */}
          <div className="mt-14 flex justify-center">
            <svg width="420" height="60" viewBox="0 0 420 60" fill="none" aria-hidden>
              <path d="M5 30 C 80 10, 120 50, 210 30 C 300 10, 340 50, 415 30" stroke="hsl(var(--accent))" strokeWidth="2" fill="none"/>
              <path d="M210 30 c -20 -10 -20 -30 0 -40 c 20 10 20 30 0 40 Z" stroke="hsl(var(--accent))" strokeWidth="1.5" fill="none"/>
            </svg>
          </div>
        </section>

        {/* Countdown Banner Section */}
        <CountdownBanner />
        {/* Our Story Timeline Section */}
        <StoryTimeline />
        {/* When & Where Section */}
        <WhenWhere />
        {/* From Our Latest News Section */}
        <LatestNews />
      </main>
    </div>
  );
};

export default Index;
