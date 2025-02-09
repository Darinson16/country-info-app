import express, { Request, Response } from "express";
import cors from "cors";
import {
  getAvailableCountries,
  getBordersCountry,
  getCountryPopulation,
  getFlagURL,
} from "./services";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(cors());

app.get("/countries", async (req: Request, res: Response) => {
  try {
    const data = await getAvailableCountries();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching the countries" });
  }
});

app.get(
  "/country/info/:countryName/:countryCode",
  async (req: Request, res: Response) => {
    try {
      const { countryName, countryCode } = req.params;
      const [flagURL, bordersCountry, countryPopulation] = await Promise.all([
        getFlagURL(countryCode),
        getBordersCountry(countryCode),
        getCountryPopulation(countryName),
      ]);
      res.status(200).json({ bordersCountry, countryPopulation, flagURL });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "Error fetching the country info", error });
    }
  }
);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
