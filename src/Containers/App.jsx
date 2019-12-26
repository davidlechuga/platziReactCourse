import React, {useState,useEffect} from 'react';
import Header from '../Components/Header';
import Search from '../Components/Search';
import Categories from '../Components/Categorias';
import Carousel from '../Components/Carousel';
import CarouselItem from '../Components/CarouselItem';
import Footer from '../Components/footer'


import '../assets/styles/App.scss';


const App = () => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/initialState')
            .then(response => response.json())
            .then(data => setVideos(data))
    }, []);
    // console.log(videos);
    
    return videos.length === 0 ? <h1> loading </h1> : (
        <div className="App">
            <Header />
            <Search />
            { videos.mylist.length > 0 && 
                <Categories title="Mi lista">
                    <Carousel>
                        <CarouselItem />
                    </Carousel>
                </Categories>
            }

            <Categories title="Tendencias">
                <Carousel>
                    {videos.trends.map(item => 
                        <CarouselItem key={item.id} {...item}/>
                    )}    
                </Carousel>
            </Categories>
        
            <Categories title="Originales">
                <Carousel>
                    <CarouselItem />
                </Carousel>
            </Categories>

            <Footer />
        </div>
    )
}

export default App