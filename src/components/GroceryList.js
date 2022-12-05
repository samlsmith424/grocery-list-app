import React from "react";
import GroceryItem from "./GroceryItem";

const GroceryList = (props) => {
  return (
    <ul>
      {props.groceryItems.map((item) => (
        <GroceryItem
          key={item.id}
          item={item}
          handleChangeProps={props.handleChangeProps}
          deleteItemProps={props.deleteItemProps}
          setUpdate={props.setUpdate}
        />
      ))}
    </ul>
  );
};

export default GroceryList;
