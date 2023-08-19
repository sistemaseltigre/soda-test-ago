import { web3 } from "@project-serum/anchor";

export const createNft = (program, id, name, symbol, uri, authority, payer, mint, tokenAccount, associatedTokenProgram, rent, systemProgram, tokenProgram, metadataProgram, masterEditionAccount, nftMetadata,) => {
  if (program) {
    (async () => {
      try {
        const tx = await program.methods
          .createNft( id, name, symbol, uri,)
          .accounts({
            authority,
            payer,
            mint,
            tokenAccount,
            associatedTokenProgram,
            rent,
            systemProgram,
            tokenProgram,
            metadataProgram,
            masterEditionAccount,
            nftMetadata,
          })
          .rpc();
      } catch (error) { console.log(error) }
    })();
  }
};

