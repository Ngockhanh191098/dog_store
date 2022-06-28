import DogCart from "./DogCart";
import '../style/componentStyle/listDog.css';

const DogList = (props) => {
    const {listDog} = props;
    return ( 
        <>
            <h2 style={{textAlign:"center",margin:"30px"}}>List Dogs</h2>
            <section className="doglist-container">
                {listDog.map((dog) => {
                    return (
                        <div key={dog.id}>
                            <DogCart
                                id={dog.id}
                                title={dog.title}
                                price={dog.price}
                                breed={dog.breed}
                                image={dog.image}
                                description={dog.description}
                            />
                        </div>
                    )
                })}
            </section>
        </>
     );
}
 
export default DogList;