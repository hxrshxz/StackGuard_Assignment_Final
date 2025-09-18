import React, { useState } from "react";
import AuthHeader from "../shared/AuthHeader";

export type SignUpFormType = {
  className?: string;
};

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type FormErrors = Record<string, string>;

const SignUpForm: React.FC<SignUpFormType> = ({ className = "" }) => {
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

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email =
        "Please enter a valid email address (e.g., user@gmail.com)";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Account created successfully!");
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const isFormValid = () => {
    return (
      formData.firstName &&
      formData.email &&
      formData.password &&
      formData.confirmPassword &&
      formData.password === formData.confirmPassword &&
      /\S+@\S+\.\S+/.test(formData.email)
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`m-0 self-stretch flex flex-col items-start gap-14 max-w-full mq750:gap-7 ${className}`}
    >
      <div className="self-stretch flex items-start py-0 px-6 box-border max-w-full">
        <AuthHeader
          frameDivWidth="unset"
          frameDivAlignSelf="stretch"
          frameDivFlex="1"
          frameDivFlex1="1"
          welcomeToStackguard="Welcome to Stackguard"
          secureYourCodebaseWithAdvanced="Secure your codebase with advanced secret scanning security best practices"
        />
      </div>

      <div className="self-stretch flex flex-col items-start gap-4">
        <div className="self-stretch flex items-start gap-5 mq750:flex-wrap">
          <div className="flex-1 min-w-[155px]">
            <input
              className={`w-full [border:none] [outline:none] rounded-lg flex items-center justify-center py-4 px-6 box-border font-poppins text-[17px] ${
                activeField === "firstName" || formData.firstName
                  ? "bg-lavender text-black"
                  : "bg-whitesmoke text-gray-100"
              } ${errors.firstName ? "border-2 border-red-500" : ""}`}
              placeholder="Enter first name *"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              onFocus={() => setActiveField("firstName")}
              onBlur={() => setActiveField("")}
            />
            {errors.firstName && (
              <div className="text-red-500 text-sm mt-1 px-2">
                {errors.firstName}
              </div>
            )}
          </div>

          <div className="flex-1 min-w-[155px]">
            <input
              className={`w-full [border:none] [outline:none] rounded-lg flex items-center justify-center py-4 px-6 box-border font-poppins text-[17px] ${
                activeField === "lastName" || formData.lastName
                  ? "bg-lavender text-black"
                  : "bg-whitesmoke text-gray-100"
              }`}
              placeholder="Enter last name (optional)"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              onFocus={() => setActiveField("lastName")}
              onBlur={() => setActiveField("")}
            />
            <div className="text-gray-500 text-xs mt-1 px-2">
              Last name is optional
            </div>
          </div>
        </div>

        <div className="w-full">
          <input
            className={`w-full [border:none] [outline:none] rounded-lg flex items-center justify-center py-4 px-6 box-border font-poppins text-[17px] min-w-[250px] ${
              activeField === "email" || formData.email
                ? "bg-lavender text-black"
                : "bg-whitesmoke text-gray-100"
            } ${errors.email ? "border-2 border-red-500" : ""}`}
            placeholder="Enter email ID *"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onFocus={() => setActiveField("email")}
            onBlur={() => setActiveField("")}
          />
          {errors.email && (
            <div className="text-red-500 text-sm mt-1 px-2">{errors.email}</div>
          )}
        </div>

        <div className="w-full">
          <input
            className={`w-full [border:none] [outline:none] rounded-lg flex items-center justify-center py-4 px-6 box-border font-poppins text-[17px] min-w-[250px] ${
              activeField === "password" || formData.password
                ? "bg-lavender text-black"
                : "bg-whitesmoke text-gray-100"
            } ${errors.password ? "border-2 border-red-500" : ""}`}
            placeholder="Enter password *"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            onFocus={() => setActiveField("password")}
            onBlur={() => setActiveField("")}
          />
          {errors.password && (
            <div className="text-red-500 text-sm mt-1 px-2">
              {errors.password}
            </div>
          )}
        </div>

        <div className="w-full">
          <input
            className={`w-full [border:none] [outline:none] rounded-lg flex items-center justify-center py-4 px-6 box-border font-poppins text-[17px] min-w-[250px] ${
              activeField === "confirmPassword" || formData.confirmPassword
                ? "bg-lavender text-black"
                : "bg-whitesmoke text-gray-100"
            } ${errors.confirmPassword ? "border-2 border-red-500" : ""}`}
            placeholder="Confirm password *"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            onFocus={() => setActiveField("confirmPassword")}
            onBlur={() => setActiveField("")}
          />
          {errors.confirmPassword && (
            <div className="text-red-500 text-sm mt-1 px-2">
              {errors.confirmPassword}
            </div>
          )}
          {formData.confirmPassword &&
            formData.password === formData.confirmPassword && (
              <div className="text-green-600 text-sm mt-1 px-2">
                ✓ Passwords match
              </div>
            )}
        </div>
      </div>

      <div className="self-stretch flex flex-col items-start gap-[39px] max-w-full mq750:gap-[19px]">
        <div className="self-stretch flex flex-col items-start gap-6 max-w-full">
          <button
            className={`cursor-pointer [border:none] py-4 px-[206px] rounded-[7px] flex items-center justify-center mq450:pl-5 mq450:pr-5 mq450:box-border ${
              isFormValid() && !loading
                ? "bg-indigo hover:bg-slateblue"
                : "bg-darkslategray cursor-not-allowed"
            }`}
            type="submit"
            disabled={!isFormValid() || loading}
          >
            <div className="relative text-[17px] font-poppins text-white text-left">
              {loading ? "Creating account..." : "Create account"}
            </div>
          </button>

          <div className="self-stretch flex items-start py-0 px-[61px] box-border max-w-full mq750:pl-[30px] mq750:pr-[30px] mq750:box-border">
            <div className="flex-1 relative text-[15px] font-poppins text-black text-center inline-block max-w-full">
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
        </div>

        <div className="self-stretch relative text-lg font-poppins text-black text-center">
          Already have an account?
          <span className="[text-decoration:underline]">{` Sign in `}</span>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
