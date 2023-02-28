import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit'
import axios from 'axios'


export type Data = {
    id: string,
    symbol:string,
    name:string,
    image:string,
    current_price:number,
    market_cap:number,
    market_cap_rank:number,
    fully_diluted_valuation:number,
    total_volume:number,
    high_24h:number,
    low_24h:number,
    price_change_24h:number,
    price_change_percentage_24h:number,
    market_cap_change_24h:number,
    market_cap_change_percentage_24h:number,
    circulating_supply:number,
    total_supply:number,
    max_supply:number,
    ath:number,
    ath_change_percentage:number,
    ath_date:string,
    atl:number,
    atl_change_percentage:number,
    atl_date:string,
    roi:null,
    last_updated:string,
}

type InitialState = {
    loading: boolean,
    data: Data[],
    error: string,  
}



const initialState: InitialState = {
    loading: false,
    data: [],
    error: '',
}



export const fetchData = createAsyncThunk('data/fetchData', (page:number) =>{

    return axios
    .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`)
    .then((response) => response.data)
})




const getData = createSlice({
    name: 'data',
    initialState: initialState,
    reducers: {
       
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchData.pending, (state) =>{
            state.loading = true
        })
        builder.addCase(fetchData.fulfilled, (state, action: PayloadAction<Data[]>) =>{
            state.loading = false
            state.data = action.payload
            state.error= ''
        })
        builder.addCase(fetchData.rejected, (state, action) =>{
            state.loading = false
            state.data = []
            state.error= action.error.message || 'Error fetch data'
        })   
    }
})


export default getData.reducer

