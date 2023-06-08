import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row, Skeleton } from 'antd';
import WorkspaceAnchor from './components/WorkspaceAnchor';
import WorkspaceDescription from './components/WorkspaceDescription';
import WorkspaceServices from './components/WorkspaceServices';
import WorkspaceTariffs from './components/WorkspaceTariffs';
import OverviewWorkspaceCard from '../WorkspaceCard/OverviewWorkspaceCard';
import WorkspaceFeedback from './components/WorkspaceFeedback/WorkspaceFeedback';
import { useGetWorkspaceByIdQuery } from '../../redux';
import WorkspaceMap from './components/WorkspaceMap';
import WorkspaceContacts from './components/WorkspaceContacts';

const WorkspaceExpanded: React.FC = () => {
	const { id } = useParams();
	const { data, isLoading } = useGetWorkspaceByIdQuery({ id: id as string }, { skip: !id });

	const workspace = data?.data;

	if (isLoading) {
		return <Skeleton active/>;
	}

	if (!workspace) {
		return null;
	}

	return (
		<Row gutter={[0, 50]}>
			<Col span={24}>
				<OverviewWorkspaceCard workspace={workspace} />
			</Col>
			<Col span={24}>
				<WorkspaceAnchor />
			</Col>
			<Col span={24}>
				<WorkspaceDescription description={workspace.description}/>
			</Col>
			<Col span={24}>
				<WorkspaceServices services={workspace.parameters}/>
			</Col>
			<Col span={24}>
				<WorkspaceMap latitude={workspace.latitude} longitude={workspace.longitude}/>
			</Col>
			<Col span={24}>
				<WorkspaceContacts siteUrl={workspace.site_url} phoneNumber={workspace.phone_number} />
			</Col>
			<Col span={24}>
				<WorkspaceTariffs tariffs={workspace.tariffs}/>
			</Col>
			<Col span={24}>
				<WorkspaceFeedback workspace={workspace}/>
			</Col>
		</Row>
	);
};

export default React.memo(WorkspaceExpanded);
