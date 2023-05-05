import Main from "./components/main";
import ProductList from "./components/pages/ProductList";
import Poroduct from "./components/pages/components/Poroduct";

let routes=[
    { path:'/' , element: <Main />},
    { path:'/product-list' , element: <ProductList/>},
    { path:'/product-list/:Pid' , element: <Poroduct/>},
]
export default routes