import http from "../http-common"
import { User } from '../utils/Interfaces'

class ProfileService {
    getUser(id: string) {
        return http.get<Array<User>>(`/${id}`)
    }
}

export default ProfileService