import React from "react";
import { useId } from "react";

function Inputbox({
  label,
  amount,
  onAmountchange,
  onCurrencychange,
  currencyoptions = [],
  selectcurrency = "usd",
  amountdisable = false,
  currencydisable = false,

  className = "",
}) {
  const currencyInputId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex  ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={currencyInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          id={currencyInputId}
          type="number"
          placeholder="Amount"
          disabled={amountdisable}
          value={amount}
          onChange={(e) =>
            onAmountchange && onAmountchange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectcurrency}
          onChange={(e) => onCurrencychange && onCurrencychange(e.target.value)}
          disabled={currencydisable}
        >
          {currencyoptions.map((currency, index) => (
            <option key={index} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Inputbox;
