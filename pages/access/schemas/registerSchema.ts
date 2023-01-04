import * as yup from 'yup';

const nameRules =
	/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
const emailRules = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/gm;
const passwordRules = /^[a-zA-Z1-9\S]{8,}$/gm;

const registerSchema = yup.object().shape({
	firstName: yup
		.string()
		.matches(nameRules, 'Por favor, informe um nome válido.')
		.required('Campo obrigatório.'),
	lastName: yup
		.string()
		.matches(nameRules, 'Por favor, informe um sobrenome válido.')
		.required('Campo obrigatório.'),
	email: yup
		.string()
		.matches(emailRules, 'Por favor, informe um e-mail válido.')
		.required('Campo obrigatório.'),
	password: yup
		.string()
		.matches(
			passwordRules,
			'A senha deve conter ao menos oito caracteres, sem espaços em branco.'
		)
		.required('Campo obrigatório.'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Senhas não conferem.')
		.required('Campo obrigatório.'),
});

export default registerSchema;
