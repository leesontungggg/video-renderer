import {Composition} from 'remotion';
import {HelloWorld} from './HelloWorld';
import {Logo} from './HelloWorld/Logo';
import {Subtitle} from './HelloWorld/Subtitle';
import {Title} from './HelloWorld/Title';
import {VideoSample} from './HelloWorld/VideoSample';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={400}
				fps={30}
				width={1080}
				height={1920}
				defaultProps={{
					titleText: 'Tùng Lê',
					titleColor: 'black',
				}}
			/>
			<Composition
				id="VideoSample"
				component={VideoSample}
				durationInFrames={400}
				fps={30}
				width={1080}
				height={1920}
			/>
		</>
	);
};
