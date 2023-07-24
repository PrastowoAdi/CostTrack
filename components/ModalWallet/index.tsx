import { useRegister, useUpdateDana } from "@/hooks";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import { NumericFormat } from "react-number-format";
import { toast } from "react-toastify";

interface IProps {
  setModalOpen: () => void;
  refetch: () => void;
  isLogin: boolean;
}
function ModalWallet(props: IProps) {
  const router = useRouter();
  const { setModalOpen, refetch, isLogin } = props;
  const mutation = useUpdateDana();
  const mutationRegister = useRegister();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [isLoadingBtn, setIsLoadingBtn] = useState<boolean>(false);

  const onSubmit = useCallback(() => {
    try {
      setIsLoadingBtn(true);
      mutation.mutate(
        {
          dana: Number(amount),
        },
        {
          onSuccess(data) {
            if (data) {
              toast.success(data.data.message);
              setAmount("");
              setModalOpen();
              refetch();
              setIsLoadingBtn(false);
            }
          },
          onError(err: any) {
            toast.error(err.response.data.message);
            setIsLoadingBtn(false);
          },
        }
      );
    } catch (error) {
      setIsLoadingBtn(false);
      console.log("err.submit", error);
    }
  }, [mutation, setAmount, setModalOpen, refetch, amount]);

  const onRegisterSubmit = useCallback(() => {
    try {
      setIsLoadingBtn(true);
      mutationRegister.mutate(
        {
          username,
          password,
          dana: Number(amount),
        },
        {
          onSuccess(data) {
            if (data) {
              toast.success("Registrasi Berhasil!!!");
              setAmount("");
              setPassword("");
              setUsername("");
              setModalOpen();
              setIsLoadingBtn(false);
            }
          },
          onError(err: any) {
            toast.error(err.response.data.message);
            setIsLoadingBtn(false);
          },
        }
      );
    } catch (error) {
      setIsLoadingBtn(false);
      console.log("err.submit", error);
    }
  }, [setAmount, setModalOpen, amount, mutationRegister, username, password]);

  return (
    <div className="absolute top-0 flex items-center justify-center w-full h-screen bg-black/70">
      <div className="w-4/5 p-5 bg-white rounded-md lg:w-1/4">
        {isLogin ? null : (
          <>
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
            <div className="mb-3 text-gray-700">
              <label className="block mb-1 text-sm">Password</label>
              <input
                className="w-full h-10 px-3 text-sm placeholder-gray-600 border rounded-lg focus:shadow-outline "
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </>
        )}
        <div className="mb-8 text-gray-700">
          <label className="block mb-1 text-sm">Dana</label>
          <NumericFormat
            type="text"
            className="w-full h-10 px-3 text-sm placeholder-gray-600 border rounded-lg focus:shadow-outline"
            placeholder="Dana"
            value={amount}
            thousandsGroupStyle="thousand"
            thousandSeparator=","
            prefix={"Rp. "}
            onValueChange={(e) => setAmount(e.value)}
          />
        </div>
        <div className="flex flex-row gap-4">
          {isLoadingBtn ? (
            <div className="w-8 h-8 border-[6px] rounded-full border-[#dbdad9] loader"></div>
          ) : (
            <>
              <button
                className="px-6 py-2 font-semibold text-slate-950 bg-[#F7F7F9] rounded hover:bg-[#CDDFEE]/80 text-sm"
                onClick={() => {
                  if (isLogin) {
                    onSubmit();
                  } else {
                    onRegisterSubmit();
                  }
                }}
              >
                Submit
              </button>
              <button
                className="px-6 py-2 text-sm font-semibold text-white rounded bg-rose-500 hover:bg-rose-500/80"
                onClick={setModalOpen}
              >
                Cancel
              </button>
            </>
          )}
        </div>
        {isLogin ? (
          <>
            {router.pathname === "/report" ? (
              <div className="mt-10">
                <Link href={"/"}>
                  <h1 className="text-xs italic underline cursor-pointer">
                    back to home
                  </h1>
                </Link>
              </div>
            ) : (
              <div className="mt-10">
                <Link href={"/report"}>
                  <h1 className="text-xs italic underline cursor-pointer">
                    See Report
                  </h1>
                </Link>
              </div>
            )}
          </>
        ) : null}
      </div>
    </div>
  );
}

export default ModalWallet;
