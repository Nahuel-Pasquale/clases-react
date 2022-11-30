import { Button } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Card from "../../components/card/Card";
import Loader from "../../components/loader/Loader";
import { useBandsData } from "../../hooks/useBandsData";
import { BandsContainerStyled, BandsDisabledMessageStyled, BandsErrorMessageStyled } from "./BandsStyles";


// const fetchBands = () => {
//   return axios.get("http://localhost:3006/bandas");
// };

const Bands = () => {
  // const { isLoading, data, isError, error, refetch, isIdle } = useQuery("bands", fetchBands, {
  //   cacheTime: 5000,
  //   onSuccess: (data) => console.log('Peticion Exitosa ==> ', data),
  //   onError: (error) => console.log('Ocurrio un error ==> ', error),
  //   retry: 0,
  //   retryDelay: 2000,
  //   select: (data) => {
  //     const newBands = data.data.map(band => ({...band, genre: 'Cumbia' } ))
  //     return { ...data, data: newBands };
  //   },
  // });

  const { data, isLoading, isError, error } = useBandsData('Bands');

  return (
    <>
      {isLoading && <Loader />}
      {isError && (
        <BandsErrorMessageStyled>{error.message}</BandsErrorMessageStyled>
      )}

      {data && (
        <BandsContainerStyled>
          {data.data.map((band) => (
            <Card key={band.id} {...band} />
          ))}
        </BandsContainerStyled>
      )}

      {/* { isIdle &&
        <Box sx={{ width: '100%', textAlign: 'center' }}>
          <BandsDisabledMessageStyled>
            Consulta deshabilitada
          </BandsDisabledMessageStyled>
          <Button
          sx={{
            backgroundColor: '#4c1d95'
          }}
            variant='contained'
            onClick={ refetch }>
            Activar
          </Button>
        </Box> } */}
    </>
  );
};

export default Bands;
