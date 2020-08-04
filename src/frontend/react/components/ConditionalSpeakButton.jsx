import React, { Component } from 'react';
import PropType from 'prop-types';
import '../../scss/pages/activity.scss';

const canPlayAudioFormat = (mimeType) => {
  const audio = document.createElement('audio');
  if (audio) {
    return (typeof audio.canPlayType === 'function' && audio.canPlayType(mimeType) !== '');
  }
  return false;
};

export default class ConditionalSpeakButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.checkBrowser();
  }

  checkBrowser() {
    this.setState({ canPlay: canPlayAudioFormat('audio/ogg;codecs=opus') });
  }

  render() {
    const { onClick, loading, disabled } = this.props;
    const { canPlay } = this.state;
    return (canPlay) ? (
      <button
        type='button'
        disabled={disabled}
        onClick={onClick}
        className={loading ? 'btn speak-button loading' : 'btn speak-button'}
      >
        Escuchar
      </button>
    ) : (
      <button
        type='button'
        onClick={onClick}
        className='base--button speak-button speak-disabled'
        title='Only available on Chrome and Firefox'
        disabled
      >
        Escuchar
      </button>
    );
  }
}

ConditionalSpeakButton.defaultProps = {
  disabled: false,
  onClick: (s) => s,
  loading: false,
};

ConditionalSpeakButton.propTypes = {
  disabled: PropType.bool,
  onClick: PropType.func,
  loading: PropType.bool,
};
