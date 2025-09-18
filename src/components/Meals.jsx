import React, { useState, useEffect } from "react";

const Meals = (props) => {

  const commons = [
    {
      "name": "Van payar mezhukkupuratti",
      "weight_g": 100,
      "calories": 109,
      "protein": 6.2,
      "fat": 2.4,
      "carbs": 16.5,
      "fiber": 2.9,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Cherupayar mezhukkupuratti",
      "weight_g": 100,
      "calories": 148,
      "protein": 8.9,
      "fat": 2.2,
      "carbs": 23.3,
      "fiber": 6.3,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Curd",
      "weight_g": 100,
      "calories": 60,
      "protein": 3.1,
      "fat": 4.0,
      "carbs": 3.0,
      "fiber": 0.0,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Sauted carrots",
      "weight_g": 100,
      "calories": 78,
      "protein": 0.9,
      "fat": 3.7,
      "carbs": 10.2,
      "fiber": 4.2,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Long beans mezhukkupuratti",
      "weight_g": 100,
      "calories": 89,
      "protein": 3.4,
      "fat": 4.1,
      "carbs": 10.2,
      "fiber": 3.2,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Sauted cabbage",
      "weight_g": 100,
      "calories": 54,
      "protein": 1.3,
      "fat": 3.3,
      "carbs": 5.7,
      "fiber": 2.5,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Sauted cauliflower",
      "weight_g": 100,
      "calories": 103,
      "protein": 1.6,
      "fat": 9.0,
      "carbs": 4.3,
      "fiber": 1.7,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Sauted brinjal",
      "weight_g": 100,
      "calories": 85,
      "protein": 2.0,
      "fat": 6.0,
      "carbs": 6.0,
      "fiber": 3.5,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Sauted spinach",
      "weight_g": 100,
      "calories": 58,
      "protein": 2.0,
      "fat": 4.0,
      "carbs": 3.6,
      "fiber": 2.5,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Sauted onion",
      "weight_g": 100,
      "calories": 132,
      "protein": 1.0,
      "fat": 10.8,
      "carbs": 7.9,
      "fiber": 1.7,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Garlic fry",
      "weight_g": 50,
      "calories": 191,
      "protein": 2.2,
      "fat": 15.7,
      "carbs": 11.4,
      "fiber": 0.7,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Boiled whole egg",
      "weight_g": 50,
      "calories": 77,
      "protein": 6.3,
      "fat": 5.3,
      "carbs": 0.6,
      "fiber": 0.0,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Boiled egg white",
      "weight_g": 50,
      "calories": 27,
      "protein": 5.6,
      "fat": 0.3,
      "carbs": 0.3,
      "fiber": 0.0,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Fish fry",
      "weight_g": 100,
      "calories": 205,
      "protein": 18.6,
      "fat": 13.2,
      "carbs": 3.9,
      "fiber": 0.8,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Alfahm chicken",
      "weight_g": 200,
      "calories": 283,
      "protein": 35.8,
      "fat": 13.1,
      "carbs": 3.1,
      "fiber": 1.8,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Butter chicken",
      "weight_g": 100,
      "calories": null,
      "protein": 10.4,
      "fat": 7.4,
      "carbs": 3.1,
      "fiber": 0.9,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Chicken biriyani",
      "weight_g": 100,
      "calories": 135,
      "protein": 6.4,
      "fat": 5.5,
      "carbs": 14.3,
      "fiber": 0.5,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Curd rice",
      "weight_g": 100,
      "calories": 97,
      "protein": 2.7,
      "fat": 4.3,
      "carbs": 12.2,
      "fiber": 0.3,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Vegetable pulao",
      "weight_g": 100,
      "calories": 108,
      "protein": 1.9,
      "fat": 3.0,
      "carbs": 18.1,
      "fiber": 1.3,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Egg rice",
      "weight_g": 100,
      "calories": 121,
      "protein": 3.5,
      "fat": 5.6,
      "carbs": 14.9,
      "fiber": 0.9,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Fried rice",
      "weight_g": 100,
      "calories": 163,
      "protein": 3.5,
      "fat": 4.0,
      "carbs": 28.0,
      "fiber": 1.2,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Chapathi",
      "weight_g": 50,
      "calories": 120,
      "protein": 3.0,
      "fat": 3.1,
      "carbs": 20.7,
      "fiber": 2.2,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Parotta",
      "weight_g": 70,
      "calories": 220,
      "protein": 4.0,
      "fat": 11.0,
      "carbs": 27.0,
      "fiber": 1.8,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Idli",
      "weight_g": 35,
      "calories": 39,
      "protein": 1.6,
      "fat": 0.2,
      "carbs": 7.4,
      "fiber": 0.3,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Dosa",
      "weight_g": 60,
      "calories": 133,
      "protein": 2.7,
      "fat": 3.7,
      "carbs": 22.5,
      "fiber": 0.9,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Appam",
      "weight_g": 60,
      "calories": 120,
      "protein": 1.6,
      "fat": 2.8,
      "carbs": 23.0,
      "fiber": 0.5,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Puttu",
      "weight_g": 100,
      "calories": 154,
      "protein": 2.3,
      "fat": 0.6,
      "carbs": 35.0,
      "fiber": 2.3,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Upma",
      "weight_g": 100,
      "calories": 127,
      "protein": 3.0,
      "fat": 3.7,
      "carbs": 20.0,
      "fiber": 2.0,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Poori",
      "weight_g": 25,
      "calories": 101,
      "protein": 1.6,
      "fat": 4.4,
      "carbs": 13.6,
      "fiber": 0.6,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Rice",
      "weight_g": 100,
      "calories": 130,
      "protein": 2.7,
      "fat": 0.3,
      "carbs": 28.0,
      "fiber": 0.4,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Apple",
      "weight_g": 100,
      "calories": 52,
      "protein": 0.3,
      "fat": 0.2,
      "carbs": 14.0,
      "fiber": 2.4,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Banana",
      "weight_g": 100,
      "calories": 89,
      "protein": 1.1,
      "fat": 0.3,
      "carbs": 23.0,
      "fiber": 2.6,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Orange",
      "weight_g": 100,
      "calories": 47,
      "protein": 0.9,
      "fat": 0.1,
      "carbs": 12.0,
      "fiber": 2.4,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Mango",
      "weight_g": 100,
      "calories": 60,
      "protein": 0.8,
      "fat": 0.4,
      "carbs": 15.0,
      "fiber": 1.6,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Grapes",
      "weight_g": 100,
      "calories": 69,
      "protein": 0.7,
      "fat": 0.2,
      "carbs": 18.0,
      "fiber": 0.9,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Pineapple",
      "weight_g": 100,
      "calories": 50,
      "protein": 0.5,
      "fat": 0.1,
      "carbs": 13.0,
      "fiber": 1.4,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Papaya",
      "weight_g": 100,
      "calories": 43,
      "protein": 0.5,
      "fat": 0.3,
      "carbs": 11.0,
      "fiber": 1.7,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Guava",
      "weight_g": 100,
      "calories": 68,
      "protein": 2.6,
      "fat": 1.0,
      "carbs": 14.0,
      "fiber": 5.4,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Watermelon",
      "weight_g": 100,
      "calories": 30,
      "protein": 0.6,
      "fat": 0.2,
      "carbs": 8.0,
      "fiber": 0.4,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Anar (Pomegranate)",
      "weight_g": 100,
      "calories": 83,
      "protein": 1.7,
      "fat": 1.2,
      "carbs": 19.0,
      "fiber": 4.0,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Robusta banana",
      "weight_g": 100,
      "calories": 116,
      "protein": 1.2,
      "fat": 0.3,
      "carbs": 27.2,
      "fiber": 1.9,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Alfahm chicken",
      "weight_g": 200,
      "calories": 283,
      "protein": 35.8,
      "fat": 13.1,
      "carbs": 3.1,
      "fiber": 1.8,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Butter chicken",
      "weight_g": 100,
      "calories": 151,
      "protein": 10.4,
      "fat": 7.4,
      "carbs": 3.1,
      "fiber": 0.9,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Chicken biriyani",
      "weight_g": 100,
      "calories": 135,
      "protein": 6.4,
      "fat": 5.5,
      "carbs": 14.3,
      "fiber": 0.5,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Curd rice",
      "weight_g": 100,
      "calories": 97,
      "protein": 2.7,
      "fat": 4.3,
      "carbs": 12.2,
      "fiber": 0.3,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Vegetable pulao",
      "weight_g": 100,
      "calories": 108,
      "protein": 1.9,
      "fat": 3.0,
      "carbs": 18.1,
      "fiber": 1.3,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Egg rice",
      "weight_g": 100,
      "calories": 121,
      "protein": 3.5,
      "fat": 5.6,
      "carbs": 14.9,
      "fiber": 0.9,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Fried rice",
      "weight_g": 100,
      "calories": 109,
      "protein": 1.9,
      "fat": 3.2,
      "carbs": 18.0,
      "fiber": 0.8,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Puttu",
      "weight_g": 50,
      "calories": 97,
      "protein": 1.4,
      "fat": 2.4,
      "carbs": 16.9,
      "fiber": 1.2,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Chappathi",
      "weight_g": 50,
      "calories": 122,
      "protein": 4.3,
      "fat": 0.6,
      "carbs": 24.8,
      "fiber": 3.8,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Dosa",
      "weight_g": 50,
      "calories": 92,
      "protein": 2.2,
      "fat": 3.0,
      "carbs": 14.1,
      "fiber": 0.8,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Idli",
      "weight_g": 100,
      "calories": 146,
      "protein": 4.5,
      "fat": 0.7,
      "carbs": 30.4,
      "fiber": 2.6,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Pathiri",
      "weight_g": 50,
      "calories": 81,
      "protein": 1.2,
      "fat": 1.4,
      "carbs": 15.6,
      "fiber": 0.5,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Upma",
      "weight_g": 100,
      "calories": 85,
      "protein": 2.4,
      "fat": 1.4,
      "carbs": 15.9,
      "fiber": 1.1,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Vermicelli upma",
      "weight_g": 100,
      "calories": 111,
      "protein": 2.5,
      "fat": 2.3,
      "carbs": 20.1,
      "fiber": 2.7,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Cooked ponni rice",
      "weight_g": 100,
      "calories": 96,
      "protein": 1.9,
      "fat": 0.2,
      "carbs": 21.8,
      "fiber": 0.1,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Sambar",
      "weight_g": 100,
      "calories": 76,
      "protein": 3.7,
      "fat": 2.0,
      "carbs": 10.8,
      "fiber": 2.5,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Kerala beef roast",
      "weight_g": 100,
      "calories": 209,
      "protein": 13.9,
      "fat": 15.1,
      "carbs": 4.9,
      "fiber": 1.7,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Moru curry",
      "weight_g": 100,
      "calories": 49,
      "protein": 1.5,
      "fat": 3.5,
      "carbs": 3.1,
      "fiber": 0.6,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Rasam",
      "weight_g": 100,
      "calories": 24,
      "protein": 1.0,
      "fat": 0.5,
      "carbs": 3.8,
      "fiber": 0.7,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Mathanga payar olan",
      "weight_g": 100,
      "calories": 100,
      "protein": 3.7,
      "fat": 5.9,
      "carbs": 8.9,
      "fiber": 1.2,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Pine apple salad",
      "weight_g": 100,
      "calories": 61,
      "protein": 0.3,
      "fat": 0.3,
      "carbs": 14.1,
      "fiber": 2.9,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Apple",
      "weight_g": 100,
      "calories": 50,
      "protein": 0.2,
      "fat": 0.5,
      "carbs": 13.4,
      "fiber": 3.2,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Guava",
      "weight_g": 100,
      "calories": 68,
      "protein": 2.6,
      "fat": 1.0,
      "carbs": 14.3,
      "fiber": 5.4,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Anar",
      "weight_g": 100,
      "calories": 83,
      "protein": 1.7,
      "fat": 1.2,
      "carbs": 18.7,
      "fiber": 4.0,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
    },
    {
      "name": "Robusta banana",
      "weight_g": 100,
      "calories": 116,
      "protein": 1.2,
      "fat": 0.3,
      "carbs": 27.2,
      "fiber": 1.9,
      "minUnit": 1,
      "maxUnit": 10,
      "unitAmount": 50
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
      { name: "", calories: "", carbs: "", protein: "", fat: "", fiber: "", unitAmount: "", maxUnit: "1", minUnit: "1" }
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
      const maxUnit = parseInt(food.maxUnit || 1);
      const minUnit = parseInt(food.minUnit || 1);
      for (let u = minUnit; u <= maxUnit; u++) {
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

    setResults(combos.slice(0, 50)); // top 10 closest
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
            <th>Min Unit</th>
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
              <td style={{ padding: "0px", height: "36px" }}><input type="number" value={food.minUnit} onChange={(e) => handleChange(index, "minUnit", e.target.value)} style={{ width: "100%", height: "100%" }} /></td>
              <td style={{ padding: "0px", height: "36px" }}><input type="number" value={food.maxUnit} onChange={(e) => handleChange(index, "maxUnit", e.target.value)} style={{ width: "100%", height: "100%" }} /></td>
              <td style={{ padding: "0px", height: "36px" }}><button onClick={() => removeRow(index)}>❌</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addRow} style={{ marginTop: "10px" }}>➕ Add Row</button>
      {
        options.map((opt, i) => (
          <button key={i} onClick={() => {
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