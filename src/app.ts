// src/app.ts

import express from "express";
import pharmacyRoutes from "./routes/pharmacyRoutes";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/pharmacy", pharmacyRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

export default app;
