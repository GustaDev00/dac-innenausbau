export interface CardServiceItem {
  title: React.ReactNode;
  description: React.ReactNode;
  href: string;
}

export interface CardServicesProps {
  items: CardServiceItem[];
}
