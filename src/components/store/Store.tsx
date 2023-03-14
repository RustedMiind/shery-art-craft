import axios, { AxiosResponse } from "axios";
import { Route, Routes } from "react-router-dom";
import ItemCard from "./card/ItemCard";
import "./store.css";
import { useEffect, useState } from "react";
import Popup from "./popup/Popup";
type dataType = {
  id: number;
  name: string;
  artists: string;
  category: string;
  image: string[];
  price: number;
}[];
type propsType = {
  setNav: (arg: number) => void;
  search: string;
  category: string;
};
type ShowItem = {
  id: number;
  name: string;
  artists: string;
  image: string[];
  price: number;
};
function Store(props: propsType) {
  useEffect(() => {
    props.setNav(0);
    axios.get<dataType>(`/data/items.json`).then((response) => {
      if (response.status === 200) {
        setData(response.data);
      }
    });
  }, []);
  const [data, setData] = useState<dataType | undefined>(undefined);
  const [card, setCard] = useState<ShowItem>({
    id: 0,
    name: "",
    artists: "",
    image: ["string"],
    price: 0,
  });
  function handleItem(id: number) {
    setCard(
      data && data[id]
        ? data[id]
        : {
            id: 0,
            name: "Item not found, it might be deleted, go back to store page and choose from existing items.",
            artists: "Shery Art Craft",
            category: "",
            image: [
              "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Error.svg/1200px-Error.svg.png",
            ],
            price: 404,
          }
    );
  }
  function handlePopup(data: ShowItem) {
    setCard(data);
  }
  return (
    <div className="store">
      <Routes>
        <Route
          path=""
          element={
            <div className="items">
              {data
                ?.filter((item) => {
                  if (item.category.includes(props.category)) {
                    if (
                      item.name
                        .toLowerCase()
                        .includes(props.search.toLowerCase())
                    ) {
                      return true;
                    } else if (
                      item.artists
                        .toLowerCase()
                        .includes(props.search.toLowerCase())
                    ) {
                      return true;
                    }
                  }
                  return false;
                })
                .map((item) => {
                  return (
                    <ItemCard
                      handlePopup={handlePopup}
                      id={item.id}
                      artists={item.artists}
                      image={item.image}
                      name={item.name}
                      price={item.price}
                    />
                  );
                })}
            </div>
          }
        />
        <Route
          path="item/:id"
          element={<Popup card={card} handleItem={handleItem} />}
        />
      </Routes>
    </div>
  );
}

export default Store;
