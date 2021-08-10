import React from 'react'
import './index.css'

const FirstBook = {
    title: "Great Stories for Children ",
    author: "Ruskin Bond",
    img: "https://images-eu.ssl-images-amazon.com/images/I/711hfHGE%2BcL._AC_UL200_SR200,200_.jpg"

}
const SecondBook = {
    title: "Word Power Made Easy",
    author: "Norman Lewis",
    img: "https://images-eu.ssl-images-amazon.com/images/I/818e%2Bfq7%2BBL._AC_UL200_SR200,200_.jpg"

}
const ThirdBook = {
    title: "Think Like a Monk",
    author: "Jay Shetty",
    img: "https://images-eu.ssl-images-amazon.com/images/I/81s6DUyQCZL._AC_UL200_SR200,200_.jpg",
}

function Bookstore() {
    return (
        <section className="booklist">
            <Book img={FirstBook.img} title={FirstBook.title} author={FirstBook.author} />
            {/*we have passed data in the object through the component using props*/}
            <Book img={SecondBook.img} title={SecondBook.title} author={SecondBook.author}></Book>
            <Book img={ThirdBook.img} title={ThirdBook.title} author={ThirdBook.author}></Book>

        </section>
    )
}

const Book = ({img,title,author}) => {
   // const {img, title,author} = props; // this is just another way to use props and depends upto the programmer 

    return (<article className='book'>
        <img src={img}></img>
        <h1>{title}</h1>
        <h3>{author}</h3>
    </article>
    );
}

export default Bookstore
