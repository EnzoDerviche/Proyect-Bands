const validateError = (input)  => {
        let errors = {};
        if (!input.email || input.email === "") {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(input.email)) {
            errors.email = 'Email is invalid';
        }

        if (!input.password || input.password === "") {
            errors.password = 'Password is required';
        } else if ((!/(?=.*[0-9])/.test(input.password))) {
            errors.password = 'Password is invalid';
        }
        return errors;
}

export default validateError;