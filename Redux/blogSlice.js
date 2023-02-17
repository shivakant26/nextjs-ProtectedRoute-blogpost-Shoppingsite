import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

const initialState = {
    blog:[],
    status:""
}

export const allPost = createAsyncThunk(
    'blog/allPost',
    async () => {
        const res = await axios.get("https://dummyjson.com/posts");
        if(res.status === 200 ){
            return res;
        }else{
            alert("error")
        }
    }
)

const blogSlice = createSlice({
    name:'blog',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(allPost.pending,(state,action)=>{
            state.status = "pending"
        }).addCase(allPost.fulfilled,(state,action)=>{
            state.status = "success";
            state.blog = action.payload;
        }).addCase(allPost.rejected,(state,action)=>{
            state.status = "rejectd"
        })
    }
})

export default blogSlice.reducer;