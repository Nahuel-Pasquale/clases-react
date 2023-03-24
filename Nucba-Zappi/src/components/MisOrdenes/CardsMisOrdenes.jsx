import { useSelector } from 'react-redux';
import Loader from '../UI/Loader/Loader';
import CardMisOrdenes from './CardMisOrdenes';
import { MisOrdenesContainerStyled } from './CardMisOrdenesStyles';

const CardsMisOrdenes = () => {

  const { orders, loading, error } = useSelector(state => state.orders);
  console.log(orders, loading, error)

  if(loading && !orders) {
    return <Loader styles={{ height: '50px', width: '50px' }} />;
  }

  if(error) {
    return <h2 style={{ textAlign: 'center' }}>  {error}  </h2>
  }

  return (
    <MisOrdenesContainerStyled>

      {
        orders?.length ? (
          orders.map(order => <CardMisOrdenes key={order.id} {...order} />)
        ) : (
          <h2>  Hace tu primer pedido!!! </h2>
        )
      }
    </MisOrdenesContainerStyled>
  );
};

export default CardsMisOrdenes;
