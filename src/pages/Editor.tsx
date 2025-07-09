import React, { useEffect } from "react";
import MemeForm from "../components/MemeForm/MemeForm.connected";
import MemeSVGViewer from "../components/ui/MemeSVGViewer/MemeSVGViewer.connected";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { update } from "../store/current";
import { emptyMeme } from "orsys-tjs-meme";

function Editor() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const memes = useSelector((s: RootState) => s.ressources.memes);

  useEffect(() => {
    if (undefined !== params.id) {
      const foundMeme = memes.find((m) => m.id === Number(params.id));
      if (foundMeme) {
        dispatch(update(foundMeme));
      } else {
        navigate("/");
      }
    } else {
      dispatch(update(emptyMeme));
    }
  }, [params, navigate, dispatch, memes]);

  return (
    <>
      <MemeSVGViewer />
      <MemeForm />
    </>
  );
}

export default Editor;
