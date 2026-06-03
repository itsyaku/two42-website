import type { Metadata } from "next";
import { ConnectContent } from "./connect-content";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Get in touch with Two42 Christian Church. Whether you're exploring faith, looking for a church, or want to get involved, we'd love to hear from you.",
};

export default function ConnectPage() {
  return <ConnectContent />;
}
