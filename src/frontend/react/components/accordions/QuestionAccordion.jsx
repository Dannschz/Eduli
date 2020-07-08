import React, { useState } from 'react';

export default function QuestionAccordion(props) {

  const { question, response } = props;
  const [collapse, setCollapse] = useState(true);

  return (
    <div className='QuestionAccordion background-white border-thin'>

      <div className='QuestionAccordion__header'>
        <span role='presentation' className='QuestionAccordion__header--question' onClick={() => setCollapse(!collapse)}>{question}</span>
        <button type='button' className={`right btn-link text-${collapse ? 'seconday' : 'danger'}`} onClick={() => setCollapse(!collapse)}>
          <i className={`fas fa-${collapse ? 'plus' : 'times'}`} />
        </button>
      </div>

      <div className={`QuestionAccordion__body ${collapse ? 'unseen' : 'viseble'}`}>
        <div className='body--response column-2 border-thin border-bottom'>
          <span className='text-success'><i className='fas fa-reply' /></span>
          <span>{response}</span>
        </div>

        <div className='body--response column-2 border-thin border-bottom'>
          <span className='text-success'><i className='fas fa-reply' /></span>
          <span>{response}</span>
        </div>
      </div>
    </div>
  );
}
