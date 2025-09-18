import React, { useState, useEffect } from "react";

const Meals = (props) => {
  const commons = [
    {
      "name": "Carrot",
      "calories": 41,
      "protein": 0.9,
      "carbs": 10,
      "fiber": 2.8,
      "fat": 0.2,
      "unitAmount": 10
    },
    {
      "name": "Beans (Green)",
      "calories": 31,
      "protein": 1.8,
      "carbs": 7,
      "fiber": 3.4,
      "fat": 0.1,
      "unitAmount": 10
    },
    {
      "name": "Potato",
      "calories": 77,
      "protein": 2,
      "carbs": 17,
      "fiber": 2.2,
      "fat": 0.1,
      "unitAmount": 10
    },
    {
      "name": "Spinach",
      "calories": 23,
      "protein": 2.9,
      "carbs": 3.6,
      "fiber": 2.2,
      "fat": 0.4,
      "unitAmount": 10
    },
    {
      "name": "Tomato",
      "calories": 18,
      "protein": 0.9,
      "carbs": 3.9,
      "fiber": 1.2,
      "fat": 0.2,
      "unitAmount": 10
    },
    {
      "name": "Broccoli",
      "calories": 34,
      "protein": 2.8,
      "carbs": 7,
      "fiber": 2.6,
      "fat": 0.4,
      "unitAmount": 10
    },
    {
      "name": "Cauliflower",
      "calories": 25,
      "protein": 1.9,
      "carbs": 5,
      "fiber": 2,
      "fat": 0.3,
      "unitAmount": 10
    },
    {
      "name": "Onion",
      "calories": 40,
      "protein": 1.1,
      "carbs": 9,
      "fiber": 1.7,
      "fat": 0.1,
      "unitAmount": 10
    },
    {
      "name": "Cabbage",
      "calories": 25,
      "protein": 1.3,
      "carbs": 6,
      "fiber": 2.5,
      "fat": 0.1,
      "unitAmount": 10
    },
    {
      "name": "Cucumber",
      "calories": 16,
      "protein": 0.7,
      "carbs": 3.6,
      "fiber": 0.5,
      "fat": 0.1,
      "unitAmount": 10
    },
    {
      "name": "Bell Pepper (Red)",
      "calories": 31,
      "protein": 1,
      "carbs": 6,
      "fiber": 2.1,
      "fat": 0.3,
      "unitAmount": 10
    },
    {
      "name": "Mushroom (White)",
      "calories": 22,
      "protein": 3.1,
      "carbs": 3.3,
      "fiber": 1,
      "fat": 0.3,
      "unitAmount": 10
    },
    {
      "name": "Full Egg",
      "calories": 155,
      "protein": 13,
      "carbs": 1.1,
      "fiber": 0,
      "fat": 11,
      "unitAmount": 50
    },
    {
      "name": "Egg White",
      "calories": 52,
      "protein": 11,
      "carbs": 0.7,
      "fiber": 0,
      "fat": 0.2,
      "unitAmount": 33
    },
    {
      "name": "Egg Yolk",
      "calories": 322,
      "protein": 16,
      "carbs": 3.6,
      "fiber": 0,
      "fat": 27,
      "unitAmount": 107
    },
    {
      "name": "Chicken Breast (Skinless)",
      "calories": 165,
      "protein": 31,
      "carbs": 0,
      "fiber": 0,
      "fat": 3.6,
      "unitAmount": 10
    },
    {
      "name": "Chicken Thigh (Skinless)",
      "calories": 209,
      "protein": 26,
      "carbs": 0,
      "fiber": 0,
      "fat": 10.9,
      "unitAmount": 10
    },
    {
      "name": "Beef (Lean)",
      "calories": 250,
      "protein": 26,
      "carbs": 0,
      "fiber": 0,
      "fat": 15,
      "unitAmount": 10
    },
    {
      "name": "Pork (Lean)",
      "calories": 242,
      "protein": 27,
      "carbs": 0,
      "fiber": 0,
      "fat": 14,
      "unitAmount": 10
    },
    {
      "name": "Lamb (Lean)",
      "calories": 294,
      "protein": 25,
      "carbs": 0,
      "fiber": 0,
      "fat": 21,
      "unitAmount": 10
    },
    {
      "name": "Fish (Salmon, Atlantic)",
      "calories": 208,
      "protein": 20,
      "carbs": 0,
      "fiber": 0,
      "fat": 13,
      "unitAmount": 10
    },
    {
      "name": "Fish (Tuna, Fresh)",
      "calories": 132,
      "protein": 28,
      "carbs": 0,
      "fiber": 0,
      "fat": 1,
      "unitAmount": 10
    },
    {
      "name": "Shrimp",
      "calories": 99,
      "protein": 24,
      "carbs": 0.2,
      "fiber": 0,
      "fat": 0.3,
      "unitAmount": 10
    },
    {
      "name": "Lentils (Cooked)",
      "calories": 116,
      "protein": 9,
      "carbs": 20,
      "fiber": 8,
      "fat": 0.4,
      "unitAmount": 10
    },
    {
      "name": "Chickpeas (Cooked)",
      "calories": 164,
      "protein": 9,
      "carbs": 27,
      "fiber": 7.6,
      "fat": 2.6,
      "unitAmount": 10
    },
    {
      "name": "Kidney Beans (Cooked)",
      "calories": 127,
      "protein": 9,
      "carbs": 23,
      "fiber": 6.4,
      "fat": 0.5,
      "unitAmount": 10
    },
    {
      "name": "Peas (Green, Cooked)",
      "calories": 84,
      "protein": 5,
      "carbs": 15,
      "fiber": 5,
      "fat": 0.4,
      "unitAmount": 10
    },
    {
      "name": "Apple",
      "calories": 52,
      "protein": 0.3,
      "carbs": 14,
      "fiber": 2.4,
      "fat": 0.2,
      "unitAmount": 10
    },
    {
      "name": "Banana",
      "calories": 89,
      "protein": 1.1,
      "carbs": 23,
      "fiber": 2.6,
      "fat": 0.3,
      "unitAmount": 10
    },
    {
      "name": "Orange",
      "calories": 47,
      "protein": 0.9,
      "carbs": 12,
      "fiber": 2.4,
      "fat": 0.1,
      "unitAmount": 10
    },
    {
      "name": "Mango",
      "calories": 60,
      "protein": 0.8,
      "carbs": 15,
      "fiber": 1.6,
      "fat": 0.4,
      "unitAmount": 10
    },
    {
      "name": "Grapes",
      "calories": 69,
      "protein": 0.7,
      "carbs": 18,
      "fiber": 0.9,
      "fat": 0.2,
      "unitAmount": 10
    },
    {
      "name": "Strawberries",
      "calories": 32,
      "protein": 0.7,
      "carbs": 8,
      "fiber": 2,
      "fat": 0.3,
      "unitAmount": 10
    },
    {
      "name": "Blueberries",
      "calories": 57,
      "protein": 0.7,
      "carbs": 14,
      "fiber": 2.4,
      "fat": 0.3,
      "unitAmount": 10
    },
    {
      "name": "Blackberries",
      "calories": 43,
      "protein": 1.4,
      "carbs": 10,
      "fiber": 5.3,
      "fat": 0.5,
      "unitAmount": 10
    },
    {
      "name": "Raspberries",
      "calories": 52,
      "protein": 1.2,
      "carbs": 12,
      "fiber": 6.5,
      "fat": 0.7,
      "unitAmount": 10
    },
    {
      "name": "Pineapple",
      "calories": 50,
      "protein": 0.5,
      "carbs": 13,
      "fiber": 1.4,
      "fat": 0.1,
      "unitAmount": 10
    },
    {
      "name": "Watermelon",
      "calories": 30,
      "protein": 0.6,
      "carbs": 8,
      "fiber": 0.4,
      "fat": 0.2,
      "unitAmount": 10
    },
    {
      "name": "Papaya",
      "calories": 43,
      "protein": 0.5,
      "carbs": 11,
      "fiber": 1.7,
      "fat": 0.3,
      "unitAmount": 10
    },
    {
      "name": "Guava",
      "calories": 68,
      "protein": 2.6,
      "carbs": 14,
      "fiber": 5.4,
      "fat": 1,
      "unitAmount": 10
    },
    {
      "name": "Pomegranate",
      "calories": 83,
      "protein": 1.7,
      "carbs": 19,
      "fiber": 4,
      "fat": 1.2,
      "unitAmount": 10
    },
    {
      "name": "Kiwi",
      "calories": 61,
      "protein": 1.1,
      "carbs": 15,
      "fiber": 3,
      "fat": 0.5,
      "unitAmount": 10
    },
    {
      "name": "Pear",
      "calories": 57,
      "protein": 0.4,
      "carbs": 15,
      "fiber": 3.1,
      "fat": 0.1,
      "unitAmount": 10
    },
    {
      "name": "Peach",
      "calories": 39,
      "protein": 0.9,
      "carbs": 10,
      "fiber": 1.5,
      "fat": 0.3,
      "unitAmount": 10
    },
    {
      "name": "Plum",
      "calories": 46,
      "protein": 0.7,
      "carbs": 11,
      "fiber": 1.4,
      "fat": 0.3,
      "unitAmount": 10
    },
    {
      "name": "Apricot",
      "calories": 48,
      "protein": 1.4,
      "carbs": 11,
      "fiber": 2,
      "fat": 0.4,
      "unitAmount": 10
    },
    {
      "name": "Cherry",
      "calories": 63,
      "protein": 1.1,
      "carbs": 16,
      "fiber": 2.1,
      "fat": 0.2,
      "unitAmount": 10
    },
    {
      "name": "Dragon Fruit",
      "calories": 50,
      "protein": 1.1,
      "carbs": 11,
      "fiber": 3,
      "fat": 0.1,
      "unitAmount": 10
    },
    {
      "name": "Lychee",
      "calories": 66,
      "protein": 0.8,
      "carbs": 17,
      "fiber": 1.3,
      "fat": 0.4,
      "unitAmount": 10
    },
    {
      "name": "Dates (Medjool)",
      "calories": 277,
      "protein": 1.8,
      "carbs": 75,
      "fiber": 6.7,
      "fat": 0.2,
      "unitAmount": 10
    },
    {
      "name": "Fig",
      "calories": 74,
      "protein": 0.8,
      "carbs": 19,
      "fiber": 2.9,
      "fat": 0.3,
      "unitAmount": 10
    },
    {
      "name": "Cantaloupe (Melon)",
      "calories": 34,
      "protein": 0.8,
      "carbs": 8,
      "fiber": 0.9,
      "fat": 0.2,
      "unitAmount": 10
    },
    {
      "name": "Honeydew Melon",
      "calories": 36,
      "protein": 0.5,
      "carbs": 9,
      "fiber": 0.8,
      "fat": 0.1,
      "unitAmount": 10
    },
    {
      "name": "Avocado",
      "calories": 160,
      "protein": 2,
      "carbs": 9,
      "fiber": 7,
      "fat": 15,
      "unitAmount": 10
    },
    {
      "name": "Coconut (Flesh)",
      "calories": 354,
      "protein": 3.3,
      "carbs": 15,
      "fiber": 9,
      "fat": 33,
      "unitAmount": 10
    },
    {
      "name": "Lemon",
      "calories": 29,
      "protein": 1.1,
      "carbs": 9,
      "fiber": 2.8,
      "fat": 0.3,
      "unitAmount": 10
    },
    {
      "name": "Lime",
      "calories": 30,
      "protein": 0.7,
      "carbs": 11,
      "fiber": 2.8,
      "fat": 0.2,
      "unitAmount": 10
    }
  ]
  const [foods, setFoods] = React.useState([]);
  const [fidx, setfidx] = useState(-1);

  const [requiredAmount, setRequiredAmount] = React.useState({
    calories: "1300",
    carbs: "162",
    protein: "65",
    fat: "43",
    fiber: "30"
  });

  const [results, setResults] = React.useState([]);
  const [options, setOptions] = useState([]);
  const handleChange = (index, field, value) => {
    if (field == "name") {
      setOptions(commons.filter((f) => f.name.toLowerCase().indexOf(value.toLowerCase()) > -1))
    }
    const updated = [...foods];
    updated[index][field] = value;
    setFoods(updated);
  };

  const handleRequiredChange = (field, value) => {
    setRequiredAmount({ ...requiredAmount, [field]: value });
  };

  const addRow = () => {
    setFoods([
      ...foods,
      { name: "", calories: "", carbs: "", protein: "", fat: "", fiber: "", unitAmount: "", maxUnit: "" }
    ]);
  };

  const removeRow = (index) => {
    const updated = foods.filter((_, i) => i !== index);
    setFoods(updated);
    setResults([]);
  };

  const calculateNutrients = (food, units) => {
    const multiplier = (parseFloat(food.unitAmount) / 100) * units;
    return {
      calories: parseFloat(food.calories || 0) * multiplier,
      carbs: parseFloat(food.carbs || 0) * multiplier,
      protein: parseFloat(food.protein || 0) * multiplier,
      fat: parseFloat(food.fat || 0) * multiplier,
      fiber: parseFloat(food.fiber || 0) * multiplier
    };
  };

  const findCombinations = () => {
    const required = {
      calories: parseFloat(requiredAmount.calories || 0),
      carbs: parseFloat(requiredAmount.carbs || 0),
      protein: parseFloat(requiredAmount.protein || 0),
      fat: parseFloat(requiredAmount.fat || 0),
      fiber: parseFloat(requiredAmount.fiber || 0)
    };

    let combos = [];

    const backtrack = (index, currentUnits, totals) => {
      if (
        totals.calories > required.calories ||
        totals.carbs > required.carbs ||
        totals.protein > required.protein ||
        totals.fat > required.fat ||
        totals.fiber > required.fiber
      ) {
        return;
      }
      if (index === foods.length) {
        const diff =
          Math.abs(totals.calories - required.calories) +
          Math.abs(totals.carbs - required.carbs) +
          Math.abs(totals.protein - required.protein) +
          Math.abs(totals.fat - required.fat) +
          Math.abs(totals.fiber - required.fiber);

          combos.push({ units: [...currentUnits], totals, diff });
        return;
      }

      const food = foods[index];
      const maxUnit = parseInt(food.maxUnit || 0);
      for (let u = 1; u <= maxUnit; u++) {
        const nut = calculateNutrients(food, u);
        backtrack(index + 1, [...currentUnits, u], {
          calories: totals.calories + nut.calories,
          carbs: totals.carbs + nut.carbs,
          protein: totals.protein + nut.protein,
          fat: totals.fat + nut.fat,
          fiber: totals.fiber + nut.fiber
        });
      }
    };

    backtrack(0, [], { calories: 0, carbs: 0, protein: 0, fat: 0, fiber: 0 });

    combos.sort((a, b) => a.diff - b.diff);

    setResults(combos.slice(0, 10)); // top 10 closest
  };

  const formatWithDiff = (value, required) => {
    const diff = value - required;
    const sign = diff >= 0 ? "+" : "";
    return `${value.toFixed(1)} (${sign}${diff.toFixed(1)})`;
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px", background: "white" }}>
      <h2>Food Nutrient Form</h2>

      <h3>Required Nutrients</h3>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
        {["calories", "carbs", "protein", "fat", "fiber"].map((nutrient) => (
          <label key={nutrient}>
            {nutrient[0].toUpperCase() + nutrient.slice(1)}:
            <input
              type="number"
              value={requiredAmount[nutrient]}
              onChange={(e) => handleRequiredChange(nutrient, e.target.value)}
              style={{ width: "80px", marginLeft: "5px" }}
            />
          </label>
        ))}
      </div>

      <table border="1" cellPadding="6" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Calories /100g</th>
            <th>Carbs /100g</th>
            <th>Protein /100g</th>
            <th>Fat /100g</th>
            <th>Fiber /100g</th>
            <th>Unit Amount (g)</th>
            <th>Max Unit</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {foods.map((food, index) => (
            <tr style={{ height: "36px" }} key={index}>
              <td style={{ padding: "0px", height: "36px" }}><input value={food.name} onChange={(e) => handleChange(index, "name", e.target.value)} style={{width: "100%", height: "100%"}} onFocus={() => setfidx(index)} /></td>
              <td style={{ padding: "0px", height: "36px" }}><input type="number" value={food.calories} onChange={(e) => handleChange(index, "calories", e.target.value)} style={{ width: "100%", height: "100%" }} /></td>
              <td style={{ padding: "0px", height: "36px" }}><input type="number" value={food.carbs} onChange={(e) => handleChange(index, "carbs", e.target.value)} style={{ width: "100%", height: "100%" }} /></td>
              <td style={{ padding: "0px", height: "36px" }}><input type="number" value={food.protein} onChange={(e) => handleChange(index, "protein", e.target.value)} style={{ width: "100%", height: "100%" }} /></td>
              <td style={{ padding: "0px", height: "36px" }}><input type="number" value={food.fat} onChange={(e) => handleChange(index, "fat", e.target.value)} style={{ width: "100%", height: "100%" }} /></td>
              <td style={{ padding: "0px", height: "36px" }}><input type="number" value={food.fiber} onChange={(e) => handleChange(index, "fiber", e.target.value)} style={{ width: "100%", height: "100%" }} /></td>
              <td style={{ padding: "0px", height: "36px" }}><input type="number" value={food.unitAmount} onChange={(e) => handleChange(index, "unitAmount", e.target.value)} style={{ width: "100%", height: "100%" }} /></td>
              <td style={{ padding: "0px", height: "36px" }}><input type="number" value={food.maxUnit} onChange={(e) => handleChange(index, "maxUnit", e.target.value)} style={{ width: "100%", height: "100%" }} /></td>
              <td style={{ padding: "0px", height: "36px" }}><button onClick={() => removeRow(index)}>❌</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addRow} style={{ marginTop: "10px" }}>➕ Add Row</button>
      {
        options.map((opt) => (
          <button key={opt.name} onClick={() => {
              const cfoods = [...foods]
              cfoods[fidx] = opt
              setFoods(cfoods)
            }}
          >
            {opt.name}
          </button>
        ))
      }

      <div style={{ marginTop: "20px" }}>
        <button onClick={findCombinations}>🔍 Find Combinations</button>
      </div>

      {results.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>Top Combinations (closest to required)</h3>
          <table border="1" cellPadding="6" style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead>
              <tr>
                <th>Amounts</th>
                <th>Total Calories</th>
                <th>Total Carbs</th>
                <th>Total Protein</th>
                <th>Total Fat</th>
                <th>Total Fiber</th>
                <th>Diff (sum)</th>
              </tr>
            </thead>
            <tbody>
              {results.map((res, i) => {
                const description = res.units.map((u, idx) => {
                  const grams = u * parseFloat(foods[idx].unitAmount || 0);
                  return `${grams} g ${foods[idx].name || "?"}`;
                }).join(", ");
                return (
                  <tr key={i}>
                    <td>{description}</td>
                    <td>{formatWithDiff(res.totals.calories, parseFloat(requiredAmount.calories || 0))}</td>
                    <td>{formatWithDiff(res.totals.carbs, parseFloat(requiredAmount.carbs || 0))}</td>
                    <td>{formatWithDiff(res.totals.protein, parseFloat(requiredAmount.protein || 0))}</td>
                    <td>{formatWithDiff(res.totals.fat, parseFloat(requiredAmount.fat || 0))}</td>
                    <td>{formatWithDiff(res.totals.fiber, parseFloat(requiredAmount.fiber || 0))}</td>
                    <td>{res.diff.toFixed(1)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Meals;