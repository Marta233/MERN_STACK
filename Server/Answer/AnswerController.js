const mongoose = require("mongoose");
const answer = require("./Answermodel");

const createanswer = async (req, res) => {
  //   if (!answer || !quastion_id) {
  //     return res.status(400).json({ msg: "Not all fields have been provided!" });
  //   }
  try {
    const answermodel = await answer.create(req.body);
    return res.status(200).json(answermodel);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getAnswer = async (req, res) => {
  // const { answer, quastion_id } = req.body;
  console.log(req.params["quastion_id"]);
  const id = req.params.quastion_id;
  console.log(id);
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No sdddeach workout" });
  }
  const answerbyquastionid = await answer.find({
    quastion_id: req.params.quastion_id,
  });
  if (!answerbyquastionid) {
    return res.status(404).json({ error: "No  ddddseach workout" });
  }
  res.status(200).json(answerbyquastionid);
};
module.exports = {
  createanswer,
  getAnswer,
};
