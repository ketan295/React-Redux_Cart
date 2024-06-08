import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, Table } from "react-bootstrap";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { DELETE } from "../redux/actions/action";

const Header = () => {
  const [price, setPrice] = useState(0);
  console.log(price);

  const getdata = useSelector((state) => state.cartreducer.carts);
  // console.log(getdata);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id) => {
    dispatch(DELETE(id));
  };

  const total = () => {
    let price = 0;
    getdata.map((ele, k) => {
      price = ele.price *ele.qnty + price;
    });
    setPrice(price);
  };
  
   useEffect(() => {
    total();
  }, [total]);


  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" style={{ height: "3.5rem" }}>
        <Container>
          <NavLink to={"/"} className="text-decoration-none text-light mx-3">
            Add to Cart
          </NavLink>
          <Nav className="me-auto">
            <NavLink to={"/"} className="text-decoration-none text-light">
              Home
            </NavLink>
          </Nav>
          <Badge
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            badgeContent={getdata.length}
            color="primary"
          >
            <FaShoppingCart
              className="text-light"
              style={{ fontSize: 25, cursor: "pointer" }}
            />
          </Badge>
        </Container>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {getdata.length ? (
            <div className="card_details" style={{ width: "24rem" }}>
              <Table>
                <thead>
                  <tr>
                    <td className="text-center photo">
                      <strong>photo</strong>
                    </td>
                    <td className="text-center">
                      <strong>Restaurant Name</strong>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {getdata.map((e) => {
                    return (
                      <>
                        <tr className="smallMenu">
                          <td>
                            <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                              <img
                                src={e.imgdata}
                                alt=""
                                style={{ width: "7rem", height: "7rem" }}
                              />
                            </NavLink>
                          </td>
                          <td>
                            <p>{e.rname}</p>
                            <p>Price : ₹ {e.price}</p>
                            <p>Quantity : ₹ {e.qnty}</p>
                            <p
                              style={{
                                color: "red",
                                fontSize: 20,
                                cursor: "pointer",
                              }}
                            >
                              <i
                                className="fas fa-trash smalltrash"
                                onClick={() => dlt(e.id)}
                              ></i>
                            </p>
                          </td>
                          <td
                            className="mt-5"
                            style={{
                              color: "red",
                              fontSize: 20,
                              cursor: "pointer",
                            }}
                          >
                            <p>
                              <i
                                className="fas fa-trash largetrash"
                                onClick={() => dlt(e.id)}
                              ></i>
                            </p>
                          </td>
                        </tr>
                      </>
                    );
                  })}

                  <p className="text-center">Total : ₹ {price}</p>
                </tbody>
              </Table>
            </div>
          ) : (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ width: "18rem", padding: 10, position: "relative" }}
            >
              <i
                className="fa fa-close smallClose"
                style={{
                  position: "absolute",
                  top: 2,
                  right: 20,
                  fontSize: 23,
                  cursor: "pointer",
                }}
                onClick={handleClose}
              ></i>
              <p style={{ fontSize: 22 }}>Your Cart is Empty</p>
              <img
                src={require("./cart.gif")}
                alt=""
                className="emptyCart_img"
                style={{ width: "5rem", padding: 10 }}
              />
            </div>
          )}
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
