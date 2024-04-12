import { Formik, Field } from 'formik'; // import zależności
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    VStack,
    Select,
} from '@chakra-ui/react';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    count: yup.number().positive().integer().required(),
    taste: yup.string().required(),
    comment: yup.string().required(),
});

export default function App() {
    return (
        <Flex bg="gray.100" align="center" justify="center" h="100vh">
            <Box bg="white" p={6} rounded="md" w={64}>
                <Formik
                    initialValues={{ count: 0, taste: '', comment: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
                >
                    {({ handleSubmit, errors, touched }) => (
                        <form onSubmit={handleSubmit}>
                            <VStack spacing={4} align="flex-start">
                                <FormControl isInvalid={!!errors.count && touched.count}>
                                    <FormLabel htmlFor="count">Count</FormLabel>
                                    <Field
                                        as={Input}
                                        id="count"
                                        name="count"
                                        type="number"
                                        variant="filled"
                                    ></Field>
                                    <FormErrorMessage>{errors.count}</FormErrorMessage>
                                </FormControl>
                                <FormControl isInvalid={!!errors.taste && touched.taste}>
                                    <FormLabel htmlFor="taste">Taste</FormLabel>
                                    <Field
                                        as={Select}
                                        id="taste"
                                        name="taste"
                                        type="text"
                                        variant="filled"
                                    >
                                        <option value="grejpfrutowy">Grejpfrutowy</option>
                                        <option value="limonkowy">Limonkowy</option>
                                        <option value="mango">Mango</option>
                                    </Field>
                                    <FormErrorMessage>{errors.taste}</FormErrorMessage>
                                </FormControl>
                                <FormControl
                                    isInvalid={!!errors.comment && touched.comment}
                                >
                                    <FormLabel htmlFor="comment">Uwagi</FormLabel>
                                    <Field
                                        as={Input}
                                        id="comment"
                                        name="comment"
                                        type="text"
                                        variant="filled"
                                    ></Field>
                                    <FormErrorMessage>{errors.comment}</FormErrorMessage>
                                </FormControl>
                                <Button type="submit" colorScheme="purple" width="full">
                                    Zamów
                                </Button>
                            </VStack>
                        </form>
                    )}
                </Formik>
            </Box>
        </Flex>
    );
}
