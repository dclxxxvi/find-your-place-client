import * as React from 'react';
import { type IBaseType } from '../../types';
import { Select, type SelectProps } from 'antd';
import { useCallback, useMemo } from 'react';

interface OptionType {
	value: string;
	label: string;
}

interface Props extends Omit<SelectProps<string[], OptionType>, 'children' | 'options' | 'filterOption' | 'value'> {
	dictionary?: IBaseType[];
	handleChange: (values: string[]) => void;
	initialValue?: IBaseType[];
}

const BaseTypeMultiSelect: React.FC<Props> = ({ dictionary, handleChange, initialValue, ...rest }) => {
	const options: OptionType[] | undefined = useMemo(() => dictionary?.map((option) => ({
		value: option.code_name,
		label: option.name,
	})), [dictionary]);

	const onChange = useCallback((values: string[]) => {
		const valuesToBaseTypes = values
			.map(value => dictionary?.find(baseType => baseType.code_name === value)?.code_name) as string[];
		handleChange(valuesToBaseTypes);
	}, [handleChange, dictionary]);

	const filterOption = useCallback((inputValue: string, option?: OptionType) => {
		return Boolean(option?.label.toLowerCase().includes(inputValue.toLowerCase()));
	}, []);

	const mapInitialValues = useMemo(() => {
		return initialValue?.map(value => value.code_name);
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
