import { useEffect , useState }  from "react";

function UseCurrencyInfo(Currency)
{

    const [CurrencyInfo , setCurrencyInfo] = useState({})

    useEffect(()=>{
        fetch(`https://open.er-api.com/v6/latest/${Currency.toUpperCase()}`)
        .then((res)=> res.json())
        .then((res)=>{
            console.log('API Response:', res)
            if(res.rates){
                setCurrencyInfo(res.rates)
            } else {
                console.error("Currency rates not found in response")
            }
        })
        .catch((err)=> console.error("Error fetching currency", err))
    },[Currency])
    return CurrencyInfo
}

export default UseCurrencyInfo;