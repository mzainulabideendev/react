import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export  class AuthService { 
    client = new Client();
    account;

Constructor() {
    this.client.setEndpoint(config.appwriteurl)
    .setProject(config.projectid);
    this.account = new Account(this.client);
}
async createAccount({email,password,name}){
try{
  const useraccount =   await this.account.create(ID.unique(),email,password,name);

  if (useraccount) {
   this.login({email,password});

}
    else{

        return useraccount;
    }
}
catch(error)
{
    throw error;
}
}

async login({email,password}){
    try{

      return  await this.account.createEmailSession(email,password);
    }
    catch(error){
        throw error;
    }
}

async getcurrentuser(){
    try {

         return await this.account.get();
    }
    catch(error){

        throw error;
    }

    return null;
}

async logout(){
    try {
        await this.account.deletesessions();
    }
    catch(error){
        throw error;
    }
} 


}
const authService = new AuthService(
   
);

export default authService;