import React from 'react';
import CareerGoal from '../Home/CareerGoal/CareerGoal';
import { Helmet } from 'react-helmet-async';

const Service = () => {
    return (
        <div>
            <Helmet>
                <title>Service | WeaverrIT</title>
            </Helmet>
            <CareerGoal></CareerGoal>
        </div>
    );
};

export default Service;