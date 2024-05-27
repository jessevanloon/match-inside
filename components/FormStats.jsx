import React from "react";

const FormStats = () => {
  return (
    <div className="bg-light-dark-background p-6 rounded-xl">
      <form className="flex flex-col">
        <div className="flex flex-col">
          <label>Match:</label>
          <input
            name="match"
            type="text"
            class="bg-grey-50 border border-grey-300 text-gray-900 text-sm rounded-lg dark:border-grey-600 dark:placeholder-grey-400 dark:text-white"
          />
        </div>
        <div className="flex flex-col">
          <label>Goals:</label>
          <input name="goals" type="number" />
        </div>
        <div className="flex flex-col">
          <label>Assists:</label>
          <input name="assists" type="number" />
        </div>
        <div className="flex flex-col">
          <label>Minutes:</label>
          <input name="minutesPlayed" type="number" />
        </div>
        <div className="flex flex-col">
          <label>Type of goal:</label>
          <select name="goalType">
            <option>Left foot</option>
            <option>Right foot</option>
            <option>Header</option>
          </select>
        </div>
        <input type="submit" placeholder="Verstuur" />
      </form>
    </div>
  );
};

export default FormStats;
