import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import AuthHeader from "../../components/shared/AuthHeader";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type FormErrors = Record<string, string>;

const Auth: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [activeField, setActiveField] = useState<string>("");

  const { login, register } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/configuration";

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (isSignUp) {
      if (!formData.firstName.trim()) {
        newErrors.firstName = "First name is required";
      } else if (formData.firstName.trim().length < 2) {
        newErrors.firstName = "First name must be at least 2 characters";
      }
      // Last name is optional, but if provided, must be at least 2 characters
      if (formData.lastName.trim() && formData.lastName.trim().length < 2) {
        newErrors.lastName = "Last name must be at least 2 characters";
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])/.test(formData.password)) {
      newErrors.password = "Password must contain both uppercase and lowercase letters";
    }

    if (isSignUp) {
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Please confirm your password";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
  };  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      const success = isSignUp
        ? await register(
            formData.firstName,
            formData.lastName,
            formData.email,
            formData.password
          )
        : await login(formData.email, formData.password);

      if (success) {
        navigate(from, { replace: true });
      } else {
        setErrors({
          submit: isSignUp
            ? "Registration failed. Please try again."
            : "Invalid credentials. Please try again.",
        });
      }
    } catch (error) {
      setErrors({ submit: "An error occurred. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setFormData({
      firstName: "",
      lastName: "",
      email: formData.email, // Preserve email when switching modes
      password: "",
      confirmPassword: "",
    });
    setErrors({});
  };

  const isFormValid = () => {
    if (isSignUp) {
      return (
        formData.firstName &&
        formData.lastName &&
        formData.email &&
        formData.password &&
        formData.confirmPassword &&
        formData.password === formData.confirmPassword
      );
    }
    return formData.email && formData.password;
  };

  return (
    <div className="w-full relative bg-white overflow-hidden flex items-start py-11 pl-11 pr-10 box-border gap-[39px] leading-[normal] tracking-[normal] lg:flex-wrap mq750:gap-[19px] mq750:pl-[22px] mq750:box-border min-h-screen">
      <div className="h-[894px] flex-1 relative rounded-[20px] bg-gainsboro min-w-[548px] max-w-full mq750:min-w-full" />
      <section className="w-[546px] flex flex-col items-start pt-[54px] px-0 pb-0 box-border max-w-full text-center text-[15px] text-black font-poppins lg:flex-1 mq750:min-w-full mq450:pt-[23px] mq450:box-border mq1050:pt-[35px] mq1050:box-border">
        <div className="self-stretch flex-1 flex flex-col items-center gap-[39px] mq750:gap-[19px]">
          <div className="self-stretch flex-1 flex flex-col items-center gap-6">
            <form
              onSubmit={handleSubmit}
              className="m-0 self-stretch flex flex-col items-start gap-14 mq750:gap-7"
            >
              <div className="self-stretch flex flex-col items-center gap-14 mq750:gap-7">
                <AuthHeader
                  welcomeToStackguard={
                    isSignUp
                      ? "Welcome to Stackguard"
                      : "Welcome back to Stackguard"
                  }
                  secureYourCodebaseWithAdvanced="Secure your codebase with advanced secret scanning security best practices"
                />
                <div className="self-stretch flex flex-col items-end gap-4">
                  {isSignUp && (
                    <div className="self-stretch flex flex-col gap-3">
                      <div className="flex items-start gap-3 mq750:flex-wrap">
                        <div className="flex-1 min-w-[160px] relative">
                          <input
                            className={`w-full [border:none] [outline:none] rounded-lg flex items-center justify-center py-4 px-6 box-border font-poppins text-[17px] min-w-[160px] ${
                              activeField === "firstName"
                                ? "bg-lavender text-black"
                                : "bg-whitesmoke text-gray-100"
                            } ${
                              errors.firstName ? "border-2 border-red-500" : ""
                            }`}
                            placeholder="Enter first name"
                            type="text"
                            name="firstName"
                            autoComplete="given-name"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            onFocus={() => setActiveField("firstName")}
                            onBlur={() => setActiveField("")}
                          />
                          {errors.firstName && (
                            <div className="absolute z-10 mt-1 px-2 py-1 text-xs bg-red-100 text-red-700 rounded shadow-sm border border-red-200">
                              {errors.firstName}
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-[160px] relative">
                          <input
                            className={`w-full [border:none] [outline:none] rounded-lg flex items-center justify-center py-4 px-6 box-border font-poppins text-[17px] min-w-[160px] ${
                              activeField === "lastName"
                                ? "bg-lavender text-black"
                                : "bg-whitesmoke text-gray-100"
                            } ${
                              errors.lastName ? "border-2 border-red-500" : ""
                            }`}
                            placeholder="Enter last name"
                            type="text"
                            name="lastName"
                            autoComplete="family-name"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            onFocus={() => setActiveField("lastName")}
                            onBlur={() => setActiveField("")}
                          />
                          {errors.lastName && (
                            <div className="absolute z-10 mt-1 px-2 py-1 text-xs bg-red-100 text-red-700 rounded shadow-sm border border-red-200">
                              {errors.lastName}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="w-full relative">
                    <input
                      className={`w-full [border:none] [outline:none] rounded-lg flex items-center justify-center py-4 px-6 box-border font-poppins text-[17px] min-w-[250px] ${
                        activeField === "email"
                          ? "bg-lavender text-black"
                          : "bg-whitesmoke text-gray-100"
                      } ${errors.email ? "border-2 border-red-500" : ""}`}
                      placeholder="Enter email ID"
                      type="email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField("email")}
                      onBlur={() => setActiveField("")}
                    />
                    {errors.email && (
                      <div className="absolute z-10 mt-1 px-2 py-1 text-xs bg-red-100 text-red-700 rounded shadow-sm border border-red-200">
                        {errors.email}
                      </div>
                    )}
                  </div>
                  <div className="w-full relative">
                    <input
                      className={`w-full [border:none] [outline:none] rounded-lg flex items-center justify-center py-4 px-6 box-border font-poppins text-[17px] min-w-[250px] ${
                        activeField === "password"
                          ? "bg-lavender text-black"
                          : "bg-whitesmoke text-gray-100"
                      } ${errors.password ? "border-2 border-red-500" : ""}`}
                      placeholder="Enter password"
                      type="password"
                      name="password"
                      autoComplete={
                        isSignUp ? "new-password" : "current-password"
                      }
                      value={formData.password}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField("password")}
                      onBlur={() => setActiveField("")}
                    />
                    {errors.password && (
                      <div className="absolute z-10 mt-1 px-2 py-1 text-xs bg-red-100 text-red-700 rounded shadow-sm border border-red-200">
                        {errors.password}
                      </div>
                    )}
                  </div>
                  {isSignUp && (
                    <div className="w-full relative">
                      <input
                        className={`w-full [border:none] [outline:none] rounded-lg flex items-center justify-center py-4 px-6 box-border font-poppins text-[17px] min-w-[250px] ${
                          activeField === "confirmPassword"
                            ? "bg-lavender text-black"
                            : "bg-whitesmoke text-gray-100"
                        } ${
                          errors.confirmPassword
                            ? "border-2 border-red-500"
                            : ""
                        }`}
                        placeholder="Confirm password"
                        type="password"
                        name="confirmPassword"
                        autoComplete="new-password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        onFocus={() => setActiveField("confirmPassword")}
                        onBlur={() => setActiveField("")}
                      />
                      {errors.confirmPassword && (
                        <div className="absolute z-10 mt-1 px-2 py-1 text-xs bg-red-100 text-red-700 rounded shadow-sm border border-red-200">
                          {errors.confirmPassword}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Display general submission errors */}
              {errors.submit && (
                <div className="self-stretch text-red-500 text-sm text-center">
                  {errors.submit}
                </div>
              )}

              <button
                className={`cursor-pointer [border:none] py-4 px-[206px] self-stretch rounded-[7px] flex items-center justify-center mq450:pl-5 mq450:pr-5 mq450:box-border ${
                  isFormValid() && !loading
                    ? "bg-indigo hover:bg-slateblue"
                    : "bg-darkslategray"
                }`}
                type="submit"
                disabled={loading}
              >
                <div className="relative text-[17px] font-poppins text-white text-left">
                  {loading
                    ? "Please wait..."
                    : isSignUp
                    ? "Create account"
                    : "Sign In"}
                </div>
              </button>
            </form>
            <div className="w-[424px] relative inline-block">
              {`By continuing, you agree to our `}
              <span className="[text-decoration:underline]">
                Terms of Service
              </span>
              {` and `}
              <span className="[text-decoration:underline]">
                Privacy Policy
              </span>
            </div>
          </div>
          <div className="self-stretch relative text-lg">
            {isSignUp ? (
              <>
                Already have an account?
                <span
                  className="[text-decoration:underline] cursor-pointer ml-1"
                  onClick={toggleMode}
                >
                  Sign in
                </span>
              </>
            ) : (
              <>
                Don't have an account?
                <span
                  className="[text-decoration:underline] cursor-pointer ml-1"
                  onClick={toggleMode}
                >
                  Sign up
                </span>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Auth;
