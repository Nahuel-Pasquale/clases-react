import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const addBand = (band) => {
  return axios.post('http://localhost:3006/bandas', band);
}

export const useAddBand = () => {
  const queryClient = useQueryClient();

  return useMutation(addBand, {
    onSuccess: (data) => {
      queryClient.invalidateQueries('bands', (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, data.data],
        }
      });
    },
  });
};
