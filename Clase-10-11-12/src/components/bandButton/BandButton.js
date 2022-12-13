import React from "react";
import { useDeleteBand } from "../../hooks/useDeleteBand";
import { BandButtonStyled } from "./BandButtonStyles";

const BandButton = ({ genre = '', deleteButton = false, id = null }) => {
  const { mutate } = useDeleteBand();

  const handleDelete = () => {
    const auth = window.confirm(
      'Estas seguro que queres eliminar esta banda de tu lista?'
    );
    if(id && auth) {
      mutate(id);
    }
  }

  return (
  <>
    { deleteButton ? (
      <BandButtonStyled deleteButton={deleteButton} onClick={handleDelete}>
        {'Eliminar de mi lista'}
      </BandButtonStyled>
    ) : (
      <BandButtonStyled deleteButton={deleteButton}>{ genre }</BandButtonStyled>
    )
    }
  </>
  );
};

export default BandButton;
