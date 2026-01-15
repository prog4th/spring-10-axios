import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getSongDetail } from '../api/songApi.js'

export default function SongDetail() {
  const { id } = useParams()

  const { data: song, isLoading, isError, error } = useQuery({
    queryKey: ['song', id],
    queryFn: () => getSongDetail(id),
    enabled: !!id,
  })

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>오류 발생: {error.message}</p>
  }

  return (
    <div>
      <h1>{song.title}</h1>
      <p>{song.singer}</p>
    </div>
  )
}