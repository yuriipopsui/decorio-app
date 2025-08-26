<<<<<<< HEAD
import React from 'react';
import Footer from '@/components/footer';
// import HeaderTwo from '@/components/header/headerTwo'

const Layout = ({ children }) => {
  return (
    <div>
      {/* <HeaderTwo /> */}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
=======
import Footer from '@/components/footer'
// import HeaderTwo from '@/components/header/headerTwo'

const Layout = ({ children }) => {
    return (
        <div>
            {/* <HeaderTwo /> */}
            {children}
            <Footer />
        </div>
    )
}

export default Layout
>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
