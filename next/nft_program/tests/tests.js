import * as anchor from "@project-serum/anchor";
import { expect } from 'chai';

// Configure the client to use the local cluster.
const provider = anchor.AnchorProvider.env();
anchor.setProvider(provider);
const program = anchor.workspace.Nft_program;

describe('tests', async () => {

  it('createNft', async () => {

    // args
    const id = ""; //string
    const name = ""; //string
    const symbol = ""; //string
    const uri = ""; //string

    // accounts
    const authorityAccount = null;
    const payerAccount = null;
    const mintAccount = null;
    const tokenAccountAccount = null;
    const associatedTokenProgramAccount = null;
    const rentAccount = null;
        const tokenProgramAccount = null;
    const metadataProgramAccount = null;
    const masterEditionAccountAccount = null;
    const nftMetadataAccount = null;

    const tx = await program.methods
      .createNft(id,name,symbol,uri,)
      .accounts({
          authority: authorityAccount,
          payer: payerAccount,
          mint: mintAccount,
          tokenAccount: tokenAccountAccount,
          associatedTokenProgram: associatedTokenProgramAccount,
          rent: rentAccount,
          systemProgram: anchor.web3.SystemProgram.programId,
          tokenProgram: tokenProgramAccount,
          metadataProgram: metadataProgramAccount,
          masterEditionAccount: masterEditionAccountAccount,
          nftMetadata: nftMetadataAccount,
      })
      .rpc();

    expect(tx).to.have.lengthOf.greaterThan(0);
  });

});
