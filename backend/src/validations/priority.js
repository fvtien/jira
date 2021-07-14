import Joi from "joi";
import messages from "../utils/messages.js";
import authentication from "./authentication.js";

const { createErrorMessages } = authentication;

const createPriorityForm = data => {
  const schema = Joi.object({
    id: Joi.string()
      .regex(
        /^[0-9a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/
      )
      .trim()
      .required()
      .messages(
        createErrorMessages(
          "string",
          `${messages.emptyPriorityId}`,
          `${messages.invalidPriorityId}`
        )
      ),
    label: Joi.string()
      .regex(
        /^[0-9a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/
      )
      .trim()
      .required()
      .messages(
        createErrorMessages(
          "string",
          `${messages.emptyPriorityLabel}`,
          `${messages.invalidPriorityLabel}`
        )
      ),
  });

  return schema.validate(data, {
    abortEarly: false,
    allowUnknown: false,
  });
};

export default { createPriorityForm };
