import React from "react";
import { Utensils } from "lucide-react";
import ArchImage from "@/components/hero/ArchImage";
import startersImg from "@/assets/wedding-starters.jpg";
import mainCourseImg from "@/assets/wedding-main-course.jpg";
import dessertsImg from "@/assets/wedding-desserts.jpg";
import refreshmentsImg from "@/assets/wedding-refreshments.jpg";

const menuItems = [
  {
    tagline: "Fresh & Flavorful",
    title: "Starters",
    text:
      "A delightful selection of light bites to welcome our guests — from crispy finger foods to tangy chaat and soups.",
    image: startersImg,
    alt: "High-quality photo of wedding appetizers and elegant finger foods",
    side: "left" as const,
  },
  {
    tagline: "Hearty & Traditional",
    title: "Main Course",
    text:
      "A rich spread of traditional dishes — aromatic biryani, curries, breads, and accompaniments crafted with love.",
    image: mainCourseImg,
    alt: "Traditional thali and buffet spread with biryani and curries",
    side: "right" as const,
  },
  {
    tagline: "Sweet Endings",
    title: "Desserts",
    text:
      "A mix of classic Indian and international sweets, ensuring every guest leaves with a smile.",
    image: dessertsImg,
    alt: "Elegant display of gulab jamun, cakes, ice cream and traditional sweets",
    side: "left" as const,
  },
  {
    tagline: "Cool & Refreshing",
    title: "Refreshments",
    text:
      "A refreshing variety of drinks to keep spirits high — from chilled juices to mocktails and aromatic tea & coffee.",
    image: refreshmentsImg,
    alt: "Wedding refreshments with juices, mocktails, tea and coffee service",
    side: "right" as const,
  },
];

const WeddingMenu: React.FC = () => {
  return (
    <section aria-labelledby="menu-title" className="container relative py-16 md:py-24">
      <header className="text-center">
        <p className="font-display italic text-sm text-muted-foreground">Culinary Delights</p>
        <h2 id="menu-title" className="mt-1 font-display text-3xl md:text-5xl">Our Wedding Menu</h2>
        <p className="mt-2 text-muted-foreground">A Feast of Flavors for Our Special Day</p>
        
        {/* Food decorative pattern */}
        <div className="mt-4 flex justify-center">
          <svg width="120" height="30" viewBox="0 0 120 30" fill="none" className="text-accent">
            {/* Fork */}
            <path d="M25 8 L25 22 M22 8 L22 15 M28 8 L28 15" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
            {/* Plate */}
            <circle cx="60" cy="15" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7" />
            <circle cx="60" cy="15" r="6" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
            {/* Spoon */}
            <path d="M95 8 Q98 8 98 12 Q98 16 95 16 Q92 16 92 12 Q92 8 95 8 M95 16 L95 22" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
          </svg>
        </div>
      </header>

      {/* Center vertical line */}
      <div
        className="pointer-events-none absolute left-1/2 top-24 md:top-28 bottom-0 -translate-x-1/2 w-px bg-border"
        aria-hidden
      />

      <div className="mt-10 space-y-10 md:space-y-4">
        {menuItems.map((item, idx) => (
          <article
            key={item.title}
            className="relative grid items-center gap-8 md:grid-cols-2 md:gap-16 py-10"
          >
            {/* Utensils marker */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2" aria-hidden>
              <div className="grid h-9 w-9 place-items-center rounded-full bg-background ring-2 ring-accent shadow-sm">
                <Utensils size={16} className="text-accent" />
              </div>
            </div>

            {/* Left column */}
            <div className={item.side === "left" ? "order-1" : "order-2 md:order-1"}>
              {item.side === "left" ? (
                <ArchImage src={item.image} alt={item.alt} />
              ) : (
                <div className="max-w-xl">
                  <p className="font-display text-xs tracking-wide text-muted-foreground">{item.tagline}</p>
                  <h3 className="mt-2 font-display text-2xl md:text-4xl leading-tight">{item.title}</h3>
                  
                  {/* Menu highlight box */}
                  <div className="mt-4 p-4 bg-accent/5 rounded-lg border-l-4 border-accent">
                    <p className="text-foreground font-medium leading-relaxed">{item.text}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Right column */}
            <div className={item.side === "left" ? "order-2" : "order-1 md:order-2"}>
              {item.side === "left" ? (
                <div className="max-w-xl md:ml-auto">
                  <p className="font-display text-xs tracking-wide text-muted-foreground">{item.tagline}</p>
                  <h3 className="mt-2 font-display text-2xl md:text-4xl leading-tight">{item.title}</h3>
                  
                  {/* Menu highlight box */}
                  <div className="mt-4 p-4 bg-accent/5 rounded-lg border-l-4 border-accent">
                    <p className="text-foreground font-medium leading-relaxed">{item.text}</p>
                  </div>
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

export default WeddingMenu;