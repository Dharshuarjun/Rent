function Card(props){
    return (
        <div className="col-lg-4">
        <div className="card" style={{width:"18rem",height:"360px"}}>
<img src={props.data.image} style={{width:"180px",height:"100px"}} className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title font-weight-bold text-danger">{props.data.title}</h5>
  <h5 className="card-price font-weight-bold text-success">{props.data.price}</h5>
  <p className="card-text"> Full HD Security Camera
  18MP Digital SLR Camera
  16GB  Memory Card
  </p>
 
  <button disabled={props.cartitems.some(obj=>obj.id===props.data.id)}onClick={()=>props.handleAddtocart(props.data.id)} className="btn btn-primary">Add to Cart</button>
  
</div>
</div>
        </div>
    )
}
export default Card;