import type { RootState } from "../../../store/store";
import { MemeSVGViewer as Msvg} from "orsys-tjs-meme";
import { useSelector } from "react-redux";

const MemeSVGViewer = (props:object) => {

    const imgs = useSelector((s:RootState) => s.ressources.images);
    const meme = useSelector((s:RootState) => s.current.meme);

    return <Msvg {...props} image={imgs.find((img) => img.id === meme.imageId)} meme={meme} basePath="" />
    
};

export default MemeSVGViewer;
