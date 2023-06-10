import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const About = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [people, setPeople] = useState({});
  console.log("People from the state:", people);
  console.log("Params ID", params.id);
  useEffect(() => {
    const info = store.people.find((people) => {
      console.log("People", people);
      if (people.id === params.id) {
        return people;
      }
    });
    setPeople(info);
  }, []);

  return <div></div>;
};

export default About;
