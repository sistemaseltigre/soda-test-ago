import { FC, useEffect, useState } from "react";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import type { NextPage } from "next";
import Head from "next/head";
import { useProgram } from "../utils/useProgram";
import { useRouter } from "next/router"

import {
  createNft
} from '../utils/callInstructions'


const Examples: NextPage = (props) => {
  const wallet = useAnchorWallet();
  const { connection } = useConnection();
  const { program } = useProgram({ connection, wallet });

// React UseStates hooks for managing args 
//for createNft
const [id_for_createNft , setid_for_createNft] = useState()
const [name_for_createNft , setname_for_createNft] = useState()
const [symbol_for_createNft , setsymbol_for_createNft] = useState()
const [uri_for_createNft , seturi_for_createNft] = useState()

//handler functions for inputs feilds
const idhandler_for_createNft = (e) => {
  setid_for_createNft(e.target.value)
}
const namehandler_for_createNft = (e) => {
  setname_for_createNft(e.target.value)
}
const symbolhandler_for_createNft = (e) => {
  setsymbol_for_createNft(e.target.value)
}
const urihandler_for_createNft = (e) => {
  seturi_for_createNft(e.target.value)
}

// variables for account 
const authority = ""
const systemProgram = ""
const clock = ""
const payer_for_createNft = ""
const mint_for_createNft = ""
const tokenAccount_for_createNft = ""
const associatedTokenProgram_for_createNft = ""
const rent_for_createNft = ""
const tokenProgram_for_createNft = ""
const metadataProgram_for_createNft = ""
const masterEditionAccount_for_createNft = ""
const nftMetadata_for_createNft = ""


  return (
    <>
      <Head>
        <title>nft_program</title>
        <meta name="description" content="nft_program" />
      </Head>
       <div className="flex justify-center py-10">
        <h1 className="sm:text-3xl text-2xl font-extrabold mb-4 text-white">
          Call Instructions of Your IDL By a Clicking a Button
        </h1>
      </div>
      <div className="flex justify-center">
        <h1 className="sm:text-3xl text-2xl font-extrabold mb-4 text-white">
          Powered By SODA
        </h1>
      </div>
    <div className="text-white flex flex-col text-2xl m-5 p-2 ">
        <div className="min-h-screen bg-inherit py-1 flex flex-col justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
              <div className=" mx-auto">
                <div className="flex items-center space-x-5">
                  <div className="h-16 w-16 p-2 bg-black rounded-full flex flex-shrink-0 justify-center items-center text-3xl font-mono">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/shrine-76128.appspot.com/o/soda.png?alt=media&token=32de0266-c1ee-4a31-a2e1-2df6d35086f8"
                      alt="ff"
                    />
                  </div>
                  <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                    <h2 className="leading-relaxed mt-8">For createNft instructions</h2>
                    <p className="text-sm text-gray-500 font-normal leading-relaxed invisible">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="flex flex-col">
                      <p className="">id</p>
                      <input
                        type="text"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder={`Enter id`}
                        value={
                          id_for_createNft
                        }
                        onChange={
                          idhandler_for_createNft
                        }
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="">name</p>
                      <input
                        type="text"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder={`Enter name`}
                        value={
                          name_for_createNft
                        }
                        onChange={
                          namehandler_for_createNft
                        }
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="">symbol</p>
                      <input
                        type="text"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder={`Enter symbol`}
                        value={
                          symbol_for_createNft
                        }
                        onChange={
                          symbolhandler_for_createNft
                        }
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="">uri</p>
                      <input
                        type="text"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder={`Enter uri`}
                        value={
                          uri_for_createNft
                        }
                        onChange={
                          urihandler_for_createNft
                        }
                      />
                    </div>
                  </div>
                  <div className="pt-4 flex items-center space-x-4">
                    
                    <button 
                    className="bg-blue-500 flex justify-center items-center w-full text-white px-3 text-xl py-1 rounded-md focus:outline-none"
                    onClick={
                      ()=>createNft(program , id_for_createNft , name_for_createNft , symbol_for_createNft , uri_for_createNft ,   authority  , payer_for_createNft   , mint_for_createNft   , tokenAccount_for_createNft   , associatedTokenProgram_for_createNft   , rent_for_createNft   ,   systemProgram , tokenProgram_for_createNft   , metadataProgram_for_createNft   , masterEditionAccount_for_createNft   , nftMetadata_for_createNft   ,)
                    }
                    >
                       Call_createNft_instruction
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
    </>
  );
};

export default Examples;
