const express = require('express');
const hashtagFinder = require("../models/hashtag");
const router = express.Router();

var db = "mongodb://user:user@ds163418.mlab.com:63418/instagramhashtag";

router.post("/hashtag", function(req, res, next){
    let hash = req.body.tag;
    let winner = req.body.winnerTag;
    MongoClient.connect(db, function(err, db){
        if(err){
            throw err;
        }
        
        let hashtagsCollection = db.collection("hashtag");
        hashtagsCollection.insert({tag: hash, winnerTag: winner});
        res.status(200).json({
            message : "Success"
        })
        db.close()
    })
})





router.get("/hashtag", function(req,res){
    MongoClient.connect(db, function(err, db){
        if(err){
            throw err;
        }

        let hashtagsCollection = db.collection("hashtag");
        let hashtags = hashtagsCollection.find({}).toArray(function (err, resp){
            if(err){
                throw err;
            }

            res.status(200).json({
                status : 200,
                hashtag : resp
            })

            db.close()
        })
    })
});

model.exports = router;