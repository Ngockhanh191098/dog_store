import DogCart from "./DogCart";
import '../style/componentStyle/listDog.css';
import ListDogNav from "./ListDogNav";

const DogList = (props) => {
    const {listDog} = props;
    return ( 
        <>
            <ListDogNav />
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