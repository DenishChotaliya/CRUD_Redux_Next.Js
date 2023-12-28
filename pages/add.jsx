import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { addUserData, setLoading } from "./Reducers/todoSlice"; 
import { useDispatch, useSelector } from "react-redux";
import { PacmanLoader } from "react-spinners";
import Navbar2 from "./compo/Navbar2";
import Loder from "./Loder";

const AddItem = () => {
  const dispatch = useDispatch();
  const [itemName, setItemName] = useState({});
  const {isLoading } = useSelector((state) => state.todos);

  const router = useRouter();


  useEffect(()=>{
    setTimeout(() => {
      dispatch(setLoading(false))
    }, "3000");
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(addUserData(itemName));
    router.push("/");
  };
  if (isLoading) {
    return (
      
       <Loder/>
    
    );
  }


  return (
    <div>
      <Navbar2 />
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
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
        <button
          className="bg-orange-400 font-bold  text-white py-3 px-6 w-fit"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddItem;
