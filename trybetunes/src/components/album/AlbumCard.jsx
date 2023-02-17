import { useEffect } from 'react';

function AlbumCard({ album, onClick, id }) {
	const handleChange = ({ target }) => {
		console.log(target.value);
	};

	return (
		<div
			className="album-card
         w-52
         h-64
         m-auto
         text-center
         font
         bg-[#181818]
         transition duration-300
         hover:bg-[rgb(40,40,40)]
         rounded-lg
         shadow-2xl
         "
			onClick={onClick}
			id={id}
		>
			<div className="album-card-image">
				<img
					src={album.artworkUrl100}
					alt={album.artistName}
					className="w-full
            p-4
            h-48
            rounded-3xl
            "
				/>
			</div>
			<div className="
         album-card-info
         text-white
         gap-2
         h-20
         text-sm
         rounded-b-lg
         px-4
            ">
				<p className="
            text-white
            truncate
            ">{album.artistName}</p>
				<p className="
            text-white
            truncate
            ">{album.collectionName}</p>
			</div>
		</div>
	);
}

export default AlbumCard;
