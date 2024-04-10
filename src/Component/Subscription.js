import React, { useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-calendar/dist/Calendar.css";
import omg from "../Component/Images/omg.png";
import { toast } from 'react-toastify'; 
import axios from "axios";

const Subscription = () => {
  const [data, setData] = useState({
    subscriptionId: "1",
    selectedDaysWithTime: [{ day: "2024-04-15", minutes: "10" }],
  });
  const [count, setCount] = useState(0);
  const increment = () => {
    if (count < 30) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const subscribeApi = async () => {
    try {
      const axiosConfig = {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const res = await axios.post(
        `http://localhost:4200/api/admin/subscriptionss`,
        data,
        axiosConfig
      );
      console.log("id", data);
      if (res?.status === 200) {
        toast.success("Done");
      }
    } catch (err) {
      toast.error("error");
    }
  };
  const handleSubmit = () => {
    subscribeApi();
  };

  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-6 col-12">
            <h2 className="subs_heading text-center">
              Lorem ipsum dolor sit amet, consectetur
            </h2>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4  col-md-12 col-12 profile">
            <img src={omg} alt="img" />
          </div>

          <div className="col-lg-8 col-md-12 col-12 profile_content">
            <div className="profile_detail">
              <h5>Lorem ipsum Lorem</h5>
              <h4>Lorem ipsum dolor sit amet</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="product_pricing">
                <h4>$/-</h4>
              </div>
            </div>
            {/* {data.selectedDaysWithTime.map((item, index) => ( */}
            <div
              className="profile_detail"
              // key={index}
            >
              <div className="days_quantity">
                <span className="text">Number of Days</span>
                <span className="quantity-wrap">
                  <button className="minus_btn" onClick={decrement}>
                    -
                  </button>
                  <span className="result"> {count}</span>
                  <button className="plus_btn" onClick={increment}>
                    +
                  </button>
                </span>
              </div>

              <div className="subscription_panel">
                <div className="subscription_choose_wrapper">
                  <div className="delivery_day">
                    <h4>Select the days</h4>
                    <div className="checkbox_group_wrapper">
                      {/* <div className="custom_checkbox_tag">
                        <input
                          type="checkbox"
                          name="delivery-day"
                          id="mon"
                          value="0"
                          data-days="Mon"
                          class="delivery--days"
                        ></input>
                        <label for="Mon">Mon</label>
                      </div>
                      <div className="custom_checkbox_tag">
                        <input
                          type="checkbox"
                          name="delivery-day"
                          id="mon"
                          value="0"
                          data-days="Mon"
                          class="delivery--days"
                        ></input>
                        <label for="Mon">Tue</label>
                      </div>
                      <div className="custom_checkbox_tag">
                        <input
                          type="checkbox"
                          name="delivery-day"
                          id="mon"
                          value="0"
                          data-days="Mon"
                          class="delivery--days"
                        ></input>
                        <label for="Mon">Wed</label>
                      </div>
                      <div className="custom_checkbox_tag">
                        <input
                          type="checkbox"
                          name="delivery-day"
                          id="mon"
                          value="0"
                          data-days="Mon"
                          class="delivery--days"
                        ></input>
                        <label for="Mon">Thu</label>
                      </div>
                      <div className="custom_checkbox_tag">
                        <input
                          type="checkbox"
                          name="delivery-day"
                          id="mon"
                          value="0"
                          data-days="Mon"
                          class="delivery--days"
                        ></input>
                        <label for="Mon">Fri</label>
                      </div>
                      <div className="custom_checkbox_tag">
                        <input
                          type="checkbox"
                          name="delivery-day"
                          id="mon"
                          value="0"
                          data-days="Mon"
                          class="delivery--days"
                        ></input>
                        <label for="Mon">Sat</label>
                      </div> */}
                      <input type="date" />
                    </div>
                  </div>
                  <div className="payment_frequency">
                    <h4>Payment frequency</h4>
                    <div className="select_month">
                      <select className="select_month_option">
                        <option value="1">Select Month</option>
                        <option value="1">30 Days</option>
                        <option value="3">60 Days</option>
                        <option value="6">90 Days</option>
                        <option value="12">120 Days</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <p className="price_differ">Prices may differ as per month.</p>
              <div className="button_div">
                <button className="first_btn" onClick={handleSubmit}>
                  Subscribe
                </button>
              </div>
            </div>
            {/* ))} */}
          </div>
        </div>
      </div>
    </Root>
  );
};

export default Subscription;
const Root = styled.section`
  padding: 50px 160px;

  .subs_heading {
    font: italic 700 43px;
  }

  .profile {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 50%;
      object-fit: cover;
    }
  }

  .profile_content {
    box-shadow: 0 40px 60px rgba(0, 0, 0, 0.07);
    margin-top: 50px;
    padding: 20px 40px;
    .profile_detail {
      h5 {
        color: #9a9a9a;
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 20px;
      }
      h4 {
        font-size: 25px;
        font-weight: 700;
        margin-bottom: 25px;
        color: #333;
      }

      p {
        font-weight: 500;
        color: #acacac;
        margin-bottom: 30px;
        font-size: 14px;
      }
    }

    .profile_detail {
      .days_quantity {
        margin: 40px 0;
        display: flex;
        justify-content: space-between;
        .text {
          font-weight: 500;
          color: #acacac;
          margin-bottom: 30px;
          font-size: 14px;
        }
        .quantity-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 5px 20px;
          background-color: #eaf9f5;
          border-radius: 8px;
          border: 1px solid #bbb;
          position: relative;
          margin-bottom: 30px;
          .minus_btn {
            background-color: transparent;
            border: none;
            cursor: pointer;
            font-size: 18px;
            color: #00b2a2;
          }
          .result {
            background-color: #fff;
            border: 1px solid #bbb;
            border-radius: 8px;
            margin: 0 15px;
            padding: 4px 15px;
          }
          .plus_btn {
            background-color: transparent;
            border: none;
            cursor: pointer;
            font-size: 18px;
            color: #00b2a2;
          }
        }
      }

      .subscription_panel {
        .subscription_choose_wrapper {
          background-color: #fff;
          border-radius: 10px;
          padding: 20px;
          margin-top: 30px;
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.16);
          display: flex;
          flex-wrap: wrap;
          .delivery_day {
            width: 50%;
            h4 {
              font-size: 15px;
              font-weight: 700;
              margin-bottom: 30px;
              color: #333;
            }
            .checkbox_group_wrapper {
              flex-wrap: wrap;
              .custom_checkbox_tag {
                display: inline-block;
                position: relative;
                margin: 0 10px 20px 0;

                input[type="checkbox"] {
                  cursor: pointer;
                  position: absolute;
                  opacity: 0;
                  width: 100%;
                  height: 100%;
                  margin: 0;
                  padding: 0;
                }
                label {
                  width: 100%;
                  height: 100%;
                  font-weight: 700;
                  font-size: 11px;
                  padding: 8px 20px;
                  background-color: #fff;
                  border: 1px solid #e4e4e4;
                  border-radius: 20px;
                  transition: all 0.3s;
                  /* &:hover{
                    background-color: #c0edfa;
                  } */
                }
              }
              .custom_checkbox_tag input[type="checkbox"]:checked + label {
                background-color: #00b2a2;
                color: #ffffff;
              }
            }
          }
          .payment_frequency {
            width: 50%;
            h4 {
              font-size: 15px;
              font-weight: 700;
              margin-bottom: 30px;
              color: #333;
            }
            .select_month {
              .select_month_option {
                width: 100%;
                padding: 13px 15px;
                border: 1px solid #bbb;
                border-radius: 8px;
                font-weight: 700;
                font-size: 11px;
                font-family: "Raleway";
              }
            }
          }
        }
      }
      .price_differ {
        color: #333;
        font-weight: 500;
        margin-bottom: 30px;
        font-size: 13px;
        margin-top: 30px;
      }
      .button_div {
        margin-right: 30px;
        .first_btn {
          background-color: #00b2a2;
          color: #fff;
          font-weight: 700;
          border-radius: 23px;
          display: inline-block;
          padding: 10px 30px;
          transition: all 0.5s ease-out;
          border: 1px solid transparent;
          margin-right: 30px;
          &:hover {
            border: 1px solid #00b2a2;
            background-color: #fff;
            color: #333;
          }
        }
      }
    }
  }
  @media (max-width: 567px) {
    padding: 0;
    .profile img {
      height: 100%;
    }

    .profile_content .profile_detail .days_quantity {
      margin: 40px 0 0 0;
    }

    .profile_content
      .profile_detail
      .subscription_panel
      .subscription_choose_wrapper {
      margin-top: 0;
    }
    .profile_content
      .profile_detail
      .subscription_panel
      .subscription_choose_wrapper
      .delivery_day {
      width: 100%;
    }

    .profile_content
      .profile_detail
      .subscription_panel
      .subscription_choose_wrapper
      .payment_frequency {
      width: 100%;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    padding: 0;
    .profile img {
      height: 100%;
    }

    .profile_content .profile_detail .days_quantity {
      margin: 40px 0 0 0;
    }
    .profile_content
      .profile_detail
      .subscription_panel
      .subscription_choose_wrapper {
      margin-top: 0;
    }
    .profile_content
      .profile_detail
      .subscription_panel
      .subscription_choose_wrapper
      .delivery_day {
      width: 100%;
    }

    .profile_content
      .profile_detail
      .subscription_panel
      .subscription_choose_wrapper
      .payment_frequency {
      width: 100%;
    }
  }
`;
