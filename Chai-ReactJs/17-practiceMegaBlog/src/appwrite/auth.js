import conf from "../../../16-megaBlogProject/src/config/conf";
import { Client, ID, Account } from "appwrite";
// create a class
export class Authservices {
  client = new Client();
  account = new Account();
  // create a consturctor for this class.
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }
  // crate a method for createAccount.
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login;
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("Error creating account", error);
    }
  }
  // create a method for login.
  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.log("Error login account", error);
    }
  }
  // create a method for getUserAccount
  async getUserAcount() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Error getting user count", error);
    }
  }
  // create a method for logout
  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("Error logout user count", error);
    }
  }
}
const authServices = new AuthServices();
export default authServices;
