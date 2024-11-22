import { struct, u64, bool, GetStructureSchema } from "@raydium-io/raydium-sdk";

export type BONDINGCURVECUSTOMLAYOUT = typeof BONDING_CURV;
export type BONDINGCURVECUSTOM = GetStructureSchema<BONDINGCURVECUSTOMLAYOUT>

export const BONDING_CURV = struct([
    u64('virtualTokenReserves'),
    u64('virtualSolReserves'),
    u64('realTokenReserves'),
    u64('realSolReserves'),
    u64('tokenTotalSupply'),
    bool('complete')
])

