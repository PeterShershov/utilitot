// import { noop } from '@utilitot/mocks';

export class EventEmitter<T> {
    private listeners: Array<(value: T) => void> = [];

    public subscribe(callback: (value: T) => void) {
        this.listeners.push(callback);
    }

    public unsubscribe(callback: (value: T) => void) {
        const callbackIndex = this.listeners.indexOf(callback);
        this.listeners.splice(callbackIndex);
    }

    public emit(value: T) {
        for (const callback of this.listeners) {
            callback(value);
        }
    }
}
