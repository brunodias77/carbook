import FeedPhotos from "./feed-photos";
import { Photo } from "@/actions/photo-get";

const Feed = ({ photos }: { photos: Photo[] }) => {
    return (
        <div>
            <FeedPhotos photos={photos} />
        </div>
    );
};

export default Feed;