import {Video} from 'remotion';
import sample from './sample.mp4';

export const VideoSample: React.FC = () => {
	return <Video src={sample} />;
};
