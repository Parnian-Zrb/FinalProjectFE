import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function DateCalendarValue() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs("2022-04-17"));
  const [selectedDate, setSelectedDate] = React.useState<string | null>(null);

  const handleDateChange = (newValue: Dayjs | null) => {
    setValue(newValue);
    if (newValue) {
      setSelectedDate(newValue.format("YYYY-MM-DD"));
    } else {
      setSelectedDate(null);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div style={{}}>
          <DateCalendar value={value} onChange={handleDateChange} />
        </div>
        {selectedDate && (
          <div style={{ flex: "50%" }}>
            <div className="meal-plan-section">
              <h2>{selectedDate}</h2>
              <div>
                <h4>Breakfast:</h4>
                <p>No recipes for this date.</p>
              </div>
              <div>
                <h4>Lunch:</h4>
                <p>No recipes for this date.</p>
              </div>
              <div>
                <h4>Dinner:</h4>
                <p>No recipes for this date.</p>
              </div>
              <button
                style={{
                  fontFamily: "Inter",
                  fontSize: "18px",
                  fontWeight: "medium",
                  color: "#E8751A",
                  backgroundColor: "white",
                  borderRadius: "25px",
                  padding: "8px 25px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Add Recipe
              </button>
            </div>
          </div>
        )}
      </div>
    </LocalizationProvider>
  );
}
