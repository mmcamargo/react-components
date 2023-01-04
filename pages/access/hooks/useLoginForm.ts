import { useFormik } from 'formik';
import { useState, useEffect } from 'react';

function useLoginForm() {
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

	return {
		values,
		resetForm,
		handleChange,
		handleSubmit,
		showAlert,
		setShowAlert,
		disabledBtn,
		setDisabledBtn,
	};
}

export default useLoginForm;
