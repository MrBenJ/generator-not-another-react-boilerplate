import * as type from './actionTypes';

export function increment() {
    return { type: type.COUNTER_INCREMENT };
}

export function decrement() {
    return { type: type.COUNTER_DECREMENT };
}

export function reset() {
    return { type: type.COUNTER_RESET };
}
