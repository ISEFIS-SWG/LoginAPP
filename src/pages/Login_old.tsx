import { IonContent, IonText, IonRow, IonCol, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonImg, IonList, IonGrid, IonInput, IonItem, IonLabel, IonButtons, IonLoading, IonCard, IonToast } from '@ionic/react';
import React, { Component, useState, FormEvent } from 'react';
import './Login.css';
import { Plugins } from '@capacitor/core';
import { FacebookLoginButton,GoogleLoginButton } from "react-social-login-buttons";
import { RouteComponentProps } from 'react-router';
import shareValue from './models/share';


const INITIAL_STATE = {
};


const Login: React.FC<RouteComponentProps> = (props:any) => {
  const [nis, setNis] = useState();
  const [password, setPassword] = useState();
  const [showLoading, setShowLoading] = useState(false);
  const [isPopUp, setIsPopUp] = useState(false);
  const [pesanLogin, setPesanLogin] = useState("");

  const nisCheck = (nis: FormEvent<HTMLIonInputElement>) => {

    setNis(nis.currentTarget.value);
  }

  const passwordCheck = (password: FormEvent<HTMLIonInputElement>) => {

    setPassword(password.currentTarget.value);
  }
  let state= { ...INITIAL_STATE }
  //  constructor(props: any) {
  //    super(props);
  //    this.state = { ...INITIAL_STATE };
  //  }
  // async getCurrentState(): Promise<boolean> {
    let getCurrentState =async()=>{ 
    const result = await Plugins.FacebookLogin.getCurrentAccessToken();
    try {
      return result && result.accessToken;
    } catch (e) {
      return false;
    }
  }
  
  const [contactArray, setContactArray] = useState([])
  const [UserArray, setUserArray] = useState([])
  const loginCheck = () => {

    setShowLoading(true);

    //login code here

    setTimeout(() => {

      if(nis && password) {

        console.log("nis : ", nis);
        console.log("password : ", password);
        console.log('proses login');
      }

      else {

        console.log("กรุณากรอกในช่อง");
        setPesanLogin("ฟิลด์ต้องไม่ว่างเปล่า");
        setIsPopUp(true);
      }

      setShowLoading(false);

    }, 2000);
  }
  // let itemList=contactArray.map((contact:any,index)=>{
  //   //console.log(contact);
  //   return(
  //     <IonItem onClick={()=>{
  //       shareValue.selected=contact;
  //       console.log(contact);
  //      // props.history.push('/detail')
  //     }}>
  // <IonLabel>{index+1} {contact.token}</IonLabel>
  // <IonLabel>{index+1} {contact.userId}</IonLabel>
  //   </IonItem>
  //   )
  // });

  
  let ToRegisPage = async()=>{
    props.history.push('/Register')
  }

  // async signIn(): Promise<void> {
    let signIn = async()=>{

    const FACEBOOK_PERMISSIONS = ['public_profile', 'email'];
    const result = await Plugins.FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS });
    if (result && result.accessToken) {
      shareValue.FacebookToken=result.accessToken;
     // shareValue.Facebook=result;
      //setContactArray(result.accessToken.token);

      //setUserArray(result.accessToken.userId);
     // props.history.push('/facebookRegis')
      props.history.push({
        pathname: '/facebookRegis',
        state: { token: result.accessToken.token, userId: result.accessToken.userId }
      });
    } else props.history.goBack();
  }

  return (
          <IonPage>
            <IonHeader>
            <IonToolbar color="primary" mode="ios">
          <IonTitle>SMART RUN Login</IonTitle>
        </IonToolbar>
            </IonHeader >
            <IonContent class="background">

            <IonLoading
          isOpen={showLoading}
          message={'กำลังดำเนินการ'}
          mode="ios"
        />

        <br/>
      
        <IonCard mode="ios" className="ion-padding-horizontal">
          <IonInput onInput={nisCheck} id="nisInput" value={nis} type="email" placeholder="ระบุ email address" />
        </IonCard>

        <IonCard mode="ios" className="ion-padding-horizontal">
          <IonInput onInput={passwordCheck} id="passwordInput" value={password} type="password" placeholder=" รหัสผ่าน" />
        </IonCard>

        <IonButton onClick={loginCheck} className="ion-padding-horizontal" color="success" mode="ios" expand="block">
          LOGIN
        </IonButton>

        <IonToast
          isOpen={isPopUp}
          onDidDismiss={() => setIsPopUp(false)}
          message={pesanLogin}
          showCloseButton={true}
          color="dark"
          mode="ios"
        />


              <FacebookLoginButton onClick={signIn}>
      <span>Login With Facebook </span>
    </FacebookLoginButton>
    <GoogleLoginButton onClick={() => alert("Hello")} />
              {/* <IonButton className="login-button" onClick={() => this.signIn()} expand="full" fill="solid" color="primary">
                Login with Facebook
              </IonButton> */}
            <IonRow>
            <IonCol>
            <IonButton onClick={ToRegisPage} expand="block" fill="outline" color="undefined" class="btn-color"><strong>ผู้ใช้ใหม่? ลงทะเบียน</strong></IonButton>
            </IonCol>
            </IonRow>
            <IonRow>
            <IonCol>
            <IonButton expand="block" fill="outline" color="undefined" class="btn-color"><strong>ลืมรหัสผ่าน</strong></IonButton>
            </IonCol>
            </IonRow>  
            </IonContent>
            <IonContent className="ion-padding" >
            </IonContent>
          </IonPage>
        );
};

