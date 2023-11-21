import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { dataBase } from "../../config/firebase";

function Summary() {
  const { documentId } = useParams();
  const [documentData, setDocumentData] = useState(null);

  useEffect(() => {
    const fetchDocumentData = async () => {
      try {
        const collectionRef = dataBase.collection("products");

        // Retrieve document data using the document ID
        const doc = await collectionRef.doc(documentId).get();

        if (doc.exists) {
          console.log("Document data:", doc.data());
          setDocumentData(doc.data());
        } else {
          console.log("Document not found");
        }
      } catch (error) {
        console.error("Error getting document:", error);
        // Handle the error as needed
      }
    };

    fetchDocumentData();
  }, [documentId]);
  return (
    <div>
      <h1>Page B</h1>
      <p>Document ID from Page A: {documentId}</p>

      {documentData && (
        <div>
          <h2>Document Data:</h2>
          {/* Render your document data here */}
          {/* Example: */}
          <pre>{JSON.stringify(documentData, null, 2)}</pre>
        </div>
      )}

      {/* Other content */}
    </div>
  );
}

export default Summary;
