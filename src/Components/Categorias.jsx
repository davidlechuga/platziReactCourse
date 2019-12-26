import React from 'react'
import '../assets/styles/Components/Categories.scss'

const Categorias = ({children, title}) => (
    <div className="categories">
        <h3 className="categories__title"> {title} </h3>
        {children}
    </div>
)
export default Categorias