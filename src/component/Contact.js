import React, { useRef } from 'react';
import ContactStyles from './Contact.module.css';
import { copyToClip } from './CopyToClip';

function Contact() {
  const tableRef = useRef(null);

  return (
    <div className={ContactStyles.contact}>
      <br />
      <h1>Kontakt</h1>
      <div className={ContactStyles.tooltip}>
        <h1
          className={ContactStyles.email}
          onClick={() => copyToClip(tableRef)}
          ref={tableRef}
        >
          smart.garden.home@gmail.com
        </h1>
        <span className={ContactStyles.tooltiptext}>Click to copy</span>
      </div>
    </div>
  );
}

export default Contact;
