import { Hero } from "@/components/home/hero";
import { Values } from "@/components/home/values";
import { Welcome } from "@/components/home/welcome";
import { ServiceTimes } from "@/components/home/service-times";
import { UpcomingEvents } from "@/components/home/upcoming-events";
import { InstagramFeed } from "@/components/home/instagram-feed";
import { ContactStrip } from "@/components/home/contact-strip";

export default function Home() {
  return (
    <>
      <Hero />
      <Values />
      <Welcome />
      <ServiceTimes />
      <UpcomingEvents />
      <InstagramFeed />
      <ContactStrip />
    </>
  );
}
