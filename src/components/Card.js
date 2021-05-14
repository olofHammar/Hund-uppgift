import React from 'react';

function Card({ newDog }) {
    return (
        <div className="wrapper">
         <div className="left">
            <img id="dog_detail_image" src={newDog.img} alt=''/>
         <div>
            <h4>{newDog.name}</h4>
              <p id="breed">Breed: {newDog.breed}</p>
            </div>
        </div>
        <div className="right">
            <div className="info">
                <h3>About</h3>
                <div className="info_data">
                     <div className="data">
                        <h4>Age</h4>
                        <p>{newDog.age} years old</p>
                     </div>
                     <div className="data">
                       <h4>Chipnumber </h4>
                        <p>{newDog.chipNumber}</p>
                  </div>
                </div>
            </div>
          
          <div className="owner">
                <h3>Owner</h3>
                <div className="owner_data">
                     <div className="data">
                        <h4>Name</h4>
                        <p>{newDog.owner.name} {newDog.owner.lastName}</p>
                     </div>
                     <div className="data">
                       <h4>Phone</h4>
                        <p>{newDog.owner.phoneNumber}</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Card
