import React, { useState } from 'react';
import { connect } from 'react-redux';

const Accordion = (props) => {
  const { icon, title, description, background } = props;
  const [active, setActive] = useState(false);

  return (
    <div className={`accordion accordion-${background}`}>
      <div role='presentation' className='accordion__header' onClick={() => setActive(!active)}>
        <span className='accordion__header--title'>
          {icon && <i className={icon} /> }
          {title}
        </span>
        <span className='accordion__header--icon'>
          <i className={`fas fa-${active ? 'times' : 'plus'}`} />
        </span>
      </div>
      <div className={`accordion__body ${active ? 'visible' : 'unseen'}`}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default connect(null, null)(Accordion);
