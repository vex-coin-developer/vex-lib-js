import * as cryptoBrowserify from "../node_modules/crypto-browserify/index";
import * as cryptoNpm from "crypto";
import {Converters} from "./converters";
import isBrowser from '../node_modules/is-in-browser/dist/index';

export default class VexLib {

    static testFunction() {
        return 'hello vex world';
    }

    static generateSeed() {
        let randomBytes;
        if (isBrowser) {
            randomBytes = cryptoBrowserify.randomBytes(50);
        } else {
            randomBytes = cryptoNpm.randomBytes(50);
        }
        return Converters.uint8ArrayToHex(randomBytes).toUpperCase();
    }

}