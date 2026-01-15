import { useQuery } from '@tanstack/react-query'
import { getSongList } from '../api/songApi'
import { Link } from 'react-router-dom'
import SongCard from '../components/SongCard'

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
        <SongCard key={song.id} song={song} />
      ))}
    </>
  )
}