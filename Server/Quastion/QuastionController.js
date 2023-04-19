const mongoose = require("mongoose");
const quastion = require("./Quastionmodel");

// get all quastions
const getQuastions = async (req, res) => {
  const quations = await quastion.find({}).sort({ cratedAt: -1 });
  res.status(200).json(quations);
};
// creat new coll
const createquastion = async (req, res) => {
  // const { quastionTitle, quastiondescription, UserName } = req.body;
  // if (!quastionTitle || !quastiondescription || !UserName) {
  //   return res.status(400).json({ msg: "Not all fields have been provided!" });
  // }
  //   try {
  //     const quastionmodel = await quastion.create({
  //       quastionTitle,
  //       quastiondescription,
  //       UserName,
  //     });
  //     return res.status(200).json(quastionmodel);
  //   } catch (error) {
  //     return res.status(400).json({ error: error.message });
  //   }
  // };
  try {
    const answermodel = await quastion.create(req.body);
    return res.status(200).json(answermodel);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
// get quastion by id
const getQuastion = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No seach workout" });
  }
  const quastionbyid = await quastion.findById(id);
  if (!quastionbyid) {
    return res.status(404).json({ error: "No seach workout" });
  }
  res.status(200).json(quastionbyid);
};
module.exports = {
  createquastion,
  getQuastions,
  getQuastion,
};
