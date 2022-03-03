import { createContext, useReducer, useState } from "react";
import Header from "./Components/Header/Header";
import ListOfMeals from "./Components/ListOfMeals/ListOfMeals";
import Modal from "./Components/Modal/Modal";
import MealsSummary from "./Components/MealsSummary/MealsSummary";
import "./App.css";
export const Context = createContext();

function App() {
  const reduceItems = (state, action) => {
    if (action.type === "ADD") {
      const newAmount =
        state.totalAmount + action.item.price * action.item.amount;

      const existingItemIndex = state.itemsList.findIndex(
        (e) => e.id === action.item.id
      );
      const existingItem = state.itemsList[existingItemIndex];
      let updatedItem;
      let updatedItemsList;

      if (existingItem) {
        updatedItem = {
          ...existingItem,
          amount: existingItem.amount + action.item.amount,
        };
        updatedItemsList = [...state.itemsList];
        updatedItemsList[existingItemIndex] = updatedItem;
      } else {
        updatedItemsList = [...state.itemsList, action.item];
      }
      console.log(state.itemsList);

      return { totalAmount: newAmount, itemsList: updatedItemsList };
    }
    if (action.type === "REMOVE") {
      const existingItemIndex = state.itemsList.findIndex(
        (e) => e.id === action.id
      );
      const existingItem = state.itemsList[existingItemIndex];

      const updatedTotalAmount = state.totalAmount - existingItem.price;
      let updatedItemsList = [];

      if (existingItem.amount === 1) {
        updatedItemsList = state?.itemsList?.filter((e) => e.id !== action.id);
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updatedItemsList = [...state.itemsList];
        updatedItemsList[existingItemIndex] = updatedItem;
      }

      return { totalAmount: updatedTotalAmount, itemsList: updatedItemsList };
    }
  };

  const addItems = (item) => {
    dispatchItems({ type: "ADD", item: item });
  };

  const removeItems = (id) => {
    dispatchItems({ type: "REMOVE", id: id });
  };
  const [modalVisibility, setModalVisibility] = useState(false);
  const [items, dispatchItems] = useReducer(reduceItems, {
    itemsList: [],
    totalAmount: 0,
  });
  console.log(items.itemsList);

  return (
    <div className="app">
      <Context.Provider
        value={{ addItems: addItems, removeItems: removeItems, items: items }}
      >
        <Header setModalVisibility={setModalVisibility} items={items} />
        {modalVisibility && (
          <Modal items={items} setModalVisibility={setModalVisibility} />
        )}
        <MealsSummary />
        <ListOfMeals />
      </Context.Provider>
    </div>
  );
}

export default App;
