import { useQuery } from '@tanstack/react-query'
import { getSongList } from '../api/songApi'
import { Link } from 'react-router-dom'

export default function SongList() {
  const { data: songs, isLoading, isError, error } = useQuery({
    queryKey: ['songs'],
    queryFn: getSongList
  })

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>오류 발생: {error.message}</p>
  }

  return (
    <>
      { songs.map((song) => (
        <div key={song.id}>
          <Link to={`/${song.id}`}>
            {song.title}
          </Link>
        </div>
      ))}
    </>
  )
}