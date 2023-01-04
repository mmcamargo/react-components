import { useFormik } from 'formik';
import { registerSchema } from '../schemas';
import { useState, useEffect } from 'react';

function useRegisterForm(
	setState: React.Dispatch<React.SetStateAction<boolean>>
) {
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

	return {
		values,
		errors,
		touched,
		resetForm,
		setFieldTouched,
		handleChange,
		handleBlur,
		handleSubmit,
		showAlert,
		setShowAlert,
		disabledBtn,
		setDisabledBtn,
	};
}

export default useRegisterForm;
