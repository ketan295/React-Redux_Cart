import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ADD, DELETE, DECREMENT } from "../redux/actions/action";

const CardsDetail = () => {

  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  // console.log(data);

  const { id } = useParams();
  // console.log(id);

  const history = useNavigate();

  const getdata = useSelector((state) => state.cartreducer.carts);
  // console.log(getdata);

  const compare = () => {
    let compareData = getdata.filter((e) => {
      return e.id === e.id;
    });
    setData(compareData);
  };

  useEffect(() => {
    compare();
  }, [id]);

  const dlt = (id) => {
    dispatch(DELETE(id));
    history("/");
  };

  // add data

  const send = (e) => {
    // console.log(e)
    dispatch(ADD(e));
  }

  //remove one item from cart 

  const remove = (item) => {
    dispatch(DECREMENT(item));
  }

  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Items Detail Page</h2>
      </div>
      <section className="container mt-3">
        <div className="itemsdetails">
          {data.map((ele) => {
            return (
              <>
                <div className="items_img">
                  <img src={ele.imgdata} alt="" />
                </div>
                <div className="details">
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                          <p>
                            <strong>Restaurant:</strong> {ele.rname}
                          </p>
                          <p>
                            <strong>Price :</strong> ₹ {ele.price}
                          </p>
                          <p>
                            <strong>Dishes :</strong> {ele.address}
                          </p>
                          <div
                            className="d-flex justify-content-between align-items-center qntity"
                            style={{
                              width: 100,
                              cursor: "pointer",


                            }}>
                            <span><strong>Quantity&nbsp;&nbsp;:</strong></span>
                            <div className="d-flex justify-content-between " style={{ fontSize: 24, background: "#ddd", color: "#111", marginLeft:".5rem", }} >
                              <span className="pe-2 " onClick={ele.qnty <= 1 ? () => dlt(ele.id) : () => remove(ele)}>-</span>
                              <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                              <span className="ps-2" style={{ fontSize: 24 }} onClick={() => send(ele)}>+</span>
                            </div>

                          </div>
                          <p className="mt-4">
                            <strong>Total :</strong><span style={{fontWeight:600,}}> ₹ {ele.price * ele.qnty} </span> 
                          </p>
                        </td>
                        <td>
                          <p>
                            <strong>Rating : </strong>{" "}
                            <span
                              style={{
                                background: "green",
                                color: "%fff",
                                padding: "2px 5px",
                                borderRadius: "5px",
                              }}
                            >
                              {ele.rating} ★
                            </span>
                          </p>
                          <p>
                            <strong>Order Review :</strong>{" "}
                            <span>{ele.somedata}</span>
                          </p>
                          <p>
                            <strong>Remove :</strong>{" "}
                            <i
                              onClick={() => dlt(ele.id)}
                              className="fa-solid fa-trash"
                              style={{
                                color: "red",
                                fontsize: 20,
                                cursor: "pointer",
                              }}
                            ></i>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </>
            );
          })}
        </div>

      </section>
    </>
  );
};

export default CardsDetail;
