import React from 'react';
import arrow from '../../../images/homeImg/arrow.png';


export function Offer({ item, setShowContent, setOpen, open, itemId }) {

    const isOpen = itemId === open;
    function handleShowContent(item) {
        setShowContent(item);
        setOpen(isOpen ? null : itemId);
    }
    return (
        <li onClick={() => handleShowContent(item)} className={`liBody ${isOpen ? 'rounded-2xl bg-[#CDCFD51A] px-5 py-4' : ''}  `}><fieldset><img src={item.icons} alt={item.title} /><b>{item.title}</b></fieldset>
            {isOpen && <p>
                <article>{item.article}</article>
                <strong>Keep Learning  <img src={arrow} alt='arrow' /></strong>
            </p>}
        </li>


    )
}

