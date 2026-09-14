
import './App.css'
import { useState, useEffect } from 'react'
import {InputBox} from './Components/Index'
import UseCurrencyInfo from './hook/UseCurrencyInfo'

function App() {

  const [Amount , SetAmount] = useState(0)
 const [from , setCurrency] = useState("usd")
  const [to , setToCurrency] = useState("inr")
  const [ConvertedAmount , SetConvertedAmount] = useState(0)

 

const CurrencyInfo = UseCurrencyInfo(from)
 const CommonCurrencies = ['usd', 'eur', 'gbp', 'jpy', 'aud', 'cad', 'inr', 'pkr', 'aed', 'sgd', 'mxn', 'chf', 'cny', 'sek', 'nzd']
 const Options = Object.keys(CurrencyInfo).length > 0 ? Object.keys(CurrencyInfo) : CommonCurrencies

 useEffect(() => {
   console.log('useEffect triggered:', {Amount, to, CurrencyInfoKeys: Object.keys(CurrencyInfo), rate: CurrencyInfo[to.toUpperCase()]})
   if(Amount > 0){
     if(CurrencyInfo[to.toUpperCase()]){
       const result = Amount * CurrencyInfo[to.toUpperCase()]
       console.log('Conversion:', Amount, '*', CurrencyInfo[to.toUpperCase()], '=', result)
       SetConvertedAmount(Number(result.toFixed(2)))
     } else {
       console.log('No rate for', to.toUpperCase())
     }
   } else {
     SetConvertedAmount(0)
   }
 }, [Amount, to, CurrencyInfo])

 const Swap = ()=>{
  setCurrency(to)
  setToCurrency(from)
  SetAmount(ConvertedAmount)
  SetConvertedAmount(0)
 }
 const Convert = ()=>{
  if(Amount > 0 && CurrencyInfo && CurrencyInfo[to.toUpperCase()]){
   SetConvertedAmount(Number((Amount * CurrencyInfo[to.toUpperCase()]).toFixed(2)))
  } else {
   SetConvertedAmount(0)
  }
 }
  return (
    <div
            className="w-screen h-screen flex justify-center items-center bg-cover bg-no-repeat bg-fixed bg-center"
            style={{
                backgroundImage: `url('${'https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg'}')`,
            }}
        >
            <div className="w-full h-full flex flex-col justify-center items-center px-4">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white drop-shadow-lg">Currency Converter</h1>
                    <p className="text-white/90 mt-2 drop-shadow-lg">Convert currencies in real-time</p>
                </div>
                <div className="w-full max-w-md border-2 border-white/40 rounded-lg p-6 backdrop-blur-lg bg-white/10 shadow-2xl">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           Convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={Amount}
                                onAmountChange={(amount) => SetAmount(amount)}
                                currencyOptions={Options}
                                onCurrencyChange={(currency) => setCurrency(currency)}
                                SelectCureency={from}
                                
                            />
                        </div>
                        <div className="relative w-full h-12 flex justify-center items-center my-4">
                            <div className="absolute w-full h-0.5 bg-white/40"></div>
                            <button
                                type="button"
                                className="relative border-2 border-white rounded-full bg-linear-to-r from-blue-500 to-blue-700 text-white px-4 py-2 hover:from-blue-600 hover:to-blue-800 transition-all duration-300 shadow-lg font-semibold"
                                onClick={Swap}
                            >
                                ⇄ Swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={ConvertedAmount}
                                currencyOptions={Options}
                                onCurrencyChange={(currency) => setToCurrency(currency)}
                                SelectCureency={to}
                                amountDisabled={false}
                                isReadOnly={true}
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-linear-to-r from-blue-500 to-blue-700 text-white px-4 py-3 rounded-lg font-bold text-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 shadow-lg mt-6">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
