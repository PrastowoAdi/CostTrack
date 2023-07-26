import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BiLogOutCircle } from "react-icons/bi";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { NumericFormat } from "react-number-format";

interface IProps {
  setShowDana: (val: boolean) => void;
  setModalOpen: () => void;
  title: string;
  dana: number;
  isLogin: boolean;
}

function Navbar(props: IProps) {
  const router = useRouter();
  const { setModalOpen, dana, title, isLogin, setShowDana } = props;
  const [hideDana, setHideDana] = useState<boolean>(false);
  return (
    <>
      <div className="w-full px-10 py-3 bg-[#F7F7F9] flex flex-row justify-between items-center">
        <div className="flex items-center gap-2 ">
          <Image
            src={"/assets/wallet.webp"}
            width={50}
            height={50}
            alt="wallet-img"
            priority
            className="cursor-pointer"
            onClick={setModalOpen}
          />
          <div className="">
            <h1 className="text-xs uppercase">{title}</h1>
            {hideDana ? (
              <div className="flex flex-row items-center gap-2">
                <NumericFormat
                  className="text-sm font-bold text-slate-950"
                  value={dana}
                  prefix="Rp. "
                  displayType="text"
                  thousandSeparator="."
                  decimalSeparator=","
                />
                <BsEyeSlashFill
                  className="text-gray-500 cursor-pointer"
                  onClick={() => {
                    setHideDana(!hideDana);
                    setShowDana(!hideDana);
                  }}
                />
              </div>
            ) : (
              <div className="flex flex-row items-center gap-2">
                <h2 className="text-sm font-bold tracking-widest text-gray-500">
                  {isLogin ? (
                    "*******"
                  ) : (
                    <NumericFormat
                      className="text-sm font-bold text-slate-950"
                      value={0}
                      prefix="+Rp. "
                      displayType="text"
                      thousandSeparator="."
                      decimalSeparator=","
                    />
                  )}
                </h2>
                {isLogin ? (
                  <BsEyeFill
                    className="text-gray-500 cursor-pointer"
                    onClick={() => {
                      setHideDana(!hideDana);
                      setShowDana(!hideDana);
                    }}
                  />
                ) : null}
              </div>
            )}
          </div>
        </div>
        {isLogin ? (
          <div
            className="p-1 text-2xl bg-[#CDDFEE] rounded-md cursor-pointer hover:bg-[#CDDFEE]/80 text-[#F7F7F9]"
            onClick={() => {
              localStorage.removeItem("token");
              router.replace("/login");
            }}
          >
            <BiLogOutCircle />
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Navbar;
