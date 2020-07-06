import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MaterialAccordion(props) {

  const { id, title, videos, archives, videoName, fileName, disable } = props;

  const [collapse, setCollapse] = useState(true);

  return (
    <div className='MaterialAccordion background-white border-thin'>

      <div className='MaterialAccordion__header'>
        <span role='presentation' className='MaterialAccordion__header--title' onClick={() => setCollapse(!collapse)}>{title}</span>
        <div className='MaterialAccordion__header--info right'>
          <span className='text-gray-600 center'>
            {videos}
            {' '}
            videos
          </span>
          <span className='text-gray-600'>
            {archives}
            {' '}
            archivos
          </span>
          <button type='button' className={`btn-link text-${collapse ? 'seconday' : 'danger'}`} onClick={() => setCollapse(!collapse)}>
            <i className={`fas fa-${collapse ? 'plus' : 'times'}`} />
          </button>
        </div>
      </div>

      <div className={`MaterialAccordion__body ${collapse ? 'unseen' : 'viseble'}`}>
        {!disable && (
          <Link to={`/player/${id}`} className='grid body--video column-3 border-thin border-bottom'>
            <span className='text-success'><i className='fas fa-play-circle' /></span>
            <span>{videoName}</span>
            <span className='right text-gray-600'>10:02 min</span>
          </Link>
        )}
        {disable && (
          <div disabled className='body--video column-3 border-thin border-bottom'>
            <span className='text-success'><i className='fas fa-play-circle' /></span>
            <span>{videoName}</span>
            <span className='right text-gray-600'>10:02 min</span>
          </div>
        )}

        <div className='body--file column-3 border-thin border-bottom'>
          <span className='text-danger'><i className='fas fa-file-alt' /></span>
          <span>{fileName}</span>
          <span className='right text-gray-600'>2 pag</span>
        </div>
      </div>

      {/* <div className="MaterialAccordion__footer"></div> */}

    </div>
  );
}
