import _method from './_method'
import _auth from './_auth'

export default {
    get: _method.get,
    get_one: _method.get_one,
    
    put: _method.put,
    post: _method.post,

    _admin: _auth._admin,
    token: (vue) => vue.$store.state.token
}