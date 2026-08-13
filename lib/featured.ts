export interface FeaturedPost {
    id: number;
    image: string;
    source: string;
    title: string;
    description: string;
    date: string;
    url: string;
  }
  
  export const featuredPosts: FeaturedPost[] = [
    {
      id: 1,
      image: "/featured/pancakeswap-delhi.png",
      source: "PancakeSwap",
      title: "PancakeSwap Delhi Meetup",
      description:
        "Featured in PancakeSwap's coverage of the Delhi community meetup in India.",
      date: "September 30, 2025",
      url: "https://x.com/PancakeSwap/status/1972957919349211502",
    },
    {
      id: 2,
      image: "/featured/pancakeswap-mumbai.png",
      source: "PancakeSwap",
      title: "PancakeSwap Mumbai Meetup",
      description:
        "Featured in PancakeSwap's coverage of its first-ever Mumbai meetup, highlighting the local community and event activities.",
      date: "May 31, 2025",
      url: "https://x.com/PancakeSwap/status/1928857875352293481",
    },
  ];