export class Converters {

    static uint8ArrayToHex(unit8Array: any): string {
        let hexArray = [];
        for (let i=0; i< unit8Array.length; i++) {
            let hex: string;
            let paddedHex: string;
            hex = unit8Array[i].toString(16);
            paddedHex = ('00' + hex).slice(-2);
            hexArray.push(paddedHex);
        }
        return hexArray.join('');
    }

}