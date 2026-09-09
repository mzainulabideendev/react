import config from "../config/config";
import { Client, ID ,Databases, Storage,Query} from "appwrite";

export class services {

    client  = new Client();
    databases;
    bucket;

    Constructor() {

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
}

const Service = new services();
export default Service;



