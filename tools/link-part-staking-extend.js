import { ApiPromise, WsProvider } from '@polkadot/api';
import { Keyring } from '@polkadot/api';
import {k_balance} from './currency/k_balance.js';
import {k_system} from "./system/k_system.js";
import BN from 'bn.js';
import {Bytes} from "@polkadot/types";
// import { EventRecord } from '@polkadot/types/interfaces';



const keyring = new Keyring({ type: 'sr25519' });
keyring.setSS58Format(34);
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

const acc_stash_5_keyring = keyring.addFromUri(`${PHRASE}//5//stash`);
const acc_stash_5 = acc_stash_5_keyring.address;
const acc_controll_5_keyring = keyring.addFromUri(`${PHRASE}//5//controller`);
const acc_controll_5 = acc_controll_5_keyring.address;

const stash_list = [
    acc_stash_1,
    acc_stash_2,
    acc_stash_3,
    acc_stash_4,
    ]

const stash_list_keyrigin = [
    acc_stash_1_keyring,
    acc_stash_2_keyring,
    acc_stash_3_keyring,
    acc_stash_4_keyring,
]

const controll_list = [
    acc_controll_1,
    acc_controll_2,
    acc_controll_3,
    acc_controll_4,
]

const controll_list_keyring = [
    acc_controll_1_keyring,
    acc_controll_2_keyring,
    acc_controll_3_keyring,
    acc_controll_4_keyring,
]



// Get Chain Decimalse from node
const decimals = api.registry.chainDecimals;
const balance_amount = BigInt(5000000 * (10 ** decimals))

// const transfer1 = api.tx.balances.transfer(acc_controll_5, balance_amount);
// transferBalance(transfer1, stash_list_keyrigin)

const transfer2 = api.tx.balances.transfer(acc_stash_5, balance_amount);
transferBalance(transfer2, stash_list_keyrigin)

async function transferBalance(transfer, signer_list) {
    for (const x of signer_list) {
        // Sign and Send the transaction
        await transfer.signAndSend(x, ({events = [], status}) => {
            if (status.isInBlock) {
                console.log('Successful transfer of ' + balance_amount + ' with hash ' + status.asInBlock.toHex());
            } else {
                console.log('Status of transfer: ' + status.type);
            }
            events.forEach(({phase, event: {data, method, section}}) => {
                console.log(phase.toString() + ' : ' + section + '.' + method + ' ' + data.toString());
            });
        });
    }
}

// const aaa = await k_balance.listenBalance(stash_list, (balance_list)=>{
//     for(const x in balance_list) {
//         console.log(`${x} = free balance is ${balance_list[x].free} with  ${balance_list[x].reserved} reserved`);
//     }
//     console.log('-------------')
// })
