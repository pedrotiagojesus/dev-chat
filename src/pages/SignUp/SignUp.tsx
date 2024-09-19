import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// CSS
import "./SignUp.css";

// Schemas
import { SignUpFormSchema } from "../../schemas/signUpFormSchema";

// Hooks
import { useSignUpForm } from "../../hooks/useSignUpForm";
import { useAuthentication } from "../../hooks/firebase/useAuthentication";

// Sweetalert 2
import Swal from "sweetalert2";

const SignUp = () => {
    const { register, handleSubmit, errors } = useSignUpForm();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const { createUser, loading, error } = useAuthentication();

    const onSubmit = async (data: SignUpFormSchema) => {
        await createUser(data);
    };

    useEffect(() => {
        if (error != "") {
            Swal.fire({
                title: "Error!",
                text: error,
                icon: "error",
                confirmButtonText: "Ok",
            });
        }
    }, [error]);

    const handleClickShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    const handleClickShowConfirmPassword = () => {
        setShowConfirmPassword((prev) => !prev);
    };

    return (
        <div id="page-sign-up">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <form
                            className="card"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className="card-header">
                                <i className="fa-solid fa-code"></i> Dev Chat
                            </div>
                            <div className="card-body">
                                <h4>Free Sign Up</h4>
                                <p>
                                    Don't have an account? Create your account,
                                    it takes less than a minute
                                </p>

                                <div className="mb-4">
                                    <label
                                        htmlFor="name"
                                        className="form-label"
                                    >
                                        Full name
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="name"
                                        {...register("name")}
                                        placeholder="Enter your name"
                                        disabled={loading ? true : false}
                                    />
                                    {errors.name && (
                                        <small className="invalid-feedback d-block">
                                            {errors.name.message}
                                        </small>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <label
                                        htmlFor="email"
                                        className="form-label"
                                    >
                                        Email address
                                    </label>
                                    <input
                                        className="form-control"
                                        type="email"
                                        id="email"
                                        {...register("email")}
                                        placeholder="Enter your email"
                                        disabled={loading ? true : false}
                                    />
                                    {errors.email && (
                                        <small className="invalid-feedback d-block">
                                            {errors.email.message}
                                        </small>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <label
                                        htmlFor="password"
                                        className="form-label"
                                    >
                                        Password
                                    </label>
                                    <div className="input-group input-group-merge">
                                        <input
                                            type={
                                                !showPassword
                                                    ? "password"
                                                    : "text"
                                            }
                                            id="password"
                                            {...register("password")}
                                            className="form-control"
                                            placeholder="Enter your password"
                                            disabled={loading ? true : false}
                                        />
                                        <div
                                            className="input-group-text"
                                            onClick={handleClickShowPassword}
                                        >
                                            {showPassword ? (
                                                <i className="fa-solid fa-eye-slash"></i>
                                            ) : (
                                                <i className="fa-solid fa-eye"></i>
                                            )}
                                        </div>
                                    </div>
                                    {errors.password && (
                                        <small className="invalid-feedback d-block">
                                            {errors.password.message}
                                        </small>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <label
                                        htmlFor="confirmPassword"
                                        className="form-label"
                                    >
                                        Confirm password
                                    </label>
                                    <div className="input-group input-group-merge">
                                        <input
                                            type={
                                                !showConfirmPassword
                                                    ? "password"
                                                    : "text"
                                            }
                                            id="confirmPassword"
                                            {...register("confirmPassword")}
                                            className="form-control"
                                            placeholder="Confirm password"
                                            disabled={loading ? true : false}
                                        />
                                        <div
                                            className="input-group-text"
                                            onClick={
                                                handleClickShowConfirmPassword
                                            }
                                        >
                                            {showConfirmPassword ? (
                                                <i className="fa-solid fa-eye-slash"></i>
                                            ) : (
                                                <i className="fa-solid fa-eye"></i>
                                            )}
                                        </div>
                                    </div>
                                    {errors.confirmPassword && (
                                        <small className="invalid-feedback d-block">
                                            {errors.confirmPassword.message}
                                        </small>
                                    )}
                                </div>

                                <div className="text-center">
                                    {loading ? (
                                        <button
                                            className="btn btn-primary"
                                            type="submit"
                                            disabled
                                        >
                                            Wait...
                                        </button>
                                    ) : (
                                        <button
                                            className="btn btn-primary"
                                            type="submit"
                                        >
                                            Sing Up
                                        </button>
                                    )}
                                </div>
                            </div>
                        </form>
                        <p className="extra-link">
                            Already have account?{" "}
                            <Link to="/dev-chat/login">Log In</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
