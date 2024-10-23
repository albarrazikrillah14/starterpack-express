/* istanbul ignore file */
import { InvariantError } from "../exceptions/InvariantError.js";

export const validate = (schema, payload) => {
  const validationResult = schema.validate(payload);
  if (validationResult.error) {
    throw new InvariantError(validationResult.error.message);
  }
}