import React from 'react'
import { Item } from '../Item'

export const ItemList = ({items=[]}) => {


    return (
        <div className="d-flex flex-row flex-wrap bd-highlight mb-3 justify-content-center align-items-center">
            {items.map(item => <Item item={item}/> )}
        </div>
    )
}