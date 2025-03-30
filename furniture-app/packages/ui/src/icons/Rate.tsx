import Svg, { Path, G, Defs, ClipPath } from 'react-native-svg';

export const RateIcon = () => (
  <Svg width={20} height={20} fill='none'>
    <G clipPath='url(#a)'>
      <Path
        fill='#F2C94C'
        d='M19.982 7.725a.359.359 0 0 0-.289-.244l-6.476-.941L10.321.672a.358.358 0 0 0-.642 0L6.783 6.54l-6.476.941a.359.359 0 0 0-.199.61l4.687 4.569-1.107 6.45a.359.359 0 0 0 .52.377L10 16.442l5.792 3.045a.36.36 0 0 0 .378-.027.358.358 0 0 0 .142-.35l-1.106-6.45 4.686-4.568a.359.359 0 0 0 .09-.367Z'
      />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' d='M0 0h20v20H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);
