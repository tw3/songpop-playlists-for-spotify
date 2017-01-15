const fakeTracklist = [
	{ title: 'The Sign', artist: 'Ace Of Base' },
	{ title: 'I Don\'t Want To Miss A Thing', artist: 'Aerosmith' },
	{ title: 'Boogie Oogie Oogie', artist: 'A Taste Of Honey' },
	{ title: 'Fallin\'', artist: 'Alicia Keys' },
	{ title: 'No One', artist: 'Alicia Keys' },
	{ title: 'I Swear', artist: 'All-4-One' },
	{ title: 'I Just Want To Be Your Everything', artist: 'Andy Gibb' },
	{ title: 'Shadow Dancing', artist: 'Andy Gibb' },
	{ title: 'Ring My Bell', artist: 'Anita Ward' },
	{ title: 'Foolish', artist: 'Ashanti' },
	{ title: 'The Way We Were', artist: 'Barbra Streisand' },
	{ title: 'Let It Be', artist: 'The Beatles' },
	{ title: 'How Can You Mend A Broken Heart', artist: 'Bee Gees' },
	{ title: 'How Deep Is Your Love', artist: 'Bee Gees' },
	{ title: 'Night Fever', artist: 'Bee Gees' },
	{ title: 'Stayin\' Alive', artist: 'Bee Gees' },
	{ title: 'Irreplaceable', artist: 'Beyoncé' },
	{ title: 'Lean On Me', artist: 'Bill Withers' },
	{ title: 'Me And Mrs. Jones', artist: 'Billy Paul' },
	{ title: 'Will It Go Round In Circles', artist: 'Billy Preston' },
	{ title: 'Raindrops Keep Fallin\' On My Head', artist: 'B.J. Thomas' },
	{ title: 'I Gotta Feeling', artist: 'The Black Eyed Peas' },
	{ title: 'Call Me', artist: 'Blondie' },
	{ title: 'Livin\' On A Prayer', artist: 'Bon Jovi' },
	{ title: 'Tha Crossroads', artist: 'Bone Thugs-n-Harmony' },
	{ title: 'Total Eclipse Of The Heart', artist: 'Bonnie Tyler' },
	{ title: 'I\'ll Make Love To You', artist: 'Boyz II Men' },
	{ title: 'On Bended Knee', artist: 'Boyz II Men' },
	{ title: '(Everything I Do) I Do It For You', artist: 'Bryan Adams' },
	{ title: 'Love Will Keep Us Together', artist: 'Captain & Tennille' },
	{ title: 'You\'re So Vain', artist: 'Carly Simon' },
	{ title: 'It\'s Too Late', artist: 'Carole King' },
	{ title: 'Top Of The World', artist: 'Carpenters' },
	{ title: 'Believe', artist: 'Cher' },
	{ title: 'Half-Breed', artist: 'Cher' },
	{ title: 'Le Freak', artist: 'Chic' },
	{ title: 'Run It!', artist: 'Chris Brown' },
	{ title: 'Genie In A Bottle', artist: 'Christina Aguilera' },
	{ title: 'Arthur\'s Theme (Best That You Can Do)', artist: 'Christopher Cross' },
	{ title: 'Three Times A Lady', artist: 'The Commodores' },
	{ title: 'Karma Chameleon', artist: 'Culture Club' },
	{ title: 'Bad Day', artist: 'Daniel Powter' },
	{ title: 'Lost In Your Eyes', artist: 'Debbie Gibson' },
	{ title: 'You Light Up My Life', artist: 'Debby Boone' },
	{ title: 'Ain\'t No Mountain High Enough', artist: 'Diana Ross' },
	{ title: 'Love Hangover', artist: 'Diana Ross' },
	{ title: 'Upside Down', artist: 'Diana Ross' },
	{ title: 'Money For Nothing', artist: 'Dire Straits' },
	{ title: 'Bad Girls', artist: 'Donna Summer' },
	{ title: 'Hot Stuff', artist: 'Donna Summer' },
	{ title: 'McArthur Park', artist: 'Donna Summer' },
	{ title: 'Go Away Little Girl', artist: 'Donny Osmond' },
	{ title: 'Keep On Truckin\'', artist: 'Eddie Kendricks' },
	{ title: 'War', artist: 'Edwin Starr' },
	{ title: 'Crocodile Rock', artist: 'Elton John' },
	{ title: 'Island Girl', artist: 'Elton John' },
	{ title: 'Best Of My Love', artist: 'The Emotions' },
	{ title: 'Kiss You All Over', artist: 'Exile' },
	{ title: 'Rock Me Amadeus', artist: 'Falco' },
	{ title: 'London Bridge', artist: 'Fergie' },
	{ title: 'Right Round [Ft. Kesha]', artist: 'Flo Rida' },
	{ title: 'December, 1963 (Oh, What A Night)', artist: 'The Four Seasons' },
	{ title: 'Grease', artist: 'Frankie Valli' },
	{ title: 'My Sweet Lord', artist: 'George Harrison' },
	{ title: 'Rock Your Baby', artist: 'George McCrae' },
	{ title: 'Faith', artist: 'George Michael' },
	{ title: 'Midnight Train To Georgia', artist: 'Gladys Knight & The Pips' },
	{ title: 'Rhinestone Cowboy', artist: 'Glen Campbell' },
	{ title: 'I Will Survive', artist: 'Gloria Gaynor' },
	{ title: 'American Woman', artist: 'The Guess Who' },
	{ title: 'Hollaback Girl', artist: 'Gwen Stefani' },
	{ title: 'MMMBop', artist: 'Hanson' },
	{ title: 'Rise', artist: 'Herb Alpert' },
	{ title: 'Rock The Boat', artist: 'Hues Corporation' },
	{ title: 'Don\'t You Want Me', artist: 'The Human League' },
	{ title: 'Centerfold', artist: 'The J. Geils Band' },
	{ title: 'I\'ll Be There', artist: 'The Jackson 5' },
	{ title: 'All For You', artist: 'Janet Jackson' },
	{ title: 'Miss You Much', artist: 'Janet Jackson' },
	{ title: 'Me And Bobby McGee', artist: 'Janis Joplin' },
	{ title: 'If You Had My Love', artist: 'Jennifer Lopez' },
	{ title: 'Bad, Bad Leroy Brown', artist: 'Jim Croce' },
	{ title: 'Time In A Bottle', artist: 'Jim Croce' },
	{ title: 'Disco Lady', artist: 'Johnnie Taylor' },
	{ title: 'I Can See Clearly Now', artist: 'Johnny Nash' },
	{ title: 'SexyBack [Ft. Timbaland]', artist: 'Justin Timberlake' },
	{ title: 'I Kissed A Girl', artist: 'Katy Perry' },
	{ title: 'All My Life', artist: 'K-Ci & JoJo' },
	{ title: 'Footloose', artist: 'Kenny Loggins' },
	{ title: 'Lady', artist: 'Kenny Rogers' },
	{ title: 'Bette Davis Eyes', artist: 'Kim Carnes' },
	{ title: 'My Sharona', artist: 'The Knack' },
	{ title: 'Jump', artist: 'Kris Kross' },
	{ title: 'Bleeding Love', artist: 'Leona Lewis' },
	{ title: 'All Night Long (All Night)', artist: 'Lionel Richie' },
	{ title: 'Say You, Say Me', artist: 'Lionel Richie' },
	{ title: 'Like A Prayer', artist: 'Madonna' },
	{ title: 'Music', artist: 'Madonna' },
	{ title: 'Kiss And Say Goodbye', artist: 'The Manhattans' },
	{ title: 'Dreamlover', artist: 'Mariah Carey' },
	{ title: 'Fantasy', artist: 'Mariah Carey' },
	{ title: 'Hero', artist: 'Mariah Carey' },
	{ title: 'Love Takes Time', artist: 'Mariah Carey' },
	{ title: 'Vision Of Love', artist: 'Mariah Carey' },
	{ title: 'We Belong Together', artist: 'Mariah Carey' },
	{ title: 'Let Me Love You', artist: 'Mario' },
	{ title: 'Let\'s Get It On', artist: 'Marvin Gaye' },
	{ title: 'I\'d Do Anything For Love (But I Won\'t Do That)', artist: 'Meat Loaf' },
	{ title: 'Star Wars Theme/Cantina Band', artist: 'Meco' },
	{ title: 'Brand New Key', artist: 'Melanie' },
	{ title: 'Beat It', artist: 'Michael Jackson' },
	{ title: 'Billie Jean', artist: 'Michael Jackson' },
	{ title: 'Black Or White', artist: 'Michael Jackson' },
	{ title: 'The First Night', artist: 'Monica' },
	{ title: 'This Is How We Do It', artist: 'Montell Jordan' },
	{ title: 'Bad Blood', artist: 'Neil Sedaka' },
	{ title: 'Hot In Herre', artist: 'Nelly' },
	{ title: 'Too Close', artist: 'Next' },
	{ title: 'Hypnotize', artist: 'The Notorious B.I.G.' },
	{ title: 'Magic', artist: 'Olivia Newton-John' },
	{ title: 'Physical', artist: 'Olivia Newton-John' },
];
export default (inputCollectionData = {}, action = {}) => {
	let playlistId, playlistIdx, playlist, newPlaylist, bHasPlaylistPayload;
	let updatedCollectionData = {};
	switch (action.type) {
		case 'COLLECTION_SAVE_PLAYLISTS':
			// Initialize collection if necessary
			if (inputCollectionData.bInit) {
				updatedCollectionData = inputCollectionData;
			} else {
				updatedCollectionData.playlists = action.payload.playlists;
				updatedCollectionData.selectedId = 0;
				updatedCollectionData.bInit = true;
			}
			return updatedCollectionData;
		case 'PLAYLIST_SHOW':
			bHasPlaylistPayload =
				(action.payload && action.payload.playlist && action.payload.playlist.id);
			if (bHasPlaylistPayload) {
				playlistId = action.payload.playlist.id;
			} else {
				// No playlist in payload -> show first playlist
				playlistId = inputCollectionData.playlists[0].id;
			}
			// Update the selectedId
			updatedCollectionData = {
				...inputCollectionData,
				selectedId: playlistId,
			};
			// Copy over the tracklist if it doesn't already exist
			playlistIdx = playlistId;
			playlist = updatedCollectionData.playlists[playlistIdx];
			if (!playlist.hasOwnProperty('tracklist')) {
				// TODO: Fetch the tracklist for this playlist using sagas
				playlist = { ...playlist, tracklist: fakeTracklist };
				updatedCollectionData.playlists = [
					...updatedCollectionData.playlists.slice(0, playlistIdx),
					playlist,
					...updatedCollectionData.playlists.slice(playlistIdx + 1),
				];
			}
			return updatedCollectionData;
		default:
			return inputCollectionData;
	}
};
