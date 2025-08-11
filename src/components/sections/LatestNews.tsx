import { ArrowRight } from "lucide-react";
import coupleImg from "@/assets/couple-embrace.jpg";
import brideImg from "@/assets/bride-portrait.jpg";
import ringImg from "@/assets/when-where-ring.jpg";

const FloralDivider = () => (
  <svg
    width="40"
    height="24"
    viewBox="0 0 40 24"
    role="img"
    aria-label="floral divider"
    className="mx-auto"
  >
    <g fill="none" strokeWidth="1.5" stroke="hsl(var(--primary))">
      <path d="M1 12 C8 12, 8 12, 12 12" />
      <path d="M39 12 C32 12, 32 12, 28 12" />
    </g>
    <g transform="translate(20,12)">
      <ellipse rx="6" ry="4" fill="hsl(var(--accent))" opacity="0.25" />
      <circle cx="0" cy="0" r="2" fill="hsl(var(--accent))" />
      <path d="M-6 0 Q -8 -3 -10 -4" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
      <path d="M6 0 Q 8 -3 10 -4" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
    </g>
  </svg>
);

const posts = [
  {
    id: 1,
    image: coupleImg,
    alt: "Couple walking hand in hand in the desert",
    title: "Perfect Photography of wedding.",
  },
  {
    id: 2,
    image: brideImg,
    alt: "Bride holding a golden bracelet during preparation",
    title: "Best Wedding Gift Idea",
  },
  {
    id: 3,
    image: ringImg,
    alt: "Elegant wedding ring with white orchids",
    title: "Top 100 Wedding Ring Design",
  },
];

const brands = ["WEDDING", "PURE", "BRIDE", "SweetMemories", "Ceremonies"];

const LatestNews = () => {
  return (
    <section aria-labelledby="latest-news-title" className="bg-background">
      <div className="container py-16 md:py-24">
        <header className="text-center mb-10 md:mb-14">
          <p className="font-display italic text-sm text-muted-foreground">Our Blog</p>
          <h2
            id="latest-news-title"
            className="mt-2 font-display text-3xl md:text-4xl tracking-tight"
          >
            From Our Latest News
          </h2>
          <div className="mt-4">
            <FloralDivider />
          </div>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="rounded-lg border border-border bg-card shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-t-lg">
                <img
                  src={post.image}
                  alt={post.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-base sm:text-[15px] text-foreground">{post.title}</h3>
                <a
                  href="#"
                  className="mt-3 inline-flex items-center gap-2 text-sm text-accent underline-offset-4 hover:underline"
                  aria-label={`Read more: ${post.title}`}
                >
                  <span> </span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-8 opacity-70 text-muted-foreground">
          {brands.map((b) => (
            <span
              key={b}
              className="font-display tracking-[0.2em] text-xs md:text-sm uppercase"
              aria-label={`brand ${b}`}
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
