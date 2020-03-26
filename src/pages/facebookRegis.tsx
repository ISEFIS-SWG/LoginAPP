import { IonContent, IonText, IonRow, IonItem, IonThumbnail, IonLabel, IonCol, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonImg } from '@ionic/react';
import React, { Component } from 'react';
import './Login.css';
import { Plugins } from '@capacitor/core';
import shareValue from './models/share';
import { getAuthen, createUser } from '../services/EmployeeAPI';
const INITIAL_STATE = {
  user: {},
  runuser:{}
};

class facebookRegis extends Component {
  state: any = {};
  props: any = {};
  
  constructor(props: any) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  componentDidMount() {
    //this.getUserInfo();
    this.checkuser();
  }
  // async getUserInfo() {
  //   const response = await fetch(`https://graph.facebook.com/${this.props.location.state.userId}?fields=id,name,gender,link,picture&type=large&access_token=${this.props.location.state.token}`);
  //   const myJson = await response.json();
  //   this.setState({
  //     user: myJson
  //   })
  // }
  async signOut(): Promise<void> {
    const { history } = this.props;
    await Plugins.FacebookLogin.logout();
    history.goBack();
  }
   async GoToHome() {
    const { history } = this.props;
    
if(shareValue.facebookUpdateDB==1){
    //let result= await createUser(this.state.user.id,'facebook',this.state.user.first_name,this.state.user.middle_name,'-',this.state.user.middle_name,this.state.user.picture.data.url,this.state.user.gender,'-','-')
    let result= await createUser('1223455555667','facebook','test','test','-','testtt@tot.com','test','testt','-','-')
   
    if(result?.data.success){
      //props.history.goBack();
      //shareValue.selfregis=User_Name

      //shareValue.selfregis.User_id=result?.data.User_id
      shareValue.User_id=result?.data;
      console.log('to-webnext'+shareValue.User_id.insertId)
      shareValue.LoginFrom=2
      history.push({
        pathname: '/home',
        state: { name: shareValue.User_id}
      });
  }



    //history.push('/home');
   }else{
    history.push({
        pathname: '/home',
        state: { name: this.state.user.name}
      });
    }
  }

  async checkuser() {
   // const response = await fetch(`http://180.180.241.92:3003/employees/usercheck?User_Name=${this.state.user.id}`);
    const response = await fetch(`http://180.180.241.92:3003/employees/usercheck/1304551258888558999`);
    const myJson = await response.json();
     
    this.setState({
      runuser: myJson
    })
    if(myJson.length>0)
{
console.log('test'+this.state.runuser[0].User_id)
shareValue.User_id=this.state.runuser[0].User_id
console.log('test1'+shareValue.facebookUsercheck)
  }else {shareValue.facebookUpdateDB=1
    console.log('test1'+shareValue.facebookUpdateDB)
  }


  }

  

  render() {
   
    {shareValue.facebook=this.state.user}
    {shareValue.LoginFrom=2}
    
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Logged in ... </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">

          <IonRow>
            <IonCol className="text-center">
              <IonText className="title">
                ยินดีต้อนรับ 
              </IonText>
            </IonCol>
          </IonRow>
   
          {this.state.user.name &&
            <IonItem>
              <IonThumbnail slot="start">
                <img src={this.state.user.picture.data.url} />
              </IonThumbnail>
              <IonLabel>
                <h3>{this.state.user.name}</h3>
                <h3>{this.state.user.id}</h3>
                <h3>{this.state.user.first_name}</h3>
                <h3>{this.state.user.gender}</h3>
                <h3>{this.state.user.middle_name}</h3>
                <h3>{this.state.user.name_format}</h3>
              
              </IonLabel>
            </IonItem>
           
          }

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

          <IonButton className="login-button" onClick={ () => this.GoToHome()} expand="full" fill="solid" color="primary">
            เริ่มออกกำลังกายกันได้แล้ว
        </IonButton>
     
        </IonContent>
      </IonPage>
    )
  }
}

export default facebookRegis;