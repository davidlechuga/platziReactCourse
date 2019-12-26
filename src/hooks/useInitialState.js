//custom hook
import React, { useEffect, useState } from 'react'

const useInitialState = (API) => {
    const [videos, setVideos] = useState([]);
        useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setVideos(data))
        }, []);
    return videos
    // console.log(videos);
}

export default useInitialState