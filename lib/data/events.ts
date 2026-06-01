export interface Event {
  slug: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
}

export const events: Event[] = [
  {
    slug: "sunday-service",
    title: "Sunday Service",
    date: "Every Sunday",
    time: "10:00 AM",
    location: "Two42 Church, Royal Road",
    description:
      "Join us every Sunday as we gather to worship, learn, and grow together in faith. Our services are designed to inspire and equip you to live a life full of purpose and passion for God.",
    image:
      "https://images.unsplash.com/photo-1508963493744-76fce69379c0?w=600&q=80",
  },
  {
    slug: "prayer-morning",
    title: "Prayer Meeting",
    date: "Every Sunday",
    time: "9:30 AM",
    location: "Two42 Church, Royal Road",
    description:
      "Start your Sunday with prayer. Join us as we come together to seek God's presence and pray for our community, our nation, and the world.",
    image:
      "https://images.unsplash.com/photo-1445445290350-18a3b86e0b5a?w=600&q=80",
  },
  {
    slug: "community-outreach",
    title: "Community Outreach",
    date: "Coming Soon",
    time: "TBA",
    location: "Pointe aux Canonniers",
    description:
      "Loving our neighbours through practical service. Stay tuned for our next community outreach event where we serve those around us.",
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80",
  },
];
