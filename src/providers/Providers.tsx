<<<<<<< HEAD
'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

function Providers({ children }: { children: React.ReactNode }) {
=======
"use client"

import React from "react";
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

// type Props ={ 
//   children: ReactNode;
// }

function Providers({children}: {children: React.ReactNode}) {
>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
  return <Provider store={store}>{children}</Provider>;
}

export default Providers;
<<<<<<< HEAD
=======

>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
