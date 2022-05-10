
import val from './_val'

// TRUE 为认证通过

const vid_named = function(src) {
    console.log('SRC =', src)
    let res = true
    src = val.empty(src)
    if (!src) { res = false }

    return res
}

export default {
    vid_named
}