import data from "./Day3P1data.json";
import Button from "./Button";
import RestaurantCard from "./RestaurentCard";
import { useState } from "react";

const RestaurantDetails = (props) => {
  // console.log(dataw);
  const [filterStarState, setFiltereStarState] = useState(0);
  const [filterPayment, setFilterPayment] = useState(null);
  const [type, setType] = useState(null)
  let filteredData = data.filter((el) => {
    if (+el.rating > filterStarState) {
      // console.log(el.rating);
      return el;
    }
  });

  const filteredData1 = filteredData.filter((el) => {
    if (filterPayment === null) {
      return el;
    }
    if (filterPayment === "cash" && el.payment_methods.cash) {
      return el;
    }
    if (
      filterPayment === "card" &&
      el.payment_methods.cash &&
      el.payment_methods.card
    ) {
      return el;
    }
    if (
      filterPayment === "all" &&
      el.payment_methods.cash &&
      el.payment_methods.card &&
      el.payment_methods.upi
    ) {
      return el;
    }
  });

  const ratingClickHandler = (event) => {
    console.log(event);
    if (event[0] === "1") {
      setFiltereStarState(1);
    }
    if (event[0] === "2") {
      setFiltereStarState(2);
    }
    if (event[0] === "3") {
      setFiltereStarState(3);
    }
    if (event[0] === "4") {
      setFiltereStarState(4);
    }
  };

  const paymentClickHandler = (event) => {
    // console.log(event)
    if (event === "cash") {
      setFilterPayment("cash");
    }
    if (event === "card") {
      setFilterPayment("card");
    }
    if (event === "all") {
      setFilterPayment("all");
    }
  };
  // console.log(filteredData);

  const sortTypeHandler = (event) => {
    if(event === 'H2L') {
      setType('H2L')
    }
    if(event === 'L2H') {
      setType('L2H')
    }
  }
  return (
    <>
      <h1>Restaurent</h1>
      <Button text="1 Star" onClick={ratingClickHandler} />
      <Button text="2 Star" onClick={ratingClickHandler} />
      <Button text="3 Star" onClick={ratingClickHandler} />
      <Button text="4 Star" onClick={ratingClickHandler} />
      <Button text="cash" onClick={paymentClickHandler} />
      <Button text="card" onClick={paymentClickHandler} />
      <Button text="all" onClick={paymentClickHandler} />
      <Button text="L2H"  onClick={sortTypeHandler}/>
      <Button text="H2L"  onClick={sortTypeHandler}/>
      <RestaurantCard data={filteredData1} sortType={type}/>
    </>
  );
};

export default RestaurantDetails;
