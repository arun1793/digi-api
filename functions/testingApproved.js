/*
'use strict';

const doc = require('../models/doc')
var bcSdk = require('../src/blockchain/blockchain_sdk');
const users = 'risabh.s';
const request = require('../models/request');



exports.approvedReject = (rapidID,OrgID,status,docTypes) =>{
                       doc.find({"rapidID":rapidID})
                       .then((docs) =>{

    for (var i=0;i<docTypes.length;i++){
       
       const docType = docTypes[i]
                           
                           docs.

                       }
  return  new Promise((resolve, reject) => {
   
       .then()
    var query = { "rapidID" : rapidID};
  doc.find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });


                    console.log(document);   
        var rapid_doc_ID = docs.rapid_doc_ID;
        console.log(rapid_doc_ID)
       
        const sharedDocDetails = new request({

            rapidID: rapidID,
            rapid_doc_ID: rapid_doc_ID,
            OrgID: OrgID,
            status:status,
            created_at: new Date(),
        });
        sharedDocDetails.save()  
         bcSdk.shareDocument({
                user: users,
                sharedDocs: sharedDocDetails
          });
        };
    //    })
    }
    console.log("out of for loop")

            .then(() => resolve({
                status: 201,
                message: 'User has shared doc Sucessfully !'
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
   })};*/