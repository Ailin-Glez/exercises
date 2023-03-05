import { useEffect, useState } from 'react';
import './App.css'
import Cups from './Cups';

function App() {
    const totalWater = 2000
    const cup = 250
    const maxCups = totalWater / cup
    const [waterRemaining, setWaterRemaining] = useState(totalWater)
    const [percentage, setPercentage] = useState(0)

    const drinkWater = (cupAmount) => {
        setWaterRemaining(prev => prev + cupAmount)
    }

    useEffect(() => {
        setPercentage((1 - (waterRemaining / totalWater)) * 400)
    }, [waterRemaining])

    return (
        <div className='container'>
            {/* <h2>Drink Water</h2>
            <p>Goal: {totalWater / 1000}L</p> */}
                <span>{waterRemaining}ml</span>
                <span>remained</span>
        <div className='cup-container extra'>
            {waterRemaining !== totalWater 
                &&
            <div className='cup-container fill' style={{ 
                height: percentage,
                zIndex: '2'
                }}></div>
            }
            </div>
            <Cups cups={maxCups} drinkWater={drinkWater} />   
        </div>
)}

export default App
