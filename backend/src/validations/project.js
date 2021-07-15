import Joi from "joi";
import messages from "../utils/messages.js";
import authentication from "./authentication.js";

const { createErrorMessages } = authentication;

const createProjectForm = data => {
  const schema = Joi.object({
    name: Joi.string()
      .regex(
        /^[0-9a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/
      )
      .trim()
      .required()
      .messages(
        createErrorMessages(
          "string",
          `${messages.emptyProjectName}`,
          `${messages.invalidProjectName}`
        )
      ),
  });

  return schema.validate(data, {
    abortEarly: false,
    allowUnknown: false,
  });
};

export default { createProjectForm };
