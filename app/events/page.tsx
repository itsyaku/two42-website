import type { Metadata } from "next";
import { EventsContent } from "./events-content";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Stay connected with what's happening at Two42 Christian Church — upcoming events, services, and community gatherings in Mauritius.",
};

export default function EventsPage() {
  return <EventsContent />;
}
