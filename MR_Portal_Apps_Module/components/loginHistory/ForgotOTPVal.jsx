import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import OtpInput from "react-otp-input";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import {
    TbBulb,
    TbCircleCheck,
    TbDeviceMobileMessage,
    TbEye,
    TbEyeOff,
    TbLock,
    TbPhoneCall,
    TbShieldCheck,
    TbShieldLock,
} from "react-icons/tb";
import Logo from "../../public/NewLogo.png";
import Banner from "../../public/loginbg.jpg";
import { url } from "@/constants/url";

const RESEND_SECONDS = 45;

const StepProgress = ({ activeStep }) => (
    <div className="my-5 flex items-center gap-3">
        <div className="flex items-center gap-2">
            <span
                className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold ${activeStep >= 1 ? "bg-[#15803d] text-white" : "bg-[#e7ece6] text-[#9aa49a]"
                    }`}
            >
                {activeStep > 1 ? <TbCircleCheck size={14} /> : "1"}
            </span>
            <span
                className={`whitespace-nowrap text-[10px] font-bold ${activeStep >= 1 ? "text-[#14532d]" : "text-[#9aa49a]"
                    }`}
            >
                Verify Mobile
            </span>
        </div>
        <span
            className={`h-px flex-1 ${activeStep > 1 ? "bg-[#15803d]" : "bg-[#dce7d9]"
                }`}
        />
        <div className="flex items-center gap-2">
            <span
                className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold ${activeStep > 1 ? "bg-[#15803d] text-white" : "bg-[#e7ece6] text-[#9aa49a]"
                    }`}
            >
                2
            </span>
            <span
                className={`whitespace-nowrap text-[10px] font-bold ${activeStep > 1 ? "text-[#14532d]" : "text-[#9aa49a]"
                    }`}
            >
                Reset Password
            </span>
        </div>
    </div>
);

