import React, { useState, useMemo } from "react";
import { data } from "./data";
const COURSES = [
  "M.D. Emergency Medicine",
  "MD Anaesthesiology",
  "M.D. General Medicine",
  "M.D. Paediatrics",
  "M.D. Pathology",
  "M.D. Psychiatry",
  "M.S. Ophthalmology",
  "M.D. Dermatology Venerology and Leprosy",
  "M.D. Radiotherapy",
  "M.D. Community Medicine",
  "M.S. General Surgery",
  "M.S. Obstetrics and Gynaecology",
  "M.D. Radiodiagnosis",
  "M.S. Oto-Rhinolaryngology",
  "DM Pulmonary Medicine",
  "M.D. Biochemistry",
  "M.S. Orthopaedics",
  "MD Physiology",
  "M.D. Pulmonary Medicine",
  "M.D. Microbiology",
  "DM Cardiology",
  "M Ch Genito Urinary Surgery",
  "M.D. Physical Medicine and Rehabilitation",
  "M.D. Pharmacology",
  "M Ch Cardiovascular and Thoracic Surgery",
  "DM Nephrology",
  "DM Neurology",
  "M Ch Plastic and Reconstructive Surgery",
  "DM Medical Gastroenterology",
  "MD Forensic Medicine",
  "MD Anatomy",
  "M Ch Neurosurgery",
  "MD Family Medicine",
  "M Ch Paediatric Surgery",
  "M Ch Reproductive Medicine and Surgery",
  "DM Neonatology",
  "DM Paediatric Neurology",
  "DM Endocrinology",
  "M.D. Immuno Haematology and Blood Transfusion",
  "M Ch Surgical Gastroenterology",
  "M Ch Surgical Oncology",
  "M Ch Head and Neck Surgery",
  "DM Medical Oncology",
  "DM Paediatric Oncology",
  "M Ch Gynaecological Oncology",
  "DM Infectious Disease",
  "DM Onco-Pathology",
  "DM Paediatric Nephrology",
  "DM Critical Care Medicine",
  "MD Geriatrics"
];
function Meals() {
  const [course, setCourse] = useState()
  const [search, setSearch] = useState("");
  const [year, setYear] = useState("");

  const filteredData = useMemo(() => {
    const words = search
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean);

    const result = data.filter(item => {
      const text = `${item.title} ${item.course} ${item.college}`.toLowerCase();

      const matchesSearch =
        words.length === 0 ||
        words.every(word => text.includes(word));

      let matchesYear = true
      if (year === "last_5") {
        matchesYear = [2020, 2021, 2022, 2023, 2024].find((y) => y == item.admission_year)
      } else if (year) {
        matchesYear = item.admission_year === year;
      }

      const matchesCourse =
        !course || item.course === course;

      return matchesSearch && matchesYear && matchesCourse;
    });

    // ✅ limit to 100 when no search
    if (words.length === 0 && !year && !course) {
      return result.slice(0, 100);
    }

    return result;
  }, [search, year, data, course]);

  return (
    <div style={{ padding: 20, maxWidth: 800, margin: "auto" }}>
      
      {/* Search + Filter */}
      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        
        <input
          type="text"
          placeholder="Search (multi-word)..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ flex: 1, padding: 8 }}
        />

        <select value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="">All Years</option>
          <option value="last_5">last 5 years</option>
          {[2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025].map(y => (
            <option key={y} value={String(y)}>
              {y}
            </option>
          ))}
        </select>
        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          style={{ padding: 8, minWidth: 250 }}
        >
          <option value="">All Courses</option>
          {COURSES.map(c => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Info */}
      {search.trim() === "" && (
        <p style={{ fontSize: 12, color: "#666" }}>
          Showing first 100 results. Use search to see more.
        </p>
      )}

      {/* Results */}
      <div>
        {filteredData.length === 0 && <p>No results found</p>}

        {filteredData.map((item, index) => (
          <div
            key={index}
            style={{
              background: "white",
              border: "1px solid #ddd",
              padding: 12,
              marginBottom: 10,
              borderRadius: 6
            }}
          >
            <h4 style={{ margin: "0 0 6px" }}>{item.title}</h4>

            <p style={{ margin: 0 }}>
              <strong>Course:</strong> {item.course}
            </p>

            <p style={{ margin: 0 }}>
              <strong>College:</strong> {item.college}
            </p>

            <p style={{ margin: 0 }}>
              <strong>Year:</strong> {item.admission_year}
            </p>

            <a href={item.link} target="_blank" rel="noreferrer">
              View / Print
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Meals;
