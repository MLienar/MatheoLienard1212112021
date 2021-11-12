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

export interface Activity {
    userId: number,
    sessions: Session[]
}

type Session = {
    day: string,
    kilogram: number,
    calories: number
}