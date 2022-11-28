import styled from '@emotion/styled';
import { Stack } from '@mui/material';

export const MainRightLayout = styled.div`
	width: 320px;
	margin-top: 30px !important;
	padding: 10px;

	.home__logo {
		border-radius: 50%;
	}

	.home__text {
		color: #000;
		margin-top: 0;
		font-size: 14px;
		margin-bottom: 5px;
	}

	.home__desc {
		color: grey;
		margin: 0;
		font-size: 14px;
		width: 145px;
		text-overflow: ellipsis !important;
		overflow: hidden;
		white-space: nowrap;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}

	.home__button {
		font-size: 10px;
	}
`;

export const MainRightTopLayout = styled(Stack)`
	margin-bottom: 15px !important;
`;

export const MainRightBottomLayout = styled.div``;
