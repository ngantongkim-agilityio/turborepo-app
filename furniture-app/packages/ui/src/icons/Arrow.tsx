import Svg, { Path } from 'react-native-svg';

export const ArrowIcon = () => (
  <Svg width={24} height={24} fill='none'>
    <Path
      stroke='#242424'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='m9 18 6-6-6-6'
    />
  </Svg>
);
