
'use strict';
var user = "risabh.s";
const doc = require('../models/doc');
const bcSdk = require('../src/blockchain/blockchain_sdk');
var ownsLedgerData = [];
var docArray = [];



exports.auditUser = (rapidID) => {
    return new Promise((resolve, reject) => {

        bcSdk.getMydocs({
                user: user,
                rapidID: rapidID
            })



            .then((userdocs) => {

                AuditLedgerData = userdocs.body.audit
                AuditLedgerData[0]
                AuditLedgerData[1]
                AuditLedgerData[2]
                    doc.find({
                            "rapidID": AuditLedgerData[0]
                        })

                        .then((docs) => {
                            var orgtn=[]
                       for(i=0;i<docs.length;i++){
                    orgtn = docs.orgname[i]
                       }
                })
                    doc.find({
                    "rapid_doc_ID": AuditLedgerData[2]
                     })
                .then((types)=>{
                var type =[]
                for (i=0;i<types.length;i++)
                 type1 =types.docType[i]
            })
                return resolve ({
                    status:201,
                    organizations :orgtn,
                    dates  :AuditLedgerData[1],
                    docTypes : type1
                    
                })
               

            })
			
          
                  .catch(err => {

                console.log("error occurred" + err);

                return reject({
                    status: 500,
                    message: 'Internal Server Error !'
                });
            })
    })
};

