import conf from "../config/conf";
import { Client, Account, ID } from "appwrite";
// create a class for Auth.
export class Authservices {
  client = new Client();
  account = new Account();
  // create consturctor for call this class.
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }
  //  create a method for call appwrite services .
  // this method is used for createAccount method.
  async createAccount({email,password,name}){
    try {
      const userAccount=  await this.account.create(ID.unique(),email,password,name);
      if (userAccount) {
        // call login method
        return this.login(email,password)
      } else {
        return userAccount
      }
    } catch (error) {
        throw error
    }
  }
  // create a login method.
  async login({email,password}){
    try {
     return await this.account.createEmailSession(email, password)
    } catch (error) {
        throw error
    }
  }
  // create a getCurrentUser method.
  async getCurrentUser(){
    try {
      return await this.account.get()
    } catch (error) {
        throw error
    }
    return null;
  }
  // create a logout method.
  async logout(){
    try {
        await this.account.deleteSessions();
    } catch (error) {
        console.log("Appwrite services :: logout :: error:",error);
    }
  }
}
// object for this class.
const authServices = new Authservices();
export default authServices;
