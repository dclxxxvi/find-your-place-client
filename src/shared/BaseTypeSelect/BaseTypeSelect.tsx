import * as React from 'react';
import { type IBaseType } from '../../types';
import { Select, type SelectProps } from 'antd';
import { useCallback, useMemo } from 'react';

interface OptionType {
	value: string;
	label: string;
}

interface Props extends Omit<SelectProps<string, OptionType>, 'options' | 'onChange' | 'value'> {
	dictionary?: IBaseType[];
	handleChange: (value?: string) => void;
	initialValue?: IBaseType;
}

const BaseTypeSelect: React.FC<Props> = ({ dictionary, handleChange, initialValue, ...rest }) => {
	const selectOptions: OptionType[] | undefined = useMemo(() => dictionary?.map((option) => ({
		value: option.code_name,
		label: option.name,
	})), [dictionary]);

	const onChange = useCallback((value?: string) => {
		const valueToBaseType = dictionary?.find(baseType => baseType.code_name === value);
		handleChange(valueToBaseType?.code_name);
	}, [handleChange, dictionary]);

	const onClear = useCallback(() => {
		onChange(undefined);
	}, [onChange]);

	return (
		<Select
			onChange={onChange}
			options={selectOptions}
			value={initialValue?.code_name}
			onClear={onClear}
			{...rest}
		/>
	);
};

export default React.memo(BaseTypeSelect);
