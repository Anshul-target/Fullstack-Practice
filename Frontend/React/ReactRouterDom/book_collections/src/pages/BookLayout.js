// In React, useSearchParams is a hook provided by React Router that allows you to access and update URL search parameters within your components

import React from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'

export default function BookLayout() {
    const [searchParams, setSearchParams] = useSearchParams({ n: 3 })
    console.log(searchParams);
    const number = searchParams.get("n");

    return (
        <>
            <ul>
                <li>
                    <Link to="/books/0" state={{ price: 50 }}>Book 1</Link>
                </li>
                <li>
                    <Link to="/books/1" state={{ price: 70 }}>    Book 2</Link>
                </li>
                <li>
                    <Link to="/books/2"
                        state={{ price: 80 }}>Book 3</Link>
                </li>,
                <li>
                    <Link to={`/books/0`}
                        state={{ price: 90 }}>Book{number} </Link>
                </li>

            </ul>
            <Outlet context={{ title: "Welcome to the world of books" }} />
            <input type='number' value={number} onChange={(e) => setSearchParams({ n: e.target.value })}></input>
        </>

    )
}
