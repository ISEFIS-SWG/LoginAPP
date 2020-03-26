import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonItem, IonLabel, IonInput, IonFooter } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import {close} from "ionicons/icons"
import { createEmployee } from '../services/EmployeeAPI';

const NewContactPage: React.FC<RouteComponentProps> = (props) => {
    let firstname = "";
    let lastname = "";
    let email = "";
    let onFirstNameChange = (e:any)=>{
        console.log('ชื่อ '+e.target.value)
        firstname=e.target.value;
    }
    let onLastNameChange = (e:any)=>{
        console.log('นามสกุล '+e.target.value)
        lastname=e.target.value;
    }
    let onEmailChange = (e:any)=>{
        console.log('Email '+e.target.value)
        email=e.target.value;
    }
    let onSave =async()=>{
            console.log('เริ่มส่ง request บันทึกพนักงานใหม่');
            let result= await createEmployee(firstname,lastname,email)
            if(result?.data.success){
                props.history.goBack();
            }
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonTitle>NEW Contact</IonTitle>
            <IonButtons slot='end'>
                <IonButton onClick={()=>{props.history.goBack()}}>
                <IonIcon icon={close} slot='icon-only'></IonIcon></IonButton>
            </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent >
            <IonItem>
        <IonLabel position="floating">ชื่อ</IonLabel>
        <IonInput onIonChange={onFirstNameChange}></IonInput>
    </IonItem>
    <IonItem>
        <IonLabel position="stacked">นามสกุล</IonLabel>
        <IonInput onIonChange={onLastNameChange}></IonInput>
    </IonItem>
    <IonItem>
        <IonLabel position="stacked">Email</IonLabel>
        <IonInput onIonChange={onEmailChange} type="email" ></IonInput>
    </IonItem>

            </IonContent>
            <IonFooter className="ion-padding">
            <IonButton expand="block" onClick={onSave}>บันทึก</IonButton>
            </IonFooter>
        </IonPage>
        // user experience (UX)
    );
};

export default NewContactPage;