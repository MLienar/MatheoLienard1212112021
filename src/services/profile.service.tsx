import http from "../http-common"
import { User } from '../utils/Interfaces'

class ProfileService {
    getUser(id: number) {
        return http.get<User>(`/${id}`)
    }
}

export default new ProfileService