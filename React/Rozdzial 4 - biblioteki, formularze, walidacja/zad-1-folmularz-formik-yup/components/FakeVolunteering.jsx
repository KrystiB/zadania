import { Formik, Field, Form, ErrorMessage } from 'formik';
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
} from '@chakra-ui/react';
import * as Yup from 'yup';

const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
};

const FakeVolunteering = () => {
    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(5, 'Imię musi mieć minimum 5 znaków')
            .required('Imię jest wymagane'),
        age: Yup.number()
            .min(18, 'Wiek musi być minimum 18')
            .max(99, 'Maksymalny wiek to 99')
            .required('Wiek jest wymagany'),
        city: Yup.string()
            .min(3, 'Miasto musi mieć minimum 3 znaki')
            .required('Miasto jest wymagane'),
        volunteering: Yup.boolean()
            .required('Musisz zaznaczyć pole')
            .oneOf([true], 'Musisz zaznaczyć chęć wolontariatu'),
        imageLink: Yup.string().optional(),
        postalCode: Yup.string()
            .matches(/^\d{2}-\d{3}$/, 'Podaj kod pocztowy w formacie XX-XXX')
            .required('Kod pocztowy jest wymagany'),
        phoneNumber: Yup.string()
            .matches(
                /^\+\d{11}$/,
                'Podaj numer telefonu zaczynający się od + i zawierający 11 cyfr'
            )
            .required('Numer telefonu jest wymagany'),
    });

    const initialValues = {
        firstName: '',
        age: '',
        city: '',
        volunteering: false,
        imageLink: '',
        postalCode: '',
        phoneNumber: '',
    };
    return (
        <Flex bg="gray.100" align="center" justify="center" h="100vh">
            <Box bg="white" p={6} rounded="md" w={64}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched }) => (
                        <Form style={{ display: 'flex', flexDirection: 'column' }}>
                            <FormControl
                                isInvalid={touched.firstName && !!errors.firstName}
                            >
                                <FormLabel>Imię</FormLabel>
                                <Field
                                    as={Input}
                                    name="firstName"
                                    placeholder="Podaj imię"
                                />
                                <ErrorMessage name="firstName" />
                            </FormControl>
                            <FormControl isInvalid={touched.age && !!errors.age}>
                                <FormLabel>Wiek</FormLabel>
                                <Field as={Input} name="age" placeholder="Podaj wiek" />
                                <ErrorMessage name="age" />
                            </FormControl>
                            <FormControl isInvalid={touched.city && !!errors.city}>
                                <FormLabel>Miasto</FormLabel>
                                <Field
                                    as={Input}
                                    name="city"
                                    placeholder="Podaj miasto"
                                />
                                <ErrorMessage name="city" />
                            </FormControl>
                            <FormControl
                                isInvalid={touched.volunteering && !!errors.volunteering}
                            >
                                <FormLabel>Chęć wolontariatu</FormLabel>
                                <Checkbox name="volunteering">
                                    Chcę być wolontariuszem
                                </Checkbox>
                                <ErrorMessage name="volunteering" />
                            </FormControl>
                            <FormControl
                                isInvalid={touched.imageLink && !!errors.imageLink}
                            >
                                <FormLabel>Link do zdjęcia</FormLabel>
                                <Field
                                    as={Input}
                                    name="imageLink"
                                    placeholder="Podaj link do zdjęcia"
                                />
                                <ErrorMessage name="imageLink" />
                            </FormControl>
                            <FormControl
                                isInvalid={touched.postalCode && !!errors.postalCode}
                            >
                                <FormLabel>Kod pocztowy</FormLabel>
                                <Field
                                    as={Input}
                                    name="postalCode"
                                    placeholder="Podaj kod pocztowy"
                                />
                                <ErrorMessage name="postalCode" />
                            </FormControl>
                            <FormControl
                                isInvalid={touched.phoneNumber && !!errors.phoneNumber}
                            >
                                <FormLabel>Numer telefonu</FormLabel>
                                <Field
                                    as={Input}
                                    name="phoneNumber"
                                    placeholder="Podaj numer telefonu"
                                />
                                <ErrorMessage name="phoneNumber" />
                            </FormControl>
                            <Button type="submit" colorScheme="purple" width="full">
                                Zapisz
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Flex>
    );
};

export default FakeVolunteering;