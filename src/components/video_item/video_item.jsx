import React, { memo } from 'react';
import styles from './video_item.module.css';

// memo 를 사용하는 이유
// video 를 선택하여 동영상과 리스트가 함께 보일 때
// 리스트에서 다른 video 를 선택하면
// 리스트 아이템들이 모두 리렌더링 되는 부분을 방지하고자 사용함
const VideoItem = memo(
  ({video, video: {snippet}, onVideoClick, display}) => {
    const displayType = display === 'list' ? styles.list : styles.grid;
    return (
      <li className={`${styles.container} ${displayType}`} onClick={() => onVideoClick(video)}>
        <div className={styles.video}>
          <img className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt="video thumbnail"/>
          <div className={styles.metadata}>
            <p className={styles.title} >{snippet.title}</p>
            <p className={styles.channel} >{snippet.channelTitle}</p>
          </div>
        </div>
      </li>
    )
  }
);

export default VideoItem;