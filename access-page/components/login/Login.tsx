import { useFormik } from 'formik';
import { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import ConditionallyRender from '../conditionally-render/ConditionallyRender';

function Login(
	setState: React.Dispatch<React.SetStateAction<boolean>>
): JSX.Element {
	const { values, resetForm, handleChange, handleSubmit } = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		onSubmit(values, formikHelpers) {
			console.log('Não implementado.');

			// const { email, password } = values;

			// const findedUser = array.find(
			// 	(user) => user.email === email && user.password === password
			// );

			// if (!findedUser) {
			// 	setDisabledBtn(true);
			// 	setShowAlert(true);

			// 	setTimeout(() => {
			// 		setDisabledBtn(false);
			// 		setShowAlert(false);
			// 	}, 3000);
			// }
		},
	});

	const [showAlert, setShowAlert] = useState<boolean>(false);
	const [disabledBtn, setDisabledBtn] = useState<boolean>(true);

	useEffect(() => {
		values.email !== '' && values.password !== ''
			? setDisabledBtn(false)
			: setDisabledBtn(true);
	}, [{ ...values }]);

	useEffect(() => {
		if (showAlert) {
			setDisabledBtn(true);
		} else {
			setDisabledBtn(false);
		}
	}, [showAlert]);

	return (
		<Box
			sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
			component='form'
			onSubmit={handleSubmit}
		>
			<Typography variant='h4' align='center'>
				Login
			</Typography>

			<ConditionallyRender
				condition={showAlert}
				show={
					<Typography
						variant='subtitle1'
						color='error'
						align='center'
					>
						E-mail ou senha incorretos.
					</Typography>
				}
			/>

			<TextField
				label='E-mail'
				id='email'
				value={values.email}
				onChange={handleChange}
			/>

			<TextField
				label='Senha'
				type='password'
				id='password'
				value={values.password}
				onChange={handleChange}
			/>

			<Button
				sx={{ maxHeight: 36.5 }}
				variant='contained'
				fullWidth
				type='submit'
				disabled={disabledBtn}
				onClick={() => setState(false)}
			>
				Entrar
			</Button>

			<Button
				sx={{ maxHeight: 36.5 }}
				variant='outlined'
				fullWidth
				onClick={() => {
					setShowAlert(false);
					resetForm();
					setState(true);
				}}
			>
				Cadastre-se
			</Button>
		</Box>
	);
}

export default Login;
