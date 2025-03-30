import Svg, { Path } from 'react-native-svg';

interface IHomeIconProps {
  isActive?: boolean;
}

export const HomeIcon = ({ isActive = false }: IHomeIconProps) => (
  <Svg width={24} height={24} fill='none'>
    <Path
      fill={isActive ? '#242424' : '#999999'}
      d='M22 12.667a.666.666 0 0 1-.473-.194L12 2.94l-9.527 9.533a.666.666 0 0 1-.94-.94l10-10a.667.667 0 0 1 .94 0l10 10A.666.666 0 0 1 22 12.667Z'
    />
    <Path
      fill={isActive ? '#242424' : '#999999'}
      d='M12 5.193 4 13.22v8.113a1.333 1.333 0 0 0 1.333 1.334H10V16h4v6.667h4.667A1.333 1.333 0 0 0 20 21.333v-8.16l-8-7.98Z'
    />
  </Svg>
);
