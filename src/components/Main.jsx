import React, { useEffect, useState } from "react";
import OpenMenu from "./openMenu";
import imgMenu from "../assets/menu_open.png";
import Content from "./content";
import dataJson from "../assets/dataJson.json";
import axios from "axios";

export const Main = () => {
  const [data, setData] = useState(dataJson);
  // const [load, setLoad] = useState(false);
  const [openMenu, setOpenMenu] = useState(true);
  const [radioButton, setRadioButton] = useState("1");
  const [changeForm, setChangeForm] = useState({
    circle: true,
    square: true,
  });
  const [changeColor, setChangeColor] = useState({
    red: true,
    green: true,
    yellow: true,
    blue: true,
  });
  const [changeDark, changeSetDark] = useState("1");

  // useEffect(() => {
  //   axios
  //     .get("https://62f64e81612c13062b4b535b.mockapi.io/inst")
  //     .then((res) => setData(res.data))
  //     .catch((e) => console.log("error", e))
  //     .finally(setLoad(true));
  // }, []);

  const onChangeColor = (e) => {
    setChangeColor({ ...changeColor, [e.target.value]: e.target.checked });
  };

  const onChangeForm = (e) => {
    setChangeForm({ ...changeForm, [e.target.value]: e.target.checked });
  };

  const onChangeDark = (e) => {
    setRadioButton(e.target.value);
    if (e.target.value !== "1") {
      changeSetDark(e.target.value == "2" ? true : false);
    } else changeSetDark("1");
  };

  if (data.length > 1) {
    return (
      <div className={"main_container "}>
        <p className={"text"}>Круги и квадраты, v.1.0 </p>
        <div>
          <img
            onClick={() => setOpenMenu(!openMenu)}
            className={"image"}
            src={imgMenu}
            alt="image"
          />
          <input
            className={"checkbox"}
            value={"circle"}
            type={"checkbox"}
            checked={changeForm.circle}
            onChange={onChangeForm}
          />
          <span className={"text_checkbox"}> круги </span>
          <input
            className={"checkbox"}
            value={"square"}
            type={"checkbox"}
            checked={changeForm.square}
            onChange={onChangeForm}
          />
          <span className={"text_checkbox"}> квадраты </span>
        </div>
        {openMenu && (
          <OpenMenu
            radioButton={radioButton}
            setRadioButton={setRadioButton}
            changeDark={changeDark}
            changeColor={changeColor}
            onChangeDark={onChangeDark}
            onChangeColor={onChangeColor}
          />
        )}
        <Content
          data={data}
          radioButton={radioButton}
          changeColor={changeColor}
          changeForm={changeForm}
          changeDark={changeDark}
        />
      </div>
    );
  }
};
