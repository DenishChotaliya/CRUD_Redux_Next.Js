import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { editUserData } from "../Reducers/todoSlice";
import Navbar2 from "../compo/Navbar2";
// import Navbar2 from "../components/Navbar2";

const EditItem = ({ data }) => {
  const [itemName, setItemName] = useState(data);
  const router = useRouter();
  // console.log(itemName.id);
  const dispatch = useDispatch();


  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(editUserData(itemName))
    router.push("/")

  };

  console.log("GHello");
  return (
    <>
      <Navbar2 />
      <div className="py-5">
        <form className="flex flex-col gap-3">
          <input
            className="border border-slate-500 px-8 py-2 "
            type="text"
            placeholder="Name"
            value={itemName.name}
            onChange={(get) =>
              setItemName({ ...itemName, name: get.target.value })
            }
          />
          <input
            type="Password"
            placeholder="Password"
            className="border border-slate-500 px-8 py-2 "
            value={itemName.password}
            onChange={(get) =>
              setItemName({ ...itemName, password: get.target.value })
            }
          />
          <input
            type="tel"
            placeholder="Number"
            maxLength={10}
            className="border border-slate-500 px-8 py-2 "
            value={itemName.number}
            onChange={(get) =>
              setItemName({ ...itemName, number: get.target.value })
            }
          />
          <input
            type="text"
            placeholder="city"
            className="border border-slate-500 px-8 py-2 "
            value={itemName.city}
            onChange={(get) =>
              setItemName({ ...itemName, city: get.target.value })
            }
          />
          <div className="flex justify-center items-center">
            <button
              onClick={handleSubmit}
              className="bg-orange-400 font-bold  text-white py-3 px-6 w-fit"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const itemId = params.id;

  const response = await fetch(
    `https://658192d63dfdd1b11c43a201.mockapi.io/CRUD/` + itemId
  );
  const data = await response.json();
  console.log(data);
  return {
    props: {
      data,
    },
  };
}

export default EditItem;
