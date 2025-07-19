import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'

function UserLayout() {
    return (
        <div className="bg-slate-900">
            <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Roboto:wght@300;400;500&display=swap');
          html { scroll-behavior: smooth; }
          body { font-family: 'Roboto', sans-serif; }
        `}
            </style>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default UserLayout