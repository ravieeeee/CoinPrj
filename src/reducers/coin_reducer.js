import { FETCH_PRICE } from '../actions/price';

const initialState = {
  error: '',
  data: []
};

export default function(state = initialState, action) {
  switch (action.type) {
  case `${FETCH_PRICE}_PENDING` :
    return {
      error: '',
      data: [...state.data],
    };
  case `${FETCH_PRICE}_FULFILLED`:
    return {
      error: '',
      data: [action.payload.data.BTC.KRW, action.payload.data.ETH.KRW, action.payload.data.XRP.KRW, action.payload.data.LTC.KRW, action.payload.data.EOS.KRW, action.payload.data.XMR.KRW, action.payload.data.DSH.KRW],
    };
  case `${FETCH_PRICE}_REJECTED` :
    return {
      error: action.payload,
      data: [...state.data],
    };
  default :
    return state;
  }
}