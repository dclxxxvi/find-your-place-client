import * as React from 'react';

const UserMenu: React.FC = () => {
	// const navigate = useNavigate();
	// const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
	//
	// const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>): void => {
	// 	setAnchorElUser(event.currentTarget);
	// };
	//
	// const handleCloseUserMenu = (): void => {
	// 	setAnchorElUser(null);
	// };
	//
	// const handleNavigateTo = (to: string) => () => {
	// 	handleCloseUserMenu();
	// 	navigate(to);
	// };

	return (
		<></>
		// <Box sx={{ flexGrow: 0 }}>
		// 	<Tooltip title="Open settings">
		// 		<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
		// 			<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
		// 		</IconButton>
		// 	</Tooltip>
		// 	<Menu
		// 		sx={{ mt: '45px' }}
		// 		id="menu-appbar"
		// 		anchorEl={anchorElUser}
		// 		anchorOrigin={{
		// 			vertical: 'top',
		// 			horizontal: 'right',
		// 		}}
		// 		keepMounted
		// 		transformOrigin={{
		// 			vertical: 'top',
		// 			horizontal: 'right',
		// 		}}
		// 		open={Boolean(anchorElUser)}
		// 		onClose={handleCloseUserMenu}
		// 	>
		// 		{PROFILE_LINKS.map(({ label, to }) => (
		// 			<MenuItem key={to} onClick={handleNavigateTo(to)}>
		// 				<Typography textAlign="center">{label}</Typography>
		// 			</MenuItem>
		// 		))}
		// 	</Menu>
		// </Box>
	);
};

export default React.memo(UserMenu);
