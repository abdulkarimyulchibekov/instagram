import { User } from '../../Data/UseUsersStore';
import { HomeMainItem, ItemButton } from './HomeRightItem.style';

interface IProps {
	user: User;
}

export const HomeRightItem = ({ user }: IProps) => {
	return (
		<HomeMainItem>
			<img
				className='item__image'
				src={`https://picsum.photos/id/${user.id}/32`}
				alt='user logo'
			/>
			<div className='item__main'>
				<p className='item__text-main'>{user.name}</p>
				<p className='item__text-secondary'>Рекомендации для вас</p>
			</div>
			<ItemButton>Подписаться</ItemButton>
		</HomeMainItem>
	);
};
