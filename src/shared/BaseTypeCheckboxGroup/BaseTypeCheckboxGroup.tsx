import * as React from 'react';
import { type IBaseType } from '../../types';
import { Checkbox } from 'antd';
import { type CheckboxGroupProps } from 'antd/es/checkbox';
import { useCallback, useMemo } from 'react';
import { type CheckboxValueType } from 'antd/es/checkbox/Group';
import SuperAdvantage from '../../components/SuperAdvantages';

interface Props extends Omit<CheckboxGroupProps, 'children' | 'options' | 'filterOption'> {
	dictionary: IBaseType[];
	handleChange: (values: string[]) => void;
	value?: string[];
}

const BaseTypeCheckboxGroup: React.FC<Props> = ({ dictionary, handleChange, value, ...rest }) => {
	const options = useMemo(() => dictionary.map((option) => ({
		value: option.code_name,
		label: <SuperAdvantage parameter={option} />,
	})), [dictionary]);

	const onChange = useCallback((values: CheckboxValueType[]) => {
		handleChange(values as string[]);
	}, [handleChange]);

	return (
		<Checkbox.Group
			style={{ display: 'flex', flexDirection: 'column', margin: 0 }}
			options={options}
			value={value}
			onChange={onChange}
			{...rest}
		/>
	);
};

export default React.memo(BaseTypeCheckboxGroup);
