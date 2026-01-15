import { Link } from 'react-router-dom'

export default function SongCard({ song }) {
  return (
    <Link to={`/${song.id}`} >
      <img 
        src={`https://picsum.photos/200/200?random=${song.id}`} 
        alt={`${song.title} 앨범 이미지`}
      />
      <div>{song.title}</div>
    </Link>
  )
}