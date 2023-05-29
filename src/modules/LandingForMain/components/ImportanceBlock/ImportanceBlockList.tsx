import * as React from 'react';
import ImportanceBlock from './ImportanceBlock';
import firstImage from '../ImportanceBlock/assets/1.png';
import secondImage from '../ImportanceBlock/assets/2.png';
import thirdImage from '../ImportanceBlock/assets/3.png';
import fourthImage from '../ImportanceBlock/assets/4.png';
import { Space } from 'antd';

const ImportanceBlockList: React.FC = () => {
	return (
		<Space direction='vertical' size={'middle'} style={{ width: '100%' }}>
			<ImportanceBlock
				image={firstImage}
				rowRevers={false}
				title='Взаимодействие и обмен идеями'
				paragraph='Коворкинг предоставляет возможность встречать и общаться с людьми, которые занимаются
					различными проектами и работают в разных отраслях. Это может помочь расширить профессиональную сеть,
					получить новые идеи и поддержку'/>
			<ImportanceBlock
				image={secondImage}
				rowRevers={true}
				title='Гибкость и адаптивность'
				paragraph='Коворкинг-пространства обычно предлагают гибкость в выборе рабочих мест и графика работы.
				Это может быть особенно полезно для фрилансеров и предпринимателей, которые нуждаются в гибкости, чтобы
				лучше управлять своим временем и финансами'/>
			<ImportanceBlock
				image={thirdImage}
				rowRevers={false}
				title='Экономическая эффективность'
				paragraph='Коворкинг может помочь сэкономить деньги, поскольку рент и обслуживание офиса разделяются
				между многими людьми. Кроме того, это может быть более экономически эффективным, чем аренда офиса'/>
			<ImportanceBlock
				image={fourthImage}
				rowRevers={true}
				title='Новые возможности для роста и развития'
				paragraph='Коворкинг-пространства могут предлагать события, лекции и семинары для своих членов.
				Это может помочь обучить новым навыкам и научиться чему-то новом'/>
		</Space>
	);
};

export default ImportanceBlockList;
