import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import VideoCard from '../components/cards/VideoCard';
import PdfPreview from '../components/cards/PdfPreview';
import Video from '../../assets/images/draw-video.png';
import NotFound from './NotFound';

const VideoPlayer = (props) => {
  const { institute, location } = props;
  const str = location.pathname.replace(/\/player\//g, '');
  const [video] = institute.videos.filter((video) => video._id === str);
  // console.log(institute.videos);
  const [error, setError] = useState(video?.url == null);

  if (error) {
    return <NotFound />;
  }

  return (
    <section className='VideoPlayer'>
      <ReactPlayer
        className='VideoPlayer--player'
        controls
        url={video?.url}
        width='60vw'
        height='70vh'
        // onReady={() => { console.log('onReady callback'); }}
        // onStart={() => { console.log('onStart callback'); }}
        // onPause={() => { console.log('onPaused callback'); }}
        // onEnded={() => { console.log('onEnded callback'); }}
        onError={() => setError(true)}
      />
      <div className='VideoPlayer__preview'>
        <VideoCard videoPreview={Video} />
        <div className='border-thin border-top' />
        <VideoCard videoPreview={Video} />
        <div className='border-thin border-top' />
        <VideoCard videoPreview={Video} />
        <div className='border-thin border-top' />
        <VideoCard videoPreview={Video} />
        <div className='border-thin border-top' />
      </div>
      <div className='VideoPlayer__info'>
        <div className='column-2'>
          <h1 className='VideoPlayer__info--title'>{video?.name || 'Video name'}</h1>
          <div className='VideoPlayer__info--actions column-2 btn-group v-start'>
            <button type='button' className='btn btn-danger'>
              <i className='fas fa-arrow-left' />
              {' '}
              Anterior
            </button>
            <button type='button' className='btn btn-primary'>
              Siguiente
              {' '}
              <i className='fas fa-arrow-right' />
            </button>
          </div>
        </div>

        <div className='VideoPlayer__info--description'>
          <p>{video?.description || 'Video description'}</p>
        </div>

        <PdfPreview name={video?.name} />
      </div>
    </section>
  );

};

const mapStateToProps = (state) => {
  return {
    institute: state.institute,
  };
};

VideoPlayer.propTypes = {
  institute: PropTypes.object,
};

export default connect(mapStateToProps, null)(VideoPlayer);
