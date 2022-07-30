import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Card from "./Card";
import Cartitem from "./Cartitem";
import {useState} from "react";
function App() {
  const [products,SetProduct]=useState([
{
  id:1,
  image:"https://th.bing.com/th/id/R.78c6ae24259cb110cbbe6b308731bc03?rik=ZbMGCkjIXxSHHg&riu=http%3a%2f%2fwww.hitechreview.com%2fgallery%2fnikon-d7000-dslr-camera%2fnikon_d7000_dslr_camera-_03.jpg&ehk=vTyXnpArUnVwm8r0quTccCuG9XMtddtf1vBjPH9VTn8%3d&risl=&pid=ImgRaw&r=0",
  title:"Sony",
  price:35000
},
{
  id:2,
  image:"https://johnlewis.scene7.com/is/image/JohnLewis/237493777?$rsp-pdp-port-1440$",
  title:"Nikon",
  price:25000
},

{
  id:3,
  image:"https://th.bing.com/th/id/OIP.13g1xvT172_pZIPPPpaqygHaG-?pid=ImgDet&rs=1",
  title:"Canon",
  price:55000
},

{
  id:4,
  image:"https://th.bing.com/th/id/OIP.CDHA95YVAw1U14fC4_UWjAHaHa?pid=ImgDet&rs=1",
  title:"Panasonic",
  price:45000
},

{
  id:5,
  image:"https://th.bing.com/th/id/OIP.3hcoRFn-B_Ezg9Ln4fc9igHaGb?pid=ImgDet&rs=1",
  title:"Kodak",
  price:25000
},

{
  id:6,
  image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Vintage_Olympus_OM-PC_(aka_OM-40)_35mm_SLR_Film_Camera%2C_Made_In_Japan%2C_Circa_1985_(13517132323).jpg/1180px-Vintage_Olympus_OM-PC_(aka_OM-40)_35mm_SLR_Film_Camera%2C_Made_In_Japan%2C_Circa_1985_(13517132323).jpg",
  title:"olympus",
  price:15000
}

  ]);
  const[cartitems,setcartitem]=useState([]);
  const[total,setTotal]=useState(0);

  let handleAddtocart=(id)=>{
  const productIndex=products.findIndex(obj=>obj.id===id)
  const product=products[productIndex]
  setcartitem([...cartitems,product]);
  setTotal(total+product.price);
  };

  let handleremovecart=(id)=>{
    const cartItemIndex = cartitems.findIndex(obj=>obj.id===id)
    setTotal(total-cartitems[cartItemIndex].price)
    cartitems.splice(cartItemIndex,1)
    setcartitem([...cartitems])
  }
  return(
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h3>Products</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8">
         <div className="row">
        {
          products.map((product)=>{
            return <Card cartitems={cartitems} data={product} handleAddtocart={handleAddtocart}/>
          })
         
        }
        </div>
        </div>
     
      <div className="col-lg-4">
        <div className="row">
        <div className="col-lg-12">
          <h3>Cart</h3>
          </div>
          </div>
          <div className="row">
          <div className="col-lg-12">
          <ol className="list-group list-group-numbered">
  {
    cartitems.map((item)=>{
return <Cartitem data={item} handleremovecart={handleremovecart}/>;
    })
  }
</ol>
</div>
<div className="col-lg-12">
  <h1>Total:{total}</h1>
</div>
<div className="col-lg-12">
  <button className="btn btn-primary"><h1>Buy now</h1></button>
</div>
          </div>
        </div>
      </div>
   </div>
  )
  
 
}

export default App;
