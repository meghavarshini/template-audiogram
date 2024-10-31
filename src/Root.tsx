import { Composition, staticFile } from 'remotion';
import { AudioGramSchema, AudiogramComposition, fps } from './Composition';
import './style.css';

export const RemotionRoot: React.FC = () => {
	return (
    <>
      <Composition
        id="Audiogram"
        component={AudiogramComposition}
        fps={fps}
        width={1080}
        height={1080}
        schema={AudioGramSchema}
        defaultProps={{
          audioOffsetInSeconds: 0,
          audioFileName: staticFile("audio.mp3"),
          coverImgFileName: staticFile("cover.jpg"),
          titleText: "Season #6: Episode 3",
          titleColor: "rgba(186, 186, 186, 0.93)",
          subtitlesFileName: staticFile("subtitles.srt"),
          onlyDisplayCurrentSentence: true,
          subtitlesTextColor: "rgba(255, 255, 255, 0.93)",
          subtitlesLinePerPage: 2,
          subtitlesZoomMeasurerSize: 100,
          subtitlesLineHeight: 80,
          waveColor: "#a3a5ae",
          waveFreqRangeStartIndex: 8,
          waveLinesToDisplay: 50,
          waveNumberOfSamples: "512" as const,
          mirrorWave: true,
          durationInSeconds: 31,
        }}
        // Determine the length of the video based on the duration of the audio file
        calculateMetadata={({ props }) => {
          return {
            durationInFrames: props.durationInSeconds * fps,
            props,
          };
        }}
      />
    </>
  );
};
