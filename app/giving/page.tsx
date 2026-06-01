import type { Metadata } from "next";
import { GivingContent } from "./giving-content";

export const metadata: Metadata = {
  title: "Giving",
  description:
    "Support Two42 Christian Church through generous giving. Bank details and information for tithes and offerings.",
};

export default function GivingPage() {
  return <GivingContent />;
}
