import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { BiLogOutCircle } from "react-icons/bi";
import { NumericFormat } from "react-number-format";

interface IProps {
  setModalOpen: () => void;
  title: string;
  dana: number;
  isLogin: boolean;
}

function Navbar(props: IProps) {
  const router = useRouter();
  const { setModalOpen, dana, title, isLogin } = props;
  return (
    <>
      <div className="w-full px-10 py-3 bg-[#F7F7F9] flex flex-row justify-between items-center">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={setModalOpen}
        >
          <Image
            src={"/assets/wallet.webp"}
            width={50}
            height={50}
            alt="wallet-img"
            priority
          />
          <div className="">
            <h1 className="text-xs uppercase">{title}</h1>
            <NumericFormat
              className="text-sm font-bold text-slate-950"
              value={dana}
              prefix="+Rp. "
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
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
