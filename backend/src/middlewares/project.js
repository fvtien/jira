import misc from "../helpers/misc.js";
import project from "../validations/project.js";

const { returnErrorMessages } = misc;
const { createProjectForm } = project;

const validateForm = async (req, res, next) => {
  const { error } = createProjectForm(req.body);
  returnErrorMessages(error, res, next);
};

export default { validateForm };
