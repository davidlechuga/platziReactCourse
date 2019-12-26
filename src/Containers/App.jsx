import React, {useState,useEffect} from 'react';
import Header from '../Components/Header';
import Search from '../Components/Search';
import Categories from '../Components/Categorias';
import Carousel from '../Components/Carousel';
import CarouselItem from '../Components/CarouselItem';
import Footer from '../Components/footer';
//custom hook
import useInitialState from '../hooks/useInitialState';
const API = 'http://localhost:3000/initialState'

import '../assets/styles/App.scss';


const App = () => {

    const initialState = useInitialState(API)
    return initialState.length === 0 ? <h1> loading </h1> : (
        <div className="App">
            <Header />
            <Search />

                { initialState.mylist.length > 0 && 
                    <Categories title="Mi lista">
                        <Carousel>
                         {initialState.mylist.map(item => 
                        <CarouselItem key={item.id} {...item}/>
                        )}    
                    </Carousel>
                </Categories>
                }

                <Categories title="Tendencias">
                    <Carousel>
                        {initialState.trends.map(item => 
                        <CarouselItem key={item.id} {...item}/>
                        )}    
                    </Carousel>
                </Categories>
        
                <Categories title="Originales">
                    <Carousel>
                        {initialState.originals.map(item => 
                        <CarouselItem key={item.id} {...item}/>
                        )}    
                    </Carousel>
                </Categories>

            <Footer />
        </div>
    )
}

export default App