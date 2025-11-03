export type NavigationSubItem = {
  title: string;
  href: string;
  description?: string;
};

export type NavigationItem = {
  title: string;
  href: string;
  items?: NavigationSubItem[];
};
