export interface NavigationLink {
  text: string;
  href: string;
}

export interface NavigationProps {
  links?: NavigationLink[];
}

export interface FooterSection {
  links: NavigationLink[];
}

export interface FooterProps {
  leftSection?: FooterSection;
  rightSection?: FooterSection;
  showLanguageSelector?: boolean;
}