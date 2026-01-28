import clsx from "clsx";
import { BoltIcon, BubblesIcon, CircleStarIcon, GlobeIcon } from "lucide-react";

const COPY = {
  primaryColor: "#0092dd",
  accentColor: "#dd4a00",

  appName: "ZEntry AI",
  appLogo: "https://github.com/shadcn.png",
  companyName: "HWP Labs",
  companyLogo: "https://github.com/hwp-labs.png",
  clientName: "Babago",
  clientLogo: "https://github.com/babago-app.png",

  thumbnail: "/uploads/ill-team.png",
  caption: "AI Automation Web Service",
  summary: `Integrate fast and intelligent systems into internal apps, point-of-sale systems with Agentic workflows`,
  description: `We help businesses automate internal workflows and POS operations using AI—reducing errors, saving time, and turning everyday systems into intelligent tools`,

  ctaLabel: "Book a demo",
  ctaValue: "https://zentryai.net/book",
};

const iconProps = { color: "white", size: 16, className: "mt-0.5" };

export default function ZEntryAIPage() {
  return (
    <div className="flex-centered">
      <main className="flex-col-start-between size-[640px] gap-8 border bg-gradient-to-b from-primary/5 to-white p-8 relative">
        <div className="absolute inset-0 bg-[url('/uploads/bg-pattern.png')] bg-cover bg-center bg-no-repeat opacity-5"></div>

        <header className="flex-center-between w-full">
          <span className="flex-center-start gap-2">
            <div className="flex-center-center size-[24px] rounded-full bg-black">
              <BubblesIcon {...iconProps} />
            </div>
            <figcaption>{COPY.appName}</figcaption>
          </span>
          <span>
            <figure className="flex-center-start gap-2">
              <img src={COPY.companyLogo} className="size-[24px]" alt="" />
              <figcaption>{COPY.companyName}</figcaption>
            </figure>
          </span>
        </header>
        <figure className="flex flex-col gap-5">
          <img src={COPY.thumbnail} className="mx-auto w-[480px]" alt="" />
          <figcaption className="flex flex-col gap-1">
            <h1 className="text-[24px] font-bold">{COPY.caption}</h1>
            <p className="text-[14px]">{COPY.summary}</p>
          </figcaption>
        </figure>
        <footer className="flex-center-between _bg-primary w-full rounded-full bg-black px-8 py-3 text-white">
          <span>{COPY.ctaLabel}</span>
          <span className="flex-center-start gap-2">
            <GlobeIcon {...iconProps} color={COPY.accentColor} />
            <a href={COPY.ctaValue} target="_blank">
              {COPY.ctaValue.split("//").pop()}
            </a>
          </span>
        </footer>
      </main>
    </div>
  );
}
