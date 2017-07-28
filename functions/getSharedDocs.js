/*
'use strict';
var user = "risabh.s";
const doc = require('../models/doc');
const bcSdk=require('../src/blockchain/blockchain_sdk');

exports.getSharedDocs = (rapidID) => {
    return new Promise((resolve,reject) => {

    bcSdk.getSharedDocs({user: user, rapidID: rapidID})
    
	.then((sharedDocs) =>{ 
		return resolve({status:201,"sharedDocs":sharedDocs.body})
    })
	

    
		.catch(err => {

				console.log("error occurred" + err);

				return reject({ status: 500, message: 'Internal Server Error !' });
			}
		)}
	)};
	*/

'use strict';
var user = "risabh.s";
const doc = require('../models/doc');
const bcSdk = require('../src/blockchain/blockchain_sdk');
var ownsLedgerData = [];
var sharedDocs = [];


exports.getSharedDocs = (rapidID) => {
    return new Promise((resolve, reject) => {

        bcSdk.getSharedDocs({
                user: user,
                rapidID: rapidID
            })



            .then((userdocs) => {

                ownsLedgerData = userdocs.body.sharedwithme

                doc.find({
                        "rapid_doc_ID": ownsLedgerData
                    })

                    .then((docs) => {

                        resolve({
                            status: 201,
                            sharedDocs: docs
                        })
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