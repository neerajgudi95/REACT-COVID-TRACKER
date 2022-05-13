import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import "../CSS/InfoBox.css";

const InfoBox = ({ title, cases, total, active, ...props }) => {
  return (
    <Card
      className={`infoBox ${active && "infoBox-selected"}`}
      onClick={props.onClick}
    >
      <CardContent>
        <Typography color="textSecondary">{title}</Typography>
        <h2 className="infoBox__cases">{cases}</h2>
        <Typography color="textSecondary" className="infoBox__total">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoBox;
