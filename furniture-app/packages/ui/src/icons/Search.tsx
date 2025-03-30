import Svg, { Path } from 'react-native-svg';

interface ISearchIcon {
  color?: string;
  width?: number;
  height?: number;
  isLarge?: boolean;
}

export const SearchIcon = ({
  color = 'gray',
  width = 24,
  height = 24,
  isLarge = true
}: ISearchIcon) => (
  <Svg width={width} height={height} fill='none'>
    {isLarge ? (
      <Path
        fill={color}
        d='M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9Zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7Zm8.485.071 2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414Z'
      />
    ) : (
      <Path
        fill={color}
        d='M9.166 1.667c4.14 0 7.5 3.36 7.5 7.5 0 4.14-3.36 7.5-7.5 7.5-4.14 0-7.5-3.36-7.5-7.5 0-4.14 3.36-7.5 7.5-7.5Zm0 13.333A5.832 5.832 0 0 0 15 9.167a5.832 5.832 0 0 0-5.834-5.834 5.831 5.831 0 0 0-5.833 5.834A5.832 5.832 0 0 0 9.166 15Zm7.071.06 2.358 2.356-1.18 1.179-2.356-2.357 1.178-1.179Z'
      />
    )}
  </Svg>
);
