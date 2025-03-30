import Svg, { Path } from 'react-native-svg';

interface INotificationIconProps {
  isActive?: boolean;
}

export const NotificationIcon = ({
  isActive = false
}: INotificationIconProps) => (
  <Svg width={24} height={24} fill='none'>
    <Path
      stroke={isActive ? '#242424' : '#999999'}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M18 8A6 6 0 1 0 6 8c0 7-3 9-3 9h18s-3-2-3-9ZM13.73 21a1.999 1.999 0 0 1-3.46 0'
    />
  </Svg>
);
