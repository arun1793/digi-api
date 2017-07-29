
'use strict';

//const user = require('../models/user');
const doc = require('./models/doc')
var bcSdk = require('../src/blockchain/blockchain_sdk');
const users = 'risabh.s';



exports.approvedReject = (rapidID,OrgID,status,docTypes) =>{
                       
    new Promise((resolve, reject) => {
        
      for (i=0;i<docTypes.length;i++){
          doc.find( { "$elemMatch": { "rapidID": rapidID, "docType": docType[i]  } })
          .then((docs) =>
          rapid_doc_ID=docs.rapid_doc_ID
        ) 

        const sharedDocDetails = new request({

            rapidID: rapidID,
            rapid_doc_ID: rapid_doc_ID,
            OrgID: rapidOrgID,
            created_at: new Date(),
        });

        approved.save()
        

         bcSdk.shareDocument({
                user: users,
                UserDetails: sharedDocDetails
        })} 
               console.log("wow its done")

            .then(() => resolve({
                status: 201,
                message: 'User Registered Sucessfully !'
            }))

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
    })};