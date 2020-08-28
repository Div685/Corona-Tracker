import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({
  title,
  cases,
  active,
  isOrangeRed,
  isRed,
  total,
  ...props
}) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      } ${isOrangeRed && "infoBox--orange"}`}
    >
      <CardContent>
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>

        <h2
          className={`infoBox__cases ${isRed && "infoBox--red"} ${
            isOrangeRed && "infoBox--orange"
          } ${!isRed && !isOrangeRed && "infoBox__cases--selected"} `}
        >
          {cases}
        </h2>
        <Typography className="infoBox__total" color="textSecondary">
          {total} total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
