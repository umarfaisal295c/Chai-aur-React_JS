import { Client, ID, Databases, Storage, Query } from "appwrite";
import conf from "../conf/conf";
export class Services {
  client = new Client();
  databases;
  bucket;
  // constructor
  constructor() {
    this.client
      .setEndpoint(conf.appwriteurl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  // create a method for createPost.
  async cretaePost({ title, slug, content, userId, featuredmage, status }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          featuredmage,
          content,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Failed to createPost", error);
    }
  }
  // create a method for updatePost.
  async updatePost(slug, { title, featuredmage, content, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredmage,
          status,
        }
      );
    } catch (error) {
      console.log("Error updating post", error);
    }
  }
  // cretae a method for deletePost.
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
      return false;
    }
  }
  // create a method for one Post.
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Error getting post", error);
    }
  }
  // create a method for getAllPost.
  async getAllPosts(queries = [Query.equal("status", "active")]) {
    try {
      this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Error getting", error);
    }
  }
  // create a method for uploadFile.
  async uploadFile(file) {
    try {
      return await this.bucket.updateFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Error uploading", error);
    }
  }
  // create a method for deleteFile.
  async deleteFile(fileId) {
    try {
      return await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
    } catch (error) {
      console.log("Error deleting file", error);
    }
  }
  // create a method for filePreview.
  async filePreview(fileId) {
    try {
      return await this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
    } catch (error) {
      console.log("Error creating file", error);
    }
  }
}
const services = new Services();
export default services;
