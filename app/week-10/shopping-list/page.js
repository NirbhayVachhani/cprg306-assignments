"use client"

import React, { useEffect, useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import { addItem, getItems } from '../_services/shopping-list-service';
import { useUserAuth } from '../_utils/auth-context';

export default function Page() {

    const { user } = useUserAuth()

    const [items, setItems] = useState([])
    const [selectedItemName, setSelectedItemName] = useState('')

    const handleAddItem = (item) => {
        const id = addItem(user.uid, item)

        const newItem = {
            ...item,
            id
        }

        setItems([...items, newItem])
    }

    const handleItemSelect = itemName => {
        setSelectedItemName(itemName)
    }

    async function loadItems() {
        const items = await getItems(user.uid)
        setItems(items)
    }

    useEffect(() => {
        if (!user) return
        loadItems()
    }, [user])

    return (
        <main className='p-5'>
            {
                user === null ? <p>You need to sign in to view this page</p> : (
                    <>
                        <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
                        <div className='flex'>
                            <div className='w-1/2'>
                                <NewItem onAddItem={handleAddItem} />
                                <ItemList items={items} onItemSelect={handleItemSelect} />
                            </div>
                            <MealIdeas ingredient={selectedItemName} />
                        </div>
                    </>
                )
            }
        </main>
    )
}