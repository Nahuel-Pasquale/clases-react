import { useNavigate } from 'react-router-dom';
import { formatPrice, formatDate } from '../../utils';
import OrderStatus from '../UI/OrderStatus/OrderStatus';

import {
  IdStyled,
  PedidoContainerStyled,
  PriceStyled,
  TextContainerStyled,
  TitleStyled,
} from './CardMisOrdenesStyles';

const CardMisOrdenes = ({ createAt, status, total, id }) => {
  const navigate = useNavigate();

  return (
    <PedidoContainerStyled onClick={() => navigate(`/resumen/${id}`)}>
      <TextContainerStyled>
        <TitleStyled>ID de la orden: #{id.slice(0, 6)}</TitleStyled>
        <IdStyled>Fecha {formatDate(createAt)}hs</IdStyled>
        <PriceStyled>{formatPrice(total)}</PriceStyled>
      </TextContainerStyled>
      <OrderStatus status={status} />
    </PedidoContainerStyled>
  );
};

export default CardMisOrdenes;
