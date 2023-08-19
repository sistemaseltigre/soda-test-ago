use anchor_lang::prelude::*;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod nft_program {
    use super::*;

    // Instructions
    pub fn create_nft(
        ctx: Context<CreateNft>,
        id: String,
        name: String,
        symbol: String,
        uri: String,
    ) -> Result<()> {
        // Your code here

        Ok(())
    }

}

// Context
#[derive(Accounts)]
pub struct CreateNft<'info> {
    #[account(mut)]
    pub authority: AccountInfo<'info>,
    #[account(mut)]
    pub payer: AccountInfo<'info>,
    #[account(mut)]
    pub mint: AccountInfo<'info>,
    #[account(mut)]
    pub token_account: AccountInfo<'info>,
    #[account(mut)]
    pub associated_token_program: AccountInfo<'info>,
    #[account(mut)]
    pub rent: AccountInfo<'info>,
    #[account(mut)]
    pub system_program: AccountInfo<'info>,
    #[account(mut)]
    pub token_program: AccountInfo<'info>,
    #[account(mut)]
    pub metadata_program: AccountInfo<'info>,
    #[account(mut)]
    pub master_edition_account: AccountInfo<'info>,
    #[account(mut)]
    pub nft_metadata: AccountInfo<'info>,
}

// Accounts
// Types
// Events
// Errors
#[error_code]
pub enum ErrorCode {
}
