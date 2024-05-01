import { ButtonShow } from './buttonShow'
import { IconEdu, IconPers, IconExp } from '../../assets/icons'
import { Inputs } from './Inputs'
import { useState } from 'react'
import { PersonalInfo } from './PersonalInfo'
import { Education } from './Education'

export function MainForm() {
    return(
        <>
        <ButtonShow name="PERSONAL INFO" icon={<IconPers/>} form={<PersonalInfo/>} />
        <ButtonShow name="EDUCATION" icon={<IconEdu/>} form={<Education/>} />
        <ButtonShow name="EXPERIENCE" icon={<IconExp/>}/>
        </>
    )

}