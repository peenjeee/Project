import React from "react";
import PropTypes from "prop-types";
import Joi from "joi";
import { validateProps } from "../utils/validation";

const contactItemBodyPropsSchema = Joi.object({
  name: Joi.string().required(),
  tag: Joi.string().required(),
});

function ContactItemBody(props) {
  const validatedProps = validateProps(
    contactItemBodyPropsSchema,
    props,
    "ContactItemBody",
  );
  const { name, tag } = validatedProps;
  return (
    <div className="contact-item__body">
      <h3 className="contact-item__title">{name}</h3>
      <p className="contact-item__username">@{tag}</p>
    </div>
  );
}

ContactItemBody.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

export default ContactItemBody;
