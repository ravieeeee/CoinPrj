import axios from 'axios';

const ROOT_URL = 'https://min-api.cryptocompare.com/data/pricemulti';
export const FETCH_PRICE = 'FETCH_PRICE';

export function fetchPrice(coinSymbol) {
  var coins = coinSymbol.join();
  
  const url = `${ROOT_URL}?fsyms=${coins}&tsyms=KRW`;
  const request = axios.get(url);

  return {
    type: FETCH_PRICE,
    payload: request
  };
}