export interface User {
    id: number,
    userInfos: userInfos,
    score: number,
    keyData: keyData
}

type userInfos = {
    firstName: string,
    lastName: string,
    age: number
}

type keyData = {
    calorieCount: number,
    proteinCount: number,
    carbohydrateCount: number,
    lipidCount: number
}