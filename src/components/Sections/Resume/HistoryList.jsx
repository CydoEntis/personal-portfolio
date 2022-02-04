import React from 'react';
import HistoryTitle from './HistoryTitle';

import History from './History';

const WorkHistory = () => {
	const workData = [
		{
			id: 1,
			startDate: 'Dec 2021',
			endDate: 'Current Employer',
			title: 'Software Developer',
			company: 'Bay-masteR',
			description:
				"Build and optimize secure web pages for evolving business needs utilizing technologies such as C#, Asp.net, Jquery and Kendo UI. While providing continued support to customers",
		},
		{
			id: 2,
			startDate: 'Jan 2020',
			endDate: 'Dec 2020',
			title: 'Computer Science Tutor',
			company: 'Ocean County College',
			description:
				"Find ways to improve students' academic performance relating to computer science topics.",
		},
		{
			id: 3,
			startDate: 'May 2017',
			endDate: 'Sept 2020',
			title: 'Electrical Apprentice',
			company: 'Steven Mitchell Electric',
			description:
				'Install diagnose and repair electrical equipment for both new and old construction in residential and commerical settings..',
		},
		{
			id: 4,
			startDate: 'Sept 2017',
			endDate: 'May 2018',
			title: 'HVAC Technician',
			company: 'Accurate Mechanical Heating and Cooling',
			description:
				'Install diagnose and repair HVAC systems. Order/stock and maintain a clean work vehicle. Teach/assist helpers under my supervision. Assign tasks as neccessary.',
		},
	];

	const workHistory = workData.map((work) => (
		<History
			key={work.id}
			startDate={work.startDate}
			endDate={work.endDate}
			title={work.title}
			company={work.company}
			description={work.description}
		/>
	));

	return (
		<div>
			<HistoryTitle title={'Experience'} className={'bxs-briefcase'} />
			{workHistory}
			<HistoryTitle title={'Education'} className={'bxs-school'} />
			<History
				startDate={'Jan 2019'}
				endDate={'Jan 2020'}
				title={'Assiociates in Science - C.S. Concentration'}
				company={'Ocean County College'}
			/>
		</div>
	);
};

export default WorkHistory;
