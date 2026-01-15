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
    <div className='p-6'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {songs.map(song => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </div>
  )
}