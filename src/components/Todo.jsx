import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";

function Todo() {

    const [isHovered, setIsHovered] = useState(true);
    const [inputData, setInputData] = useState('')
    const [item, setItem] = useState(['Hello sir'])

    const addItem = () => {
        if (!inputData) {

        } else {
            setItem([...item, inputData])
            setInputData('')
        }
        console.log(item);
    }

    const deleteItem = (id) => {
        setItem((prev) => prev.filter((item2, itemindex) => itemindex != id))
        // setItems(prevItems => prevItems.filter((_, itemIndex) => itemIndex !== index));

    };

    const removeAll = () => {
        setItem([])
    }
    return (
        <>
            <div className=' w-[100vw] h-[100vh] bg-blue-900 flex justify-center'>
                <div className='pt-2 '>
                    <figure className='w[30vw] flex flex-col justify-center items-center'>
                        <img src="https://static.vecteezy.com/system/resources/previews/000/450/666/original/vector-files-icon.jpg" alt="img" className='w-16' />
                        <figcaption>Add your List here</figcaption>
                    </figure>

                    <div className="addItems flex mt-2 ">
                        <input type="text" placeholder=' ✏️Add items...' value={inputData}
                            onChange={(e) => setInputData(e.target.value)}
                            className='px-2 py-1 text-black' />
                        <IoMdAdd onClick={addItem}
                            className=' text-3xl bg-white text-black '
                        ></IoMdAdd>
                    </div>

                    <div className='mt-2'>
                        {
                            item.map((itemdata, index) => (
                                <div key={index} className='flex bg-white w-[230px] text-black justify-between py-1 px-3  transition duration-2000  hover:bg-green-700'>
                                    <h3>{itemdata}</h3>
                                    <FaRegTrashAlt className='mt-1' onClick={() => deleteItem(index)}></FaRegTrashAlt>
                                </div>
                            ))
                        }
                    </div>

                    <div className='hello'>

                        <button onMouseEnter={() => setIsHovered(false)} onMouseLeave={() => setIsHovered(true)} onClick={removeAll}
                            className='mt-4 bg-green-400 px-2 py-1 rounded'>
                            {isHovered ? 'Check-List' : 'RemoveList'}

                        </button>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Todo