import axios from "axios";

const BASE_URL = "https://api.nobelprize.org/v1/prize.json";

interface Laureate {
  id: string;
  firstname: string;
  surname: string;
  motivation: string;
  share: string;
}

export interface Prize {
  year: string;
  category: string;
  laureates: Laureate[];
}

interface NobelPrizeResponse {
  prizes: Prize[];
}

export const fetchPrizes = async (
  startYear: number,
  endYear: number
): Promise<Prize[]> => {
  let allPrizes: Prize[] = [];
  let attempts = 0;
  const maxAttempts = 2;

  const fetchData = async (year: number) => {
    try {
      const response = await axios.get<NobelPrizeResponse>(`${BASE_URL}`, {
        params: year !== -1 ? { year: year } : {},
      });
      allPrizes.push(...response.data.prizes);
    } catch (error) {
      if (attempts < maxAttempts) {
        attempts++;
        console.log("retry no.#", attempts);
        await fetchData(year);
      } else {
        console.error(
          `Error fetching Nobel Prize data for year ${year}:`,
          error
        );
        window.alert(
          "Failed to fetch Nobel Prize data. Please try again later."
        );
      }
    }
  };

  if (startYear === -1 && endYear === -1) {
    await fetchData(-1);
  } else {
    for (let year = startYear; year <= endYear; year++) {
      await fetchData(year);
    }
  }
  return allPrizes;
};
