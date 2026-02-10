interface ServiceData {
  id: string;
  title: string;
  category: string;
  items: string[];
  image: string;
  link: string | undefined;
}

export interface Props {
  data: ServiceData;
  index: number;
  className?: string;
}

export interface DescriptionProps {
  isEven: boolean;
  id: string;
  title: string;
  category: string;
  items: string[];
  link: string | undefined;
}
