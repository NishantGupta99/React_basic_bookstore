import React from 'react'
import './index.css'

function Bookstore() {
    return (
       <section className="booklist">
         <Book /> 
         <Book /> 
         <Book /> 
         <Book /> 
         <Book />         
       </section>
    )
}

const Book = () => {
    return <article>
        <Img />
        <Title/>
        <Author/>
         </article>
}
const Img = () => <img src="https://images-eu.ssl-images-amazon.com/images/I/711hfHGE%2BcL._AC_UL200_SR200,200_.jpg" alt=""></img>
const Title = () => <h1>Great Stories for Children </h1>
const Author = () => <h3 style={{color:'#617d98', fontSize:'0.75rem', marginTop:"0.25rem" }} >Ruskin Bond </h3>
export default Bookstore
