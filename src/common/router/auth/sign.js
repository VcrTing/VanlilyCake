import auth from '../../../screen/auth/auth'
import Login from '../../../screen/auth/login/Login'

export default (head = '') => {
    return [
        {
            path: '/login',
            component: Login,
        }
    ]
}