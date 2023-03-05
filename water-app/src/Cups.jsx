import Cup from "./Cup";

function Cups({ cups, drinkWater }) {
    const amountCups = Array.from({ length: cups }, (_, index) => index + 1);
    
    return (
        <section className="section-cups">
            {amountCups.map((number) => {
                return <Cup key={number} name={number} drinkWater={drinkWater}/>
            })} 
        </section>
    );
}

export default Cups;