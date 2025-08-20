use anchor_lang::prelude::*;

declare_id!("AbNFkgmcKiKTeyFoGAMagHxWo3ZMTuc2KnoQkUmJqh1V");

#[program]
pub mod send_usd {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
