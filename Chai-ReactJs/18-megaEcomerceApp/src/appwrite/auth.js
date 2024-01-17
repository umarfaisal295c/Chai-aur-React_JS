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
      if (userAccount) {
        return this.login(email, password);
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("createAccount", error);
    }
  }
  // create a method for login.
  async login({ email, password }) {
    try {
      return await this.account.createEmailSession({ email, password });
    } catch (error) {
      console.log("Login", error);
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
  // create a method for logout.
  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("Logout", error);
    }
  }
}
// object for this class.
const authServices = new Authservices();
export default authServices;