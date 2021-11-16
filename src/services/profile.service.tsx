import http from "../http-common"
import { User, Activity, AverageSessions, Performances } from '../utils/Interfaces'

class ProfileService {
    getUser(id: number) {
        return http.get<User>(`/${id}`)
    }
    getActivity(id:number) {
        return http.get<Activity>(`/${id}/activity`)
    }
    getSessions(id:number) {
        return http.get<AverageSessions>(`/${id}/average-sessions`)
    }

    getPerformance(id:number) {
        return http.get<Performances>(`/${id}/performance`)
    }
}

export default new ProfileService