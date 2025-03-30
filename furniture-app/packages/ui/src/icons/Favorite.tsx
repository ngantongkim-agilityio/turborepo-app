import Svg, { Path } from 'react-native-svg';
import { ButtonProps } from 'tamagui';

interface IFavoriteIconProps extends ButtonProps {
  isActive?: boolean;
}

export const FavoriteIcon = ({ isActive = true }: IFavoriteIconProps) => (
  <Svg width={24} height={24} fill='none'>
    <Path
      stroke={isActive ? '#242424' : '#999999'}
      strokeWidth={1.5}
      d='M4.997 21.25c-.079 0-.131-.034-.156-.069a.517.517 0 0 1-.091-.317V3.698c0-.431.465-.948 1.132-.948h12.303c.63 0 1.065.483 1.065.948v17.166c0 .24-.069.324-.087.344-.022.022-.057.042-.116.042-.064 0-.186-.025-.381-.182l-5.486-4.406a1.826 1.826 0 0 0-1.139-.382c-.394 0-.812.12-1.137.38l-.001.001L5.4 21.068l-.002.001c-.181.146-.325.18-.4.18Z'
    />
  </Svg>
);
