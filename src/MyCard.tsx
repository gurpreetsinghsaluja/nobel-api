import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import { Prize } from "./services/NobelPrizeService";
interface MyCardProps {
  prize: Prize;
}
const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
const MyCard: React.FC<MyCardProps> = ({ prize }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: 3,
        borderRadius: 2,
        m: 2,
        backgroundColor: "#FFFFFF",
      }}
      className="p-4"
    >
      <CardHeader
        title={
          <Typography variant="h6" component="h2" sx={{ fontWeight: 800 }}>
            {capitalizeFirstLetter(prize.category)}
          </Typography>
        }
        subheader={
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            {prize.year}
          </Typography>
        }
        sx={{
          color: "primary.contrastText",
          borderRadius: 2,
        }}
        className="text-center bg-green-100"
      />
      <CardContent
        sx={{
          color: "primary.contrastText",
          borderRadius: 2,
          minHeight: 300,
        }}
        className="bg-green-50"
      >
        <Typography variant="body2">
          <ol className="custom-list text-base">
            {prize.laureates
              ? prize.laureates.map((laureate, index) => (
                  <li key={index} style={{ paddingBottom: "10px" }}>
                    {laureate.firstname ? laureate.firstname : ""}
                    {laureate.surname ? ` ${laureate.surname}` : ""}

                    <p className="text-xs">
                      <b>Motivation:</b>{" "}
                      {laureate.motivation ? laureate.motivation : ""}
                    </p>
                  </li>
                ))
              : ""}
          </ol>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MyCard;
