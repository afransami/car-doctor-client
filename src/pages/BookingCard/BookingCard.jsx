import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import BookingRow from "./BookingRow";

const BookingCard = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBooking] = useState([]);

  const url = `http://localhost:5000/checkout?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Service</th>
            <th>Date</th>
            <th>Price</th>            
            <th>Details</th>            
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            bookings.map(booking=><BookingRow
            key={booking._id}
            booking={booking}
            >
            </BookingRow>          
        )}
          
        </tbody>
      </table>
    </div>
  );
};

export default BookingCard;
