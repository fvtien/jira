import Joi from "joi";
import messages from "../utils/messages.js";

const createErrorMessages = (type, empty, pattern) => ({
  [`${type}.empty`]: empty,
  [`${type}.format`]: pattern,
  [`${type}.pattern.base`]: pattern,
  "any.required": empty,
});

const signUp = data => {
  const schema = Joi.object({
    firstName: Joi.string()
      .regex(
        /^[0-9a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/
      )
      .trim()
      .required()
      .messages(
        createErrorMessages(
          "string",
          `${messages.emptyFirstName}`,
          `${messages.invalidFirstName}`
        )
      ),
    lastName: Joi.string()
      .regex(
        /^[0-9a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/
      )
      .trim()
      .required()
      .messages(
        createErrorMessages(
          "string",
          `${messages.emptyLastName}`,
          `${messages.invalidLastName}`
        )
      ),
    email: Joi.string()
      .email()
      .trim()
      .required()
      .messages(
        createErrorMessages(
          "string",
          `${messages.emptyEmail}`,
          `${messages.invalidEmail}`
        )
      ),
    password: Joi.string()
      .regex(/^(?=.*[!@#$%^&*?])[0-9a-zA-Z!@#$%^&*?]{6,20}$/)
      .min(6)
      .max(20)
      .required()
      .messages(
        createErrorMessages(
          "string",
          `${messages.emptyPassword}`,
          `${messages.invalidPassword}`
        )
      ),
  });

  return schema.validate(data, {
    abortEarly: false,
    allowUnknown: false,
  });
};

const login = data => {
  const schema = Joi.object({
    email: Joi.string()
      .email()
      .trim()
      .required()
      .messages(
        createErrorMessages(
          "string",
          `${messages.emptyEmail}`,
          `${messages.invalidEmail}`
        )
      ),
    password: Joi.string()
      .regex(/^(?=.*[!@#$%^&*?])[0-9a-zA-Z!@#$%^&*?]{6,20}$/)
      .required()
      .messages(
        createErrorMessages(
          "string",
          `${messages.emptyPassword}`,
          `${messages.invalidPassword}`
        )
      ),
  });

  return schema.validate(data, {
    abortEarly: false,
    allowUnknown: false,
  });
};

export default { createErrorMessages, signUp, login };
