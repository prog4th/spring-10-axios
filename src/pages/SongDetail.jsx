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
      <img 
        src={`https://picsum.photos/200/200?random=${id}`} 
        alt="노래 앨범 이미지"/>
      <h1>{song.title}</h1>

      <img 
        src={`https://i.pravatar.cc/60?u=${id}`} 
        alt="가수 이미지"/>
      <p>{song.singer}</p>
      
      <Link to="/">
        돌아가기
      </Link>
    </div>
  )
}