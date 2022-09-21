import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Cards for views path
import NavBar from './components/Navbar';
import ComposePage from './Views/ComposePage';
import HomePage from './Views/HomePage';
import DetailsPage from './Views/DetailsPage';
import AdminPage from './Views/AdminPage';
import ContactPage from './Views/ContactPage';
import LoginPage from './Views/LoginPage';
import BadPage from './Views/BadPage';
import PrivateRoute from './components/PrivateRoute';
import RegisterPage from './Views/RegisterPage';


const App: React.FC<AppProps> = (props) =>{
    return(
        <BrowserRouter>
		<NavBar />
			<Routes>
				<Route path='/' element={ <HomePage />}/>
				<Route path='/compose' element={<PrivateRoute><ComposePage /></PrivateRoute>}/>
				<Route path='/details/:blogid' element={<DetailsPage />}/>
				<Route path='/admin/:blogid' element={<PrivateRoute><AdminPage /></PrivateRoute>}/>
				<Route path='/contact' element={<ContactPage />}/>
				<Route path='/login' element={<LoginPage />}/>
				<Route path='/register' element={<RegisterPage />}/>
				<Route path='*' element={<BadPage />}/>
			</Routes>
		</BrowserRouter>
    )
}

interface AppProps {}

export default App;