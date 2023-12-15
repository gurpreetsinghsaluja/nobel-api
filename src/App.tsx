import { useEffect, useState } from "react";
import "./App.css";
import MyCard from "./MyCard";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { fetchPrizes, Prize } from "./services/NobelPrizeService";
import Grid from "@mui/material/Grid";
import Filters from "./Filters";
import InfiniteScroll from "react-infinite-scroll-component";
import Typography from "@mui/material/Typography";

function App() {
  const [prizes, setPrizes] = useState<Prize[]>([]);
  const [selectedYearRange, setSelectedYearRange] = useState<number[]>([
    2015, 2017,
  ]);
  const [filteredPrizes, setFilteredPrizes] = useState<Prize[]>([]);
  const [yearRange, setYearRange] = useState<number[]>([2010, 2023]);
  const [displayCount, setDisplayCount] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPrizes(-1, -1);
        setPrizes(data);
        const years = data.map((prize) => parseInt(prize.year));
        const minYear = Math.min(...years);
        const maxYear = Math.max(...years);
        setYearRange([minYear, maxYear]);
        // console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    filterPrizes(prizes, selectedYearRange);
  }, [selectedYearRange, prizes]);

  const filterPrizes = (prizesData: Prize[], yearRange: number[]) => {
    const filtered = prizesData.filter(
      (prize) =>
        parseInt(prize.year) >= yearRange[0] &&
        parseInt(prize.year) <= yearRange[1]
    );
    setFilteredPrizes(filtered);
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        className="App p-4"
        style={{
          backgroundColor: theme.palette.background.default,
          minHeight: "100vh",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            paddingBottom: "5px",
          }}
        >
          Nobel Prize List by Gurpreet
        </Typography>
        <Filters
          yearRange={yearRange}
          selectedYearRange={selectedYearRange}
          onYearRangeChange={setSelectedYearRange}
        />
        <InfiniteScroll
          dataLength={displayCount}
          next={() => setDisplayCount(displayCount + 6)}
          hasMore={displayCount < filteredPrizes.length}
          loader={<h4>Loading...</h4>}
        >
          <Grid container spacing={2}>
            {filteredPrizes.slice(0, displayCount).map((prize) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={prize.year + prize.category}
              >
                <MyCard prize={prize} />
              </Grid>
            ))}
          </Grid>
        </InfiniteScroll>
      </div>
    </ThemeProvider>
  );
}

export default App;
