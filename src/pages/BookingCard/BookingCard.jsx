import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import { useNavigate } from "react-router-dom";

const BookingCard = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBooking] = useState([]);
  const navigate = useNavigate();

  const url = `https://car-doctor-server-orpin-sigma.vercel.app/checkout?email=${user?.email}`;
  useEffect(() => {
    fetch(url, {
        method:'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('car-access-token')}`
        }
        
    })
      .then((res) => res.json())
      .then((data) => {
        if(!data.error)
        {
            setBooking(data)
        } else{
            // logout and then navigate
            navigate('/');
        }
    });
  }, [url, navigate]);

  const handleDelete = (id) => {
    const proceed = confirm("Are you want to delete");
    if (proceed) {
      fetch(`https://car-doctor-server-orpin-sigma.vercel.app/checkout/${id}`, {
        method: "DELETE",
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Delete successfully");
            const remaining = bookings.filter (booking => booking._id !== id)
            setBooking(remaining)
        }
        });
    }
  };

  const handleConfirm = id=>{
    fetch(`https://car-doctor-server-orpin-sigma.vercel.app/checkout/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify({status: 'confirm'})
    })
    .then (res => res.json())
    .then (data => {
        console.log(data);
        if (data.modifiedCount >0){
          const remaining = bookings.filter(booking =>booking._id !==id);
          const updated = bookings.find (booking=> booking._id=== id);
          updated.status = 'confirm';
          const newBookings = [updated, ...remaining]
          setBooking(newBookings)
        }
    })
  }




  return (
    <div className="overflow-x-auto w-full">
        <h1 className="text-3xl">Your booking: {bookings.length}</h1>
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>               
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Image</th>
            <th>Service</th>
            <th>Date</th>
            <th>Price</th>            
            <th>Status</th>            
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            bookings.map(booking=><BookingRow
            key={booking._id}
            booking={booking}
            handleDelete={handleDelete}
            handleConfirm={handleConfirm}
            >
            </BookingRow>          
        )}
          
        </tbody>
      </table>
    </div>
  );
};

export default BookingCard;
