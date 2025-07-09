import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { ImageInterface, MemeInterface } from "orsys-tjs-meme";
import { act } from "react";

interface IRessourcesState {
  memes: Array<MemeInterface>;
  images: Array<ImageInterface>;
}

const initialState: IRessourcesState = {
  memes: [],
  images: [],
};

const ressources = createSlice({
  name: "ressources",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loadAsyncRessources.fulfilled, (state, action) => {
      state.images = action.payload.images;
      state.memes = action.payload.memes;
    });
  },
});

//export const { update, clear } = ressources.actions;

export const REST_URL = "http://localhost:5679";

export const loadAsyncRessources = createAsyncThunk(
  "ressources/load",
  async () => {
    // Promise (asynchrone --> await pour attendre la fin de l'execution = la promise !)
    const primages = fetch(`${REST_URL}/images`);
    const prmemes = fetch(`${REST_URL}/memes`);
    const prAll = await Promise.all([primages, prmemes]);
    const images = await prAll[0].json();
    const memes = await prAll[1].json();

    return { images: images, memes: memes };
  }
);


export default ressources.reducer;
