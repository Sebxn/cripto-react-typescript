import { z } from "zod";


export const CurrencySchema = z.object({
    code: z.string(),
    name: z.string(),
})

export const CryptoCurrencyResponseSchema = z.object({
    CoinInfo: z.object({
        Name: z.string(),
        FullName: z.string(),
        // ImageUrl: z.string().optional(),
    }),
})

export const CryptoCurrenciesResponseSchema = z.array(CryptoCurrencyResponseSchema)