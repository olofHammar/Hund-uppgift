import React, {useState, useEffect} from 'react'
import api from './api'

function DogDetail({match}) {
    
    const [newDog, setNewDog] = useState({
        name: '', 
        breed: '',
        owner: '',
    });

    useEffect(() => {
        async function fetchData() {
            const request = await api.get();
            request.data.map( dog => {
                if(dog.chipNumber === match.params.id) {
                    setNewDog(dog);
                }
            }) 
            return request;
        }
        fetchData();
    }, []);

    return (
        <div className="dog_detail">
            <div className="card">
            <div className="dog_left">
            <img className="dog_detail_image" src={newDog.img} alt={newDog.name}></img>
            <h2>{newDog.name}</h2> 
            </div>
            <div className="dog_right">
            <h2>Breed: {newDog.breed}</h2>
            <h2>Owner: {newDog.owner.name} </h2>
            </div>
            </div>
        </div>
    )
}

export default DogDetail;
