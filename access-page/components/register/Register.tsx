import { useFormik } from 'formik';
import registerSchema from '../../schemas/registerSchema';
import { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import ConditionallyRender from '../conditionally-render/ConditionallyRender';

function Register(
	setState: React.Dispatch<React.SetStateAction<boolean>>
): JSX.Element {
	const {
		values,
		errors,
		touched,
		resetForm,
		setFieldTouched,
		handleChange,
		handleBlur,
		handleSubmit,
	} = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
		validationSchema: registerSchema,
		onSubmit(values, formikHelpers) {
			console.log('Não implementado.');

			// const someEqualEmail = array.some(
			// 	(user) => user.email === values.email
			// );

			// if (someEqualEmail) {
			// 	setDisabledBtn(true);
			// 	setShowAlert(true);

			// 	setTimeout(() => {
			// 		setDisabledBtn(false);
			// 		setShowAlert(false);
			// 	}, 3000);

			// 	return;
			// }

			// resetForm();
			// setState(false);
		},
	});

	const [showAlert, setShowAlert] = useState<boolean>(false);
	const [disabledBtn, setDisabledBtn] = useState<boolean>(true);

	useEffect(() => {
		if (
			values.firstName !== '' &&
			values.lastName !== '' &&
			values.email !== '' &&
			values.password !== '' &&
			values.confirmPassword !== ''
		) {
			if (
				!errors.firstName &&
				!errors.lastName &&
				!errors.email &&
				!errors.password &&
				!errors.confirmPassword
			) {
				setDisabledBtn(false);
			} else {
				setDisabledBtn(true);
			}
		} else {
			setDisabledBtn(true);
		}
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
			autoComplete='off'
			onSubmit={handleSubmit}
		>
			<Typography variant='h4' align='center'>
				Cadastro
			</Typography>

			<ConditionallyRender
				condition={showAlert}
				show={
					<Typography
						variant='subtitle1'
						color='error'
						align='center'
					>
						E-mail já utilizado.
					</Typography>
				}
			/>

			<TextField
				label='Nome'
				helperText={touched.firstName && errors.firstName}
				error={errors.firstName && touched.firstName ? true : false}
				id='firstName'
				value={values.firstName}
				onChange={handleChange}
				onBlur={handleBlur}
			/>

			<TextField
				label='Sobrenome'
				helperText={touched.lastName && errors.lastName}
				error={errors.lastName && touched.lastName ? true : false}
				id='lastName'
				value={values.lastName}
				onChange={handleChange}
				onBlur={handleBlur}
			/>

			<TextField
				label='E-mail'
				helperText={touched.email && errors.email}
				error={errors.email && touched.email ? true : false}
				id='email'
				value={values.email}
				onChange={handleChange}
				onBlur={handleBlur}
			/>

			<TextField
				label='Senha'
				helperText={touched.password && errors.password}
				error={errors.password && touched.password ? true : false}
				type='password'
				id='password'
				value={values.password}
				onChange={(e) => {
					setFieldTouched(e.target.id);
					handleChange(e);
				}}
				onBlur={handleBlur}
			/>

			<TextField
				label='Confirme a senha'
				helperText={touched.confirmPassword && errors.confirmPassword}
				error={
					errors.confirmPassword && touched.confirmPassword
						? true
						: false
				}
				type='password'
				id='confirmPassword'
				value={values.confirmPassword}
				onChange={(e) => {
					setFieldTouched(e.target.id);
					handleChange(e);
				}}
				onBlur={handleBlur}
			/>

			<Button
				sx={{ maxHeight: 36.5 }}
				variant='contained'
				fullWidth
				type='submit'
				disabled={disabledBtn}
			>
				Cadastrar
			</Button>

			<Button
				sx={{ maxHeight: 36.5 }}
				variant='outlined'
				fullWidth
				onClick={() => setState(false)}
			>
				Conecte-se
			</Button>
		</Box>
	);
}

export default Register;
