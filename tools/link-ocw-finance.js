import { ApiPromise, WsProvider } from '@polkadot/api';
import { Keyring } from '@polkadot/api';
import {k_balance} from './currency/k_balance.js';
import {k_system} from "./system/k_system.js";
import {Bytes} from "@polkadot/types";
// import { EventRecord } from '@polkadot/types/interfaces';

const keyring = new Keyring({ type: 'sr25519' });
const wsProvider = new WsProvider('ws://127.0.0.1:9945');
const types = {
    // "EventRecord": {
    //     "phase": "Phase2",
    //     "event":"Event",
    //     "topics":"Vec<Bytes>"
    // },
    // "Phase": {"_enum": ['ApplyExtrinsic(u32)', 'Finalization', 'Initialization']  },
    "BalanceOf": "Balance",
    "FractionLength": "u32",
    "RequestInterval": "u8",
    "JsonNumberValue": {
        "integer": "u64",
        "fraction": "u64",
        "fraction_length": "u32",
        "exponent": "u32"
    },
    "PricePayloadSubPrice": "(Bytes, u64, FractionLength, JsonNumberValue)",
    "PricePayloadSubJumpBlock": "(Bytes, RequestInterval)",
    "PricePayload": {
        "block_number": "BlockNumber",
        "price": "Vec<PricePayloadSubPrice>",
        "jump_block": "Vec<PricePayloadSubJumpBlock>",
        "public": "AccountId"
    },
    "PurchasedRequestData": {
        "account_id": "AccountId",
        "offer": "BalanceOf",
        "create_bn": "BlockNumber",
        "submit_threshold": "u8",
        "max_duration": "u64",
        "request_keys": "Vec<Vec<u8>>"
    },
    "PurchasedPricePayload": {
        "block_number": "BlockNumber",
        "purchase_id": "Vec<u8>",
        "price": "Vec<PricePayloadSubPrice>",
        "public": "AccountId"
    },
    "PurchasedAvgPriceData": {
        "create_bn": "u64",
        "reached_type": "u8",
        "price_data": "(u64, FractionLength)"
    },
    "PurchasedDefaultData": {
        "submit_threshold": "u8",
        "max_duration": "u64",
        "avg_keep_duration": "u64",
        "unit_price": "u64"
    },
    "PurchasedForceCleanPayload": {
        "BlockNumber": "BlockNumber",
        "purchase_id_list": "Vec<Vec<u8>>",
        "public": "AccountId"
    },
    "OcwControlData": {
        "need_verifier_check": "bool",
        "open_free_price_reporter": "bool",
        "open_paid_price_reporter": "bool"
    },
    "AskPeriodNum": "u64",
    "PurchaseId": "Vec<u8>",
    "AskPointNum": "u32",
    "AresPriceData": {
        "price": "u64",
        "account_id": "AccountId",
        "create_bn": "BlockNumber",
        "fraction_len": "FractionLength",
        "raw_number": "JsonNumberValue"
    },
    "PaidValue": {
        "create_bn": "BlockNumber",
        "amount": "Balance",
        "is_income": "bool"
    }
}
const api = await ApiPromise.create({ provider: wsProvider, types});

// get balance
k_balance.options = {api: api}
k_system.options = {api: api}

// blur pioneer frown science banana impose avoid law act strategy have bronze//1//stash
// blur pioneer frown science banana impose avoid law act strategy have bronze//1//controller

const PHRASE = `blur pioneer frown science banana impose avoid law act strategy have bronze`

// Account
//1//STASH (EXTENSION)
const acc_stash_1 = '4SJT3cozQ7Uv31M8A1q5ysarUEtv58xcoA5GgWBnoZ3b7G5w'
const acc_stash_1_keyring = keyring.addFromUri(`${PHRASE}//1//stash`);
const acc_stash_2 = '4UHtW2qVT6A993ViBE7hwe4oXG4UX19bmEedw41rvatJjeWC'
const acc_stash_2_keyring = keyring.addFromUri(`${PHRASE}//2//stash`);
const acc_stash_3 = '4TfqZ8mc4FpbNF66Qh73dyisEPYYxoY5mn7NE18LqX2AqgLT'
const acc_stash_3_keyring = keyring.addFromUri(`${PHRASE}//3//stash`);
const acc_stash_4 = '4RTJuWG29fQKBU8rr3kAc27rTHyzNts6gsqVkJKrrkp18cfb'
const acc_stash_4_keyring = keyring.addFromUri(`${PHRASE}//4//stash`);
//1//CONTROLLER (EXTENSION)
const acc_controll_1 = '4TdZTCCQvTMkLGeMZTEekYzie8k9cfwbMw33qvoUWQsigAnU'
const acc_controll_1_keyring = keyring.addFromUri(`${PHRASE}//1//controller`);
const acc_controll_2 = '4SQMJeYoxRdnByRyhgw6LTE7rEiuCkbcAvG3AcCDzt84f9Qq'
const acc_controll_2_keyring = keyring.addFromUri(`${PHRASE}//2//controller`);
const acc_controll_3 = '4PruVEQYTLRakskTkYnnBHyfdC5KYtyvGbmDGrHWgznpZSSf'
const acc_controll_3_keyring = keyring.addFromUri(`${PHRASE}//3//controller`);
const acc_controll_4 = '4Rurz2Nck5dMXq47ezBoStwiLfELAGZ1buVsYY4RiYUUt5Zv'
const acc_controll_4_keyring = keyring.addFromUri(`${PHRASE}//4//controller`);

const address_list = [
    acc_stash_1,
    acc_stash_2,
    acc_stash_3,
    acc_stash_4,
    ]
// const unsub = await api.query.system.account(address, ({ nonce, data: balance }) => {
//     console.log(`free balance is ${balance.free} with ${balance.reserved} reserved and a nonce of ${nonce}`);
// });

// const aaa = await k_balance.listenBalance(address_list, (balance_list)=>{
//     for(const x in balance_list) {
//         console.log(`${x} = free balance is ${balance_list[x].free} with  ${balance_list[x].reserved} reserved`);
//     }
//     console.log('-------------')
// })

let filter_list = [];
filter_list.push({ section: 'ocwModule', method: 'PurchasedAvgPrice' })
// filter_list.push({ section: 'ocwModule', method: 'NewPurchasedPrice' })
filter_list.push({ section: 'ocwModule', method: 'NewPurchasedRequest' })
filter_list.push({ section: 'ocwFinance', method: 'PurchaseRewardSlashedAfterExpiration' })
filter_list.push({ section: 'balances', method: 'Transfer' })
filter_list.push({ section: 'treasury', method: 'Deposit' })

k_system.listenEvent(filter_list, (e)=>{
    console.log("Listen event.")
    console.log(e)
}, true)
