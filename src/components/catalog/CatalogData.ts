
export interface Part {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  brand: string;
}

export const partsData: Part[] = [
  { id: 1, name: "OEM Air Filter", image: "photo-1581090464777-f3220bbe1b8b", price: 24.99, rating: 4.8, brand: "FilterMaster" },
  { id: 2, name: "Performance Brake Pads", image: "photo-1469041797191-50ace28483c3", price: 89.95, rating: 4.7, brand: "BrakeTech" },
  { id: 3, name: "Spark Plug Set", image: "photo-1498050108023-c5249f4df085", price: 32.50, rating: 4.9, brand: "SparkPro" },
  { id: 4, name: "Oil Filter", image: "photo-1485827404703-89b55fcc595e", price: 12.99, rating: 4.6, brand: "FilterMaster" },
  { id: 5, name: "Fuel Pump Assembly", image: "photo-1473091534298-04dcbce3278c", price: 119.99, rating: 4.5, brand: "FuelMax" },
  { id: 6, name: "Alternator", image: "photo-1488972685288-c3fd157d7c7a", price: 179.95, rating: 4.4, brand: "ElectroPro" },
  { id: 7, name: "Serpentine Belt", image: "photo-1518005020951-eccb494ad742", price: 29.95, rating: 4.6, brand: "BeltMaster" },
  { id: 8, name: "Water Pump", image: "photo-1487058792275-0ad4aaf24ca7", price: 64.99, rating: 4.7, brand: "CoolFlow" },
  { id: 9, name: "Radiator", image: "photo-1494891848038-7bd202a2afeb", price: 159.99, rating: 4.5, brand: "CoolFlow" },
  { id: 10, name: "Oxygen Sensor", image: "photo-1460574283810-2aab119d8511", price: 49.99, rating: 4.8, brand: "SensorTech" },
  { id: 11, name: "Thermostat", image: "photo-1485833077593-4278bba3f11f", price: 19.99, rating: 4.7, brand: "TempControl" },
  { id: 12, name: "Ignition Coil", image: "photo-1452960962994-acf4fd70b632", price: 42.50, rating: 4.6, brand: "SparkPro" },
];

export const categoriesData = [
  "Air Intake & Fuel Delivery",
  "Brakes & Components",
  "Electrical Components",
  "Engine Parts & Accessories",
  "Exhaust & Emission Systems",
  "Filters (Oil, Air, Fuel)",
  "Ignition Parts",
  "Suspension & Steering",
  "Transmission & Drivetrain"
];

export const brandsData = [
  "BrakeTech",
  "CoolFlow",
  "ElectroPro",
  "FilterMaster",
  "FuelMax",
  "SparkPro",
  "SensorTech",
  "TempControl",
  "BeltMaster"
];
