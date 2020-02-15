const db = require("../models");
const express = require("express");

const router2 = express.Router();

//middleware to hanlde errors 
const awaitErorrHandlerFactory = middleware => {
    return async (req, res, next) => {
      try {
        await middleware(req, res, next);
      } catch (err) {
        next(err);
      }
    };
  };


//     // let transaction;

    // try {
    //     // get transaction
    //     transaction = await sequelize.transaction();

    //     // step 1
    //     await Model.destroy({ where: { id }, transaction });

    //     // step 2
    //     await Model.create({}, { transaction });

    //     // step 3
    //     await Model.update({}, { where: { id }, transaction });

    //     // commit
    //     await transaction.commit();

    // } catch (err) {
    //     // Rollback transaction only if the transaction object is defined
    //     if (transaction) await transaction.rollback();
    // }
    // function getUserMatches(userId) {

    // }

    // router.get("/members/:id/matches", function (req, res) {
    //     let currentUser 
    //     currentUser = await db.Members.findOne({
    //         where: {
    //             id: req.params.id
    //         }
    //     });
    //     console.log(currentUser);
    //     let userJoins
    //     userJoins = await db.Members.findAll({
    //         where: {
    //             gender: currentUser.gender_preference,
    //             gender_preference: currentUser.gender
    //         }
    //     });
        
    // });

    router2.get(
      "/api/members/:id/matches", 

      awaitErorrHandlerFactory(async (req, res, next) => {
          
        let currentUser = await db.Members.findOne({
            raw: true,
                where: {
                    id: req.params.id
                }
            });
        console.log(currentUser);
        let userJoins = await db.Members.findAll({
            raw: true,
            where: {
                gender: currentUser.gender_orientation,
                gender_orientation: currentUser.gender
            }});
            
        return res.json({
          error: false,
          data: userJoins
        });

      })
        
    );

module.exports = router2;
