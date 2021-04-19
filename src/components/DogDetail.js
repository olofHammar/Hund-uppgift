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
            <h2 className="dog_name">{newDog.name}</h2> 
            <h3 className="dog_info" id="breed">Breed: {newDog.breed}</h3>
            <h3 className="dog_info">Age: {newDog.age}</h3>
            <h3 className="dog_info">Chipnumber: {newDog.chipNumber}</h3>
            </div>
            <div className="dog_right">
            <h1>Contact</h1>
            <h2>Name: {newDog.owner.name} {newDog.owner.lastName} </h2>
            <h2>Phone: {newDog.owner.phoneNumber}</h2>
            </div>
            </div>
        </div>
    )
}

export default DogDetail;
