import React, { useState,useEffect } from 'react';

import axios from 'axios';
import Skills from './Skills';
import './App.css';
// import './index.css';



function Documents() {
  const [documents, setDocuments] = useState([
    { id: 1, title: 'Alice Agreement', isSigned: false },
    { id: 2, title: 'Non-Disclosure Agreement', isSigned: false },
    { id: 3, title: 'Terms of Service', isSigned: false }
  ]);
  
  const [text,setText]=useState('');

  const fetchData= async () => {
    let resp = await axios.get("http://localhost:3000/file.txt");
    let fin= resp.data;
   // console.log(fin);
  }

  useEffect(() => {
   //  fetchData();
  },[]);

  const handleSignDocument = async (id) => {
   // await axios.post('http://localhost:8080/sign',{email:"hi"});
    const updatedDocuments =  documents.map(doc => {
      if (doc.id === id) {
        try{
       
        // alert('File uploaded successfully.');
      
        }
        catch (error) {
          console.error(error);

        }
        return { ...doc, isSigned: true };
       
      }
      return doc;
    });

    setDocuments(updatedDocuments);
  };
  
 // const client = new HelloSign();
 // var claimUrl = 'https://api.hellosign.com/v3/embedded/sign_url/{signature_id}';

  // client.open(claimUrl, {
  //   clientId: '724ba9200aa279400e812cb8d8a67b17',
  //   allowCancel: false,
  //   requestingEmail: "dev1emaily@gmail.com",
  //   skipDomainVerification: true
  // });


  
  return (
    <div className="my-form">
     
     <p> <div className="section"> <h2>Agreement Signing</h2>
      <ul>
        {documents.map(doc => (
          <li key={doc.id}>
            {doc.title} - {doc.isSigned ? 'Signed' : 'Not Signed'}
            {!doc.isSigned && (
              <button onClick={() => handleSignDocument(doc.id)}>Sign</button>
            )}
          </li>
        ))}
      </ul>
      </div>
      </p>
      {/* <label for="patientName">Patient Name:</label>
    <input type="text" id="patientName" name="patientName" required />
    <label for="patientAge">Patient Age:</label>
    <input type="TEXT" id="patientAge" name="patientAge" required />
    <h3>Cognitive Assessment Assessment Details:</h3>
    <label for="cognitiveAssessment"></label>
    <textarea id="cognitiveAssessment" name="cognitiveAssessment" rows="4" required />
    <div class="consent">
      <input type="checkbox" id="cognitiveConsent" name="cognitiveConsent" align="left" required />
      <label for="cognitiveConsent">Consent to Cognitive Test</label>
    </div>
    <h3>Diagnosis:</h3>
    <textarea id="diagnosis" name="diagnosis" rows="4" required></textarea>
    <br/>
    <div className="my-form"> <label for="signature">Signature:</label>
    <div class="signature" id="signature" contenteditable="true"></div>
    <p> <button type="submit" class="button" id="saveButton">Save</button></p>
    </div> */}

    {/* <Skills /> */}
    
    </div>
  );
}

export default Documents;
