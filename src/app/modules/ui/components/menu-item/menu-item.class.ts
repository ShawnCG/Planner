export class MenuItem {
  id: string;
  icon: string;
  label: string;
  submenu?: MenuItem[];
  link?: string;

  constructor(
    id: string,
    label: string,
    icon: string,
    link?: string,
    submenu?: MenuItem[]
  ) {
    Object.assign(this, { id, label, icon, link, submenu });
  }
}
