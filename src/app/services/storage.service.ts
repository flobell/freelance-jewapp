import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable({
    providedIn: 'root'
})

export class StorageService {

    constructor(private storage: Storage) {}

    // // Store the value
    // store(storageKey: string, value: any) {
    //     const encryptedValue = btoa(escape(JSON.stringify(value)));
    //     let promise = this.storage.set(storageKey, encryptedValue);
    //     // promise.then(
    //     //     (success) => {console.log('AMACENAMIENTO EXITOSO', success)},
    //     //     (error) => {console.log('ALMACENAMIENTO FALLIDO', error)}
    //     // );
    //     return promise;
    // }

    // // Get the value
    // get(storageKey: string) {
    //     let promise = this.storage.get(storageKey);
        
    //     // promise.then(
    //     //     (success) => {console.log('GET EXITOSO', JSON.parse(unescape(atob(success))))},
    //     //     (error) => {console.log('GET FALLIDO', error)}
    //     // );
    //     return promise;
    // }

    // async removeStorageItem(storageKey: string) {
    // await Storage.remove({ key: storageKey });
    // }

    // // Clear storage
    // async clear() {
    // await Storage.clear();
    // }
}