
function MusicCard() {
  return (
    <div className="card" onClick={() => onMusicSelect(music)}>
      <div className="content">
        <div className="header">{music.title}</div>
      </div>
    </div>
  );
}

export default MusicCard;