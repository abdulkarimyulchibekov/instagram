import styled from '@emotion/styled';
import { ListItem } from '@mui/material';
import { Button } from '@mui/material';

export const HomeMainItem = styled(ListItem)`
	display: flex;
	align-items: start;
	padding: 0;
	margin-bottom: 15px;
	width: 100% !important;

	.item__image {
		border-radius: 50%;
		margin-right: 10px;
	}

	.item__main {
		margin-right: 13px;
	}

	.item__text-main {
		margin: 0;
		font-size: 12px;
	}

	.item__text-secondary {
		margin: 0;
		font-size: 12px;
		color: gray;
	}
`;

export const ItemButton = styled(Button)`
	font-size: 11px;
`;
