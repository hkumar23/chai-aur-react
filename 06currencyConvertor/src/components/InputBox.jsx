import React, { useId } from "react";

function InputBox({
  label,
  selectedCurrency,
  onCurrencyChange,
  amount,
  onAmountChange,
  currencyOptions = [],
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/60 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5 text-black"
          type="text"
          placeholder="Amount"
          value={amount}
          disabled={amountDisable}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/60 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none text-black"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => {
            return (
              <option key={currency} value={currency}>
                {currency}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
export default InputBox;
