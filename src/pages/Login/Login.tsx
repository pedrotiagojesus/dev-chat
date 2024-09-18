import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// CSS
import "./Login.css";

// Schemas
import { LoginFormSchema } from "../../schemas/loginFormSchema";

// Hooks
import { useLoginForm } from "../../hooks/useLoginForm";

// Utils
import { signIn } from "../../utils/Firebase";

// Components
import BackgroundAnimated from "../../components/BackgroundAnimated/BackgroundAnimated";

// Sweetalert 2
import Swal from "sweetalert2";

const Login = () => {
    const { register, handleSubmit, errors } = useLoginForm();

    const [showPassword, setShowPassword] = useState(false);

    // const { login, loading, success, error } = useAuthentication();
    const loading = false;
    const onSubmit = async (data: LoginFormSchema) => {
        // await login(data);
        signIn(data.email, data.password)
            .then((response) => {
                Swal.fire({
                    title: "Success!",
                    text: `Welcome ${response.user.displayName}`,
                    icon: "success",
                    confirmButtonText: "Ok",
                });
            })
            .catch((e) => {
                Swal.fire({
                    title: "Error!",
                    text: e.message,
                    icon: "error",
                    confirmButtonText: "Ok",
                });
            });
    };

    const handleClickShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div id="page-login">
            <BackgroundAnimated />
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
                                <h4>Login</h4>
                                <p>
                                    Enter your email address and password to
                                    access admin panel.
                                </p>

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
                                    <Link
                                        to="/dev-chat/recover-password"
                                        className="text-muted float-end"
                                    >
                                        <small>Forgot your password?</small>
                                    </Link>
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
                                            Log In
                                        </button>
                                    )}
                                </div>
                            </div>
                        </form>
                        <p className="extra-link">
                            Don't have an account?{" "}
                            <Link to="/dev-chat/sign-up">Sign Up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
