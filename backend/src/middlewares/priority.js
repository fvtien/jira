import misc from "../helpers/misc.js";
import priority from "../validations/priority.js";

const { returnErrorMessages } = misc;
const { createPriorityForm } = priority;

const validateForm = async (req, res, next) => {
  const { error } = createPriorityForm(req.body);
  returnErrorMessages(error, res, next);
};

export default { validateForm };
