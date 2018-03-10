/* const express = require('express');
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
        
        let hashtagsCollection = db.collection("hashtags");
        hashtagsCollection.insert({tag: hash, winnerTag: winner});
        res.status(200).json({
            message : "Success"
        })
        db.close()
    })
})





router.get("/hashtag", function(req,res,next){
    MongoClient.connect(db, function(err, db){
        if(err){
            throw err;
        }

        let hashtagsCollection = db.collection("hashtags");
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






module.exports = function (app, express) {
    router.post("/:hashtag", (req, res, next) => {
        
        let hashToAdd = new hashtagFinder({
            _id: new mongoose.Types.ObjectId(),
            tag: req.body.tag,
            winnerTag: req.body.winnerTag
        });

        hashtagFinder.findOne({ hashtag: req.params.hashtag })
            .exec()
            .then(resp => {
                if (resp === null || resp === undefined) {
                    hashToAdd.save();
                    res.status(200).json({
                        success: true,
                        message: "hashtag added",
                        tag: resp.tag,
                        winnerTag: resp.winnerTag
                    });
                }

                else{
                    res.status(500).json({
                        success: false,
                        message: "hashtag already exist"
                    });
                }
            })


    });


    router.get("/:hashtag", (req, res, next) => {
        let hash = req.params.hashtag;
        hashtagFinder.findOne({ _hashtag: hash })
            .exec()
            .then(h => {
                if (h === undefined || h === null) {
                    res.status(401).json({
                        succes: false,
                        message: "never did a request"
                    });
                }
                else {
                    res.json({
                        succes: true,
                        message: "hashtag found",
                        tag: doc.tag,
                        winnerTag: doc.winnerTag
                    })
                }
            })
    });



}; */