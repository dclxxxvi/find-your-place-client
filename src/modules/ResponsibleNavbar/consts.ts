interface NavLink {
	label: string;
	to: string;
}

export const NAV_LINKS: NavLink[] = [{ label: 'Добавить пространство', to: '/Workspaces/new' }];

export const PROFILE_LINKS: NavLink[] = [{ label: 'Профиль', to: '/profile' }];
