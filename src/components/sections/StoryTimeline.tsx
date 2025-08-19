import React from "react";
import { Heart } from "lucide-react";
import ArchImage from "@/components/hero/ArchImage";
import coupleImg from "@/assets/couple-embrace.jpg";
import brideImg from "@/assets/bride-portrait.jpg";
import groomImg from "@/assets/groom-portrait.jpg";

const items = [
  {
    date: "Guidance from Allah",
    title: "Nikah – A Sacred Bond",
    verse: "And We created you in pairs.",
    reference: "Qur'an 78:8",
    text:
      "Nikah is not just a contract, but a divine bond that completes half of faith, bringing peace, love, and protection between two souls.",
    image: coupleImg,
    alt: "A couple holding hands with a soft glowing background, symbolizing new beginnings",
    side: "left" as const,
  },
  {
    date: "Guidance from Allah",
    title: "Love & Mercy in Marriage",
    verse: "And among His signs is that He created for you spouses from among yourselves, that you may find tranquility in them, and He placed between you love and mercy. Indeed in that are signs for people who reflect.",
    reference: "Qur'an 30:21",
    text:
      "Marriage is built on compassion, care, and mercy — a relationship where two hearts find peace with each other.",
    image: brideImg,
    alt: "A bride and groom smiling together, symbolizing affection and harmony",
    side: "right" as const,
  },
  {
    date: "Guidance from Allah",
    title: "Trust & Righteousness",
    verse: "They (your wives) are your garment, and you are their garment.",
    reference: "Qur'an 2:187",
    text:
      "Spouses are a covering and protection for one another — in dignity, honor, and support. Together, they walk in righteousness, supporting each other in faith and life.",
    image: groomImg,
    alt: "A couple standing together in unity, showing partnership and closeness",
    side: "left" as const,
  },
];

const StoryTimeline: React.FC = () => {
  return (
    <section aria-labelledby="story-title" className="container relative py-16 md:py-24">
      <header className="text-center">
        <p className="font-display italic text-sm text-muted-foreground">Blessed Union</p>
        <h2 id="story-title" className="mt-1 font-display text-3xl md:text-5xl">Our Story in the Light of the Qur'an</h2>
        
        {/* Islamic decorative pattern */}
        <div className="mt-4 flex justify-center">
          <svg width="120" height="30" viewBox="0 0 120 30" fill="none" className="text-accent">
            {/* Crescent moon */}
            <path d="M15 15 A 8 8 0 1 1 15 15.1 A 6 6 0 1 0 15 15" fill="currentColor" opacity="0.6" />
            {/* Star */}
            <path d="M60 8 L62 14 L68 14 L63 18 L65 24 L60 20 L55 24 L57 18 L52 14 L58 14 Z" fill="currentColor" opacity="0.7" />
            {/* Floral pattern */}
            <path d="M105 15 Q110 10 115 15 Q110 20 105 15" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
            <path d="M25 15 Q30 10 35 15 Q30 20 25 15" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
          </svg>
        </div>
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
                  
                  {/* Qur'an Verse */}
                  <blockquote className="mt-4 p-4 bg-accent/5 rounded-lg border-l-4 border-accent">
                    <p className="italic text-foreground font-medium leading-relaxed">"{item.verse}"</p>
                    <cite className="block mt-2 text-sm text-muted-foreground font-display">— {item.reference}</cite>
                  </blockquote>
                  
                  <p className="mt-4 text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              )}
            </div>

            {/* Right column */}
            <div className={item.side === "left" ? "order-2" : "order-1 md:order-2"}>
              {item.side === "left" ? (
                <div className="max-w-xl md:ml-auto">
                  <p className="font-display text-xs tracking-wide text-muted-foreground">{item.date}</p>
                  <h3 className="mt-2 font-display text-2xl md:text-4xl leading-tight">{item.title}</h3>
                  
                  {/* Qur'an Verse */}
                  <blockquote className="mt-4 p-4 bg-accent/5 rounded-lg border-l-4 border-accent">
                    <p className="italic text-foreground font-medium leading-relaxed">"{item.verse}"</p>
                    <cite className="block mt-2 text-sm text-muted-foreground font-display">— {item.reference}</cite>
                  </blockquote>
                  
                  <p className="mt-4 text-muted-foreground leading-relaxed">{item.text}</p>
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
