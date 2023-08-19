import { FC, useEffect, useState } from "react";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import type { NextPage } from "next";
import Head from "next/head";
import { useProgram } from "../utils/useProgram";
import { useRouter } from "next/router"

import {
  createNft
} from '../utils/callInstructions'


const Home: NextPage = (props) => {
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
    </>
  );
};

export default Home;
