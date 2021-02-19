// import logo from './logo.svg';
import styles from './app.module.css';
import { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDYON2MIYmjMDykKJVrRW46o2Pb6T7PAcY", requestOptions)
      .then(response => response.json())
      .then(result => {setVideos(result.items); console.log(result.items)})
      .catch(error => console.log('error', error));
    },[]);

  return (
    <div className={styles.app}>
      <SearchHeader />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;