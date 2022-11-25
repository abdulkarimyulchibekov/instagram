import create from 'zustand';

export type Comment = {
	userId: number;
	content: string;
	id: number;
};

export type Comments = {
	postId: number;
	comments: Comment[];
	id: number;
};

export type CommentsStore = (set: Function) => {
	comments: Comments[];
	addComment: Function;
};

export type CommentMain = {
	comments: Comments[];
	addComment: Function;
};

let commentsStore: CommentsStore = (set) => ({
	comments: [
		{
			comments: [
				{
					userId: 1,
					content: "Wow that's good",
					id: 1,
				},
				{
					userId: 3,
					content: 'I think we can do it',
					id: 2,
				},
				{
					userId: 5,
					content:
						'Google One cloud storage £$19.99 or £15.99 USD/year— I now pay for cloud storage. Yes, it has finally caught up with me, likely much later than most of you but with the 100GB package, it is well worth the cheap cost.',
					id: 3,
				},
				{
					userId: 2,
					content:
						'Fastmail $72 or £58/year— There are dozens of us I say. Linked to my Google account. Looks great, and runs fast. Custom domains. Good organization. Healthy extra storage. Notes, calendar, and file storage are built into the same app effectively.',
					id: 4,
				},
				{
					userId: 6,
					content:
						'Raindrop bookmark storage $35 or £27.84/year — I have now settled on this, for now, as my online bookmark and link storage.',
					id: 5,
				},
			],
			id: 1,
			postId: 1,
		},
		{
			comments: [
				{
					userId: 5,
					content:
						'Bitwarden password manager $10 or £8/year — Worth paying just to support it but it adds various security and emergency-related features.',
					id: 1,
				},
				{
					userId: 2,
					content:
						'Waking Up mindfulness app $99.99 or £80/year— The mindfulness app by Sam Harris. There was something really different about this compared to other mindful and meditation apps I had tried in the past.',
					id: 1,
				},
				{
					userId: 7,
					content:
						'Google One cloud storage £$19.99 or £15.99 USD/year— I now pay for cloud storage. Yes, it has finally caught up with me, likely much later than most of you but with the 100GB package, it is well worth the cheap cost.',
					id: 1,
				},
				{
					userId: 2,
					content:
						'The most expensive of these is YouTube Premium which also includes YouTube Music which I think is pretty key to justify the cost.',
					id: 1,
				},
				{
					userId: 9,
					content:
						'So these are the 7 subscriptions that I subscribe to in 2022 that I didn’t in 2021 with 3 more that I am thinking about. Note: Some of these costs have been converted from USD to GBP so may vary by region and exchange rate.',
					id: 1,
				},
			],
			id: 2,
			postId: 4,
		},
		{
			comments: [
				{
					userId: 9,
					content:
						'So these are the 7 subscriptions that I subscribe to in 2022 that I didn’t in 2021 with 3 more that I am thinking about. Note: Some of these costs have been converted from USD to GBP so may vary by region and exchange rate.',
					id: 1,
				},
				{
					userId: 8,
					content: 'I think we can do it',
					id: 2,
				},
				{
					userId: 7,
					content:
						'Google One cloud storage £$19.99 or £15.99 USD/year— I now pay for cloud storage. Yes, it has finally caught up with me, likely much later than most of you but with the 100GB package, it is well worth the cheap cost.',
					id: 3,
				},
				{
					userId: 6,
					content:
						'Fastmail $72 or £58/year— There are dozens of us I say. Linked to my Google account. Looks great, and runs fast. Custom domains. Good organization. Healthy extra storage. Notes, calendar, and file storage are built into the same app effectively.',
					id: 4,
				},
				{
					userId: 5,
					content:
						'Raindrop bookmark storage $35 or £27.84/year — I have now settled on this, for now, as my online bookmark and link storage.',
					id: 5,
				},
			],
			id: 3,
			postId: 2,
		},
		{
			comments: [
				{
					userId: 1,
					content:
						'So these are the 7 subscriptions that I subscribe to in 2022 that I didn’t in 2021 with 3 more that I am thinking about. Note: Some of these costs have been converted from USD to GBP so may vary by region and exchange rate.',
					id: 1,
				},
				{
					userId: 3,
					content:
						'Yes, it has finally caught up with me, likely much later than most of you but with the 100GB package, it is well worth the cheap cost. Sharing it with a family group makes it even easier.',
					id: 2,
				},
				{
					userId: 5,
					content:
						'Google One cloud storage £$19.99 or £15.99 USD/year— I now pay for cloud storage. Yes, it has finally caught up with me, likely much later than most of you but with the 100GB package, it is well worth the cheap cost.',
					id: 3,
				},
				{
					userId: 2,
					content:
						'Fastmail $72 or £58/year— There are dozens of us I say. Linked to my Google account. Looks great, and runs fast. Custom domains. Good organization. Healthy extra storage. Notes, calendar, and file storage are built into the same app effectively.',
					id: 4,
				},
				{
					userId: 6,
					content:
						'Raindrop bookmark storage $35 or £27.84/year — I have now settled on this, for now, as my online bookmark and link storage.',
					id: 5,
				},
			],
			id: 4,
			postId: 3,
		},
		{
			comments: [
				{
					userId: 1,
					content:
						'Yes, it has finally caught up with me, likely much later than most of you but with the 100GB package, it is well worth the cheap cost. Sharing it with a family group makes it even easier.',
					id: 1,
				},
				{
					userId: 3,
					content:
						'Fastmail $72 or £58/year— There are dozens of us I say. Linked to my Google account. Looks great, and runs fast. Custom domains. Good organization. Healthy extra storage. Notes, calendar, and file storage are built into the same app effectively.',
					id: 2,
				},
				{
					userId: 5,
					content:
						'Google One cloud storage £$19.99 or £15.99 USD/year— I now pay for cloud storage. Yes, it has finally caught up with me, likely much later than most of you but with the 100GB package, it is well worth the cheap cost.',
					id: 3,
				},
				{
					userId: 2,
					content:
						'Fastmail $72 or £58/year— There are dozens of us I say. Linked to my Google account. Looks great, and runs fast. Custom domains. Good organization. Healthy extra storage. Notes, calendar, and file storage are built into the same app effectively.',
					id: 4,
				},
				{
					userId: 6,
					content:
						'Raindrop bookmark storage $35 or £27.84/year — I have now settled on this, for now, as my online bookmark and link storage.',
					id: 5,
				},
			],
			id: 5,
			postId: 4,
		},
		{
			comments: [
				{
					userId: 1,
					content:
						'I have moved to a designated podcast app. I tested a load and landed on Pocket Casts being prepared to pay extra for Plus. It is really just the interface that beats out the rest for me.',
					id: 1,
				},
				{
					userId: 3,
					content:
						'Raindrop bookmark storage $35 or £27.84/year — I have now settled on this, for now, as my online bookmark and link storage',
					id: 1,
				},
				{
					userId: 5,
					content:
						'Google One cloud storage £$19.99 or £15.99 USD/year— I now pay for cloud storage. Yes, it has finally caught up with me, likely much later than most of you but with the 100GB package, it is well worth the cheap cost.',
					id: 1,
				},
				{
					userId: 2,
					content:
						'Fastmail $72 or £58/year— There are dozens of us I say. Linked to my Google account. Looks great, and runs fast. Custom domains. Good organization. Healthy extra storage. Notes, calendar, and file storage are built into the same app effectively.',
					id: 1,
				},
				{
					userId: 6,
					content:
						'Raindrop bookmark storage $35 or £27.84/year — I have now settled on this, for now, as my online bookmark and link storage.',
					id: 1,
				},
			],
			id: 6,
			postId: 5,
		},
		{
			comments: [
				{
					userId: 1,
					content:
						'Bitwarden password manager $10 or £8/year — Worth paying just to support it but it adds various security and emergency-related features.',
					id: 1,
				},
				{
					userId: 3,
					content:
						'Waking Up mindfulness app $99.99 or £80/year— The mindfulness app by Sam Harris. There was something really different about this compared to other mindful and meditation apps I had tried in the past.',
					id: 2,
				},
				{
					userId: 5,
					content:
						'Google One cloud storage £$19.99 or £15.99 USD/year— I now pay for cloud storage. Yes, it has finally caught up with me, likely much later than most of you but with the 100GB package, it is well worth the cheap cost.',
					id: 3,
				},
				{
					userId: 2,
					content:
						'Fastmail $72 or £58/year— There are dozens of us I say. Linked to my Google account. Looks great, and runs fast. Custom domains. Good organization. Healthy extra storage. Notes, calendar, and file storage are built into the same app effectively.',
					id: 4,
				},
				{
					userId: 6,
					content:
						'Raindrop bookmark storage $35 or £27.84/year — I have now settled on this, for now, as my online bookmark and link storage.',
					id: 5,
				},
			],
			id: 7,
			postId: 6,
		},
		{
			comments: [
				{
					userId: 1,
					content:
						'ProtonDrive — Private storage and the ability to retain your position when looking through a document.',
					id: 1,
				},
				{
					userId: 3,
					content:
						'Shortform — I currently use Blinkist but I prefer the length and thoroughness of Shortform. After I trial I know I want to switch so will do so when my Blinkist subcription expires later this year.',
					id: 2,
				},
				{
					userId: 5,
					content:
						'Google One cloud storage £$19.99 or £15.99 USD/year— I now pay for cloud storage. Yes, it has finally caught up with me, likely much later than most of you but with the 100GB package, it is well worth the cheap cost.',
					id: 3,
				},
				{
					userId: 2,
					content:
						'Fastmail $72 or £58/year— There are dozens of us I say. Linked to my Google account. Looks great, and runs fast. Custom domains. Good organization. Healthy extra storage. Notes, calendar, and file storage are built into the same app effectively.',
					id: 4,
				},
				{
					userId: 6,
					content:
						'Raindrop bookmark storage $35 or £27.84/year — I have now settled on this, for now, as my online bookmark and link storage.',
					id: 5,
				},
			],
			id: 8,
			postId: 7,
		},
		{
			comments: [
				{
					userId: 1,
					content: '7 Subscriptions I Added In 2022 and 3 I’m Thinking About',
					id: 1,
				},
				{
					userId: 3,
					content:
						'In 2022 I have continued discovering, testing, and more importantly revisiting various apps, services, and subscriptions that I wasn’t a subscriber of.',
					id: 2,
				},
				{
					userId: 5,
					content:
						'Google One cloud storage £$19.99 or £15.99 USD/year— I now pay for cloud storage. Yes, it has finally caught up with me, likely much later than most of you but with the 100GB package, it is well worth the cheap cost.',
					id: 3,
				},
				{
					userId: 2,
					content:
						'Fastmail $72 or £58/year— There are dozens of us I say. Linked to my Google account. Looks great, and runs fast. Custom domains. Good organization. Healthy extra storage. Notes, calendar, and file storage are built into the same app effectively.',
					id: 4,
				},
				{
					userId: 6,
					content:
						'Raindrop bookmark storage $35 or £27.84/year — I have now settled on this, for now, as my online bookmark and link storage.',
					id: 5,
				},
			],
			id: 9,
			postId: 8,
		},
		{
			comments: [
				{
					userId: 1,
					content:
						'So these are the 7 subscriptions that I subscribe to in 2022 that I didn’t in 2021 with 3 more that I am thinking about. Note: Some of these costs have been converted from USD to GBP so may vary by region and exchange rate.',
					id: 1,
				},
				{
					userId: 3,
					content:
						'YouTube Premium $11.99 or £11.99/month — I am a heavy YouTube user. I watch or listen for 6+ hours per day and the ability to have it play in the background while my phone is locked is highly valued to me. ',
					id: 2,
				},
				{
					userId: 5,
					content:
						'Google One cloud storage £$19.99 or £15.99 USD/year— I now pay for cloud storage. Yes, it has finally caught up with me, likely much later than most of you but with the 100GB package, it is well worth the cheap cost.',
					id: 3,
				},
				{
					userId: 2,
					content:
						'Fastmail $72 or £58/year— There are dozens of us I say. Linked to my Google account. Looks great, and runs fast. Custom domains. Good organization. Healthy extra storage. Notes, calendar, and file storage are built into the same app effectively.',
					id: 4,
				},
				{
					userId: 6,
					content:
						'Raindrop bookmark storage $35 or £27.84/year — I have now settled on this, for now, as my online bookmark and link storage.',
					id: 5,
				},
			],
			id: 10,
			postId: 9,
		},
		{
			comments: [
				{
					userId: 1,
					content:
						'So these are the 7 subscriptions that I subscribe to in 2022 that I didn’t in 2021 with 3 more that I am thinking about. Note: Some of these costs have been converted from USD to GBP so may vary by region and exchange rate.',
					id: 1,
				},
				{
					userId: 3,
					content:
						'YouTube Premium $11.99 or £11.99/month — I am a heavy YouTube user. I watch or listen for 6+ hours per day and the ability to have it play in the background while my phone is locked is highly valued to me. ',
					id: 2,
				},
				{
					userId: 5,
					content:
						'Google One cloud storage £$19.99 or £15.99 USD/year— I now pay for cloud storage. Yes, it has finally caught up with me, likely much later than most of you but with the 100GB package, it is well worth the cheap cost.',
					id: 3,
				},
				{
					userId: 2,
					content:
						'Fastmail $72 or £58/year— There are dozens of us I say. Linked to my Google account. Looks great, and runs fast. Custom domains. Good organization. Healthy extra storage. Notes, calendar, and file storage are built into the same app effectively.',
					id: 4,
				},
				{
					userId: 6,
					content:
						'Raindrop bookmark storage $35 or £27.84/year — I have now settled on this, for now, as my online bookmark and link storage.',
					id: 5,
				},
			],
			id: 10,
			postId: 10,
		},
		{
			comments: [
				{
					userId: 1,
					content:
						'So these are the 7 subscriptions that I subscribe to in 2022 that I didn’t in 2021 with 3 more that I am thinking about. Note: Some of these costs have been converted from USD to GBP so may vary by region and exchange rate.',
					id: 1,
				},
				{
					userId: 3,
					content:
						'YouTube Premium $11.99 or £11.99/month — I am a heavy YouTube user. I watch or listen for 6+ hours per day and the ability to have it play in the background while my phone is locked is highly valued to me. ',
					id: 2,
				},
				{
					userId: 5,
					content:
						'Google One cloud storage £$19.99 or £15.99 USD/year— I now pay for cloud storage. Yes, it has finally caught up with me, likely much later than most of you but with the 100GB package, it is well worth the cheap cost.',
					id: 3,
				},
				{
					userId: 2,
					content:
						'Fastmail $72 or £58/year— There are dozens of us I say. Linked to my Google account. Looks great, and runs fast. Custom domains. Good organization. Healthy extra storage. Notes, calendar, and file storage are built into the same app effectively.',
					id: 4,
				},
				{
					userId: 6,
					content:
						'Raindrop bookmark storage $35 or £27.84/year — I have now settled on this, for now, as my online bookmark and link storage.',
					id: 5,
				},
			],
			id: 10,
			postId: 11,
		},
		{
			comments: [
				{
					userId: 1,
					content:
						'So these are the 7 subscriptions that I subscribe to in 2022 that I didn’t in 2021 with 3 more that I am thinking about. Note: Some of these costs have been converted from USD to GBP so may vary by region and exchange rate.',
					id: 1,
				},
				{
					userId: 3,
					content:
						'YouTube Premium $11.99 or £11.99/month — I am a heavy YouTube user. I watch or listen for 6+ hours per day and the ability to have it play in the background while my phone is locked is highly valued to me. ',
					id: 2,
				},
				{
					userId: 5,
					content:
						'Google One cloud storage £$19.99 or £15.99 USD/year— I now pay for cloud storage. Yes, it has finally caught up with me, likely much later than most of you but with the 100GB package, it is well worth the cheap cost.',
					id: 3,
				},
				{
					userId: 2,
					content:
						'Fastmail $72 or £58/year— There are dozens of us I say. Linked to my Google account. Looks great, and runs fast. Custom domains. Good organization. Healthy extra storage. Notes, calendar, and file storage are built into the same app effectively.',
					id: 4,
				},
				{
					userId: 6,
					content:
						'Raindrop bookmark storage $35 or £27.84/year — I have now settled on this, for now, as my online bookmark and link storage.',
					id: 5,
				},
			],
			id: 10,
			postId: 12,
		},
		{
			comments: [
				{
					userId: 1,
					content:
						'So these are the 7 subscriptions that I subscribe to in 2022 that I didn’t in 2021 with 3 more that I am thinking about. Note: Some of these costs have been converted from USD to GBP so may vary by region and exchange rate.',
					id: 1,
				},
				{
					userId: 3,
					content:
						'YouTube Premium $11.99 or £11.99/month — I am a heavy YouTube user. I watch or listen for 6+ hours per day and the ability to have it play in the background while my phone is locked is highly valued to me. ',
					id: 2,
				},
				{
					userId: 5,
					content:
						'Google One cloud storage £$19.99 or £15.99 USD/year— I now pay for cloud storage. Yes, it has finally caught up with me, likely much later than most of you but with the 100GB package, it is well worth the cheap cost.',
					id: 3,
				},
				{
					userId: 2,
					content:
						'Fastmail $72 or £58/year— There are dozens of us I say. Linked to my Google account. Looks great, and runs fast. Custom domains. Good organization. Healthy extra storage. Notes, calendar, and file storage are built into the same app effectively.',
					id: 4,
				},
				{
					userId: 6,
					content:
						'Raindrop bookmark storage $35 or £27.84/year — I have now settled on this, for now, as my online bookmark and link storage.',
					id: 5,
				},
			],
			id: 10,
			postId: 13,
		},
		{
			comments: [
				{
					userId: 1,
					content:
						'So these are the 7 subscriptions that I subscribe to in 2022 that I didn’t in 2021 with 3 more that I am thinking about. Note: Some of these costs have been converted from USD to GBP so may vary by region and exchange rate.',
					id: 1,
				},
				{
					userId: 3,
					content:
						'YouTube Premium $11.99 or £11.99/month — I am a heavy YouTube user. I watch or listen for 6+ hours per day and the ability to have it play in the background while my phone is locked is highly valued to me. ',
					id: 2,
				},
				{
					userId: 5,
					content:
						'Google One cloud storage £$19.99 or £15.99 USD/year— I now pay for cloud storage. Yes, it has finally caught up with me, likely much later than most of you but with the 100GB package, it is well worth the cheap cost.',
					id: 3,
				},
				{
					userId: 2,
					content:
						'Fastmail $72 or £58/year— There are dozens of us I say. Linked to my Google account. Looks great, and runs fast. Custom domains. Good organization. Healthy extra storage. Notes, calendar, and file storage are built into the same app effectively.',
					id: 4,
				},
				{
					userId: 6,
					content:
						'Raindrop bookmark storage $35 or £27.84/year — I have now settled on this, for now, as my online bookmark and link storage.',
					id: 5,
				},
			],
			id: 10,
			postId: 14,
		},
		{
			comments: [
				{
					userId: 1,
					content:
						'So these are the 7 subscriptions that I subscribe to in 2022 that I didn’t in 2021 with 3 more that I am thinking about. Note: Some of these costs have been converted from USD to GBP so may vary by region and exchange rate.',
					id: 1,
				},
				{
					userId: 3,
					content:
						'YouTube Premium $11.99 or £11.99/month — I am a heavy YouTube user. I watch or listen for 6+ hours per day and the ability to have it play in the background while my phone is locked is highly valued to me. ',
					id: 2,
				},
				{
					userId: 5,
					content:
						'Google One cloud storage £$19.99 or £15.99 USD/year— I now pay for cloud storage. Yes, it has finally caught up with me, likely much later than most of you but with the 100GB package, it is well worth the cheap cost.',
					id: 3,
				},
				{
					userId: 2,
					content:
						'Fastmail $72 or £58/year— There are dozens of us I say. Linked to my Google account. Looks great, and runs fast. Custom domains. Good organization. Healthy extra storage. Notes, calendar, and file storage are built into the same app effectively.',
					id: 4,
				},
				{
					userId: 6,
					content:
						'Raindrop bookmark storage $35 or £27.84/year — I have now settled on this, for now, as my online bookmark and link storage.',
					id: 5,
				},
			],
			id: 10,
			postId: 15,
		},
		{
			comments: [
				{
					userId: 1,
					content:
						'So these are the 7 subscriptions that I subscribe to in 2022 that I didn’t in 2021 with 3 more that I am thinking about. Note: Some of these costs have been converted from USD to GBP so may vary by region and exchange rate.',
					id: 1,
				},
				{
					userId: 3,
					content:
						'YouTube Premium $11.99 or £11.99/month — I am a heavy YouTube user. I watch or listen for 6+ hours per day and the ability to have it play in the background while my phone is locked is highly valued to me. ',
					id: 2,
				},
				{
					userId: 5,
					content:
						'Google One cloud storage £$19.99 or £15.99 USD/year— I now pay for cloud storage. Yes, it has finally caught up with me, likely much later than most of you but with the 100GB package, it is well worth the cheap cost.',
					id: 3,
				},
				{
					userId: 2,
					content:
						'Fastmail $72 or £58/year— There are dozens of us I say. Linked to my Google account. Looks great, and runs fast. Custom domains. Good organization. Healthy extra storage. Notes, calendar, and file storage are built into the same app effectively.',
					id: 4,
				},
				{
					userId: 6,
					content:
						'Raindrop bookmark storage $35 or £27.84/year — I have now settled on this, for now, as my online bookmark and link storage.',
					id: 5,
				},
			],
			id: 10,
			postId: 16,
		},
		{
			comments: [
				{
					userId: 1,
					content:
						'So these are the 7 subscriptions that I subscribe to in 2022 that I didn’t in 2021 with 3 more that I am thinking about. Note: Some of these costs have been converted from USD to GBP so may vary by region and exchange rate.',
					id: 1,
				},
				{
					userId: 3,
					content:
						'YouTube Premium $11.99 or £11.99/month — I am a heavy YouTube user. I watch or listen for 6+ hours per day and the ability to have it play in the background while my phone is locked is highly valued to me. ',
					id: 2,
				},
				{
					userId: 5,
					content:
						'Google One cloud storage £$19.99 or £15.99 USD/year— I now pay for cloud storage. Yes, it has finally caught up with me, likely much later than most of you but with the 100GB package, it is well worth the cheap cost.',
					id: 3,
				},
				{
					userId: 2,
					content:
						'Fastmail $72 or £58/year— There are dozens of us I say. Linked to my Google account. Looks great, and runs fast. Custom domains. Good organization. Healthy extra storage. Notes, calendar, and file storage are built into the same app effectively.',
					id: 4,
				},
				{
					userId: 6,
					content:
						'Raindrop bookmark storage $35 or £27.84/year — I have now settled on this, for now, as my online bookmark and link storage.',
					id: 5,
				},
			],
			id: 10,
			postId: 17,
		},
	],
	addComment: (arr: Comment[], id: number) =>
		set((state: CommentMain) => {
			let item = state.comments.find((el) => el.postId === id);
			id = id + 1;

			if (item) {
				item.comments = arr;
				return state.comments;
			}
		}),
});

export const useCommentsStore = create(commentsStore);
