import type { Metadata } from "next";
import { ChurchLifeHero } from "./church-life-hero";
import { ServiceInfo } from "./service-info";
import { Ministries } from "./ministries";
import { LocationMap } from "./location-map";

export const metadata: Metadata = {
  title: "Church Life",
  description:
    "Experience church life at Two42 — Sunday services at 10 AM, prayer meetings, ministries, and community. Royal Road, Pointe aux Canonniers, Mauritius.",
};

export default function ChurchLifePage() {
  return (
    <>
      <ChurchLifeHero />
      <ServiceInfo />
      <Ministries />
      <LocationMap />
    </>
  );
}