const ForgotOTPVal = () => {
    const router = useRouter();
    const { phone_number, uid } = router.query;
    const [otp, setOtp] = useState("");
    const [isVerifying, setVerifying] = useState(false);
    const [timeLeft, setTimeLeft] = useState(RESEND_SECONDS);
    const [isOtpVerified, setIsOtpVerified] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isResetting, setIsResetting] = useState(false);

    const headers = {
        "Content-Type": "application/json",
        secret: "fsdhfgsfuiweifiowefjewcewcebjw",
    };

    const handleVerify = async (e) => {
        e.preventDefault();

        if (otp.length < 6) {
            toast.error("Invalid OTP");
            return;
        }

        try {
            setVerifying(true);
            const resp = await axios.post(
                `${url}/api/verify_otp`,
                JSON.stringify({
                    phone_otp: otp,
                    uid: uid,
                }),
                { headers: headers }
            );
            const respdata = await resp.data;

            toast.success(respdata?.message || "OTP verified successfully", {
                autoClose: 500,
            });
            setIsOtpVerified(true);
        } catch (error) {
            console.log("verify otp", error);
            const errorMessage = error?.response?.data?.message;
            toast.error(errorMessage || "Unable to verify OTP", { autoClose: 1000 });
        } finally {
            setVerifying(false);
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();

        if (!phone_number) {
            toast.error("Mobile number is required");
            return;
        }

        if (password.length < 8) {
            toast.error("Password must be at least 8 characters");
            return;
        }

        if (password !== confirmPassword) {
            toast.error("Password and confirm password do not match");
            return;
        }

        try {
            setIsResetting(true);
            const resp = await axios.post(
                `${url}/api/forgot_password?phone_number=${encodeURIComponent(phone_number)}`,
                {
                    password: password,
                    confirm_password: confirmPassword,
                },
                { headers: headers }
            );
            const respdata = await resp.data;

            toast.success(respdata?.message || "Password reset successfully");
            setTimeout(() => {
                router.push("/Sales_App/SalesLogin");
            }, 1200);
        } catch (error) {
            console.log("reset password", error);
            const errorMessage = error?.response?.data?.message;
            toast.error(errorMessage || "Unable to reset password");
        } finally {
            setIsResetting(false);
        }
    };

    const handleResend = async () => {
        if (timeLeft > 0 || !phone_number) {
            return;
        }

        try {
            const resp = await axios.post(
                `${url}/api/login_user`,
                { phone_number: phone_number },
                { headers: headers }
            );
            const respdata = await resp.data;

            if (respdata?.message) {
                toast.success(respdata?.message);
            }
            setOtp("");
            setTimeLeft(RESEND_SECONDS);
        } catch (error) {
            console.log("resend otp", error);
            const errorMessage = error?.response?.data?.message;
            toast.error(errorMessage || "Unable to resend OTP");
        }
    };

    useEffect(() => {
        if (timeLeft <= 0) {
            return;
        }

        const timerId = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timerId);
    }, [timeLeft]);

    const formattedTime = `${String(Math.floor(timeLeft / 60)).padStart(
        2,
        "0"
    )}:${String(timeLeft % 60).padStart(2, "0")}`;

    const passwordRules = [
        {
            label: "Minimum 8 characters",
            isValid: password.length >= 8,
        },
        {
            label: "At least one uppercase letter",
            isValid: /[A-Z]/.test(password),
        },
        {
            label: "At least one number or special character",
            isValid: /[\d\W_]/.test(password),
        },
    ];

    return (
        <>
            <Toaster position="bottom-center" reverseOrder={false} />

            <div className="flex min-h-screen w-full items-center justify-center bg-[#eef4ec] p-2 font-arial text-[#173f29] sm:p-3">
                <div className="relative flex min-h-[calc(100vh-1rem)] w-full max-w-[980px] flex-col overflow-hidden rounded-[12px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.22)] sm:min-h-[calc(100vh-1.5rem)]">
                    <Image
                        src={Banner}
                        alt="Willowood agriculture field"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.18),rgba(255,255,255,0.06)_32%,rgba(8,42,20,0.18)_100%)]" />

                    <main className="relative z-10 flex flex-1 items-center justify-center px-4 py-8 sm:px-6">
                        <section className="w-full max-w-[390px] rounded-[14px] bg-white/95 px-6 py-7 shadow-[0_18px_45px_rgba(0,0,0,0.18)] backdrop-blur-sm">
                            {isOtpVerified ? (
                                <>
                                    <div className="flex flex-col items-center text-center">
                                        <Image
                                            src={Logo}
                                            alt="Willowood Delight"
                                            className="h-[58px] w-auto"
                                            priority
                                        />
                                        <h1 className="mt-3 text-[22px] font-bold leading-tight text-[#14532d]">
                                            Reset Your Password
                                        </h1>
                                        <p className="mt-2 max-w-[260px] text-[11px] leading-snug text-[#31433a]">
                                            Enter and confirm your new password to complete the reset
                                            process.
                                        </p>
                                    </div>

                                    <StepProgress activeStep={2} />

                                    <form onSubmit={handleResetPassword}>
                                        <div className="flex justify-center">
                                            <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#e9f7e9] text-[#15803d]">
                                                <TbLock size={25} strokeWidth={1.7} />
                                            </div>
                                        </div>

                                        <label
                                            htmlFor="new-password"
                                            className="mt-5 block text-[11px] font-bold text-[#1f2937]"
                                        >
                                            New Password
                                        </label>
                                        <div className="mt-2 flex items-center gap-2 rounded-[7px] border border-[#dbe5d9] bg-white px-3 transition focus-within:border-[#15803d] focus-within:ring-1 focus-within:ring-[#15803d]">
                                            <input
                                                id="new-password"
                                                className="w-full bg-transparent py-2.5 text-[12px] text-gray-800 outline-none placeholder:text-gray-400"
                                                type={showPassword ? "text" : "password"}
                                                autoComplete="new-password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword((prev) => !prev)}
                                                className="shrink-0 text-gray-500"
                                                aria-label={showPassword ? "Hide password" : "Show password"}
                                            >
                                                {showPassword ? <TbEyeOff size={16} /> : <TbEye size={16} />}
                                            </button>
                                        </div>

                                        <div className="mt-3 space-y-1.5">
                                            {passwordRules.map((rule) => (
                                                <div
                                                    key={rule.label}
                                                    className="flex items-center gap-1.5 text-[9.5px] text-[#374151]"
                                                >
                                                    <span
                                                        className={`flex h-3.5 w-3.5 items-center justify-center rounded-full ${rule.isValid
                                                            ? "bg-[#15803d] text-white"
                                                            : "bg-gray-200 text-gray-400"
                                                            }`}
                                                    >
                                                        <TbCircleCheck size={10} />
                                                    </span>
                                                    {rule.label}
                                                </div>
                                            ))}
                                        </div>

                                        <label
                                            htmlFor="confirm-password"
                                            className="mt-5 block text-[11px] font-bold text-[#1f2937]"
                                        >
                                            Confirm Password
                                        </label>
                                        <div className="mt-2 flex items-center gap-2 rounded-[7px] border border-[#dbe5d9] bg-white px-3 transition focus-within:border-[#15803d] focus-within:ring-1 focus-within:ring-[#15803d]">
                                            <input
                                                id="confirm-password"
                                                className="w-full bg-transparent py-2.5 text-[12px] text-gray-800 outline-none placeholder:text-gray-400"
                                                type={showConfirmPassword ? "text" : "password"}
                                                autoComplete="new-password"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirmPassword((prev) => !prev)}
                                                className="shrink-0 text-gray-500"
                                                aria-label={
                                                    showConfirmPassword
                                                        ? "Hide confirm password"
                                                        : "Show confirm password"
                                                }
                                            >
                                                {showConfirmPassword ? (
                                                    <TbEyeOff size={16} />
                                                ) : (
                                                    <TbEye size={16} />
                                                )}
                                            </button>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isResetting}
                                            className="mt-6 flex w-full items-center justify-center rounded-[7px] bg-[#15803d] py-3 text-[12px] font-bold uppercase text-white transition-colors hover:bg-[#116632] disabled:cursor-not-allowed disabled:opacity-70"
                                        >
                                            {isResetting ? "Resetting..." : "Reset Password"}
                                        </button>
                                    </form>

                                    <div className="mt-5 flex items-center justify-center gap-2 text-center text-[10px] text-[#4b5563]">
                                        <TbShieldLock className="text-[#15803d]" size={15} />
                                        Your password is secure and encrypted.
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="flex flex-col items-center text-center">
                                        <Image
                                            src={Logo}
                                            alt="Willowood Delight"
                                            className="h-[58px] w-auto"
                                            priority
                                        />
                                        <h1 className="mt-3 text-[22px] font-bold leading-tight text-[#14532d]">
                                            Verify OTP
                                        </h1>
                                        <p className="mt-2 max-w-[270px] text-[11px] leading-snug text-[#31433a]">
                                            Enter the 6-digit OTP sent to your registered mobile
                                            number.
                                        </p>
                                    </div>

                                    <StepProgress activeStep={1} />

                                    <div className="flex justify-center">
                                        <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#e9f7e9] text-[#15803d]">
                                            <TbDeviceMobileMessage size={26} strokeWidth={1.7} />
                                        </div>
                                    </div>

                                    <div className="mt-5 flex items-center justify-center gap-1.5 text-center text-[11px] text-[#31433a]">
                                        <TbPhoneCall className="text-[#15803d]" size={14} />
                                        OTP sent to{" "}
                                        <span className="font-bold text-[#14532d]">
                                            {phone_number || "your mobile"}
                                        </span>
                                    </div>

                                    <form onSubmit={handleVerify} className="mt-5">
                                        <div className="flex justify-center text-black">
                                            <OtpInput
                                                value={otp}
                                                onChange={setOtp}
                                                numInputs={6}
                                                renderSeparator={<span className="w-1.5 lg:w-2" />}
                                                renderInput={(props) => (
                                                    <input
                                                        {...props}
                                                        className="rounded-[7px] border border-[#dbe5d9] transition-colors focus:border-[#166534] focus:ring-1 focus:ring-[#166534]"
                                                    />
                                                )}
                                                inputType="tel"
                                                inputStyle={{
                                                    width: "38px",
                                                    height: "42px",
                                                    outline: "none",
                                                    fontSize: "15px",
                                                    fontWeight: 700,
                                                    color: "#14532d",
                                                    background: "#ffffff",
                                                }}
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isVerifying}
                                            className="mt-6 flex w-full items-center justify-center gap-2 rounded-[7px] bg-[#15803d] py-3 text-[12px] font-bold uppercase text-white transition-colors hover:bg-[#116632] disabled:cursor-not-allowed disabled:opacity-70"
                                        >
                                            <TbShieldCheck size={16} />
                                            {isVerifying ? "Verifying..." : "Verify OTP"}
                                        </button>
                                    </form>

                                    <div className="mt-5 flex gap-3 rounded-[9px] bg-[#f3faf1] px-4 py-3">
                                        <TbBulb className="mt-0.5 shrink-0 text-[#15803d]" size={19} />
                                        <div className="flex-1">
                                            <p className="text-[11px] font-bold text-[#14532d]">
                                                Didn&apos;t Receive OTP?
                                            </p>
                                            <p className="mt-1 text-[9.5px] leading-snug text-[#4b5563]">
                                                Please check your mobile number and network connection.
                                            </p>
                                            <p className="mt-3 text-right text-[10px] font-bold text-[#14532d]">
                                                {timeLeft > 0 ? (
                                                    <>Resend OTP in {formattedTime}</>
                                                ) : (
                                                    <button
                                                        type="button"
                                                        onClick={handleResend}
                                                        className="font-bold text-[#14532d] hover:underline"
                                                    >
                                                        Resend OTP
                                                    </button>
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                </>
                            )}
                        </section>
                    </main>

                    <footer className="relative z-10 flex shrink-0 flex-col items-center justify-between gap-2 bg-[#07351f] px-6 py-4 text-center text-[10px] text-white sm:flex-row sm:px-10">
                        <p className="text-white">&copy; 2025 Willowood Delights. All rights reserved.</p>
                        <p className="text-white">
                            Need Help?{" "}
                            <span className="font-bold text-[#74d993]">Contact Support</span>
                        </p>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default ForgotOTPVal;
