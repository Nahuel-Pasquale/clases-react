import React from "react";
import { OpenModalContainerStyled } from "./OpenModalStyles";
import AddIcon from "@mui/icons-material/Add";
import { motion } from "framer-motion";

const OpenModal = ({ handleOpen }) => {
  return (
    <motion.div
      style={{ height: "100%" }}
      whileTap={{
        scale: 0.95,
      }}
      whileHover={{
        scale: 0.95,
      }}
    >
      <OpenModalContainerStyled onClick={handleOpen}>
        <AddIcon sx={{ color: "white", fontSize: "48px" }} />
      </OpenModalContainerStyled>
    </motion.div>
  );
};

export default OpenModal;
