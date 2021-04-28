import React, {useState, useEffect} from 'react';
import api from './api';
import Card from './Card';

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
                return console.log('found dog');
            }) 
            return request;
        }
        fetchData();
    }, [match.params.id]);

    return (
       <div className="dog_detail">
           <Card newDog={newDog} />
       </div>
    )
}

export default DogDetail;
