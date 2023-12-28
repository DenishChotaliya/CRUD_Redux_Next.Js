import { useEffect } from "react";
import { HiOutlineTrash, HiPencilAlt } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, deleteUserData } from "./Reducers/todoSlice";

import Navbar from "./compo/Navbar";
import Link from "next/link";
import Loder from "./Loder";

function TodoList() {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleDeleteTodo = (id) => {
    dispatch(deleteUserData(id));
  };

  if (isLoading) {
    return (
      
      <Loder/>
    
    );
  }

  return (
    <>
      <Navbar />
      {user?.map((todo) => {
        return (
          <div className="p-4 border items-start border-slate-300 my-3 flex justify-between ">
            <div key={todo.id}>
              <h1>Id: {todo.id}</h1>
              <h2>Name: {todo.name}</h2>
              <h3>Password: {todo.password}</h3>
              <h3>City: {todo.city}</h3>
            </div>
            <div className="flex gap-2  ">
              <Link href={`/edit/${todo.id}`}>
                <button>
                  <HiPencilAlt size={25} />
                </button>
              </Link>
              <button onClick={() => handleDeleteTodo(todo.id)}>
                <HiOutlineTrash size={25} color="red" />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default TodoList;
