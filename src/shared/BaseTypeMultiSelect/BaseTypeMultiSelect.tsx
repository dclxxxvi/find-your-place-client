import * as React from 'react';
import { type BaseType } from '../../types';
import { Select, type SelectProps } from 'antd';
import { useCallback, useMemo } from 'react';

interface OptionType {
	value: string;
	label: string;
}

interface Props extends Omit<SelectProps<string[], OptionType>, 'children' | 'options' | 'filterOption' | 'value'> {
	dictionary: BaseType[];
	handleChange: (values: BaseType[]) => void;
	initialValue?: BaseType[];
}

const BaseTypeMultiSelect: React.FC<Props> = ({ dictionary, handleChange, initialValue, ...rest }) => {
	const options = useMemo(() => dictionary.map((option) => ({
		value: option.id,
		label: option.name,
	})), [dictionary]);

	const onChange = useCallback((values: string[]) => {
		const valuesToBaseTypes = values
			.map(value => dictionary.find(baseType => baseType.id === value)) as BaseType[];
		handleChange(valuesToBaseTypes);
	}, [handleChange, dictionary]);

	const filterOption = useCallback((inputValue: string, option?: OptionType) => {
		return Boolean(option?.label.toLowerCase().includes(inputValue.toLowerCase()));
	}, []);

	const mapInitialValues = useMemo(() => {
		return initialValue?.map(value => value.id);
	}, [initialValue]);

	return (
		<Select
			mode={'multiple'}
			onChange={onChange}
			options={options}
			value={mapInitialValues}
			filterOption={filterOption}
			{...rest}
		/>
	);
};

export default React.memo(BaseTypeMultiSelect);
