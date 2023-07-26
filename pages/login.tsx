"use client";

import { LoginForm, ModalWallet, Navbar } from "@/components";
import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

const Index: NextPage = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [localForm, setLocalForm] = useState<string>("");
  return (
    <>
      <Head>
        <title>COST NOTES</title>
        <meta name="description" content="Generated by Create Next Stack." />
      </Head>

      <div className="relative">
        <Navbar
          setModalOpen={() => setModalOpen(!modalOpen)}
          dana={0}
          title={localForm === "" ? "Register" : "My"}
          isLogin={localForm === "" ? false : true}
          setShowDana={() => {}}
        />
        <LoginForm />
        {modalOpen ? (
          <ModalWallet
            setModalOpen={() => setModalOpen(!modalOpen)}
            refetch={() => {}}
            isLogin={localForm === "" ? false : true}
            dana={0}
          />
        ) : null}
      </div>
    </>
  );
};

export default Index;
