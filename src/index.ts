import * as cryptoBrowserify from "../node_modules/crypto-browserify/index";
import * as cryptoNpm from "crypto";
import {Converters} from "./converters";
import isBrowser from '../node_modules/is-in-browser/dist/index';
import * as elliptic from '../node_modules/elliptic/lib/elliptic';

export default class VexLib {

    static generateSeed() {
        let randomBytes;
        if (isBrowser) {
            randomBytes = cryptoBrowserify.randomBytes(32);
        } else {
            randomBytes = cryptoNpm.randomBytes(32);
        }
        return Converters.uint8ArrayToHex(randomBytes).toUpperCase();
    }

    static getPrivateKey(seed: string, walletSlotIndex: number) {
        let createHash = require('create-hash');
        let hash = createHash('sha256');
        hash.update(seed + walletSlotIndex.toString());
        let hashPrivateKey = hash.digest('hex');
        let EC = elliptic.ec;
        let ec = new EC('ed25519');
        let keyPair = ec.keyFromPrivate(hashPrivateKey);
        return keyPair.getPrivate("hex").toUpperCase();
    }

    static getPublicKey(seed: string, walletSlotIndex: number) {
        let createHash = require('create-hash');
        let hash = createHash('sha256');
        hash.update(seed + walletSlotIndex.toString());
        let hashPrivateKey = hash.digest('hex');
        let EC = elliptic.ec;
        let ec = new EC('ed25519');
        let keyPair = ec.keyFromPrivate(hashPrivateKey);
        return keyPair.getPublic("hex").toUpperCase();
    }

    static getAddress(seed: string, walletSlotIndex: number) {
        let createHash = require('create-hash');
        let hash = createHash('sha256');
        hash.update(seed + walletSlotIndex.toString());
        let hashPrivateKey = hash.digest('hex');
        let EC = elliptic.ec;
        let ec = new EC('ed25519');
        let keyPair = ec.keyFromPrivate(hashPrivateKey);
        return "VEX_" + keyPair.getPublic().encodeCompressed("hex").toUpperCase();
    }


    static getWalletSlot(seed: string, walletSlotIndex: number) {
        return {
            privateKey: this.getPrivateKey(seed, walletSlotIndex),
            publicKey: this.getPublicKey(seed, walletSlotIndex),
            address: this.getAddress(seed, walletSlotIndex)
        }
    }

}