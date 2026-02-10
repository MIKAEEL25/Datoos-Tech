interface ServiceData {
  id: string;
  title: string;
  category: string;
  items: string[];
  image: string;
  link: string;
}

export interface Props {
  data: ServiceData;
  index: number;
}

export interface DescriptionProps {
  isEven: boolean;
  id: string;
  title: string;
  category: string;
  items: string[];
  link: string;
}
