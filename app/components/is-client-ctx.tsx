//credit: https://stackoverflow.com/a/75692565
// https://nextjs.org/docs/messages/react-hydration-error#possible-ways-to-fix-it
// hydration error caused by using window object, fixed by useEffect hook
// https://nextjs.org/docs/app/building-your-application/rendering ?

'use client';
import { createContext, useContext } from 'react';
import {useEffect, useState} from 'react';

const IsClientCtx = createContext(false);

export const IsClientCtxProvider = ({ children } : any ) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  return (
    <IsClientCtx.Provider value={isClient}>
		{children}
	</IsClientCtx.Provider>
  );
};

export function useIsClient() {
  return useContext(IsClientCtx);
}