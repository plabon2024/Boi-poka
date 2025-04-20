import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Banner from "../components/Banner";
import Books from "../pages/Books";
import Bookdetails from "../pages/Bookdetails";
import Wishlist from "../pages/Wishlist";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    

    children: [
      {
        index: true,
        path: "/",
        Component:Banner
        
      },
      {
        path:'books',
        Component:Books
      
      },
      {
        path:'/bookdetails/:id',
        loader:()=>fetch('books.json'),
        Component:Bookdetails
      
      },
      {
        path:'/readlist',
        loader:()=>fetch('books.json'),
        Component:Wishlist
      }


    ],


  },


]);
