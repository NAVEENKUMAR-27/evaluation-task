import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "bootstrap/dist/css/bootstrap.css";
import { Alert, FormControl, Stack } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import "./Style.css";
import { useNavigate } from "react-router-dom";
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';


/* Formik email and password validation */
const validationSchema = Yup.object({
    name: Yup.string()
        .min(3, "Minimum atleast  Three Characters")
        .required("Please Enter your FullName"),
    email: Yup.string()
        .email("Invalid email Id")
        .max(25)
        .required("Please enter your email"),
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .max(13, "Password can be at most 13 characters")
        .required("Please enter your password"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Please confirm your password"),
});

export const SignUp = () => {
    /* Initial declaring the state */
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    /* Password show icon function */
    const handleClickShowPassword = () => setShowPassword((show) => !show);


    /*Snackbar function*/
    const [state, setState] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'right',
    });
    const { vertical, horizontal, open } = state;
    const handleClose = () => {
        setState({ ...state, open: false });
    };

    /*Hanlde submit function*/
    const handleSubmit = () => {
        setState({
            ...state,
            open: true
        });
        setTimeout(() => {
            navigate('/Home');
        }, 1500)
    };
    /* Check box*/
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    px: 5,
                    py: 4,
                    marginTop: 10,
                }}
                className="bg_img"
            >
                <Typography component="h1" variant="h5" sx={{color:"blue"}}>
                    Sign in
                </Typography>
                <Formik
                    initialValues={{ email: "", password: "", confirmPassword: "" }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form noValidate>
                            <Field
                                as={TextField}
                                margin="normal"
                                required
                                sx={{ width: 300, ml: 8 }}
                                id="name" // Change to lowercase "name"
                                name="name" // Change to lowercase "name"
                                type="text" // Change to lowercase "text"
                                label="Full Name"
                                inputProps={{ maxLength: 25 }}
                            />
                            <ErrorMessage name="name" sx={{ ml: 7 }}>
                                {(msg) => (
                                    <FormHelperText sx={{ ml: 8 }} error>
                                        {msg}
                                    </FormHelperText>
                                )}
                            </ErrorMessage>

                            <Field
                                as={TextField}
                                margin="normal"
                                required
                                sx={{ width: 300, ml: 8 }}
                                id="email"
                                name="email"
                                type="email"
                                label="Email"
                                inputProps={{ maxLength: 25 }}
                            />

                            <ErrorMessage name="email" sx={{ ml: 7 }}>
                                {(msg) => (
                                    <FormHelperText sx={{ ml: 8 }} error>
                                        {msg}
                                    </FormHelperText>
                                )}
                            </ErrorMessage>

                            <Field name="password">
                                {({ field }) => (
                                    <FormControl variant="outlined" sx={{ mt: 3, ml: 8 }}>
                                        <InputLabel htmlFor="outlined-adornment-password">
                                            Password
                                        </InputLabel>
                                        <OutlinedInput
                                            {...field}
                                            id="outlined-adornment-password"
                                            sx={{ width: 300 }}
                                            type={showPassword ? "text" : "password"}
                                            required
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            label="Password"
                                        />
                                    </FormControl>
                                )}
                            </Field>
                            <ErrorMessage name="password" sx={{ ml: 2 }}>
                                {(msg) => (
                                    <FormHelperText sx={{ ml: 8 }} error>
                                        {msg}
                                    </FormHelperText>
                                )}
                            </ErrorMessage>

                            <Field
                                as={TextField}
                                margin="normal"
                                required
                                sx={{ width: 300, ml: 8 }}
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                label="Confirm Password"
                                inputProps={{ maxLength: 13 }}
                            />


                            <ErrorMessage name="confirmPassword" sx={{ ml: 2 }}>
                                {(msg) => (
                                    <FormHelperText sx={{ ml: 8 }} error>
                                        {msg}
                                    </FormHelperText>
                                )}
                            </ErrorMessage>
                            <Stack flexDirection="row" sx={{ ml: 8 }}>
                                <Checkbox {...label} /> <Typography variant="body2" class="checkbox-style">"Terms and Conditions"</Typography>

                            </Stack>

                            <Button
                                type="submit"
                                sx={{ width: 190, mt: 3, ml: 15 }}
                                variant="contained"
                                disabled={isSubmitting}
                            >
                                Log In
                                <Snackbar open={open} onClose={handleClose} anchorOrigin={{ vertical, horizontal }}>
                                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                        login successful
                                    </Alert>
                                </Snackbar>
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Box>




        </Container>
    );
};
