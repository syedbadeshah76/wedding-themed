import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import ringImg from "@/assets/when-where-ring.jpg";
import coupleImg from "@/assets/couple-embrace.jpg";

interface EventItem {
  key: "reception" | "dinner";
  title: string;
  datetime: string;
  address: string;
  phone: string;
}

const EVENTS: EventItem[] = [
  {
    key: "reception",
    title: "The Reception",
    datetime: "Monday, 12 Apr, 2022 | 1:00 PM – 2:30 PM",
    address: "4857 Washington Ave. Manchester, Kentucky 39495",
    phone: "+1 234-687-8910",
  },
  {
    key: "dinner",
    title: "The Dinner",
    datetime: "Monday, 12 Apr, 2022 | 7:00 PM – 10:00 PM",
    address: "4857 Washington Ave. Manchester, Kentucky 39495",
    phone: "+1 234-687-8910",
  },
];

const EVENT_MEDIA: Record<EventItem['key'], { src: string; alt: string }> = {
  reception: { src: ringImg, alt: "Bride’s hand with wedding ring holding white orchids" },
  dinner: { src: coupleImg, alt: "Bride and groom embracing" },
};

const ArrowButton = ({
  direction,
  onClick,
  className,
  ariaLabel,
}: {
  direction: "left" | "right";
  onClick: () => void;
  className?: string;
  ariaLabel: string;
}) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={ariaLabel}
    className={cn(
      "inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background/60 text-foreground shadow-sm backdrop-blur transition-colors hover:bg-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring hover-scale",
      className
    )}
  >
    {direction === "left" ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
  </button>
);

const FloralDivider = () => (
  <div className="flex justify-center py-2" aria-hidden>
    <svg width="56" height="18" viewBox="0 0 56 18" fill="none">
      <path d="M1 9 H18" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="28" cy="9" r="3.5" fill="hsl(var(--primary))" opacity="0.6"/>
      <path d="M38 9 H55" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M26 7 C24 5, 22 5, 20 7" stroke="hsl(var(--accent))" strokeWidth="1" fill="none"/>
      <path d="M30 7 C32 5, 34 5, 36 7" stroke="hsl(var(--accent))" strokeWidth="1" fill="none"/>
    </svg>
  </div>
);

const WhenWhere: React.FC = () => {
  const [index, setIndex] = React.useState(0);
  const event = EVENTS[index];
  const media = EVENT_MEDIA[event.key];

  const scrollPrev = React.useCallback(() => setIndex((i) => (i - 1 + EVENTS.length) % EVENTS.length), []);
  const scrollNext = React.useCallback(() => setIndex((i) => (i + 1) % EVENTS.length), []);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") scrollPrev();
    if (e.key === "ArrowRight") scrollNext();
  };

  return (
    <section id="when-and-where" aria-labelledby="when-where-title" className="container py-16 md:py-24">
      <header className="text-center">
        <p className="font-display italic text-sm text-muted-foreground">Our Wedding</p>
        <h2 id="when-where-title" className="mt-2 font-display text-3xl md:text-4xl">When & Where</h2>
        <FloralDivider />
      </header>

      <div
        className="relative mt-8 md:mt-12"
        role="region"
        aria-roledescription="carousel"
        aria-label="Event details carousel"
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        {/* Desktop arrows */}
        <div className="pointer-events-none absolute inset-y-0 left-2 right-2 hidden items-center justify-between md:flex">
          <div className="pointer-events-auto">
            <ArrowButton direction="left" onClick={scrollPrev} ariaLabel="Previous event" />
          </div>
          <div className="pointer-events-auto">
            <ArrowButton direction="right" onClick={scrollNext} ariaLabel="Next event" />
          </div>
        </div>

        {/* Main content area */}
        <div className="grid overflow-hidden rounded-lg border border-border bg-background md:grid-cols-[1.2fr_1fr]">
          {/* Left: Image */}
          <div className="relative h-56 w-full md:h-[420px]">
            <img
              key={event.key}
              src={media.src}
              alt={media.alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover animate-[fade-in_0.5s_ease-out]"
            />
          </div>

          {/* Right: Card */}
          <div className="p-4 md:p-0 md:flex md:items-center">
            <Card className="mx-auto w-full max-w-[520px] rounded-xl border-border bg-card/95 p-6 shadow-sm md:mr-6 md:p-8">
              <div key={event.key} className="animate-enter" aria-live="polite">
                <h3 className="font-display text-xl text-foreground md:text-2xl">{event.title}</h3>
                <span className="mt-2 block h-0.5 w-12 rounded-full bg-accent" />

                <div className="mt-5 space-y-3 font-display text-sm text-muted-foreground md:text-base">
                  <p>{event.datetime}</p>
                  <p>{event.address}</p>
                  <p>{event.phone}</p>
                </div>

                <div className="mt-6">
                  <a href="#" className="text-accent underline-offset-4 hover:underline">See Location</a>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Mobile arrows */}
        <div className="mt-4 flex items-center justify-center gap-3 md:hidden">
          <ArrowButton direction="left" onClick={scrollPrev} ariaLabel="Previous event" />
          <ArrowButton direction="right" onClick={scrollNext} ariaLabel="Next event" />
        </div>
      </div>
    </section>
  );
};

export default WhenWhere;
