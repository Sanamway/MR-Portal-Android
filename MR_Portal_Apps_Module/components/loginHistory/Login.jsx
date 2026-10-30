import React, { useState, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  HiOutlineUser,
} from "react-icons/hi2";
import { TbShieldLock, TbChartBar, TbPlant2 } from "react-icons/tb";
import Logo from "../../public/NewLogo.png";
import Banner from "../../public/loginbg.jpg";

import Image from "next/image";

import { useRouter } from "next/router";

import axios from "axios";

import { url } from "@/constants/url";

import toast, { Toaster } from "react-hot-toast";

import { setAppMode, homeForMode, getAppMode } from "@/utils/appMode";

import apiClient from "@/utils/apiClient";
import {
  clearAccessToken,
  getAccessTokenFromResponse,
  setAccessToken,
} from "@/utils/authToken";

const Login = () => {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isLoggedMode, setLoggedMode] = useState(null);
  const [u_id, setU_id] = useState(null)

  const headers = {
    "Content-Type": "application/json",
    secret: "fsdhfgsfuiweifiowefjewcewcebjw"
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("data", phone);
    if (phone.length < 10) {
      toast.error("Enter the valid Mobile number");
      setLoading(false);
      return;
    }
    const payload = {
      phone_number: phone
    };
    try {
      const resp = await apiClient.post(`${url}/api/login_user`, payload, {
        headers: headers
      });
      const respdata = await resp.data;
      console.log("check", respdata.data);
      // return
      if (respdata.message == "OTP sent successfully!") {
        toast.success(respdata.message);
        const uuid = respdata.data;
        setTimeout(() => {
          router.push({
            pathname: `/otp`,
            query: { phone_number: phone, uid: uuid }
          });
        }, 1000);
      }
      const phone_number = respdata?.data?.loginHistory?.phone_no;
      const uid = respdata?.data.uid || respdata?.data?.loginHistory.uid;
      const email_id = respdata?.data?.loginHistory?.email_id;
      const user_name = respdata?.data?.loginHistory?.user_name;
      const _id = respdata?.data?.loginHistory?._id;
      const mode = respdata?.data?.loginHistory?.mode;
      const userinfo = respdata?.data?.userBSTDetails;

      setLoggedMode(mode);

      // console.log("logInfo", userinfo?.bg_id);

      // if (uid) {
      //   gettingMenuSidebar(uid);
      // }

      if (respdata?.message && respdata?.status == true) {
        setLoading(false);
        const uid = respdata?.data.uid || respdata?.data?.loginHistory.uid;
        const email_id = respdata?.data?.loginHistory?.email_id;
        const user_name = respdata?.data?.loginHistory?.user_name;
        const _id = respdata?.data?.loginHistory?._id;
        const mode = respdata?.data?.loginHistory?.mode;
        const c_id = respdata?.data?.loginHistory?.c_id;
        const emp_code = respdata?.data?.loginHistory?.emp_code;
        const token = getAccessTokenFromResponse(respdata);
        const logout_time = respdata?.data?.loginHistory?.logout_time;
        const login_in_time = respdata?.data?.loginHistory?.login_in_time;
        const userinfo = respdata?.data?.userBSTDetails;
        toast.success(respdata?.message);

        localStorage.setItem("uid", uid);
        localStorage.setItem("email_id", email_id);
        const appMode = setAppMode(mode);
        localStorage.setItem("c_id", JSON.stringify(c_id));
        localStorage.setItem("emp_code", emp_code);
        localStorage.setItem("logout_time", logout_time);
        localStorage.setItem("login_in_time", login_in_time);
        localStorage.setItem("userinfo", JSON.stringify(userinfo));
        setAccessToken(token);

        sessionStorage.setItem("uid", uid);


        const apiExpireTime = Date.now() + 60000;
        localStorage.setItem("expireTime", apiExpireTime);
        sessionStorage.setItem("expireTime", apiExpireTime);

        router.push(homeForMode(appMode));
      }

      if (respdata?.message && respdata?.status == false) {
        setLoading(false);
        toast.success(respdata?.message);
        setTimeout(() => {
          router.push({
            pathname: `/otp`,
            query: { phone_number: phone_number, uid: uid }
          });
        }, 1000);
      } else {
        localStorage.setItem("uid", uid);
        localStorage.setItem("email_id", email_id);
        localStorage.setItem("phone_number", phone_number);
        localStorage.setItem("user_name", user_name);
        localStorage.setItem("id", _id);
        localStorage.setItem("userinfo", JSON.stringify(userinfo));

        sessionStorage.setItem("uid", uid)

        router.push(homeForMode(setAppMode(mode)));
      }
    } catch (error) {
      console.log("re", error);
      console.log("err", error?.response?.data?.message);
      if (error?.response?.data?.message) {
        toast.error(error?.response?.data?.message);
      }
      const errorMessage = error?.response?.data?.message;
      const status = error?.response?.data?.status;

      if (errorMessage && status == false) {
        console.log("loginms", errorMessage == "OTP is not verified");

        if (errorMessage == "User Login is locked") {
          // toast.error(errorMessage);
          setLoading(false);
          return;
        }
        if (errorMessage == "User Login is frozen") {
          // toast.error(errorMessage);
          setLoading(false);
          return;
        }

        if (errorMessage == "User Login is not active") {
          // toast.error(errorMessage);
          setLoading(false);
          return;
        }

        if (errorMessage == "Invalid User Login mobile no") {
          // toast.error(errorMessage);
          setLoading(false);
          return;
        }
        setLoading(false);
        if (errorMessage == "OTP is not verified") {
          router.push({
            pathname: `/otp`,
            query: { phone_number: phone, uid: uid }
          });
        }
      }
    }
  };

  useEffect(() => {
    if (window.localStorage) {
      const isLoggedInInLocalStorage = !!localStorage.getItem("uid");
      setIsLoggedIn(isLoggedInInLocalStorage);
    }
  }, []);

  useEffect(() => {
    // Pehle se logged-in hai to uske apne mode ke home par bhejo,
    // hamesha web par nahi.
    if (isLoggedIn) {
      router.push(homeForMode(isLoggedMode ?? getAppMode()));
    }
  }, [isLoggedIn]);



  const ForgotLogout = async () => {
    try {
      const resp = await axios.post(`${url}/api/login_user`, { phone_number: phone }, {
        headers: headers
      });
      const respdata = await resp.data;
      console.log("hadnledLog", respdata);
      if (!respdata) {
        return;
      }
    } catch (error) {

      console.log("FORLOG", error?.response?.data?.message)
      const phoneNotAval = error?.response?.data?.data?.user_id
      const u_id = error?.response?.data?.data?.user_id;
      if (!phoneNotAval) {
        toast.error("Enter Number");
      } else if (u_id) {
        handleLogout(u_id)
      } else {

      }
    }
  };


  const handleLogout = async (uid) => {
    console.log("pay", phone);
    try {
      let cId = JSON.parse(window.localStorage.getItem("c_id"));
      const resp = await axios.get(`${url}/api/logout?user_id=${uid}`, {
        headers: headers,
        params: {
          c_id: cId
        }
      });
      const respdata = await resp.data;
      if (!respdata) {
        return;
      }
      if (respdata.status) {
        clearAccessToken();
        localStorage.removeItem("uid");
        sessionStorage.removeItem("uid");
        localStorage.removeItem("user_name");
        localStorage.removeItem("email_id");
        localStorage.removeItem("userinfo");
        localStorage.removeItem("phone_number");
        localStorage.removeItem("mode");
        localStorage.removeItem("c_id");
        localStorage.removeItem("emp_code");
        localStorage.removeItem("expireTime");
        sessionStorage.removeItem("expireTime");
        toast.success(respdata.message);
        setTimeout(() => router.push("/logoutsuccess"), 1000);
      }
    } catch (error) {
      console.log(error)
    }
  };


  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />

      <div className="flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#eef4ec] p-0 font-arial sm:p-2 md:p-4">
        <div className="relative flex min-h-screen w-full max-w-[1440px] flex-col overflow-hidden bg-white shadow-[0_20px_60px_rgba(0,0,0,0.10)] sm:min-h-0 sm:h-[calc(100vh-1rem)] sm:rounded-[20px] md:h-[calc(100vh-2rem)]">
          <Image
            src={Banner}
            alt="Willowood agriculture field"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,transparent_45%,rgba(240,247,238,0.18)_60%,rgba(240,247,238,0.32)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.18)_0%,transparent_22%,transparent_100%)]" />

          <div className="relative z-10 grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-[1.15fr_1fr]">
            <div className="relative hidden lg:block">
              <div className="relative z-10 flex h-full flex-col justify-between p-8 xl:p-10">
                <div>
                  <Image
                    src={Logo}
                    alt="Willowood Delight"
                    className="h-[60px] w-auto drop-shadow-sm"
                  />
                  <p className=" pl-[44px] text-[12px] text-[#33452f]">
                    Agrochemical Digital Application
                  </p>
                </div>

                <div className="max-w-[520px] pl-10 xl:pl-14">
                  <h1 className="text-[23px] font-bold leading-[1.2] text-[#15803d] drop-shadow-[0_1px_2px_rgba(255,255,255,0.5)] xl:text-[26px]">
                    Empowering Growth,
                    <br />
                    Nurturing Tomorrow
                  </h1>
                  <p className="mt-2 text-[12px] leading-snug text-[#3c4f38]">
                    Smart solutions for a sustainable
                    <br />
                    agriculture future.
                  </p>
                </div>

                <div className="flex w-fit items-stretch gap-4 rounded-xl bg-[#14532d]/90 px-5 py-3 backdrop-blur-[2px]">
                  <div className="flex items-center gap-2.5 border-r border-white/25 pr-5">
                    <TbShieldLock className="shrink-0 text-white" size={22} />
                    <div className="leading-tight text-white">
                      <p className="text-[12.5px] font-light text-white/95">Secure</p>
                      <p className="text-[11px] font-light text-white/70">Data Protection</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 border-r border-white/25 pr-5">
                    <TbPlant2 className="shrink-0 text-white" size={22} />
                    <div className="leading-tight text-white">
                      <p className="text-[12.5px] font-light text-white/95">Smart</p>
                      <p className="text-[11px] font-light text-white/70">Agri Solutions</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <TbChartBar className="shrink-0 text-white" size={22} />
                    <div className="leading-tight text-white">
                      <p className="text-[12.5px] font-light text-white/95">Data Driven</p>
                      <p className="text-[11px] font-light text-white/70">Decisions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex min-h-0 items-center justify-center overflow-y-auto px-4 py-6 sm:py-3 md:px-6">
              <div className="flex w-full max-w-[370px] min-h-[430px] flex-col justify-center rounded-2xl bg-white px-5 py-6 shadow-[0_12px_40px_rgba(0,0,0,0.12)] md:px-7">
                <div className="mb-4 flex justify-center lg:hidden">
                  <Image src={Logo} alt="Willowood Delight" className="h-12 w-auto" />
                </div>

                <div className="flex flex-col items-center">
                  <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[#d5e7d5] bg-[#f5faf4]">
                    <TbPlant2 className="text-[#15803d]" size={19} />
                  </div>
                  <h2 className="mt-2 text-[17px] font-bold text-[#14532d]">
                    Welcome Back!
                  </h2>
                  <p className="mt-0.5 text-[11px] text-gray-500">
                    Sign in to continue to Willowood Delight
                  </p>
                </div>

                <form onSubmit={loginHandler} className="mt-5">
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-[11px] font-bold text-[#1f2937]"
                  >
                    Mobile Number
                  </label>
                  <div className="flex items-center gap-2.5 rounded-lg border border-[#dbe5d9] bg-white px-3.5 transition focus-within:border-[#15803d] focus-within:ring-1 focus-within:ring-[#15803d]">
                    <HiOutlineUser className="shrink-0 text-[#15803d]" size={17} />
                    <input
                      id="phone"
                      className="w-full bg-transparent py-2.5 text-[12px] text-gray-800 outline-none placeholder:text-gray-400 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                      type="number"
                      inputMode="numeric"
                      autoComplete="tel"
                      placeholder="Enter your mobile number"
                      value={phone}
                      onChange={(e) => {
                        if (e.target.value.length > 10) {
                          return;
                        }
                        setPhone(e.target.value);
                      }}
                    />
                  </div>



                  <div className="mt-3 flex justify-end">

                    <button
                      type="button"
                      onClick={ForgotLogout}
                      className="text-[11px] font-semibold text-[#15803d] hover:underline"
                    >
                      Logout Device
                    </button>
                  </div>

                  <label className="mt-4 flex w-fit cursor-pointer select-none items-center gap-2">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="h-[15px] w-[15px] cursor-pointer accent-[#15803d]"
                    />
                    <span className="text-[11.5px] text-gray-700">Remember Me</span>
                  </label>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="relative mt-5 flex w-full items-center justify-center rounded-lg bg-[#15803d] py-2.5 text-[12.5px] font-semibold text-white transition-colors hover:bg-[#116632] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isLoading ? "Loading..." : "Login"}
                    {!isLoading && (
                      <FiArrowRight className="absolute right-4" size={16} />
                    )}
                  </button>

                  <div className="my-3 flex items-center gap-3">
                    <span className="h-px flex-1 bg-[#e2e8e0]" />
                    <span className="text-[11px] text-gray-500">or login with</span>
                    <span className="h-px flex-1 bg-[#e2e8e0]" />
                  </div>



                  <p className="mt-4 text-center text-[11.5px] text-gray-600">
                    New user?{" "}
                    <span className="font-semibold text-[#15803d]">
                      Contact your administrator
                    </span>
                  </p>
                </form>
              </div>
            </div>
          </div>


          <div className="relative z-10 flex shrink-0 flex-col items-center justify-between gap-1 bg-[#14532d] px-6 py-2.5 text-center text-[10px] !text-white sm:gap-1 sm:text-[11.5px] md:flex-row md:px-10">
            <div className="flex items-center gap-1.5 text-white">
              <TbShieldLock size={13} className="shrink-0 text-white" />
              <span className="text-white">
                Secure &nbsp;•&nbsp; Reliable &nbsp;•&nbsp; Trusted
              </span>
            </div>
            <p className="text-white">© 2025 Willowood Delight. All rights reserved.</p>
            <div className="flex items-center gap-1.5 text-white">
              <TbPlant2 size={13} className="shrink-0 text-white" />
              <span className="text-white">Version 1.0.0</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
