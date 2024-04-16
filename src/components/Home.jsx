import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Home = () => {
    const user = useContext(AuthContext)
    return (
        <div className='my-container'>
            {
                user && user.displayName
            }
        </div>
    );
};

export default Home;