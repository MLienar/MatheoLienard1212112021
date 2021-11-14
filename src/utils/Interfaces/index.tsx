export interface User {
    id: number,
    userInfos: userInfos,
    score: number,
    keyData: KeyData
}

type userInfos = {
    firstName: string,
    lastName: string,
    age: number
}

export interface KeyData {
    calorieCount: number,
    proteinCount: number,
    carbohydrateCount: number,
    lipidCount: number
}

type Session = {
    day: string,
    kilogram: number,
    calories: number
}

export interface Activity {
    sessions: Session[]
}

export interface UserActivity {
    userId: number,
    sessions: Session[]
}
