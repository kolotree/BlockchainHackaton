/// <reference types="crypto-js" />
import * as CryptoJS from 'crypto-js';
import { Injectable } from "@angular/core";

@Injectable()
export class Encryption {
    public static encryptData(data: string, key: string): string {
        var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(data), key,
            {
                keySize: 128 / 8,
                iv: key,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
        return encrypted.toString();
    }

    public static decryptData(encryptedData: string, key: string): string {
        var decrypted = CryptoJS.AES.decrypt(encryptedData, key, {
            keySize: 128 / 8,
            iv: key,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return decrypted.toString(CryptoJS.enc.Utf8);
    }
}