import { useLogin } from "@/hooks";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";

function LoginForm() {
  const mutation = useLogin();
  const router = useRouter();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoadingBtn, setIsLoadingBtn] = useState<boolean>(false);

  const onSubmit = useCallback(() => {
    try {
      setIsLoadingBtn(true);
      mutation.mutate(
        {
          username,
          password,
        },
        {
          onSuccess(data) {
            if (data) {
              localStorage.setItem("token", JSON.stringify(data.data.token));
              router.reload();
              setIsLoadingBtn(false);
            }
          },
          onError(err: any) {
            console.log(err.response.data.message);
            setIsLoadingBtn(false);
          },
        }
      );
    } catch (error) {
      setIsLoadingBtn(false);
      console.log("err.submit", error);
    }
  }, [mutation, username, password, router]);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-2/3 lg:w-1/2 h-[550px] md:h-[650px] mx-auto gap-10">
      <div
        className="w-full py-20 bg-right bg-no-repeat bg-cover rounded-md shadow-md md:py-32 lg:py-40 lg:w-1/2"
        style={{
          backgroundImage: "url(/assets/login-img.webp)",
        }}
      ></div>
      <div className="w-full lg:flex-1">
        <h1 className="mb-5 text-xl font-bold uppercase">Login Form</h1>
        <div className="mb-3 text-gray-700">
          <label className="block mb-1 text-sm">Username</label>
          <input
            className="w-full h-10 px-3 text-sm placeholder-gray-600 border rounded-lg focus:shadow-outline "
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="text-gray-700 mb-7">
          <label className="block mb-1 text-sm">Password</label>
          <input
            className="w-full h-10 px-3 text-sm placeholder-gray-600 border rounded-lg focus:shadow-outline "
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {isLoadingBtn ? (
          <div className="w-8 h-8 border-[6px] rounded-full border-[#dbdad9] loader"></div>
        ) : (
          <button
            className="px-6 py-2 font-semibold text-slate-950 bg-[#F7F7F9] rounded hover:bg-[#CDDFEE]/80 text-sm"
            onClick={onSubmit}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
}

export default LoginForm;
