import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import VideoCard from '../components/cards/VideoCard';
import PdfPreview from '../components/cards/PdfPreview';
import Video1 from '../../assets/images/video1.jpg';
import Video2 from '../../assets/images/video2.jpg';
import Video3 from '../../assets/images/video5.jpg';
import Video4 from '../../assets/images/video6.jpg';

const VideoPlayer = (props) => {
  const { institute, location } = props;
  const str = location.pathname.replace(/\/player\//g, '');
  const [video] = institute.videos.filter((video) => video._id === str);
  // console.log(institute.videos);
  return (
    <section className='VideoPlayer'>
      <ReactPlayer
        className='VideoPlayer--player'
        controls
        url={video?.url || 'https://youtu.be/uWdncyCvSwQ'}
        width='60vw'
        height='70vh'
        // onReady={() => { console.log('onReady callback'); }}
        // onStart={() => { console.log('onStart callback'); }}
        // onPause={() => { console.log('onPaused callback'); }}
        // onEnded={() => { console.log('onEnded callback'); }}
        // onError={() => { console.log('onError callback'); }}
      />
      <div className='VideoPlayer__preview'>
        <VideoCard videoPreview={Video1} />
        <div className='border-thin border-top' />
        <VideoCard videoPreview={Video2} />
        <div className='border-thin border-top' />
        <VideoCard videoPreview={Video3} />
        <div className='border-thin border-top' />
        <VideoCard videoPreview={Video4} />
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

        <PdfPreview />
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
