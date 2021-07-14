import misc from "../helpers/misc.js";
import room from "../validations/room.js";

const { returnErrorMessages } = misc;
const { createRoomForm } = room;

const validateForm = async (req, res, next) => {
  const { error } = createRoomForm(req.body);
  returnErrorMessages(error, res, next);
};

export default { validateForm };
