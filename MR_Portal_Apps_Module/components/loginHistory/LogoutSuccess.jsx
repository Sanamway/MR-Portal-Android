import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Banner from "../../public/logoutbg.jpeg";

const LogoutSuccess = () => {
  const router = useRouter();

  return (
    <div className="fixed inset-0 h-screen w-screen overflow-hidden bg-[#eef4ec] font-arial">
      {/* poore page par image — object-fill se na crop hoti hai na koi gap bachta hai */}
      <Image
        src={Banner}
        alt="You have been logged out successfully"
        fill
        priority
        sizes="100vw"
        className="object-fill"
      />

      {/* image ke apne Home button ke thik upar transparent clickable area */}
      <button
        type="button"
        onClick={() => router.push("/login")}
        style={{
          left: "44.6%",
          top: "71.4%",
          width: "14.4%",
          height: "5.9%"
        }}
        className="absolute cursor-pointer border-none bg-transparent outline-none"
      >
        <span className="sr-only">Home</span>
      </button>
    </div>
  );
};

export default LogoutSuccess;
