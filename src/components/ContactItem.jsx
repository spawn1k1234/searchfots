import React from "react";

function ContactItem({ contact, onDelete }) {
  return (
    <li>
      {contact.name}: {contact.phone}
      <button onClick={() => onDelete(contact.id)}>Видалити</button>
    </li>
  );
}

export default ContactItem;
