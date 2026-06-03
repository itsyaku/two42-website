import type { Metadata } from "next";
import { AboutHero } from "./about-hero";
import { Story } from "./story";
import { VisionMission } from "./vision-mission";
import { Beliefs } from "./beliefs";
import { Leadership } from "./leadership";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "Learn about Two42 Christian Church. Our vision, mission, beliefs, and leadership. A community in Mauritius built on Acts 2:42-47.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Story />
      <VisionMission />
      <Beliefs />
      <Leadership />
    </>
  );
}
