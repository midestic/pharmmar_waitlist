type HowTypes = {
  img1: string;
  img2: string | null;
  img3: string | null;
  title: string;
  description: string;
  width: number;
  height: number;
  bgImage: string | null;
};

type WhyTypes = {
  img1: string;
  img2: string | null;
  img3: string | null;
  title: string;
  description: string;
  width: number;
  height: number;
};

export const howData: HowTypes[] = [
  {
    img1: "/icons/shop-add.svg",
    img2: "/images/document-text.svg",
    img3: "/icons/verify.svg",
    bgImage: null,
    height: 52,
    width: 214,
    title: "Sign Up",
    description:
      "Set up your distributor account quickly in just a few minutes by providing verified business details, ensuring a smooth and efficient registration process.",
  },

  {
    img1: "/icons/category.svg",
    img2: "/icons/search.svg",
    img3: null,
    bgImage: null,
    height: 32.23,
    width: 314.07,
    title: "Browse Inventory",
    description:
      "Set up your distributor account quickly in just a few minutes by providing verified business details, ensuring a smooth and efficient registration process.",
  },

  {
    img1: "/icons/rate.svg",
    img2: null,
    img3: null,
    bgImage: "/images/waitlist-upscale.png",
    height: 171.07,
    width: 243.37,
    title: "Order & Track",
    description:
      "Set up your distributor account quickly in just a few minutes by providing verified business details, ensuring a smooth and efficient registration process.",
  },
];

export const whyData: WhyTypes[] = [
  {
    img1: "/icons/user1.svg",
    img2: "/icons/user2.svg",
    img3: "/icons/user1.svg",
    height: 77,
    width: 186.58,
    title: "More customers, less marketing spend.",
    description:
      "PharmMar connects you with licensed pharmacies seeking reliable suppliers. Sell directly to pharmacies across Nigeria without the hassle of cold calls or costly ads.",
  },

  {
    img1: "/icons/cube1.svg",
    img2: "/icons/cube2.svg",
    img3: "/icons/cube1.svg",
    height: 93.89,
    width: 226.9,
    title: "Order management, invoicing, and payments tools",
    description:
      "PharmMar automates your order management, invoicing, and payments, freeing you up to focus on growing your business. Spend less time on admin and more on sales.",
  },

  {
    img1: "/icons/graph.svg",
    img2: null,
    img3: null,
    height: 175.53,
    width: 315.05,
    title: "Know what’s selling, and sell more.",
    description:
      "Access real-time sales analytics, track your best-selling products, and run targeted promotions to increase revenue. PharmMar’s verified badges enhance buyer trust and product visibility.",
  },
];
