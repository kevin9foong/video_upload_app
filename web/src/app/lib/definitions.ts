export type VideoMetadata = {
    title: string;
    startDateTime: string;
    videoLocation: string | undefined;
}

export type VideoToUpload = {
    filename: string;
    thumbnail: string;
    metadata: VideoMetadata;
}

export type UploadStatus = 'success' | 'pending' | 'failed';