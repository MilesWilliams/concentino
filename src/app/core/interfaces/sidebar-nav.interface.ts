export interface SidebarNavigationInterface {
    section_title: string;
    nav_items?: NavItem[];
}

export interface NavItem {
    active: boolean;
    icon: string;
    label: string;
    route?: string;
}