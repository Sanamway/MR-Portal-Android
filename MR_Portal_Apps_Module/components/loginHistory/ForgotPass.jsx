import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import {
  TbBulb,
  TbChevronDown,
  TbPhoneCall,
  TbShieldLock,
} from "react-icons/tb";
import Logo from "../../public/NewLogo.png";
import Banner from "../../public/loginbg.jpg";
import { url } from "@/constants/url";

const RESEND_SECONDS = "00:45";

const ForgotPass = () => {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [isLoading, setLoading] = useState(false);

  const headers = {
    "Content-Type": "application/json",
    secret: "fsdhfgsfuiweifiowefjewcewcebjw",
  };

  const loginHandler = async (e) => {
    e.preventDefault();

    if (phone.length < 10) {
      toast.error("Enter the valid Mobile number");
      return;
    }

    try {
      setLoading(true);
      const resp = await axios.post(
        `${url}/api/login_user`,
        { phone_number: phone },
        { headers: headers }
      );
      const respdata = await resp.data;
      const uid = respdata?.data?.uid || respdata?.data;
      const phoneNumber = respdata?.data?.loginHistory?.phone_no || phone;

      if (respdata?.message) {
        toast.success(respdata.message);
      }

      setTimeout(() => {
        router.push({
          pathname: "/forgotOtp",
          query: { phone_number: phoneNumber, uid: uid },
        });
      }, 1000);
    } catch (error) {
      console.log("forgot password otp", error);
      const errorMessage = error?.response?.data?.message;
      toast.error(errorMessage || "Unable to send OTP");
    } finally {
      setLoading(false);
    }
  };

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
              <div className="flex flex-col items-center text-center">
                <Image
                  src={Logo}
                  alt="Willowood Delight"
                  className="h-[58px] w-auto"
                  priority
                />
                <h1 className="mt-3 text-[22px] font-bold leading-tight text-[#14532d]">
                  Forgot Password?
                </h1>
                <p className="mt-2 max-w-[260px] text-[11px] leading-snug text-[#31433a]">
                  Enter your registered mobile number and we will send you a One
                  Time Password (OTP) to reset your password.
                </p>
              </div>

              <div className="my-5 flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#15803d] text-[11px] font-bold text-white">
                    1
                  </span>
                  <span className="whitespace-nowrap text-[10px] font-bold text-[#14532d]">
                    Verify Mobile
                  </span>
                </div>
                <span className="h-px flex-1 bg-[#dce7d9]" />
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#e7ece6] text-[11px] font-bold text-[#9aa49a]">
                    2
                  </span>
                  <span className="whitespace-nowrap text-[10px] font-bold text-[#9aa49a]">
                    Reset Password
                  </span>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#e9f7e9] text-[#15803d]">
                  <TbPhoneCall size={25} strokeWidth={1.7} />
                </div>
              </div>

              <form onSubmit={loginHandler} className="mt-6">
                <label
                  htmlFor="phone"
                  className="mb-2 block text-[11px] font-bold text-[#1f2937]"
                >
                  Mobile Number
                </label>
                <div className="grid grid-cols-[74px_1fr] overflow-hidden rounded-[7px] border border-[#dbe5d9] bg-white transition focus-within:border-[#15803d] focus-within:ring-1 focus-within:ring-[#15803d]">
                  <button
                    type="button"
                    className="flex items-center justify-center gap-1 border-r border-[#dbe5d9] text-[12px] text-[#1f2937]"
                    aria-label="Country code"
                  >
                    +91
                    <TbChevronDown size={14} />
                  </button>
                  <input
                    id="phone"
                    className="w-full bg-transparent px-3 py-2.5 text-[12px] text-gray-800 outline-none placeholder:text-gray-400 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    type="number"
                    inputMode="numeric"
                    autoComplete="tel"
                    placeholder="Enter mobile number"
                    value={phone}
                    onChange={(e) => {
                      if (e.target.value.length > 10) {
                        return;
                      }
                      setPhone(e.target.value);
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="mt-6 flex w-full items-center justify-center rounded-[7px] bg-[#15803d] py-3 text-[12px] font-bold uppercase text-white transition-colors hover:bg-[#116632] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isLoading ? "Sending..." : "Send OTP"}
                </button>
              </form>

              <div className="mt-5 flex items-center justify-center gap-2 text-center text-[10px] text-[#4b5563]">
                <TbShieldLock className="text-[#15803d]" size={15} />
                We will never share your number with anyone.
              </div>

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
                    Resend OTP in {RESEND_SECONDS}
                  </p>
                </div>
              </div>
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

export default ForgotPass;
