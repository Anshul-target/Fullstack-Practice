import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { bookList } from './BookList';
export default function Books() {
    const location = useLocation()
    console.log(location);
    const context = useOutletContext();
    const obj = useParams();
    console.log(obj.id);
    console.log(bookList.filter(book => book.id == obj.id))
    return (
        <div>
            <h1>{context.title}</h1>
            <h2>{bookList.filter(book => book.id == obj.id)[0].name}
                <h3>Price ${location.state.price}</h3>
            </h2>
        </div>
    )
}
