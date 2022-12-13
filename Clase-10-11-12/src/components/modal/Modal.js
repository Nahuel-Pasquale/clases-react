import React, { useState } from "react";
import { useAddBand } from "../../hooks/useAddBand";
import { handlerSubmit } from "../../utils/handlerSubmit";

import OpenModal from "../openModal/OpenModal";
import ModalInput from "../modalInput/ModalInput";

import {
  ButtonsContainerStyled,
  InputsContainerStyled,
  ModalContainerStyled,
  ModalDescriptionStyled,
  ModalTitleStyled,
} from "./ModalStyles";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";

const FormModal = () => {
  const [form, setForm] = useState({});

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { mutate } = useAddBand();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <OpenModal handleOpen={handleOpen}>Open modal</OpenModal>
      <Modal
        open={open}
        onClose={() => {
          handleClose();
          setForm({});
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContainerStyled>
          <ModalTitleStyled>¡React Query Mutations!</ModalTitleStyled>
          <ModalDescriptionStyled>
            A continuación vamos a rellenar un formulario para poder realizar
            nuestras primeras mutaciones.
          </ModalDescriptionStyled>
          <InputsContainerStyled>
            <ModalInput
              type="text"
              name="name"
              label="Nombre de la banda"
              handleChange={handleChange}
            />
            <ModalInput
              type="text"
              name="genre"
              label="Género musical"
              handleChange={handleChange}
            />
            <ModalInput
              type="text"
              name="lastSong"
              label="Último lanzamiento"
              handleChange={handleChange}
            />
            <ModalInput
              type="number"
              name="listeners"
              placeholder="Completarlo con números"
              label="N° de Oyentes"
              handleChange={handleChange}
            />
            <ModalInput
              type="text"
              name="img"
              placeholder="Completarlo con el link de la imágen"
              label="Foto de perfil"
              handleChange={handleChange}
            />
          </InputsContainerStyled>

          <ButtonsContainerStyled>
            <Button
              sx={{ backgroundColor: "#4c1d95" }}
              variant="contained"
              onClick={() => {
                handleClose();
                setForm({});
              }}
            >
              Cancelar
            </Button>
            <Button
              sx={{ backgroundColor: "#4c1d95" }}
              variant="contained"
              onClick={() =>
                handlerSubmit(form)
                  .then((res) => {
                    handleClose();
                    setForm({});
                    mutate(res);
                    // window.location.reload();
                  })
                  .catch((err) => alert(err))
              }
            >
              Enviar
            </Button>
          </ButtonsContainerStyled>
        </ModalContainerStyled>
      </Modal>
    </div>
  );
};

export default FormModal;
