import create from 'zustand';

export type Post = {
	id: number;
	desc: string;
	userId: number;
	love: number;
};

export type posts = (set: Function) => {
	posts: Post[];
};

let postsStore: posts = (set) => ({
	posts: [
		{
			id: 1,
			userId: 1,
			love: 1171,
			desc: 'But I was startled to learn how underpaid I was in India when I started conversing with my friends who had immigrated to the US and held similar jobs. I started talking to my other friends in India. At the time, they received at least twice as much compensation as I did.',
		},
		{
			id: 2,
			userId: 3,
			love: 2056,
			desc: 'We are typically evaluated on our aptitude for problem-solving, data structures, and algorithms throughout the interviews. In our day jobs, we don’t have to invert binary trees or calculate the shortest path between two nodes in a graph. Unfortunately, companies currently rely on this system to find and hire talented coders.',
		},
		{
			id: 3,
			userId: 4,
			love: 234,
			desc: 'So It is necessary to brush up on these fundamental concepts before sending out job applications. The preparation phase is uncomfortable and is definitely hard to manage along with working at your current job.',
		},
		{
			id: 4,
			userId: 5,
			love: 890,
			desc: 'I worked with a fantastic team at SAP. Worked with cool people. However, I wasn’t working with the newest technologies, and we weren’t frequently releasing new features.',
		},
		{
			id: 5,
			userId: 6,
			love: 2133,
			desc: 'After the realization that I was underpaid, I started preparing for interviews: started learning new programming languages, data structures, algorithms, and problem-solving skills in general.',
		},
		{
			id: 6,
			userId: 7,
			love: 234,
			desc: 'Market salaries increase when a nation’s economy expands. Staying at one company for too long will ultimately result in you being underpaid. Of course, this is not always the case. I have friends who have got promotions and made a lot of money staying at a single company. But in general, it’s a good idea to switch your employer once in a while to get a salary on par with market standards.',
		},
		{
			id: 7,
			userId: 3,
			love: 6758,
			desc: 'But when I thought about it and talked to a senior developer who had worked at Plivo a couple of years ago, it made more sense to join Plivo at the time. My main motivation at this point was to join a company for rapid growth in terms of learning. And Plivo had the potential to give me exactly that.',
		},
		{
			id: 8,
			userId: 1,
			love: 1234,
			desc: 'Sometimes your skills and experience may not be the right fit for the position they’re hiring for. Sometimes the expectations are too high for a role. Although most of the time it is us who screw up. So, it’s important to know that on the road to cracking interviews, there is a lot of rejection.',
		},
		{
			id: 9,
			userId: 8,
			love: 4367,
			desc: 'And interviewing along with a day job at a startup makes it even more difficult. I felt like giving up multiple times. But I had to keep myself motivated and remind myself again and again why I started looking out in the first place.',
		},
		{
			id: 10,
			userId: 5,
			love: 3241,
			desc: 'It is common that we all face imposter syndrome every single day of our job. Struggling with the sense we haven’t earned what we’ve achieved and are a fraud. These feelings can contribute to increased anxiety and depression, less risk-taking in careers, and career burnout.',
		},
		{
			id: 11,
			userId: 3,
			love: 5474,
			desc: 'Get over this feeling and be ready to take on higher roles and responsibilities in your career. It may seem difficult in the beginning, but you can always figure it out.',
		},
		{
			id: 12,
			userId: 4,
			love: 901,
			desc: 'I joined as an SDE 1. In a matter of 2.5 years, I got promoted twice and became SDE 3. It is primarily a lead developer role in the team. Apart from coding, the other responsibilities in this role were:',
		},
		{
			id: 13,
			love: 6473,
			userId: 6,
			desc: 'It was scary in the beginning. I was not sure whether I’ll be able to handle the responsibilities. Even though it was hard in the beginning, I was able to handle it and do well.',
		},
		{
			id: 14,
			userId: 7,
			love: 2133,
			desc: 'One way is to join companies that use a good tech stack. When I joined Plivo, I learned a lot about cloud service providers like AWS, maintaining infra as code through tools like Terraform, solving production issues, mentoring junior developers, etc. This knowledge definitely helped me in getting subsequent offers in my career.',
		},
		{
			id: 15,
			userId: 9,
			love: 6743,
			desc: 'Even though I was working on an in-house technology at SAP, my first company, I constantly worked on side projects and shared them on ProductHunt. This helped me learn new technologies like Node.js, MongoDB, PostgreSQL, JavaScript, etc.',
		},
		{
			id: 16,
			userId: 2,
			love: 4332,
			desc: 'With the booming Software Industry, the market standard for salary is increasing every year. Companies are paying a lot of money even for recent graduates.',
		},
		{
			id: 17,
			userId: 9,
			love: 3229,
			desc: 'This doesn’t mean, you will definitely be underpaid if you stay in one company for a long time. Companies like Google, Facebook, and many other employee-centric companies make sure their employees are always paid well.',
		},
	],
});

export const usePostsStore = create(postsStore);
