import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButtons, IonButton, IonIcon, useIonViewDidEnter, IonInput } from '@ionic/react';
import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import{ add,barcode,locate, share} from "ionicons/icons";
import shareValue from "./models/share";
import { getEmployees } from '../services/EmployeeAPI';
const Home: React.FC<RouteComponentProps> = (props) => {
  let loginvia;
  let username;
  let IDNum;
  let Token;

  if(shareValue.LoginFrom===1) {
     loginvia='Direct Register'
     username=shareValue.selflogin.email
     IDNum=shareValue.selflogin.User_id
  }
  if(shareValue.LoginFrom===2) {
     loginvia='Facebook'
     username=shareValue.User_id.insertId
     IDNum=shareValue.facebook.id
     Token=shareValue.FacebookToken;
     
  }
  if(shareValue.LoginFrom===3)  loginvia='Google'
  
  
  //let test=5;
//let value=shareValue;
//console.log(itemList);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
  <IonTitle>Welcome Page</IonTitle>

        </IonToolbar>
      </IonHeader>
      <IonContent >
      <IonItem>
  <IonLabel color="success" position="floating">Login From</IonLabel>
  <IonInput placeholder="loginvia" value={loginvia}> </IonInput>
    </IonItem>
    <IonItem>
  <IonLabel color="success" position="floating">Your UserAccount(Email)</IonLabel>
  <IonInput placeholder="UserAccount" value={username}> </IonInput>
    </IonItem>
    <IonItem>
  <IonLabel color="success" position="floating">Your ID Number</IonLabel>
  <IonInput placeholder="User_id" value={IDNum}> </IonInput>
  <IonInput placeholder="Token" value={Token}> </IonInput>
    </IonItem>  
      </IonContent>

    </IonPage>
  );
};

export default Home;
