import { Client, Databases, ID } from "appwrite";

// Initialize the Appwrite client
const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("668e335e000b1445facf");

// Initialize the Databases service
const databases = new Databases(client);

// Define your database and collection IDs here
const DATABASE_ID = "668e3449000045c50034";
const COLLECTION_ID = "668e34580007a958182d";

// Function to create a document
export const createDocument = async (data: object) => {
  try {
    const response = await databases.createDocument(
      DATABASE_ID,
      COLLECTION_ID,
      ID.unique(),
      data
    );
    return response;
  } catch (error) {
    console.error('Error creating document:', error);
    throw error;
  }
};

// Function to get a document by ID
export const getDocument = async (documentId: string) => {
  try {
    const response = await databases.getDocument(
      DATABASE_ID,
      COLLECTION_ID,
      documentId
    );
    return response;
  } catch (error) {
    console.error('Error getting document:', error);
    throw error;
  }
};

// Function to update a document
export const updateDocument = async (documentId: string, data: object) => {
  try {
    const response = await databases.updateDocument(
      DATABASE_ID,
      COLLECTION_ID,
      documentId,
      data
    );
    return response;
  } catch (error) {
    console.error('Error updating document:', error);
    throw error;
  }
};

// Function to delete a document
export const deleteDocument = async (documentId: string) => {
  try {
    const response = await databases.deleteDocument(
      DATABASE_ID,
      COLLECTION_ID,
      documentId
    );
    return response;
  } catch (error) {
    console.error('Error deleting document:', error);
    throw error;
  }
};

// Function to get all documents in a collection
export const getAllDocuments = async () => {
  try {
    const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
    return response.documents;
  } catch (error) {
    console.error('Error getting documents:', error);
    throw error;
  }
};