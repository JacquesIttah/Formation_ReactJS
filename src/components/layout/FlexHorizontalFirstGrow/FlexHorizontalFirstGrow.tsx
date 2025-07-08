import React, { useEffect, useState } from "react";

import styles from "./FlexHorizontalFirstGrow.module.css";



interface IFlexHorizontalFirstGrowProps {

  data:string

}

interface IFlexHorizontalFirstGrowState {

  value:number

}

const flexHorizontalFirstGrowInitialState = {value:0};

const FlexHorizontalFirstGrow: React.FC<IFlexHorizontalFirstGrowProps> = ({data=""}) => {

  const [state, setstate] = useState<IFlexHorizontalFirstGrowState>(

    flexHorizontalFirstGrowInitialState

  );

  useEffect(() => {

    return () => {

      //demontage

    };

  }, []);

  return (

    <div className={styles.FlexHorizontalFirstGrow} data-testid="FlexHorizontalFirstGrow">


 

      FlexHorizontalFirstGrow Component props.data:{data}, state:{JSON.stringify(state)}

    </div>

  );

};



export default FlexHorizontalFirstGrow;