import { IonContent, IonText, IonRow, IonItem, IonThumbnail, IonLabel, IonCol, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonImg, IonList } from '@ionic/react';
import React, { Component, useState } from 'react';
import './Login.css';
import { Plugins } from '@capacitor/core';
import { RouteComponentProps } from 'react-router';
import shareValue from './models/share';

const INITIAL_STATE = {
  user: {}
};
const Home: React.FC<RouteComponentProps> = (props) => {
let facebooktoken=shareValue.FacebookToken;
let name=shareValue.facebook.name;
let picture=shareValue.facebook.picture.data.url;
let email=shareValue.facebook.email;
let loginfrom=shareValue.LoginFrom;

const [FbDetail, setFbDetail] = useState([])
//   async getUserInfo() {
    let getUserInfo = async()=>{
//   //  const response = await fetch(`https://graph.facebook.com/${this.props.location.state.userId}?fields=id,name,gender,link,picture&type=large&access_token=${this.props.location.state.token}`);
   const response = await fetch(`https://graph.facebook.com/${shareValue.FacebookToken.userId}?fields=id,name,gender,link,picture&type=large&access_token=${shareValue.FacebookToken.token}`);
  
   let myJson = await response.json();
     setFbDetail(myJson.name)
     

   }
//   async signOut(): Promise<void> {
    let signOut = async()=>{
//     const { history } = this.props;
     await Plugins.FacebookLogin.logout();
     props.history.goBack();
   }

   let itemList=FbDetail.map((contact:any,index)=>{
    //console.log(contact);
    return(
      <IonItem>
  <IonLabel></IonLabel>
    </IonItem>
    )
  });
 
  
    return (
              <IonPage>
                <IonHeader>
                  <IonToolbar color="primary">
                    <IonTitle>Logged in ... </IonTitle>
                  </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                <IonList>

       </IonList>   
                  <IonRow>
                    <IonCol className="text-center">
                      <IonText className="title">
                        You are logged in1 !
                      </IonText>
                    </IonCol>
                  </IonRow>
                {facebooktoken.userId}
                  <br/>
                  {name}
                  <br/>
                  {picture}
                  <br/>
                  {email}
                  <br/>
                 
                  {loginfrom}
                  <br/>

                  
                  {facebooktoken.token}
                  {/* {this.state.user.name &&
                    <IonItem>
                      <IonThumbnail slot="start">
                        <img src={this.state.user.picture.data.url} />
                      </IonThumbnail>
                      <IonLabel>
                        <h3>{this.state.user.first_name}</h3>
                      </IonLabel>
                    </IonItem>
                   
                  } */}
                  <IonButton className="login-button" onClick={signOut} expand="full" fill="solid" color="danger">
                    Logout from Facebook
                </IonButton>
                </IonContent>
              </IonPage>
            );
};

export default Home;

// class Home extends Component {
//  //facebooktoken=shareValue.FacebookToken;
//   state: any = {};
//   props: any = {};
//   constructor(props: any) {
//     super(props);
//     this.state = { ...INITIAL_STATE };
//   }
//   componentDidMount() {
//     this.getUserInfo();
//   }
//   async getUserInfo() {
//   //  const response = await fetch(`https://graph.facebook.com/${this.props.location.state.userId}?fields=id,name,gender,link,picture&type=large&access_token=${this.props.location.state.token}`);
//   const response = await fetch(`https://graph.facebook.com/${shareValue.FacebookToken.userId}?fields=id,name,gender,link,picture&type=large&access_token=${shareValue.FacebookToken.token}`);
  
//   const myJson = await response.json();
//     this.setState({
//       user: myJson
//     })
//   }
//   async signOut(): Promise<void> {
//     const { history } = this.props;
//     await Plugins.FacebookLogin.logout();
//     history.goBack();
//   }

//   render() {
//     return (
//       <IonPage>
//         <IonHeader>
//           <IonToolbar color="primary">
//             <IonTitle>Logged in ... </IonTitle>
//           </IonToolbar>
//         </IonHeader>
//         <IonContent className="ion-padding">

//           <IonRow>
//             <IonCol className="text-center">
//               <IonText className="title">
//                 You are logged in !
//               </IonText>
//             </IonCol>
//           </IonRow>
//           shareValue.FacebookToken
//           {this.state.user.name &&
//             <IonItem>
//               <IonThumbnail slot="start">
//                 <img src={this.state.user.picture.data.url} />
//               </IonThumbnail>
//               <IonLabel>
//                 <h3>{this.state.user.name}</h3>
//                 <h3>{this.state.user.id}</h3>
//                 <h3>{this.state.user.first_name}</h3>
//                 <h3>{this.state.user.gender}</h3>
//                 <h3>{this.state.user.middle_name}</h3>
//                 <h3>{this.state.user.name_format}</h3>
              
//               </IonLabel>
//             </IonItem>
           
//           }

//           {/* {this.state.user.name &&
//             <IonItem>
//               <IonThumbnail slot="start">
//                 <img src={this.state.user.picture.data.url} />
//               </IonThumbnail>
//               <IonLabel>
//                 <h3>{this.state.user.first_name}</h3>
//               </IonLabel>
//             </IonItem>
           
//           } */}
//           <IonButton className="login-button" onClick={() => this.signOut()} expand="full" fill="solid" color="danger">
//             Logout from Facebook
//         </IonButton>
//         </IonContent>
//       </IonPage>
//     )
//   }
// }

//  export default Home;