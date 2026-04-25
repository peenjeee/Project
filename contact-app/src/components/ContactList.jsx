import React from "react";
import ContactItem from "./ContactItem";
import PropTypes from "prop-types";
import Joi from "joi";
import { validateProps } from "../utils/validation";

const contactListPropsSchema = Joi.object({
  contacts: Joi.array().items(Joi.object()).required(),
  onDelete: Joi.func().required(),
});

function ContactList(props) {
  const validatedProps = validateProps(
    contactListPropsSchema,
    props,
    "ContactList",
  );
  const { contacts, onDelete } = validatedProps;
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          onDelete={onDelete}
          {...contact}
        />
      ))}
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
