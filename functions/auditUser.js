
'use strict';
var userss = "risabh.s";
const doc = require('../models/doc');
const user = require('../models/user');
const bcSdk = require('../src/blockchain/blockchain_sdk');
var ownsLedgerData = [];
var docArray = [];



exports.auditUser = (rapidID) => {
    return new Promise((resolve, reject) => {

        bcSdk.getMydocs({
                user: userss,
                rapidID: rapidID
            })



            .then((userdocs) => {

                var AuditLedgerData = userdocs.body.audittrail
                console.log(AuditLedgerData)
                 var orgkeys =Object.keys(AuditLedgerData)
                 console.log(orgkeys);
             
                    user.find({
                            "rapidID": orgkeys
                        })

                        .then((users) => {
                            var orgnames = [];
                            var orgname = users[0]._doc.orgname
                            orgnames.push(orgname)
                            console.log(orgnames)
                        console.log( AuditLedgerData[orgkeys])
                        
                        var timestamps=[];
                        var rapiddocIDs =[];
                        for(var i=0;i<AuditLedgerData[orgkeys].length;i++){
                             if ( i % 2 == 0){
                                  timestamps.push(AuditLedgerData[orgkeys][i])
                                 }
                                else {
                            rapiddocIDs.push(AuditLedgerData[orgkeys][i])
                        }      
                        }
                        console.log("timestamps            "+timestamps);        
                        console.log("rapiddocIDs           "+ rapiddocIDs);
                           const docids = rapiddocIDs
                           console.log(docids)
                        doc.find({"rapid_doc_ID":docids})

                        .then((docs)=>{
                            var doctype=[];
                            for(var i=0;i<docs.length;i++){
                              if(1 === 1){
                                doctype.push(docs[i]._doc.docType)
                              }
                            }
                            console.log(doctype)
                            
                             return resolve ({
                             status:201,
                             orgname :orgnames,
                            documentid :doctype,
                           timestamp : timestamps
                    
                    
                })
                                  
                })
            })  
            })
             
                
			
          
                  .catch(err => {

                console.log("error occurred" + err);

                return reject({
                    status: 500,
                    message: ' invalid usertype tried to get into service !'
                });
            })
    
})
    };
