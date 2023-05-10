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
	handleChange: (value: IBaseType) => void;
	initialValue?: IBaseType;
}

const BaseTypeSelect: React.FC<Props> = ({ dictionary, handleChange, initialValue, ...rest }) => {
	const selectOptions: OptionType[] | undefined = useMemo(() => dictionary?.map((option) => ({
		value: option.id,
		label: option.name,
	})), [dictionary]);

	const onChange = useCallback((value: string) => {
		const valueToBaseType = dictionary?.find(baseType => baseType.id === value);
		if (valueToBaseType != null) {
			handleChange(valueToBaseType);
		}
	}, [handleChange, dictionary]);

	return (
		<Select
			onChange={onChange}
			options={selectOptions}
			value={initialValue?.id}
			{...rest}
		/>
	);
};

export default React.memo(BaseTypeSelect);
