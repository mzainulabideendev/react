import React from "react";
import { useId } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    currencyOptions = [],
    onCurrencyChange,
    SelectCureency = "Usd",
    amountDisabled = false,
    isReadOnly = false,
    CurrecnyDisable = false,
    
    className = "",
    
}) {
   
         const amountId = useId();
    return (
        <div className={`bg-white/10 backdrop-blur-lg p-5 rounded-lg text-sm flex gap-4 shadow-md border border-white/30 ${className}`}>
            <div className="w-1/2">
                <label  htmlFor={amountId} className="text-black font-semibold mb-3 inline-block ">
                    {label}
                </label>
                <input
                    id = {amountId}
                    className="outline-none w-full bg-white/20 backdrop-blur-sm py-2 px-3 rounded-md border border-white/40 focus:border-blue-400 focus:bg-white/40 transition-all text-black placeholder-black/50"
                    type="number"
                    placeholder="Enter amount"
                    disabled = {amountDisabled}
                    readOnly = {isReadOnly}
                    value={amount !== undefined && amount !== null ? amount : ''}
                    onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black font-semibold mb-3 w-full">Currency</p>
                <select
                    className="rounded-md px-3 py-2 bg-white/20 backdrop-blur-sm border border-white/40 cursor-pointer outline-none focus:border-blue-400 focus:bg-white/40 transition-all w-full text-black"
                    value={SelectCureency}
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled = {CurrecnyDisable}
                    
                >
                    
                       { currencyOptions.map((c)=>(
                        <option key = {c} value={c}>
                            {c.toUpperCase()}
                        </option>
                       ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
