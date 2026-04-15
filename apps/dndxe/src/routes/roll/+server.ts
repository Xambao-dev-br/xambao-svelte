import { RandomOrgClient } from "@randomorg/core";
import { json } from "@sveltejs/kit";
import type { RequestEvent } from "./$types";

const random = new RandomOrgClient('0f2230c7-024d-4dcf-a8f0-7cb71087ba20');

export async function GET({ url }:RequestEvent) {
    const quant = Number(url.searchParams.get('quant'));
    const tipo = Number(url.searchParams.get('tipo'));
    const num = await random.generateIntegers(quant, 1, tipo) as number[];
    const sum = num.reduce((a, b) => a + b, 0);
    return json({ resultado: sum });
}