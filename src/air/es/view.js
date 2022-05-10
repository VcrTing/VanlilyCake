
import timed from './timed/ser_timed'
import float from './num/float'

const first_Max = function(rec) {
    return rec.slice(0, 1).toUpperCase() + rec.slice(1)
}

export default {
    timed,
    ser_timed: timed.ser_timed,
    float,

    //
    set_ss(k, v) {
        sessionStorage.setItem(k, JSON.stringify(v))
    },
    get_ss(k) {
        k = sessionStorage.getItem(k)
        return k ? JSON.parse(k) : null
    },

    // 
}