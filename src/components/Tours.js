import Card from "./Card";


function Tours({tours, removeTour}) {
    return ( 
     <div className="container">
        <div>
            <h2 className="title"> Plan With Sumit</h2>
        </div>
        <div className="cards">
            {
               tours.map((tour, index) => {
               return <Card  {...tour} removeTour = {removeTour} key={index}></Card>
               })
            }
        </div>
     </div>
    );
    
}

export default Tours;