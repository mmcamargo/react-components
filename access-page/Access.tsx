import { useState } from 'react';
import { Container, Paper } from '@mui/material';
import ConditionallyRender from './components/conditionally-render/ConditionallyRender';
import Register from './components/register/Register';
import Login from './components/login/Login';

function Access(): JSX.Element {
	const [isRegistering, setIsRegistering] = useState(false);

	return (
		<Container
			maxWidth={false}
			sx={{
				display: 'grid',
				minHeight: '100vh',
				paddingX: 0,
				paddingY: { xs: 0, sm: 3 },
				placeItems: 'center',
			}}
		>
			<Paper
				sx={{
					alignItems: 'center',
					display: 'grid',
					gap: 3,
					minHeight: {
						xs: '100vh',
						sm: 'auto',
					},
					p: 3,
					width: { xs: '100%', sm: 400 },
				}}
				elevation={3}
			>
				<ConditionallyRender
					condition={isRegistering}
					show={Register(setIsRegistering)}
					elseShow={Login(setIsRegistering)}
				/>
			</Paper>
		</Container>
	);
}

export default Access;
