import { current } from "@reduxjs/toolkit";
import conf from "../config/conf";
import { Client, Account, ID } from "appwrite";
// create a class for auth.
export class Authservices {
  client = new Client();
  account = new Account();
  // create constructor for this class.
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }
  // create a method for call appwrite services.
  // this method is used for createAccount method.
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      // if (userAccount) {
      //   return this.login({email, password});
      // } else {
      //   return userAccount;
      // }
      return userAccount
    } catch (error) {
      console.log("createAccount", error);
    }
  }
  // create a method for login.
  // async login({ email, password }) {
  //   try {
  //     const log= await this.account.createEmailSession({ email, password });
  //     console.log(log);
  //   } catch (error) {
  //     console.log("Login Page", error);
  //   }
  // }
  async login({email,password}){
    try {
      const loginData= await this.account.createEmailSession(email,password)
      console.log(loginData);
    } catch (error) {
      console.log("login data error",error);
    }
  }
  // create a getCurrentUser method.
  async getCurrentUser(){
    try {
      return await this.account.get("current")
    } catch (error) {
        throw error
    }
    // return null;
  }
  // create a method for logout.
  async logout() {
    try {
      return await this.account.deleteSessions("current");
    } catch (error) {
      console.log("Appwrite serive :: logout :: error", error);
    }
  }
}
// object for this class.
const authServices = new Authservices();
export default authServices;