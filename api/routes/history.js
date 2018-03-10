const express = require('express');
const hashtagFinder = require("../models/hashtag");
const router = express.Router();

var db = "mongodb://user:user@ds163418.mlab.com:63418/instagramhashtag";

router.get("/hashtags/", function(req, res) {
    Hashtag.find(function(err, tags) {
      if (err) return res.send(err);
      let data = {};
      res.json({tags:tags,success:true});
    })
  });


  router.post("/hashtags/", function(req, res) {
    Hashtag.findOne({tag:req.body.tag}, function(err, ht){
      if(!ht){
        let tag = new Hashtag();
        tag.tag = req.body.tag;
        tag.save(function(err) {
          if (err) {
            return res.send(err);
          }
          console.log(tag);
          res.json({ success: true, message: "Added" });
        })
      }
    })
  });
  module.exports = router;

model.exports = router;