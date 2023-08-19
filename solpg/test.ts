// No imports needed: web3, anchor, pg and more are globally available
import { getAssociatedTokenAddress } from "@solana/spl-token"

describe("Soda & Quicknode Test", () => {
 
  // Select program to interact
  const programId = pg.PROGRAM_ID;
  const program = pg.program;
  const TOKEN_METADATA_PROGRAM_ID = new anchor.web3.PublicKey(
    "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
  );
  // Generate random number to test
  const min = 1000;
  const max = 9999999;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  // Id to generate a specific seed to new mint account
  
  const nftMetadata = {
    id: randomNumber.toString(),
    name: "SODA",
    symbol: "ARG",
    uri: "https://quicknode.myfilebase.com/ipfs/QmTuFqE4zrjsTEXuBJjMCbmgBcnBHTonEgrBQciy2iMBVJ",
  }

  const [nftMintPda] = anchor.web3.PublicKey.findProgramAddressSync(
    [
      Buffer.from("mint"),
      Buffer.from(randomNumber.toString()),
    ],
    programId
  );

  const [nftMetadataPdaMPL] = anchor.web3.PublicKey.findProgramAddressSync(
    [
      Buffer.from("metadata"),
      TOKEN_METADATA_PROGRAM_ID.toBuffer(),
      nftMintPda.toBuffer(),
    ],
    TOKEN_METADATA_PROGRAM_ID
  );

  const [masterEditionAccountPda] = anchor.web3.PublicKey.findProgramAddressSync(
    [
      Buffer.from("metadata"),
      TOKEN_METADATA_PROGRAM_ID.toBuffer(),
      nftMintPda.toBuffer(),
      Buffer.from("edition"),
    ],
    TOKEN_METADATA_PROGRAM_ID
  );

  const [collectionAccountPda] = anchor.web3.PublicKey.findProgramAddressSync(
    [
      Buffer.from("collection"),
      nftMintPda.toBuffer(),
    ],
    programId
  );

  it("Create a single nft", async () => {
    const tokenAccount = await getAssociatedTokenAddress(
      nftMintPda,
      pg.wallet.publicKey
    );
    const tx = await program.methods.createNft(
      nftMetadata.id,
      nftMetadata.name,
      nftMetadata.symbol,
      nftMetadata.uri,
    )
      .accounts({
        mint: nftMintPda,
        tokenAccount: tokenAccount,
        metadataProgram: TOKEN_METADATA_PROGRAM_ID,
        masterEditionAccount: masterEditionAccountPda,
        payer: pg.wallet.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
        rent: anchor.web3.SYSVAR_RENT_PUBKEY,
        nftMetadata: nftMetadataPdaMPL,
      })
      .rpc()
      .catch(err => console.log(err));
    console.log("tx", tx);
  });


});
