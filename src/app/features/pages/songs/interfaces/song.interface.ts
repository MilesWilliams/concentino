export interface Song {
    id?: string | number;
    album: string;
    album_picture: Picture;
    genre: String;
    lyrics: string;
    path: string;
    title: string;
    type: string;
    size: string;
}

export interface Picture {
    ext:         string;
	mimetype:    any;
	type:        string ;
	description: string;
	data:        string;
}