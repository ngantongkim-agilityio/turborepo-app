import Svg, { Path } from 'react-native-svg';

interface IProfileIconProps {
  isActive?: boolean;
}

export const ProfileIcon = ({ isActive = false }: IProfileIconProps) => (
  <Svg width={24} height={24} fill='none'>
    <Path
      fill={isActive ? '#242424' : '#999999'}
      fillRule='evenodd'
      d='M19.5 21s1.5 0 1.5-1.5-1.5-6-9-6-9 4.5-9 6S4.5 21 4.5 21h15ZM4.508 19.584v-.003.003Zm.025-.084h14.934a.379.379 0 0 0 .021-.003l.012-.003c-.002-.369-.231-1.479-1.248-2.496C17.274 16.02 15.434 15 12 15c-3.435 0-5.274 1.02-6.252 1.998-1.017 1.017-1.245 2.127-1.248 2.496l.033.006Zm14.961.084v-.003.003ZM12 10.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm4.5-3a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z'
      clipRule='evenodd'
    />
  </Svg>
);
