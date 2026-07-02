export type WorkEntry = {
  company: string;
  role: string;
  period: string;
  href: string;
};

export type OnlineLink = {
  label: string;
  href: string;
};

export const online: OnlineLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aleksey-popov-06197323a/",
  },
  {
    label: "Telegram",
    href: "https://www.linkedin.com/in/aleksey-popov-06197323a/",
  },
];

export const work: WorkEntry[] = [
  {
    company: "DP World",
    role: "Head of Product, Product Designer",
    period: "Current",
    href: "https://www.dpworld.com",
  },
  {
    company: "DUBUY by DP World",
    role: "Product Manager",
    period: "2024",
    href: "https://www.dubuy.com",
  },
  {
    company: "Integral Petroleum SA",
    role: "Head of Product",
    period: "2020-24",
    href: "https://integral-group.org",
  },
  {
    company: "Citata (ex. Clove)",
    role: "Co-founder, CVO",
    period: "Current",
    href: "https://www.citata-pr.ru",
  },
  {
    company: "YoFlats",
    role: "Co-founder, CEO",
    period: "2023-24",
    href: "http://yoflat.com",
  },
  {
    company: "Rosgosstrakh",
    role: "Product Manager, Product Designer",
    period: "2014-17",
    href: "https://www.rgs.ru",
  },
];
