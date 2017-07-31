'use strict';

const doc = require('../models/doc')
var bcSdk = require('../src/blockchain/blockchain_sdk');
const users = 'risabh.s';
const request = require('../models/request');



exports.approvedReject = (rapidID, OrgID, status, docTypes) => {

    return new Promise((resolve, reject) => {

        doc.find({
                "rapidID": rapidID
            }) .then((docs) =>{
                console.log(docs)
                for (var i = 0; i < docs.length; i++) {
                    if (docs[i]._doc.docType === docTypes[i]) {
                        var doc1 = docs[i].rapid_doc_ID;
                        console.log(doc1);
                        var rapid_doc_ID = doc1;

                        const sharedDocDetails = ({

                            rapidID: rapidID,
                            rapid_doc_ID: doc1,
                            OrgID: OrgID,
                            status: status

                        });
                    }
                
                    bcSdk.shareDocument({
                        user: users,
                        sharedDocs: sharedDocDetails
                  }).then((Sdkresponse)=>{
                        return Sdkresponse
                        });
                            
                }})//find then ends here    
            .catch(err => {

                if (err.code == 11000) {

                    reject({
                        status: 409,
                        message: 'User Already Registered !'
                    });

                } else {

                    reject({
                        status: 500,
                        message: 'Internal Server Error !'
                    });
                }
            });
    
    })
};