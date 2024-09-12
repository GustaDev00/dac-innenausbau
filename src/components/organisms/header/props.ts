export interface HeaderProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  modal?: {
    content: React.ReactNode;
  };
  background: {
    src: string;
    alt: string;
  };
  breadcrumb: string;
}
