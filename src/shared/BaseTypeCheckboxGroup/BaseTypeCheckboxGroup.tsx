import * as React from 'react';
import { type IBaseType } from '../../types';
import { Checkbox } from 'antd';
import { type CheckboxGroupProps } from 'antd/es/checkbox';

interface Props extends Omit<CheckboxGroupProps, 'children' | 'options' | 'filterOption' | 'value'> {
	dictionary: IBaseType[];
	handleChange: (values: IBaseType[]) => void;
	initialValue?: IBaseType[];
}

const BaseTypeCheckboxGroup: React.FC<Props> = ({ dictionary, handleChange, initialValue, ...rest }) => {
	// const options = useMemo(() => dictionary.map((option) => ({
	// 	value: option.id,
	// 	label: option.name,
	// })), [dictionary]);
	//
	// const onChange = useCallback((values: string[]) => {
	// 	const valuesToBaseTypes = values
	// 		.map(value => dictionary.find(baseType => baseType.id === value)) as IBaseType[];
	// 	handleChange(valuesToBaseTypes);
	// }, [handleChange, dictionary]);
	//
	// const filterOption = useCallback((inputValue: string, option?: OptionType) => {
	// 	return Boolean(option?.label.toLowerCase().includes(inputValue.toLowerCase()));
	// }, []);
	//
	// const mapInitialValues = useMemo(() => {
	// 	return initialValue?.map(value => value.id);
	// }, [initialValue]);

	return (
		<Checkbox.Group
			{...rest}
		/>
	);
};

export default React.memo(BaseTypeCheckboxGroup);
