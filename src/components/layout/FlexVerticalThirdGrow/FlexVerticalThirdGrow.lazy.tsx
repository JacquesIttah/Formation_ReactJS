import React, { lazy, Suspense } from 'react';

const LazyFlexVerticalThirdGrow = lazy(() => import('./FlexVerticalThirdGrow.tsx'));

const FlexVerticalThirdGrow = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFlexVerticalThirdGrow {...props} />
  </Suspense>
);

export default FlexVerticalThirdGrow;
