import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const deleteBand = (bandId) => {
  return axios.delete(`http://localhost:3006/bandas/${bandId}`, {
    transformResponse: () => bandId,
  });
};

export const useDeleteBand = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteBand, {
    onSuccess: (data) => {
      queryClient.invalidateQueries('bands', (oldQueryData) => {
      const newQueryData = oldQueryData.data.filter(
        band => band.id !== data.data
      );
      return {
        ...oldQueryData,
        data: newQueryData,
        };
      });
    }
  });
};
