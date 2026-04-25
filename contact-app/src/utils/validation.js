import Joi from "joi";

export function validateProps(schema, props, componentName) {
  const validationResult = schema.validate(props, { abortEarly: false });

  if (validationResult.error) {
    const { details } = validationResult.error;
    details.forEach((error) =>
      console.warn(`[${componentName}] Validation Error: ${error.message}`),
    );
  }

  return validationResult.value;
}
