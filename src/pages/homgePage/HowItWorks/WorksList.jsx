import React from 'react'

export function WorksList({ item, setNext, id, open, setOpen }) {

    const isOpen = id === open;
    function handleShowContent(item) {
        setNext(item);
        setOpen(isOpen ? null : id);
    }
    return (
        <li onClick={() => handleShowContent(item)} className={`liBody w-auto ${isOpen ? 'border-b border-b-[#E1E1E1] py-4' : ''}  `}>
            <p className='flex items-center gap-2 flex-row'>{isOpen && <b>{id}.</b>} <b>{item.title}</b></p>
            {
                isOpen && <p>
                    <article>{item.article}</article>
                </p>
            }
        </li >
    )
}
