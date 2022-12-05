import React, { useState } from "react";
import Header from "./Header";
import InputItem from "./InputItem";
import GroceryList from "./GroceryList";
import { v4 as uuidv4 } from "uuid";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import NotMatch from "./pages/NotMatch";
import NavBar from "./Navbar";

const GroceryContainer = () => {
  const [groceryItems, setGroceryItems] = useState(getInitialGroceryItems());

  const handleChange = (id) => {
    setGroceryItems((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const deleteItem = (id) => {
    setGroceryItems([
      ...groceryItems.filter((item) => {
        return item.id !== id;
      }),
    ]);
  };

  const addGroceryItem = (title) => {
    const newItem = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setGroceryItems([...groceryItems, newItem]);
  };

  const setUpdate = (updatedTitle, id) => {
    setGroceryItems(
      groceryItems.map((item) => {
        if (item.id === id) {
          item.title = updatedTitle;
        }
        return item;
      })
    );
  };

  function getInitialGroceryItems() {
    const temp = localStorage.getItem("groceryItems");
    const savedGroceryItems = JSON.parse(temp);
    return savedGroceryItems || [];
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <div className="inner">
                <Header />
                <InputItem addItemProps={addGroceryItem} />
                <GroceryList
                  groceryItems={groceryItems}
                  handleChangeProps={handleChange}
                  deleteItemProps={deleteItem}
                  setUpdate={setUpdate}
                />
              </div>
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </>
  );
};

export default GroceryContainer;
