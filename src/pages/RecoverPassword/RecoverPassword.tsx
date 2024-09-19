import { useEffect } from "react";
import { Link } from "react-router-dom";

// CSS
import "./RecoverPassword.css";

// Schemas
import { RecoverPasswordFormSchema } from "../../schemas/recoverPasswordFormSchema";

// Hooks
import { useRecoverPasswordForm } from "../../hooks/useRecoverPasswordForm";
import { useAuthentication } from "../../hooks/firebase/useAuthentication";

// Sweetalert 2
import Swal from "sweetalert2";

const RecoverPassword = () => {
    const { register, handleSubmit, errors } = useRecoverPasswordForm();

    const { sendPasswordReset, loading, error } = useAuthentication();

    const onSubmit = (data: RecoverPasswordFormSchema) => {
        sendPasswordReset(data);
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

    return (
        <div id="page-recover-password">
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
                                <h4>Reset Password</h4>
                                <p>
                                    Enter your email address and we'll send you
                                    an email with instructions to reset your
                                    password.
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
                                            Reset Password
                                        </button>
                                    )}
                                </div>
                            </div>
                        </form>
                        <p className="extra-link">
                            Back to <Link to="/dev-chat/login">Log In</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecoverPassword;
