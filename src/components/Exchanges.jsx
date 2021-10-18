import React from 'react'

import { useGetExchangesQuery } from '../services/cryptoApi';
import Loader from './Loader';

const Exchanges = () => {
    const { data, isFetching } = useGetExchangesQuery();

    if (isFetching) return <Loader />;

    return (
        <div>
            Exchanges
        </div>
    )
}

export default Exchanges
