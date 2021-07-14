import Joi from "joi";
import messages from "../utils/messages.js";
import authentication from "./authentication.js";

const { createErrorMessages } = authentication;

const createRoomForm = data => {
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
          `${messages.emptyRoomName}`,
          `${messages.invalidRoomName}`
        )
      ),
  });

  return schema.validate(data, {
    abortEarly: false,
    allowUnknown: false,
  });
};

export default { createRoomForm };
