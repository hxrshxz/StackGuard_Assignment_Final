import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AuthHeader from "../components/shared/AuthHeader";

const MIN_KEY_LENGTH = 100;
const MAX_KEY_LENGTH = 1000;

const Configuration: React.FC = () => {
  const [publicKey, setPublicKey] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeField, setActiveField] = useState(false);

  const { configure, user } = useAuth();
  const navigate = useNavigate();

  const isValidKey =
    publicKey.length >= MIN_KEY_LENGTH && publicKey.length <= MAX_KEY_LENGTH;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidKey) {
      setError(
        `Public key must be between ${MIN_KEY_LENGTH} and ${MAX_KEY_LENGTH} characters`
      );
      return;
    }

    setLoading(true);
    setError("");

    try {
      const success = await configure(publicKey);
      if (success) {
        navigate("/", { replace: true });
      } else {
        setError("Invalid public key. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setPublicKey(e.target.value);
      setError("");
    },
    []
  );

  return (
    <div className="w-full relative bg-white overflow-hidden flex items-start py-11 pl-11 pr-10 box-border gap-[39px] leading-[normal] tracking-[normal] lg:flex-wrap mq750:gap-[19px] mq750:pl-[22px] mq750:box-border">
      <div className="h-[894px] flex-1 relative rounded-[20px] bg-gainsboro min-w-[548px] max-w-full mq750:min-w-full" />
      <section className="flex flex-col items-start pt-48 px-0 pb-0 box-border min-w-[546px] max-w-full text-center text-[15px] text-black font-poppins lg:flex-1 mq750:pt-[125px] mq750:box-border mq750:min-w-full">
        <div className="self-stretch flex-1 flex flex-col items-center gap-[83px] mq750:gap-[41px] mq450:gap-[21px]">
          <div className="self-stretch flex-1 flex flex-col items-center gap-14 mq750:gap-7">
            <AuthHeader
              frameDivWidth="497px"
              frameDivAlignSelf="unset"
              frameDivFlex="unset"
              frameDivFlex1="unset"
              welcomeToStackguard={`Welcome ${user?.firstName || "User"}!`}
              secureYourCodebaseWithAdvanced="To get started, provide your public key for verification (100-1000 characters)"
            />
            <form
              onSubmit={handleSubmit}
              className="self-stretch flex flex-col items-start gap-8 mq750:gap-4"
            >
              <div className="self-stretch flex flex-col gap-2">
                <textarea
                  className={`w-full [border:none] [outline:none] self-stretch rounded-lg flex items-start justify-start py-4 px-6 box-border font-poppins text-[17px] min-w-[250px] resize-none h-32 ${
                    activeField
                      ? "bg-lavender text-black"
                      : "bg-whitesmoke text-gray-100"
                  } ${error && !isValidKey ? "border-2 border-red-500" : ""}`}
                  placeholder="Enter your public key (100-1000 characters)"
                  value={publicKey}
                  onChange={handleKeyChange}
                  onFocus={() => setActiveField(true)}
                  onBlur={() => setActiveField(false)}
                />
                <div className="text-sm text-right text-gray-500">
                  {publicKey.length}/{MAX_KEY_LENGTH} characters
                </div>
              </div>

              {error && (
                <div className="self-stretch text-red-500 text-sm text-center">
                  {error}
                </div>
              )}

              <button
                className={`cursor-pointer [border:none] py-4 px-[206px] self-stretch rounded-[7px] flex items-center justify-center mq450:pl-5 mq450:pr-5 mq450:box-border ${
                  isValidKey && !loading
                    ? "bg-indigo hover:bg-slateblue"
                    : "bg-darkslategray"
                }`}
                type="submit"
                disabled={!isValidKey || loading}
              >
                <div className="relative text-[17px] font-poppins text-white text-left">
                  {loading ? "Verifying..." : "Verify"}
                </div>
              </button>
            </form>
          </div>
          <div className="self-stretch relative">
            Don't have a public key? Contact your administrator
          </div>
        </div>
      </section>
    </div>
  );
};

export default Configuration;
