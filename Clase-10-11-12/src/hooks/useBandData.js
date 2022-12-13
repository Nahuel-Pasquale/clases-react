import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

const fetchBands = ({ queryKey }) => {
  console.log( 'queryKey ==> ' ,queryKey)
  const bandId = queryKey[1];
  return axios.get(`http://localhost:3006/bandas/${bandId}`);
};

export const useBandData = (name ,bandId) => {
  const queryClient = useQueryClient();
  console.log(queryClient)

  return useQuery([name, bandId], fetchBands, {
    initialData: () => {
      const band = queryClient
      .getQueryData(name)
      ?.data?.find((band) => band.id === parseInt(bandId));

      if(band) {
        return { data: band };
      } else {
        return undefined;
      }
    },
  });
};