import { KeyData } from "../../../utils/Interfaces";
import ProfileService from "../../../services/profile.service";
import { useState, useEffect } from "react"
import styled from 'styled-components'
import KeyDataBlock from "../KeyDataBlock";
import {
    Apple,
    Chicken,
    Fire, 
    Cheeseburger
} from '../../../assets/img/index'

const DataContainer = styled.div`
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;
`
const DummyDiv = styled.div`
    display: flex;
    flex-flow: column nowrap;
    min-height: 100%;
    justify-content: space-between;
    align-items: stretch;
`

export default function KeyDataContainer() {
    const [ keyData, setKeyData ] = useState<KeyData>()

    useEffect(() => {
        ProfileService.getUser(18)
        .then((response:any) => {
            setKeyData(response.data.data.keyData)
        })
        }, []) 

    return(
        <DataContainer>
            { keyData && (
                <DummyDiv>
                    <KeyDataBlock type="Calories" amount={keyData.calorieCount} icon={Fire} alt="fire" unit="kCal" color="#FF0000"/>
                    <KeyDataBlock type="Proteines" amount={keyData.proteinCount} icon={Chicken} alt="chicken" unit="g" color="#41B8FF"/>
                    <KeyDataBlock type="Glucides" amount={keyData.carbohydrateCount} icon={Apple} alt="apple" unit="g" color="#F9CE23"/>
                    <KeyDataBlock type="Lipides" amount={keyData.lipidCount} icon={Cheeseburger} alt="burger" unit="g" color="#FD5181"/>
                </DummyDiv>
            
            )}
        </DataContainer>
    )
} 