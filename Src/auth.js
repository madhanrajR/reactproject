
import AsyncStorage from '@react-native-community/async-storage';

export const USER_KEY = "auth-demo-key";

export const onSignIn = () => AsyncStorage.setItem("USER_KEY", "true");

export const onSignOut = () => AsyncStorage.removeItem("USER_KEY");

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem("USER_KEY",(err,res)=>{
          console.log('auth',res)
        if (res !== null) {
          
          issignedin=true;
          resolve(true);
        } else {
          issignedin=false;
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};