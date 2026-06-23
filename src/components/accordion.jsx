import { useState } from 'react'

function Accordion({ title, children }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='accordion'>
            <div className='accordion-header' onClick={() => setIsOpen(!isOpen)}>
                <h3>{title}</h3>
                <span style={{ transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s ease' }}>+</span>
            </div>
            <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                <div className='accordion-content-inner'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Accordion