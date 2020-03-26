import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonProgressBar, IonItem, IonLabel, IonInput, IonLoading, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import shareValue from './models/share';
import { createUser } from '../services/EmployeeAPI';
import { RouteComponentProps } from 'react-router';

let User_Name = "";
let firstname = "";
let lastname = "";
let Email = "";
let dbpasswd = "";
let IDNum = "-";
let Picture = "-";
let Gender = "-";
let Team="-";
let Tel="-";
let User_id=0;
const APIGarden: React.FC<RouteComponentProps> = (props) => {
    const [showLoading, setShowLoading] = useState(false);
let loginvia='2';
let User_Name = "1304551258888558";
let firstname = "foacebbok";
let lastname = "-";
let Email = "chaiyaaaa@tot.co.th";
let dbpasswd = "facebookregis";
let IDNum = "-";
let Gender = "male";
let Team="-";
let Tel="-";

let UpDb =async()=>{
    
    setShowLoading(true);
        console.log('เริ่มส่ง request บันทึกข้อมูลผูใช้ใหม่');
    let result= await createUser(User_Name,dbpasswd,firstname,lastname,IDNum,Email,Picture,Gender,Team,Tel)
    console.log('เริ่มส่ง '+result?.data.User_id);
 
    if(result?.data.success){
            //props.history.goBack();
            //shareValue.selfregis=User_Name

            
            User_id=result?.data.User_id
            console.log('เริ่มส่ง '+User_id);
            shareValue.selflogin=result?.data;
            shareValue.LoginFrom=1
            setShowLoading(false);
            //props.history.push('/Home')
        }else setShowLoading(false);
}



    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>กำลังเตรียมข้อมูล</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
           
            <IonLoading
          isOpen={showLoading}
          message={'กำลังเข้าสูระบบ'}
          mode="ios"
        />
    
        
           <IonItem>
  <IonLabel color="success" position="floating">กำลังเตรียมข้อมูล</IonLabel>
  <IonInput placeholder="loginvia" value={loginvia}> </IonInput>
    </IonItem>
      {/*-- Other types --*/}
      <IonProgressBar value={0.25} buffer={0.5}></IonProgressBar><br />
      <IonProgressBar type="indeterminate"> </IonProgressBar><br />
      <IonProgressBar type="indeterminate" reversed={true}></IonProgressBar><br />
       <IonButton onClick={UpDb} className="ion-padding-horizontal" color="success" mode="ios" expand="block">
          LOGIN
        </IonButton> 
      
    </IonContent>
        </IonPage>
    );
};

export default APIGarden;