export default Login;


// class Login extends Component {
//   state: any = {};
//   props: any = {};
//   constructor(props: any) {
//     super(props);
//     this.state = { ...INITIAL_STATE };
//   }

//   async getCurrentState(): Promise<boolean> {
//     const result = await Plugins.FacebookLogin.getCurrentAccessToken();
//     try {
//       return result && result.accessToken;
//     } catch (e) {
//       return false;
//     }
//   }

//   async signIn(): Promise<void> {
//     const { history } = this.props;
//     const FACEBOOK_PERMISSIONS = ['public_profile', 'email'];
//     const result = await Plugins.FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS });
//     if (result && result.accessToken) {
//       history.push({
//         pathname: '/home',
//         state: { token: result.accessToken.token, userId: result.accessToken.userId }
//       });
//     } else history.goBack();
//   }

//   render() {
//     return (
//       <IonPage>
//         <IonHeader>
//           <IonToolbar color="primary">
//             <IonTitle >EasyRun Login</IonTitle>
//           </IonToolbar>
//         </IonHeader >
//         <IonContent class="background">
//           <form className="box">
//             <IonGrid>
//               <IonRow>
//                 <IonCol>
                
//                 <IonImg className="title-img" src="assets/running_Silouette_of_man_animation.gif" ></IonImg>
             
//              </IonCol>
//              <IonCol>
//                 <IonImg className="title-img" src="assets/Animated_moving_running-woman.gif" ></IonImg>
             
//              </IonCol>
//               </IonRow>
//             </IonGrid>
//             <h1>Login</h1>
//             <input type="text" name="" placeholder="Username"></input>
//             <input type="password" name="" placeholder="password"></input>
//             <input type="submit" name="" value="Login"></input>

//           </form>
       
//           {/* <IonInput type="text" name=""placeholder="Username"></IonInput>

//                         <IonRow>
//                             <IonCol>
//                                 <IonText ><h6 no-margin text-end className="small black">Forgot Password?</h6></IonText>
//                             </IonCol>
//                         </IonRow>
                    
//                     <IonRow>
//                         <IonCol>
//                             <IonButton  type="submit" expand="block" color="undefined" class="btn-transition"><strong className="white">Sign In</strong></IonButton>
//                         </IonCol>
//                     </IonRow>
                   
//                         <IonRow>
//                             <IonCol>
//                                 <IonButton expand="block" fill="outline" color="undefined" class="btn-color"><strong>New? Create an Account</strong></IonButton>
//                             </IonCol>
//                         </IonRow>
                   
//                         <IonRow>
//                             <IonCol>
//                                 <IonButton expand="block" fill="outline" color="undefined" class="btn-color"><strong>Skip >>></strong></IonButton>
//                             </IonCol>
//                         </IonRow> */}
                
//         </IonContent>
//         <IonContent className="ion-padding" >
       
    
        

//           {/* <IonRow>
//             <IonCol className="text-center">
//               <IonImg className="title-img" src="assets/capacitor.png" ></IonImg>
//             </IonCol>
//           </IonRow> */}
//           {/* <IonRow>
            
//             <IonCol className="text-center">
//               <IonText className="title">
//                 Facebook Login in Capacitor app
//               </IonText>
//             </IonCol>
//           </IonRow>
//           <IonRow>
//             <IonCol className="text-center">
//               <IonText className="text-center">
//                 By Enappd Team
//               </IonText>
//             </IonCol>
//           </IonRow> */}
//           <FacebookLoginButton onClick={() => this.signIn()}>
//   <span>Login With Facebook </span>
// </FacebookLoginButton>
// <GoogleLoginButton onClick={() => alert("Hello")} />
//           {/* <IonButton className="login-button" onClick={() => this.signIn()} expand="full" fill="solid" color="primary">
//             Login with Facebook
//           </IonButton> */}
//         </IonContent>
//       </IonPage>
//     )
//   }
// }
// export default Login;