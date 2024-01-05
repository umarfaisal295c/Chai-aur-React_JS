import conf from "../config/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";
// create a class
export class Services {
  client = new Client();
  databases;
  bucket;
  // create a constructor for class.
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  // create a method for createPost.
  async createPost({ title, content, slug, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          status,
          featuredImage,
          userId,
          content,
        }
      );
    } catch (error) {
      console.log("Error creating post", error);
    }
  }
  // cretae a method for updatePost
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          featuredImage,
          content,
          status,
        }
      );
    } catch (error) {
      console.log("Error updating post", error);
    }
  }
  // create a method for deletePost
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Error deleting post", error);
    }
    return false;
  }
  // create a method for one post.
  async getPost(slug) {
    try {
      await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Error getting post", error);
      return false;
    }
  }
  // create a method for getAllPost.
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Error getting", error);
      return false;
    }
  }
  // create a method for uploadFile.
  async uploadFile(file){
    try {
        return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file,
        )
    } catch (error) {
        console.log("Error uploading", error);  
    }
  }
  // create a method for deleteFile.
  async deleteFile(fileId){
    try {
         await this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileId,
        )
        return true
    } catch (error) {
        console.log("Error deleting", error);
    }
  }
  // create a method for filePreview.
  async filePreview(fileId){
    return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId,
    )
  }

}
const services = new Services();
export default services;
