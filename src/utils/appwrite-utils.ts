import { Client, Databases, ID, Query } from "appwrite";

// Initialize the Appwrite client
const client = new Client();
client
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

// Initialize the Databases service
const databases = new Databases(client);

// Define your database and collection IDs using environment variables
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
const CONTACT_COLLECTION_ID = import.meta.env.VITE_APPWRITE_CONTACT_COLLECTION_ID;

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

// Function to create a contact document
export const createContactDocument = async (data: object) => {
  try {
    const response = await databases.createDocument(
      DATABASE_ID,
      CONTACT_COLLECTION_ID,
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
    const promise = databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID,
      [
        Query.equal('slug', documentId)
      ]
    );

    const response = await promise;
    return response.documents[0]; // Assuming you expect only one document or handle multiple documents accordingly
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
export const getAllBlogs = async () => {
  try {
    const response = await databases.listDocuments(DATABASE_ID,COLLECTION_ID);
      return response.documents;
    } catch (error) {
    console.error('Error getting documents:', error);
    throw error;
    }
    };