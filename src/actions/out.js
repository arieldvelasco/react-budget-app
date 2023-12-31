// React Router Dom Imports
import { redirect } from "react-router-dom";

// Helpers
import { deleteItem } from "../helpers";
import { toast } from "react-toastify";

export async function logoutAction () {
    // delete user
    deleteItem({ key: "userName" });

    toast.success("You've deleted your account");

    // return redirect
    return redirect("/");
}