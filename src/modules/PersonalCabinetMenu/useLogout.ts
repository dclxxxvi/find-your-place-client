import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
	const navigate = useNavigate();

	return (): void => {
		localStorage.setItem('access-token', '');
		navigate('/');
		location.reload();
	};
};
