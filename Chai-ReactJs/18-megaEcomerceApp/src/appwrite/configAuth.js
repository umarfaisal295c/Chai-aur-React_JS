import { Client, Account } from "appwrite";
import conf from "../config/conf";
const client = new Client();
client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
export const account = new Account(client);
