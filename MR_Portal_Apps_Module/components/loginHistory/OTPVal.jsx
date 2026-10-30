import React, { useState, useEffect } from "react";
import {
  TbShieldCheck,
  TbLeaf,
  TbDeviceMobileMessage,
  TbPhoneCall,
  TbFlask2,
  TbPlant2,
  TbWorld,
} from "react-icons/tb";
import { useRouter } from "next/router";
import Image from "next/image";
import Logo from "../../public/NewLogo.png";
import OtpInput from "react-otp-input";
import axios from "axios";
import { url } from "@/constants/url";
import toast, { Toaster } from "react-hot-toast";
import { setAppMode, homeForMode } from "@/utils/appMode";
import { getAccessTokenFromResponse, setAccessToken } from "@/utils/authToken";

const RESEND_SECONDS = 45;

const FEATURES = [
  {
    icon: TbShieldCheck,
    title: "Trusted Solutions",
    desc: "Reliable products for better tomorrow",
  },
  {
    icon: TbFlask2,
    title: "Advanced Technology",
    desc: "Innovation that delivers consistent results",
  },
  {
    icon: TbShieldCheck,
    title: "Quality Assurance",
    desc: "Tested. Trusted. Proven.",
  },
  {
    icon: TbPlant2,
    title: "Healthy Crops",
    desc: "Better yield through better care",
  },
  {
    icon: TbWorld,
    title: "Sustainable Future",
    desc: "Committed to nature. Committed to you.",
  },
];

