import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchMovieDetailCredits = ({ id }) => {
  return api.get(`/movie/${id}/credits`);
};

export const useMovieDetailCreditsQuery = ({ id }) => {
  return useQuery({
    queryKey: ['movie-credits', id],
    queryFn: () => fetchMovieDetailCredits({ id }),
    select: (result) => result.data.cast,
  });
};