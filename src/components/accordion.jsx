import { useState } from 'react'

function AccordionItem({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='accordion'>
            <div className='accordion-header' onClick={() => setIsOpen(!isOpen)}>
                <h3>{title}</h3>
                <span>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && (
                <div className='accordion-content'>
                    <p>{content}</p>
                </div>
            )}
        </div>
    )
}

export default AccordionItem