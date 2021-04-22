import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import {
    Row,
    Col,
    ListGroup,
    Image,
    Form,
    Button,
    Card,
} from 'react-bootstrap';
import { addToCart } from '../redux/actions/cartActions';

const CartScreen = ({ match, location, history }) => {
    const productId = match.params.id;
    const quantity = location.search
        ? Number(location.search.split('=')[1])
        : 1;

    const dispatch = useDispatch();

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, quantity));
        } else {
        }
    }, [dispatch, productId, quantity]);

    return <div>Cart screen</div>;
};

export default CartScreen;
