import React from "react";
import PropTypes from "prop-types";
import Joi from "joi";
import { validateProps } from "../utils/validation";

const contactItemImagePropsSchema = Joi.object({
  imageUrl: Joi.string().required(),
});

function ContactItemImage(props) {
  const validatedProps = validateProps(
    contactItemImagePropsSchema,
    props,
    "ContactItemImage",
  );
  const { imageUrl } = validatedProps;
  return (
    <div className="contact-item__image">
      <img src={imageUrl} alt="contact avatar" />
    </div>
  );
}

ContactItemImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default ContactItemImage;
