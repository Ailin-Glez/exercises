import { useState, useEffect } from "react";

function Cup({ drinkWater }) {
    const cup = 250

    const [isCupFilled, setIsCupFilled] = useState(false)
    const [value, setValue] = useState(0)

    const handleFill = () => {
        setIsCupFilled(!isCupFilled)
        drinkWater(value)
    }

    useEffect(() => {
        setValue(isCupFilled ? 250 : -250)
    }, [isCupFilled])

    return (
        <section className='glass-container'>
            <div className={isCupFilled ? `cup filled` : 'cup'} 
                onClick={handleFill}>
                <small>250ml</small>
            </div>
        </section>
    );
}

export default Cup;