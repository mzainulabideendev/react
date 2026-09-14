import config from "../config/config";
import { Client, ID ,Databases, Storage,Query} from "appwrite";

export class services {

    client  = new Client();
    databases;
    bucket;

    constructor() {

    this.client.setEndpoint(config.appwriteurl)
    .setProject(config.projectid);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
    
    }
    async createpost ({title,slug,content,featuredimage,status,userId}){
        try{

            await this.databases.createDocument(config.databaseid,config.collectionid,ID.unique(),{
                title,
                slug,
                content,
                featuredimage,
                status,
                userId,
            });
        }
        catch(error){
            console.error("Error creating post:", error);
        }


        
    }
    async updatepost(slug,{title,content,featuredimage,status,}){
        try{

            await this.databases.updateDocument(config.databaseid,config.collectionid,slug,{
                title,
                content,
                featuredimage,
                status,
            });
        }    
catch(error){
            console.error("Error updating post:", error);
        }
}

async deletepost(slug){

    try{
        await this.databases.deleteDocument(config.databaseid,config.collectionid,slug);
        return true
    }
    
    catch(error){
        console.error("Error deleting post:", error);

        return false
    }
}

async getpost(slug){
    try{

        return await this.databases.getDocument(config.databaseid,config.collectionid,slug);
    }
    catch(error){
        console.error("Error getting post:", error);
        return false
    }
}

async getallposts(queries =[Query.equal("status","active")]){
try{
    return await this.databases.listDocuments(config.databaseid,config.collectionid,queries);
}
catch(error){
    console.error("Error getting all posts:", error);
    return false
}

}
// file upload service
async uploadfile(file){
    try{
        return await this.bucket.createFile(config.bucketid,ID.unique(),file);
    }

catch(error){
    console.error("Error uploading file:", error);
    return false
}

}
// delet file 
async deletefile(fileId){
    try{
        return await this.bucket.deleteFile(config.bucketid,fileId);
    }

    catch(error){
        console.error("Error deleting file:", error);
        return false
    }
}
// file preview 
getfilepreview(fileId){
return this.bucket.getFilePreview(config.bucketid,fileId);
}
}

const Service = new services();
export default Service;



