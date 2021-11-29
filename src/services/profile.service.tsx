/**
 * Service used by components to make API calls
 * 
 * All functions work by taking a userId variable, (fixed in this version) and calling the appopriate API Endpoint
 * 
 * ## Get user
 * 
 * ```tsx
 * getUser(id: number) {
 *       return http.get<User>(`/${id}`)
 *   }
 * ```
 * 
 * ## Get Activity
 * 
 * ```tsx
 * getActivity(id: number) {
 *       return http.get<Activity>(`/${id}`)
 *   }
 * ```
 * 
 * ## Get sessions
 * 
 * ```tsx
 * getSessions(id: number) {
 *       return http.get<Sessions>(`/${id}`)
 *   }
 * ```
 * 
 * ## Get Performance
 * 
 * ```tsx
 * getPerformance(id: number) {
 *       return http.get<Performance>(`/${id}`)
 *   }
 * ```
 * 
 * @module ProfileService
 */

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

export default new ProfileService()