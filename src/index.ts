import * as cryptoBrowserify from "../node_modules/crypto-browserify/index";
import {Converters} from "./converters"

export default class VexLib {

    static testFunction() {
        return 'hello vex world';
    }

    static generateSeed() {
        let randomBytes = cryptoBrowserify.randomBytes(50);
        return Converters.uint8ArrayToHex(randomBytes).toUpperCase();
    }

}