export interface CardSlideProps {
  arrow?: boolean;
  items: Array<any>;
  renderContent: (item: any, index: number, isActive: boolean, duration: number) => React.ReactNode;
  left?: boolean;
  duration?: number;
  start: boolean;
}
