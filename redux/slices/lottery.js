import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  days: [],
  times: [],
  lottery_items: [],
  lottery_time: [],
  lottery_day_data: [],
  day_id: "",
  lottery_id: "",
  lottery_day_id: "",
};

export const Lottery = createSlice({
  name: "Lottery",
  initialState,
  reducers: {
    handleAddLotteryItem: ({ lottery_items }, { payload }) => {
      lottery_items.push(payload);
    },

    handleAddLotteryTime: ({ lottery_time }, { payload }) => {
      lottery_time.push(payload);
    },
    //Time form
    handleAddLotteryDayData: ({ lottery_day_data }, { payload }) => {
      payload.map((data) => {
        lottery_day_data.push(data);
      });
    },

    handleRemoveLotteryItem: ({ lottery_items }, { payload }) => {
      lottery_items.map((item, key) => {
        if (item.days === payload) {
          lottery_items.splice(key, 1);
        }
      });
    },

    handleRemoveLotteryTime: ({ lottery_time }, { payload }) => {
      lottery_time.map((item, key) => {
        if (item.days === payload) {
          lottery_time.splice(key, 1);
        }
      });
    },

    handleSetLotteryID: (state, { payload }) => {
      console.log(payload);
      state.lottery_id = payload;
    },
    // Day
    handleSetLotteryDayID: (state, { payload }) => {
      console.log(payload);
      state.lottery_day_id = payload;
    },

    //time
    handleSetLotteryDayID: (lottery_time, { payload }) => {
      if (lottery_time.length > 0) {
        lottery_time.map((data) => {
          if (data.day_id === payload.day_id) {
          } else {
            lottery_time.push(payload);
          }
        });
      } else {
        lottery_time.push(payload);
      }
    },
  },
});

export const {
  handleSetLotteryID,
  handleAddLotteryItem,
  handleRemoveLotteryItem,
  handleAddLotteryTime,
  handleSetLotteryDayID,
  handleRemoveLotteryTime,
  handleAddLotteryDayData,
} = Lottery.actions;

export default Lottery.reducer;
