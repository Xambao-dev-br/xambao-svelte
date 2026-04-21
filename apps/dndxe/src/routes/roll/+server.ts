import { RandomOrgClient } from "@randomorg/core";
import { json } from "@sveltejs/kit";
import type { RequestEvent } from "./$types";
import {RANDOM_ORG_KEY} from '$env/static/private'
const random = new RandomOrgClient(RANDOM_ORG_KEY);

export async function GET({ url }:RequestEvent) {
    const quant = Number(url.searchParams.get('quant'));
    const tipo = Number(url.searchParams.get('tipo'));
    const num = await random.generateIntegers(quant, 1, tipo) as number[];
    const sum = num.reduce((a, b) => a + b, 0);
    return json({ resultado: sum });
}