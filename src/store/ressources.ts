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
      state.images = action.payload;
    });

    builder.addCase(loadAsyncRessourcesMemes.fulfilled, (state, action) => {
      state.memes = action.payload;
    });
  },
});

//export const { update, clear } = ressources.actions;

export const REST_URL = "http://localhost:5679";

export const loadAsyncRessources = createAsyncThunk(
  "ressources/load",
  async () => {
    // Promise (asynchrone --> await pour attendre la fin de l'execution = la promise !)
    const primages = await fetch(`${REST_URL}/images`);
    const result = await primages.json();

    return result;
  }
);

export const loadAsyncRessourcesMemes = createAsyncThunk(
  "ressources/loadMemes",
  async () => {
    // Promise (asynchrone --> await pour attendre la fin de l'execution = la promise !)
    const prmemes = await fetch(`${REST_URL}/memes`);
    const result = await prmemes.json();

    return result;
  }
);

export default ressources.reducer;
