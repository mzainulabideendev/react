const config = {
    appwriteurl: import.meta.env.VITE_APPWRITE_URL,
    projectid: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    databaseid: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    collectionid: import.meta.env.VITE_APPWRITE_COLLECTION_ID,
    bucketid: import.meta.env.VITE_APPWRITE_BUCKET_ID
}

export default config