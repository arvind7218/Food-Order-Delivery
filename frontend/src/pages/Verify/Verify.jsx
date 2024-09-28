import React, { useContext, useEffect, useCallback } from 'react';
import './Verify.css';
import axios from 'axios';  // Import axios
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Verify = () => {
    const [searchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const { url } = useContext(StoreContext);
    const navigate = useNavigate();

    const verifyPayment = useCallback(async () => {
        try {
            const response = await axios.post(`${url}/api/order/verify`, { success, orderId });
            if (response.data.success) {
                navigate("/myorders");
            } else {
                navigate("/");
            }
        } catch (error) {
            console.error("Payment verification failed:", error);
            navigate("/");
        }
    }, [url, success, orderId, navigate]);

    useEffect(() => {
        verifyPayment();
    }, [verifyPayment]);

    return (
        <div className='verify'>
            <div className="spinner"></div>
        </div>
    );
}

export default Verify;
