import { Button, Card } from "react-bootstrap";
import CardsData from "./CardsData";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";

const Cards = () => {
  const data = CardsData;
  // console.log(data);

  const dispatch = useDispatch();

  const send = (e) => {
    // console.log(e)
    dispatch(ADD(e));
  }



  return (
    <div className="container mt-3">
      <div className="row d-flex justify-content-center align-items-center">
        {data.map((ele, id) => {
          return (


            <Card className="mx-2 mt-4 card_style" style={{ width: "22rem", border: "none" }} key={id}>
              <Card.Img variant="top" src={ele.imgdata} className="mt-3" style={{ height: "16rem", }} />
              <Card.Body>
                <Card.Title>{ele.rname}</Card.Title>
                <Card.Text>
                  price: ₹ {ele.price}
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Button onClick={() => send(ele)}
                    variant="primary" className="col-lg-12" >Add to Cart</Button>
                </div>
              </Card.Body>
            </Card>

          )
            ;
        })}
      </div>
    </div>
  );
};

export default Cards;
