import http from "../http-common"
import { User, Activity } from '../utils/Interfaces'

class ProfileService {
    getUser(id: number) {
        return http.get<User>(`/${id}`)
    }
    getActivity(id:number) {
        return http.get<Activity>(`/${id}/activity`)
    }
}

export default new ProfileService