const OTPVal = () => {
  const router = useRouter();
  const { phone_number, uid } = router.query;
  const [otp, setOtp] = useState("");
  const [isVerifying, setVerifying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(RESEND_SECONDS);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const headers = {
    "Content-Type": "application/json",
    secret: "fsdhfgsfuiweifiowefjewcewcebjw",
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    console.log("otp", otp);
    setVerifying(true)
    // return;

    if (otp.length < 6) {
      toast.error("Invalid OTP");
      setVerifying(false)
      return;
    }
    const payload = {
      phone_otp: otp,
      uid: uid,
    };

    // console.log( "Hellosws",phone_number, uid)

    try {
      const resp = await axios.post(
        `${url}/api/verify_otp`,
        JSON.stringify(payload),
        { headers: headers }
      );
      const respdata = await resp.data;
      setAccessToken(getAccessTokenFromResponse(respdata));

      console.log("uid", respdata?.data?.uid);
      console.log("otpval", respdata)
      // const uid = respdata?.data?.uid;
      // const email = respdata?.data?.email_id;
      // const userName = respdata?.data?.user_name;

      const phone_number = respdata?.data?.loginHistory?.phone_no;
      const uid = respdata?.data.uid || respdata?.data?.loginHistory.uid;

      const email = respdata?.data?.loginHistory?.email_id;
      const userName = respdata?.data?.loginHistory?.user_name;
      const _id = respdata?.data?.loginHistory?._id;
      const mode = respdata?.data?.loginHistory?.mode;
      const c_id = respdata?.data?.loginHistory?.c_id;
      const emp_code = respdata?.data?.loginHistory?.emp_code;


      const userinfo = respdata?.data?.userBSTDetails;

      localStorage.setItem("uid", uid);
      localStorage.setItem("email_id", email);
      localStorage.setItem("phone_number", phone_number);
      localStorage.setItem("user_name", userName);
      localStorage.setItem("id", _id);
      const appMode = setAppMode(mode);
      localStorage.setItem("emp_code", emp_code);

      localStorage.setItem("c_id", JSON.stringify(c_id));
      localStorage.setItem("userinfo", JSON.stringify(userinfo));

      if (uid) {
        localStorage.setItem("uid", uid);
      }
      if (email) {
        localStorage.setItem("email", email);
      }
      if (userName) {
        localStorage.setItem("userName", userName);
      }

      if (respdata?.message) {
        toast.success(respdata?.message, { autoClose: 500 });
        setTimeout(() => {
          router.push(homeForMode(appMode));
        }, 1500);
      }
    } catch (error) {
      console.log("dfd", error);
      console.log("err", error?.response?.data?.message);
      const errorMessage = error?.response?.data?.message;
      if (errorMessage) {
        setVerifying(false)
        toast.error(errorMessage, { autoClose: 1000 });
      }
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
      console.log("resend", error?.response?.data?.message);
      const errorMessage = error?.response?.data?.message;
      if (errorMessage) {
        toast.error(errorMessage);
      }
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

  useEffect(() => {
    if (window.localStorage) {
      const isLoggedInInLocalStorage = !!localStorage.getItem("uid");
      setIsLoggedIn(isLoggedInInLocalStorage);
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn]);

  const formattedTime = `${String(Math.floor(timeLeft / 60)).padStart(
    2,
    "0"
  )}:${String(timeLeft % 60).padStart(2, "0")}`;

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />

      <div className="flex min-h-[100dvh] w-full flex-col bg-white font-arial lg:h-screen lg:min-h-0 lg:overflow-hidden">

        <header className="flex items-center justify-between gap-3 bg-white px-3 py-2 shadow-sm sm:gap-4 sm:px-4 lg:px-8">
          <Image
            src={Logo}
            alt="Willowood Delights"
            className="h-8 w-auto shrink-0 sm:h-10 lg:h-12"
            priority
          />

          <nav className="hidden items-center md:flex">
            {FEATURES.map(({ icon: Icon, title }, idx) => (
              <div
                key={title}
                className={`flex items-center gap-1.5 px-2.5 sm:gap-2 lg:px-4 xl:px-5 ${idx >= 3 ? "hidden lg:flex" : ""
                  } ${idx !== 0 ? "border-l border-[#e5e7eb]" : ""}`}
              >
                <Icon
                  className="shrink-0 text-[#166534]"
                  size={20}
                  strokeWidth={1.6}
                />
                <span className="text-[11px]  leading-tight text-black lg:text-[11px]">
                  {title.split(" ").map((word, i) => (
                    <React.Fragment key={i}>
                      {word}
                      {i === 0 ? <br /> : ""}
                    </React.Fragment>
                  ))}
                </span>
              </div>
            ))}
          </nav>
        </header>

        <main className="relative flex flex-1 items-center justify-center overflow-y-auto bg-banner bg-cover bg-center bg-no-repeat px-3 py-4 sm:px-4 lg:py-2">
          <div className="my-auto w-full max-w-[340px] rounded-[14px] bg-white px-4 py-3.5 shadow-[0_14px_40px_rgba(0,0,0,0.20)] sm:max-w-[380px] sm:px-6 md:max-w-[400px] lg:max-w-[360px] lg:px-7">
            <div className="flex flex-col items-center">
              <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#dcecda] bg-white shadow-[0_0_0_4px_rgba(240,248,238,0.9)] lg:h-[50px] lg:w-[50px]">
                <TbDeviceMobileMessage
                  className="text-[#15803d]"
                  size={26}
                  strokeWidth={1.6}
                />
              </div>

              <h2 className="mt-1.5 text-[17px] font-bold text-black lg:text-[18px]">
                Enter the OTP
              </h2>

              <p className="mt-0.5 flex flex-wrap items-center justify-center gap-1 text-center text-[10.5px] font-bold text-black lg:text-[11px]">
                You have received an OTP on
                <span className="flex items-center gap-1 font-bold text-[#15803d]">
                  <TbPhoneCall size={12} />
                  {phone_number}
                </span>
              </p>
            </div>

            <div className="my-2 flex items-center gap-2">
              <span className="h-px flex-1 bg-[#dfe8dd]" />
              <TbLeaf className="shrink-0 text-[#15803d]" size={12} />
              <span className="h-px flex-1 bg-[#dfe8dd]" />
            </div>

            <p className="text-center text-[10.5px] font-medium text-black lg:text-[11px]">
              Please enter the{" "}
              <span className="font-bold text-black">6-digit</span> OTP sent to
            </p>
            <p className="mt-0.5 text-center text-[11.5px] font-semibold text-[#15803d] lg:text-[12px]">
              {phone_number}
            </p>

            <form onSubmit={handleVerify}>
              <div className="mt-2 flex justify-center text-black">
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  renderSeparator={<span className="w-1 sm:w-1.5 lg:w-2" />}
                  renderInput={(props) => (
                    <input
                      {...props}
                      className="rounded-[7px] border border-[#e2e8e0] transition-colors focus:border-[#166534] focus:ring-1 focus:ring-[#166534]"
                    />
                  )}
                  inputType="tel"
                  inputStyle={{
                    width: "clamp(32px, 10vw, 38px)",
                    height: "clamp(32px, 10vw, 38px)",
                    textAlign: "center",
                    outline: "none",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#14532d",
                    background: "#ffffff",
                  }}
                />
              </div>

              <p className="mt-2 text-center text-[10.5px] text-[#6b7280] lg:text-[11px]">
                Didn&apos;t receive OTP?{" "}
                {timeLeft > 0 ? (
                  <>
                    Resend in{" "}
                    <span className="font-bold text-[#15803d]">{formattedTime}</span>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={handleResend}
                    className="font-bold text-[#15803d] hover:underline"
                  >
                    Resend OTP
                  </button>
                )}
              </p>

              <button
                type="submit"
                onClick={handleVerify}
                disabled={isVerifying}
                className="mt-2.5 flex w-full items-center justify-center gap-2 rounded-[7px] bg-[#166534] py-2.5 text-[13.5px] font-semibold text-white transition-colors hover:bg-[#125129] disabled:cursor-not-allowed disabled:opacity-70"
              >
                <TbShieldCheck size={16} />
                {isVerifying ? "Verifying..." : "Verify OTP"}
              </button>
            </form>

            <div className="mt-2.5 flex items-start gap-2.5 rounded-[7px] border border-[#e4f0e1] bg-[#f3faf1] px-3 py-2.5">
              <TbShieldCheck className="mt-0.5 shrink-0 text-[#166534]" size={17} />
              <div>
                <p className="text-[11px] font-bold text-black">
                  Your Data is Safe with Us
                </p>
                <p className="text-[8.5px] leading-snug text-[#4b5563]">
                  We use secure encryption to protect your personal information.
                </p>
              </div>
            </div>
          </div>
        </main>

        <footer className="shrink-0 bg-[#1c4d2b] text-white">
          <div className="grid grid-cols-2 gap-x-3 gap-y-2.5 px-3 py-2.5 sm:grid-cols-3 sm:gap-x-6 sm:px-6 sm:py-3 md:grid-cols-3 lg:grid-cols-5 lg:gap-y-2 lg:py-2.5 lg:px-10">
            {FEATURES.map(({ icon: Icon, title, desc }, idx) => (
              <div
                key={title}
                className={`flex items-start gap-2 sm:gap-2.5 ${idx === FEATURES.length - 1 ? "col-span-2 sm:col-span-1" : ""
                  } ${idx !== FEATURES.length - 1
                    ? "lg:border-r lg:border-white/25 lg:pr-4"
                    : ""
                  }`}
              >
                <Icon
                  className="mt-0.5 shrink-0 text-[#a7d7ae]"
                  size={22}
                  strokeWidth={1.5}
                />
                <div className="min-w-0">
                  <p className="text-[11px] font-medium leading-tight sm:text-[12px]">
                    {title}
                  </p>
                  <p className="mt-0.5 text-[9.5px] leading-snug text-[#cfe3d3] sm:text-[10px]">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 bg-white px-4 py-1.5 text-center text-[10px] text-[#374151] sm:text-[10.5px]">
            © 2024 Willowood Delights. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
};

export default OTPVal;
