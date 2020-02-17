cloudinary.config({ 
    cloud_name: 'innerjoin', 
    api_key: process.env.api_key, 
    api_secret: process.env.api_secret 
  });

  const db = require("../models");
  const express = require("express");

const router = express.Router();

const awaitErorrHandlerFactory = middleware => {
    return async (req, res, next) => {
        try {
            await middleware(req, res, next);
        } catch (err) {
            next(err);
        }
    };
  };

  cloudinary.v2.uploader.upload("https://www.example.com/mysample.jpg",
  { public_id: "sample_woman" }, 
  function(error, result) {console.log(result); });