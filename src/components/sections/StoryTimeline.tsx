import React from "react";
import { Heart } from "lucide-react";
import ArchImage from "@/components/hero/ArchImage";
import coupleImg from "@/assets/couple-embrace.jpg";
import brideImg from "@/assets/bride-portrait.jpg";
import groomImg from "@/assets/groom-portrait.jpg";

const items = [
  {
    date: "22 Feb, 2019",
    title: "How we meet",
    text:
      "Consectetur adipiscing elit. Fringilla at risus orci, tempus facilisi sed. Enim tortor, faucibus netus orci donec volutpat adipiscing.",
    image: coupleImg,
    alt: "Couple meeting for the first time",
    side: "left" as const,
  },
  {
    date: "02 Nov, 2020",
    title: "He proposed, I said Yes",
    text:
      "Sit condimentum elit convallis libero. Nunc in eu tellus ipsum placerat. At donec in euismod, sed vitae viverra vel.",
    image: brideImg,
    alt: "Proposal moment celebration",
    side: "right" as const,
  },
  // Add more items if needed
];

const StoryTimeline: React.FC = () => {
  return (
    <section aria-labelledby="story-title" className="container relative py-16 md:py-24">
      <header className="text-center">
        <p className="font-display italic text-sm text-muted-foreground">Our story</p>
        <h2 id="story-title" className="mt-1 font-display text-3xl md:text-5xl">How It Happened</h2>
      </header>

      {/* Center vertical line */}
      <div
        className="pointer-events-none absolute left-1/2 top-24 md:top-28 bottom-0 -translate-x-1/2 w-px bg-border"
        aria-hidden
      />

      <div className="mt-10 space-y-10 md:space-y-4">
        {items.map((item, idx) => (
          <article
            key={item.title}
            className="relative grid items-center gap-8 md:grid-cols-2 md:gap-16 py-10"
          >
            {/* Heart marker */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2" aria-hidden>
              <div className="grid h-9 w-9 place-items-center rounded-full bg-background ring-2 ring-accent shadow-sm">
                <Heart size={16} className="text-accent" />
              </div>
            </div>

            {/* Left column */}
            <div className={item.side === "left" ? "order-1" : "order-2 md:order-1"}>
              {item.side === "left" ? (
                <ArchImage src={item.image} alt={item.alt} />
              ) : (
                <div className="max-w-xl">
                  <p className="font-display text-xs tracking-wide text-muted-foreground">{item.date}</p>
                  <h3 className="mt-2 font-display text-2xl md:text-4xl leading-tight">{item.title}</h3>
                  <p className="mt-3 text-muted-foreground">{item.text}</p>
                </div>
              )}
            </div>

            {/* Right column */}
            <div className={item.side === "left" ? "order-2" : "order-1 md:order-2"}>
              {item.side === "left" ? (
                <div className="max-w-xl md:ml-auto">
                  <p className="font-display text-xs tracking-wide text-muted-foreground">{item.date}</p>
                  <h3 className="mt-2 font-display text-2xl md:text-4xl leading-tight">{item.title}</h3>
                  <p className="mt-3 text-muted-foreground">{item.text}</p>
                </div>
              ) : (
                <ArchImage src={item.image} alt={item.alt} />
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default StoryTimeline;
