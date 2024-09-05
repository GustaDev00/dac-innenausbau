export interface CardChooseUsItem {
  title: React.ReactNode;
  text: React.ReactNode;
  img: {
    src: string;
    alt: string;
  };
}

export interface CardChooseUsProps {
  items: CardChooseUsItem[];
}
